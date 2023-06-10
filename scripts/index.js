let username = "Pro User";
let profilePicture = "./assets/images/girl.png";
let jobTitle = "Software Engineer Student";

let usernameElement = document.querySelectorAll(".nav__username");

for (const element of usernameElement) {
  element.innerHTML = username;
}

let profilePictureElement = document.querySelector(".data-profile-card__img");
profilePictureElement.src = profilePicture;

let jobTitleElement = document.querySelector(".profile-card__title");
jobTitleElement.innerHTML = jobTitle;
