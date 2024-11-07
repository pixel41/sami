let navigates = [
  ["about", "/sami/about.html"],
]

const webframe = (web, name) => {
  document.querySelector(".webframe").innerHTML =
    `<iframe class="iweb"  src="${web}/"></iframe>`
  console.log(name)

  for (let j = 0; j < navigates.length; j++) {
    document.querySelector(`.nav_${j}`).style.fontWeight = 'normal';
  }

  document.querySelector(`.${name}`).style.fontWeight = '800';

}

for (let i = 0; i < navigates.length; i++) {
  document.querySelector("nav").innerHTML +=
    `<a href="#" class="nav_${i}" onclick="webframe('${navigates[i][1]}','nav_${i}'); event.preventDefault();">
       ${navigates[i][0]}
     </a>`;
}
