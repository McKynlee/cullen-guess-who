console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  console.log('jQ running');
  displayPeople(people);
}

function displayPeople(group) {
  console.log('in displayPeople');

  for (let person of group) {
    $('#body').append(
      `<div> 
      <img src="https://github.com/${person.githubUsername}.png?size=250" 
      alt="${person.name}'s Photo">
      </div>`
    );
  }
}
