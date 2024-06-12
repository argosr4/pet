const popup = document.querySelector(".popup");
const showLoginButton = document.querySelector("#show-login");

showLoginButton.addEventListener("click", function() {
  popup.classList.add("active");
  popup.style.top = "50%"; // Adicione essa linha para definir a posição do popup
});



window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}