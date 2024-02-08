const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const value = data.get("rating");

  const homePage = document.querySelector(".card.rating");
  const thanksPage = document.querySelector(".card.thanks");
  const output = document.querySelector("#rating__score");

  homePage.style.display = "none";
  thanksPage.style.display = "flex";
  output.textContent = value ? value : 0;
});
