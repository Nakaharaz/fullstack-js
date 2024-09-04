function renderTransaction(transactionData) {
  const transactionCard = document.createElement('div')
  transactionCard.classList.add('transaction', transactionData.value > 0 ? 'positive-card' : 'negative-card')
  transactionCard.id = `transaction-${transactionData.id}`

  const name = document.createElement('input')
  name.title = 'text'
  name.classList.add('transaction-name')
  name.id = `name-${transactionData.id}`
  name.value = transactionData.name

  const value = document.createElement('input')
  value.type = 'number'
  value.step = "0.01"
  value.id = `value-${transactionData.id}`
  value.classList.add('value', transactionData.value > 0 ? 'positive' : 'negative')
  value.value = transactionData.value

  const date = document.createElement('time')
  date.id = `date-${transactionData.id}`
  date.classList.add('date')
  date.innerText = new Date(transactionData.date).toLocaleDateString('pt-br')

  const btnGroup = document.createElement('div')
  btnGroup.classList.add('btn-group')

  const updateBtn = document.createElement('button')
  updateBtn.type = 'button'
  updateBtn.innerText = "Update!"
  updateBtn.classList.add('put-btn')
  updateBtn.id = `delete-${transactionData.id}`

  const deleteBtn = document.createElement('button')
  updateBtn.type = 'button'
  deleteBtn.innerText = "Delete!"
  deleteBtn.classList.add('delete-btn')
  deleteBtn.id = `put-${transactionData.id}`


  btnGroup.append(updateBtn, deleteBtn)
  transactionCard.append(name, value, date, btnGroup)
  document.querySelector('#transactions').appendChild(transactionCard);
}

async function fetchTransactions() {
  const transactions = await fetch('http://localhost:3000/transactions').then(res => res.json())

  return transactions
}

async function calculateBalance() {
  const transactions = await fetchTransactions()

  let balance = 0

  transactions.map(element => {
    balance += element.value
  })

  return balance
}

async function renderBalance(balance) {
  console.log(balance)
  balanceTitle.innerText = balance.toFixed(2)


  if (balance > 0) {
    balanceTitle.classList.remove('negative')
    balanceTitle.classList.add('positive')
  }
  else {
    balanceTitle.classList.remove('positive')
    balanceTitle.classList.add('negative')
  }
}

async function putTransaction(updateData) {
  if (!updateData.value || !updateData.name || !updateData.id) {
    Promise.reject('Please fill in all fields!')
  }

  try {
    await fetch(`http://localhost:3000/transactions/${updateData.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'applicantion/json'
      },
      body: JSON.stringify(updateData)
    })

    alert('Updated!')

    location.reload()
  } catch (error) {
    alert(error)
  }
}

async function deleteTransaction(id) {
  if(!id) {
    Promise.reject('No ID specified!')
  }

  try {
    await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'applicantion/json'
      }
    })

    alert('Deleted!')
    location.reload()
  } catch(err){
    Promise.reject(err)
  }
}

const addForm = document.querySelector('#newTransactionForm');
const balanceTitle = document.getElementById('balance')

document.addEventListener("DOMContentLoaded", async (e) => {
  const transactions = await fetchTransactions()

  transactions.forEach(transaction => renderTransaction(transaction))

  document.querySelectorAll('.put-btn').forEach(element => {
    element.addEventListener('click', async (e) => {
      e.preventDefault()

      const id = e.target.id.match(/.{4}$/gm)[0]
      const updateData = {
        id,
        name: document.querySelector(`#name-${id}`).value,
        value: Number(document.querySelector(`#value-${id}`).value),
      }

      try {
        await putTransaction(updateData)
      } catch (error) {
        console.error(error)
        alert(error.message)
      }
    })
  })

  document.querySelectorAll('.delete-btn').forEach(element => {
    element.addEventListener('click', async (e) => {
      e.preventDefault()

      const id = e.target.id.match(/.{4}$/gm)[0]

      try {
        await deleteTransaction(id)
      } catch (error) {
        console.error(error)
        alert(error.message)
      }
    })
  })

  renderBalance(await calculateBalance())
})


addForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  try {
    if (!document.getElementById('name').value || !document.getElementById('value').value || !document.getElementById('date').value) {
      throw new Error('Please fill in all fields!')
    }

    const transactionData = {
      name: document.getElementById('name').value,
      value: Number(document.getElementById('value').value),
      date: document.getElementById('date').value
    }

    const response = await fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transactionData)
    })

    location.reload()
  } catch (err) {
    alert(err)
  }

})