let movies = [
  {
    name: "The Night Manager",
    des:
      " A hotel's night manager is the only weapon against a dangerous arms dealer. Will he be able to stop him? Shaan Sengupta, the night manager of Dhaka's Hotel Orient Pearl, gets embroiled in the arms-dealing world of billionaire Shelly Rungta for going beyond duty for a special guest.",
    image: "images/images/nm.webp"
  },
  {
    name: "Shingeki no Kyojin (Attack on Titan)",
    des:
      "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the humans' safe zone. ",
    image: "images/aot.jpg"
  },
  {
    name: "Mandalorian",
    des:
      "After the fall of the Empire,Lawlessness has spread the Galaxy.A lone gunfighter makes his way through outer reaches, earning his keep as a bounty hunter. A Mandalorian bounty hunter tracks a target for a well-paying, mysterious client.",
    image: "images/20.webp"
  },
  {
    name: "Alone",
    des:
      "During the pandemic, Kalidasan gets stranded in his newly rented flat which turns out to be haunted. How will he cope with this eerie and mysterious lockdown?",
    image: "images/19.webp"
  },
  {
    name: "Taaza Khabar",
    des:
      "A public toilet caretaker's poverty-striken life take U-turn when he helps an old women. How long will fate smile upon him.",
    image: "images/16.webp"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //creating DOM element
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all the elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  //adding sliding effect
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });

  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
