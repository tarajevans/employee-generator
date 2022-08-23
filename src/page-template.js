import { icon, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

const glasses = findIconDefinition({ prefix: 'fas', iconName: 'glasses' })
const coffeeCup = findIconDefinition({ prefix: 'fas', iconName: 'mug-hot' })
const graduation = findIconDefinition({ prefix: 'fas', iconName: 'graduation-cap' })

function generateCards(teamArrayIn){
  let htmlOutput = "";
  for(let i = 0; i < teamArrayIn.length; i++){

    //TODO  - copy card code here to create card for each team member
    htmlOutput.add( `<div class="card">
      <div class="card-header" bg-dark text-light><h4>${teamArrayIn[i].name}</h4><br>
        <h3>${checkRole(teamArrayIn, i)}${teamArrayIn[i].role}</h3></div>
      <div id="id">ID:${teamArrayIn[i].id}</div>
      <div id="email">Email:${teamArrayIn[i].email}</div>
      <div id="role">${checkRole(teamArrayIn, i)}</div>
    </div> `).join();
    //      - add this code to the htmlOutput
  }
    // return htmloutput as a product of this function
  return htmlOutput;
}

module.exports = teamArray => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="./style.css" />
      <title>My Team</title>
  </head>
  <header>
      <h1 id="header">My Team</h1>
  </header>
  <body class="col-12 col-lg-9 d-flex flex-column">
      <div class="m-5 row justify-content-around">
          <div class="col-12 col-md-6 col-xl-3 mb-3">
          ${generateCards(teamArray)}
              
          </div>
      </div>
  <script src="./index.js"></script>
  </body>
  <footer>
  </footer>
  </html>`;
};

function checkRole(arrayIn, indexIn){
  switch(arrayIn[indexIn].role){
    case "manager":
      return` Office Number: ${arrayIn[indexIn].officeNumber}`;
      break;
    case "intern":
      return `School: ${arrayIn[indexIn].school}`;
      break;
    case "engineer":
      let gitUrl = "https://github.com/" + arrayIn[indexIn].github;
      return `<a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${gitUrl}">${arrayIn[indexIn].github}</a>`;
    default:
      break;
  }
}
function makeIcon(arrayIn, indexIn){
  switch(arrayIn[indexIn].role){
    case "manager":
      return icon(coffeeCup)
      break;
      case "intern":
      return icon(graduation);
      break;
      case "engineer":
        return icon(glasses);
        default:
          break;
  }
}
