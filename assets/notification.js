
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

// $(".notification").onclick(function () {
//   $(this).closest("a").addClass("read");
// });

// document.querySelector("ul").addEventListener("click", function(event) {
//   if(event.currentTarget.matches(".notification")) {
//     event.target.classList.add("read");
//   }
// });

$("ul").on("click", ".notification", function() {
  $(this).addClass("read");
  console.log("notification clicked");
});

// this code removes the notification completly
// $("ul").on("click", ".notification", function() {
//   $(this).remove();
// });

$("ul").on("click", ".notification", function() {
  $(this).find(".bullet").addClass("display-none");
  console.log("notification clicked");
});
