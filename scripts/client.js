console.log('Here are all the available people:', people);

let githubImg = `https://github.com/${people.githubUsername}.png?size=250`;

$(document).ready(displayPeople(people));

function displayPeople() {
  for (let person of people) {
    $('#body').append(
      `<div> 
        ${person.name} 
      </div>`
    );
  }
}
