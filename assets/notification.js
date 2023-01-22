
  // document.getElementsByClassName("notification").style.background = color;
function markAllAsRead() {
  let elements = document.getElementsByClassName("notification");

  for ( let i = 0; i < elements.length; i++) {
    elements.item(i).style.background = "white"
  }
}

// addEventListener('click', (event) => { });

// function changeColor() {
//   const notif = document.querySelector(".notification");
//   notif.style.background = "white";
// }

// const notif = document.getElementById("1");
// const btn = document.getElementById("1")

//   btn.addEventListener("click", function () {
//     notif.style.background = "white";
//   });


$(".notification li a").onclick(function () {
  $(this).closest("li").addClass("read");
});
