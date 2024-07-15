let veiculo1 = prompt('Qual o nome do primeiro veículo 1?')
let velocidade1 = parseInt(prompt('Digite a velocidade do veículo 1?'));
let veiculo2 = prompt('Qual o nome do primeiro veículo 2?')
let velocidade2 = parseInt(prompt('Digite a velocidade do veículo 2?'));

if (velocidade1 > velocidade2) {
  alert(`O veículo: ${veiculo1} é o mais veloz!!`) 
} else if (velocidade1 < velocidade2) {
  alert(`O veículo: ${veiculo2} é o mais veloz!!`) 
} else {
  alert(`Tanto o veículo "${veiculo1}" quanto o veículo "${veiculo2}" são rápidos demais!`) 
}