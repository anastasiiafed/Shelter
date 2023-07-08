console.log("92 балла(-8 отсутствие гибкости)");
const burger = document.querySelector("#burger_btn");
const burgerMenu = document.querySelector("#burger_menu");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

burgerMenu.classList.toggle("afterStartPage");

function showHide() {
  burgerMenu.classList.toggle("active");
  burger.classList.toggle("active");
  overlay.classList.toggle("show");
  body.classList.toggle("blockscroll");
}

burger.addEventListener("click", showHide);

// ==============================================

let animals = [
  {
    id: "katrine",
    imageUrl: "img/pets-katrine.svg",
    name: "Katrine",
    header: "Cat - British Shorthair",
    about:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "1 year",
  },

  {
    id: "jennifer",
    imageUrl: "img/pets-jennifer.svg",
    name: "Jennifer",
    header: "Dog - Labrador",
    about:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "7 year",
  },

  {
    id: "sophia",
    imageUrl: "img/pets-sofia.svg",
    name: "Sophia",
    header: "Dog - Shih tzu",
    about:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "2 year",
  },

  {
    id: "woody",
    imageUrl: "img/pets-woody.svg",
    name: "Woody",
    header: "Dog - Golden Retriever",
    about:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "1 year",
  },

  {
    id: "timmy",
    imageUrl: "img/pets-timmy.svg",
    name: "Timmy",
    header: "Cat - British Shorthair",
    about:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "8 month",
  },

  {
    id: "charly",
    imageUrl: "img/pets-charly.svg",
    name: "Charly",
    header: "Dog - Jack Russell Terrier ",
    about:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "10 year",
  },

  {
    id: "scarlet",
    imageUrl: "img/pets-scarlet.svg",
    name: "Scarlett",
    header: "Dog - Jack Russell Terrier ",
    about:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "1 year",
  },

  {
    id: "freddie",
    imageUrl: "img/pets-freddie.svg",
    name: "Freddie",
    header: "Cat - British Shorthair",
    about:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "1 year",
  },
];
// ===============================================================================

const slideItem = document.querySelector("#slide_item");
const friends_cards = document.querySelector(".friends_cards");
const sliderButtonLeft = document.querySelector(".button_one");
const sliderButtonRight = document.querySelector(".button_two");

friends_cards.appendChild(createSlideElementHtml(animals[1]));
friends_cards.appendChild(createSlideElementHtml(animals[2]));
friends_cards.appendChild(createSlideElementHtml(animals[3]));
friends_cards.appendChild(createSlideElementHtml(animals[4]));
friends_cards.appendChild(createSlideElementHtml(animals[5]));


function createSlideElementHtml(a) {
  let copyOfElement = slideItem.cloneNode(true);

  //Set img
  copyOfElement.querySelector("img").setAttribute("src", a.imageUrl);
  copyOfElement.querySelector("h5").innerHTML = a.name;
  copyOfElement.setAttribute("data", JSON.stringify(a));
  return copyOfElement;
}

sliderButtonLeft.addEventListener("click", () => {
    sliderMove(true)
});
sliderButtonRight.addEventListener("click", () => {
    sliderMove(false)
});

function sliderMove (left) {

}