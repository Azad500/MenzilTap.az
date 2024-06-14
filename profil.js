const profilText = document.querySelector(".profil-text");
const advertisementText = document.querySelector(".advertisement-text");
const profilInformation = document.querySelector(".profil-information");
const advertisementInformation = document.querySelector(
  ".advertisement-information"
);

profilText.addEventListener("click", () => {
  profilInformation.style.display = "block";
  advertisementInformation.style.display = "none";
  advertisementText.style.setProperty("--advertisement", "0");
  profilText.style.setProperty("--profil", "100%");
});

advertisementText.addEventListener("click", () => {
  profilInformation.style.display = "none";
  advertisementInformation.style.display = "block";
  advertisementText.style.setProperty("--advertisement", "100%");
  profilText.style.setProperty("--profil", "0");
});
