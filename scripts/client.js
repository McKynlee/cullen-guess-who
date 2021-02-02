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
      alt="${person.name}'s Photo" class="selectedImage" 
      data-value='${person.name}'>
      </div>`
    );
  }
  randomName(0, 11);
}

function randomName(min, max) {
  console.log('in randomNumber');
  let chosenIndex = Math.floor(Math.random() * (1 + max - min) + min);

  let randomNameGenerated = people[chosenIndex].name;
  $('#nameGenerator').append(
    `<span id="thisRando" data-name='${randomNameGenerated}'>
    ${randomNameGenerated}
    </span>`
  );

  $('.selectedImage').on('click', imageChecker);
  return randomNameGenerated;
}

function imageChecker() {
  console.log('in imageChecker');

  if ($('#thisRando').data('name') == $(this).data('value')) {
    alert('Success! Refresh page to play again.');
  }
}
