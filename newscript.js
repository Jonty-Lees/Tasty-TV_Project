window.onload = function () {
  // This is the code for the collapsible FAQ

  let coll = document.getElementsByClassName("faq-collapsible");
  let i;

  //This is a collapsable for loop toggleing on and off the FAQ Content.

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active-faq");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  // ARRAYS AND CODE FOR TV STREAMING PROGRAMMING
  // Please update and shedualling and program updates here, to replace or ammend, simply update what is there.
  // to add please create another object literal and make sure you have mirrored that with the added divs in HTML. Please refer to the html note for reference

  const liveStream = [
    {
      time: "11:00",
      title: "Field of Dreams",
      description:
        "When Iowa farmer Ray hears a mysterious voice one night in his cornfield, he feels the need to act. Despite taunts of lunacy, Ray builds a baseball diamond on his land, and soon the ghosts of great players start emerging from the crops to play ball",
      image:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/cf43d60fc9043d03ff090de43028db1f_480x.progressive.jpg?v=1573587549"
    },
    {
      time: "13:00",
      title: "Stranger Things",
      description:
        "A young boy, Will Byers, goes missing near a top-secret government laboratory. ... As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
      image:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b12a6731e35878c9b560b76efe15e06d_480x.progressive.jpg?v=1573572672"
    },
    {
      time: "13:50",
      title: "Jurassic Park",
      description:
        "John Hammond, an entrepreneur, opens a wildlife park containing cloned dinosaurs. However, a breakdown of the island's security system causes the creatures to escape and bring about chaos.",
      image:
        "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_4422-514596-171921_470df43a-9df0-49b5-b35e-77f8403737b9-122777.jpg?v=1625534699"
    },
    {
      time: "15:50",
      title: "Friends",
      description:
        "Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama.",
      image:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b34352c0387122fb592e7008a090e599_71af2a1c-5314-4457-9c02-c41a161e8463_480x.progressive.jpg?v=1573590309"
    },
    {
      time: "16:00",
      title: "No Time To Die",
      description:
        "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
      image:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/no-time-to-die_krgsl7mv_c9879f38-5618-4307-b73c-b0edaedc5fbb_480x.progressive.jpg?v=1616705908"
    },
    {
      time: "18:45",
      title: "The Mandalorian",
      description:
        "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic. After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order.",
      image:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/madalorian.cu_480x.progressive.jpg?v=1596212306"
    },
    {
      time: "19:30",
      title: "Lord of the Rings",
      description:
        "You can not describe Lord of the Rings... You just have to watch it",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
    }
  ];

  // this is where we store the various arrays

  const timeArray = [];
  const titleArray = [];
  const descriptionArray = [];
  const imgArray = [];

  //I have used For loops to take the values from the object and put it in the array of titles

  for (let live in liveStream) {
    timeArray.push(liveStream[live].time);
  }
  for (let live in liveStream) {
    titleArray.push(liveStream[live].title);
  }
  for (let live in liveStream) {
    descriptionArray.push(liveStream[live].description);
  }
  for (let live in liveStream) {
    imgArray.push(liveStream[live].image);
  }

  //I created the consts for the elements where I want to the arrays to be executed

  const proTime = document.querySelectorAll(".time");
  const proTitle = document.querySelectorAll(".program-title");
  const proDescrip = document.querySelectorAll(".program-descript");
  const proImg = document.querySelectorAll(".program-img");

  // These are the for Loops for each array to iterate through

  for (let i = 0; i < proTime.length; i++) {
    proTime[i].innerText = timeArray[i];
  }
  for (let i = 0; i < proTime.length; i++) {
    proTime[i].innerText = timeArray[i];
  }
  for (let i = 0; i < proTitle.length; i++) {
    proTitle[i].innerText = titleArray[i];
  }
  for (let i = 0; i < proDescrip.length; i++) {
    proDescrip[i].innerText = descriptionArray[i];
  }
  for (let i = 0; i < proImg.length; i++) {
    proImg[i].src = imgArray[i];
  }

  // RANDOM MOVIE/TV SHOW REVEAL

  // an array of images to pick from
  const imageArray = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
  ];

  // This is the button that generates the randomize event
  const buttonClick = document.querySelector("#randomize");

  // This is the Event Listener funtion that randomoizes the image array and 'reveals' it to the designated img.src
  buttonClick.addEventListener("click", () => {
    const ranImg = imageArray[Math.floor(Math.random() * imageArray.length)];
    const imgReveal = document.querySelector("#img-reveal");
    console.log("querySelector");
    imgReveal.src = `${ranImg}`;
    console.log(ranImg);
  });

  // Once the randomize button is clicked, this changes the text of the button and p
  buttonClick.addEventListener("click", () => {
    document.querySelector(".randomize p").innerHTML = "Have you seen it?";
    document.querySelector("#randomize").innerHTML = "Re-Randomize";
    document.querySelector("#reveal-button");
  });

  // This reveals the Watch Now button when Randomize is clicked, until then it is hidden
  let watchNow = document.querySelector("#reveal-button");

  buttonClick.addEventListener("click", () => {
    if (watchNow.style.display === `none`) {
      watchNow.style.display = "none";
    } else {
      watchNow.style.display = "block";
    }
  });
};

// LIVE STREAMING PAGE DATE

// This is the code to show todays day and tomorrows day

const myDate = new Date();
const myDay = myDate.getDay();
console.log(myDay);

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

document.querySelector("#day-today").innerHTML = `${weekday[myDay]}`;
const dayButton = document.querySelector("#day-tomorrow button");

dayButton.addEventListener("click", () => {
  const day = dayButton.innerHTML;
  if (day === "Tomorrow") {
    document.querySelector("#day-today").innerHTML = weekday[myDay + 1];
    dayButton.innerHTML = "Today";
  } else if (day === "Today") {
    document.querySelector("#day-today").innerHTML = weekday[myDay];
    dayButton.innerHTML = "Tomorrow";
  }
});
