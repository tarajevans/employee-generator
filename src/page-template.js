function generateCards(teamArrayIn){
  console.log(teamArrayIn);
  let htmlOutput = "";
  for(let i = 0; i < teamArrayIn.length; i++){
    htmlOutput += `<div class="col col-sm-4 mb-2">
      <div class="card">
      <div class="card-header" bg-dark text-light><h4>${teamArrayIn[i].name}</h4><br>
        <h3 ><i class="${makeIcon(teamArrayIn, i)}"> &nbsp; </i>${teamArrayIn[i].getRole()}</h3></div>
      <div id="id">ID:${teamArrayIn[i].getId()}</div>
      <div id="email">Email:<a href="mailto:${teamArrayIn[i].getEmail()}">${teamArrayIn[i].getEmail()}</a></div>
      <div id="role">${checkRole(teamArrayIn, i)}</div>
    </div>
  </div> `;
    }
  return htmlOutput.toString();
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous"/>
      <title>My Team</title>
  </head>
  <header>
      <h1 id="header">My Team</h1>
  </header>
  <body>
    <main class="container">
      <div class="row d-flex">
            ${generateCards(teamArray)}
      </div>
      </main>
  
  </body>

  <footer>
  </footer>
  </html>`;
};

function checkRole(arrayIn, indexIn){
  console.log(arrayIn[indexIn].getRole());
  switch(arrayIn[indexIn].getRole()){
    case "Manager":
      return `Office Number: ${arrayIn[indexIn].getOfficeNumber()}`;
      break;
    case "Intern":
      return `School: ${arrayIn[indexIn].getSchool()}`;
      break;
    case "Engineer":
      let gitUrl = "https://github.com/" + arrayIn[indexIn].getGithub();
      return `<a>GitHub:</a><a href="http://www.github.com/${arrayIn[indexIn].getGithub()}" target="_blank"> ${arrayIn[indexIn].getGithub()}</a>`;
    default:
      break;
  }
}

function makeIcon(arrayIn, indexIn){
  console.log(arrayIn[indexIn].getRole());
  switch(arrayIn[indexIn].getRole()){
    case "Manager":
      return `fas fa-mug-hot`;
      break;
    case "Intern":
      return `fas fa-user-graduate mr-1`;
      break;
    case "Engineer":
      return "fas fa-glasses mr-1";
      break;
    default:
      break;
  }
}