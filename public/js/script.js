ScrollReveal().reveal(".top", {
  origin: "bottom",
  duration: 800,
  distance: "20px",
  easing: "ease-in",
});

ScrollReveal().reveal(".main", {
  interval: 500,
  origin: "bottom",
  duration: 800,
  distance: "10px",
  easing: "ease-in",
});

ScrollReveal().reveal(".main-bottom", {
  interval: 500,
  distance: "10px",
  origin: "left",
  duration: 800,
  distance: "10px",
  easing: "ease-in",
});

const popu = document.getElementById("popup", () => {
  popu.style.color = "green";
});
