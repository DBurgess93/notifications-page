
  // document.getElementsByClassName("notification").style.background = color;
function markAllAsRead() {
  let elements = document.getElementsByClassName("notification");

  for ( let i = 0; i < elements.length; i++) {
    elements.item(i).style.background = "white"
  }
}

// addEventListener('click', (event) => { });
