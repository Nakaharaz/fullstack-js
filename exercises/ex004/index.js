const inputAttackerName = document.getElementById('attackerName');
const inputAttackPower = document.getElementById('attackPower');
const inputDefenderName = document.getElementById('defenderName');
const inputHealthPoints = document.getElementById('healthPoints');
const inputDefensePower = document.getElementById('defensePower');
const inputHaveAShield = document.getElementById('haveAShield');
const resultSection = document.getElementById('result')

function startFight(event) {
  event.preventDefault();

  let attackerName = inputAttackerName.value;
  let attackPower = inputAttackPower.value;
  let defenderName = inputDefenderName.value;
  let healthPoints = inputHealthPoints.value;
  let defensePower = inputDefensePower.value;
  let haveAShield = inputHaveAShield.checked;

  if (attackPower > defensePower && haveAShield == false) {
    let damageTaken = attackPower - defensePower;
    let finalHealthPoints = healthPoints - damageTaken
    resultSection.innerHTML = `
    <h2>Good won🔥</h2>
    <p>The attack of "${attackerName}" was stronger! Now, "${defenderName}" just have ${finalHealthPoints} points left😱</p>`
  } else if (attackPower > defensePower && haveAShield) {
    let damageTaken = (attackPower - defensePower) / 2;
    let finalHealthPoints = healthPoints - damageTaken
    resultSection.innerHTML = `
    <h2>Good almost won this one😥! But the evil lost some health points🧐</h2>
    <p>The attack of "${attackerName}" was stronger! But "${defenderName}" have a shield, and just take half of the damage. Now he have ${finalHealthPoints} points left😱</p>`
  } else if (attackPower <= defensePower) {
    resultSection.innerHTML = `
    <h2>The evil wins😱☠</h2>
    <p>The attack of "${attackerName}" was not strong enough! "${defenderName}" just ignore the attack and stay stand looking to the enemy.</p>`
  }
}