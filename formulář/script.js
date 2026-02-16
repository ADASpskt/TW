const form = document.getElementById("weddingForm");
const resetImg = document.getElementById("resetImg");
const car = document.getElementById("car");

/* RESET FORMULÁŘE + ANIMACE */
resetImg.addEventListener("click", () => {

  // reset formuláře
  form.reset();

  // restart animace
  resetImg.classList.remove("reset-anim");
  void resetImg.offsetWidth; // trik pro znovuspuštění animace
  resetImg.classList.add("reset-anim");
});

/* AUTÍČKO PO NAČTENÍ */
window.addEventListener("load", () => {
  car.classList.add("car-go");
});