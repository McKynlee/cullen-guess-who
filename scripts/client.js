console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  console.log('jQ running');
  displayPeople(people);
}

function displayPeople(group) {
  console.log('in displayPeople');

  for (let person of group) {
    $('#picFrame').append(
      `<div> 
      <img src="https://github.com/${person.githubUsername}.png?size=250" 
      alt="${person.name}'s Photo">
      </div>`
    );
  }
  randomNumber(0, 11);
}

function randomNumber(min, max) {
  console.log('in randomNumber');
  let chosenIndex = Math.floor(Math.random() * (1 + max - min) + min);

  $('#nameGenerator').append(people[chosenIndex].name);
  console.log(people[chosenIndex].name);
}
