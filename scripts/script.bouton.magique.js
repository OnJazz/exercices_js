var mooveButton = button => {
    button.style.left = getRandomInt(90) + "%";
    button.style.bottom = getRandomInt(90) + "%";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }