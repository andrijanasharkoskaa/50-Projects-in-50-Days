const toggleBtns = document.querySelectorAll(".faq-toggle");

toggleBtns.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentNode.classList.toggle("active");
  });
});
