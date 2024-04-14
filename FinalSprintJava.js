fetch('/band.json')
.then(response => response.json())
.then(data => {
    // Create a container to hold the people data
    const container = document.createElement('div');
    container.id = 'bandContainer';
    console.log(data)
 
    data.forEach(person => {
    
    const personDiv = document.createElement('div');
    personDiv.className = 'person';

    // Add the person's data to the div
    personDiv.innerHTML = `
    <h2>${getFullName(person)}</h2>
    <p>Gender: ${getGender(person)}</p>
    <p>Age: ${getAge(person)}</p>
    <p>Instrument: ${getInstrument(person)}</p>
    <p>Birth Place: ${getBirthPlace(person)}</p>
    <p> ${getchooseInsturment(person)}</p>
    `;

 


    // Add the person's div to the container
    container.appendChild(personDiv);

    // Also log the data to the console
    console.log(getFullName(person));
    console.log(getGender(person));
    console.log(getAge(person));
    console.log(getInstrument(person));
    console.log(getBirthPlace(person));
    console.log(getchooseInsturment(person));
    });

  // Add the container to the body of the HTML
  document.body.appendChild(container);
})
.catch(error => {
  // Handle any errors that occur while fetching the file
  console.error(error);
});

function getchooseInsturment(person) {
  let statements = [];
  switch(person.instrument) {
    case "Piano": 
      statements.push(`${person.firstName} needs to practice Piano.`);
      break;
    case "Guitar":
      statements.push(`${person.firstName} needs to practice Guitar.`);
      break;
    case "Drums":
      statements.push(`${person.firstName} needs to practice Drums.`);
      break;
    default:
      statements.push(`${person.firstName} needs to practice their vocals.`);
  }
  return statements.join('\n');
}



function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
  }



function getAge(person) {    
  return `${person.firstName} is ${new Date().getFullYear() - 
    new Date(person.birthday).getFullYear()} years old.`; 
  }


function getGender(person){
  return person.gender;
  
  
}

function getInstrument(person){
  return person.instrument;
  }


function getBirthPlace(person){
    return person.birthPlace
  }

