# Tasty TV Project

This website is hosted through Netlify at this link:
https://csb-7s93l.netlify.app/

In this project for Tasty TV, I wanted to create a simple website that is incredibly easy to navigate,
clear with what it does, add an element of fun with a randomizer and is ultimatly, easy to upkeep from the
companies side.

---

## Pages

### Home Page

The home page _(index.html)_ needed to have a quick wow factor to intrigue the user but also carry the fair bit of information
It needed to have

- Easy Header and navigation bar
- Simple sign in access
- Tag line and image for dramatic effect
- About Section
- Announcment Section
- Register Now Section
- User Reccomendation Input
- FAQ that doesn't clutter
- Footer with Social link

### Live Page

The live page _(live.html)_ needed to formate and execute a lot of information in an easy, readable way for any user but also
be easy to update at quick notice from Tasty TV Team.
It needed to have

- Header, Nav and Sign in
- Explaination of what the page is, as it is a new website and company
- Day of the week the user is looking at
- Option to look ahead
- The Time, Title, Discription and Image of each program airing
- Footer with Social link

### Demand Page

The Demand page _(demand.html)_ needed to ultimatly be a page that got users to register, to start their onDemand access with Tasty TV. I did this by showcasing
the most watched movies and TV and made a clear registation form, that allowed the user to then randomise their free streaming program
It needed to have

- Header, Nav and Sign in
- Registration info and form
- randomiser
- most watched movies and tv showcase
- Footer with Social link

---

## Technologies

1. html
2. css
3. Javascript

---

## User Stories and Wireframe

Below are the embeded images of my user stories which inturn helped insire my wireframes
To see a more graphically detailed version, please look at my [MIRO](https://miro.com/welcomeonboard/T1VkN2NMRXdNTVpOVk1LYU11ZERaQ3JJUk1FUWNqQlcxdFY5UVp3RExheWdyT3BtUVk3ZjFLZ3c5WWpMRWNBd3wzMDc0NDU3MzYwNzMzNjc2MTEz)

### User Stories

The user stories helped shape my design and gave me achivable goals to complete.
These are prioritised with what I would look at first and then would work out how/if I would try to comlete it in this iteration.

![User Stories 1-5](/ReadMe-img/us1.png)
![User Stories 6-8](/ReadMe-img/us2.png)
![User Stories 9-12](/ReadMe-img/us3.png)

---

### Wireframe

The Wireframing helped get a clear idea and picture of the UI design of the site. Using inspiration from the
user storie, I tried to create something that was easy to use and fit the needs of Tasty TV.

![Home Page](/ReadMe-img/wfhome.png)
![Live Page](/ReadMe-img/wflive.png)
![Demand Page](/ReadMe-img/wfdemand.png)

---

## Development process and problem-solving strategy

### Home Page

I kicked it all off with this page, I started with the layout and decided as its a fairly Simplistic design
I would go with a flex display. Making sure the **header**, with the Logo and navbar, looked good was important to
me. I went with a simple but effect design, I created a **logo** that felt slightly 80's retro and chose the colour scheme

creating the Container boxes, with the **about**, **annoucments**, **registration button** and **user reccomendations** was fairly simple and just took some
HTML and css.

I then had the challenge of working out how to do a **collapsable**. After research into the documentation I decided to use an For loop,
using toggle, nextElementSibling and display = block

```
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active-faq");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }});
  }
```

This took a bit of finessing but ultimatly wasnt too hard as it was is a well walked Javascript path

The **Footer** was fairly simple to mirror the header. I embeded the social links as it was the cleanest and easiest way to do it

---

### Live Page

This page was loosly based on some of the design features of the BBC iPlayer live tv schedual. I wanted something really easy to read
and understand as well as pictoral.

**Programming**
I created this page the way you see it now but _I DID IT ALL WRONG!_

I did it wrong because I embedded all the information in the HTML! I didnt use the power of Javascript

Once being made aware of my faux pas

I went back to redo it.

I knew i wanted to create and object with multiple object literals. I set about making that,

```
const liveStream = [
   {
     time: "",
     title: "",
     description: "",
     image: ""
       },
```

I knew I needed to store them, so created a const that could store the array and created a for loop to make sure the right
object literals went to the right const

Once i had the objects and they were console.logging as the right array

I created the pathway to where each should go and then a for loop (below) that itrated though the object array and each element selected
on my pathway.

_An example of this for loop_

```
for (let i = 0; i < proTime.length; i++) { proTime[i].innerText = timeArray[i]; }
```

This meant that Tasty TV could now add new programs by creating adding new object literals to the object and creating new path ways
in the HTML. while it all looks the same as before, it is vastly different in the use of the site moving forward.

**The Day of the Week**

The other challenge I had was to create a header that showed todays day, but when you press the 'tomorrow' button it showed tomorrows date.

I first use a format of date and time that would return dd/mm/yy, but this feature didnt really work as I wanted and when I
tried to get tomorrows day it would return 'dd/mm/yy1',
So I tried to see what else i could do.
I found out that Javascript has its own date and time function and that I could return the day as a numerical number.
by getting this number I could reference an array of days to find the right day

I would then use a simple addEventListener to execute an .innerHTML change of the button _(to show 'today')_ and make the displayed
day show tomorrow. Whilst this worked, it would then not click back to todays date once executed.

I then used an If loop within the addEventListener function and after a bit of back and forth trying to get the right order, Finally got it working!

```
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
```

---

### Demand Page

This page was the really tough but ultimatly shouldnt have been so hard!

I started off by making a simply and striking registration area to make it clear where is best for the user to register.
With an easy to understand form, I wanted the process of registering to be as quick and easy so user could focus on
getting access to their ondemand randomized movie.

I had originally planned to execute the randomised movie function when they hit submit

So I created an array of pictures, created a Math.random(Math.floor) function to randomize the array and then set the pathway
to display the picture next to it. But the picture would not change! to make things more confusing, the more i clicked,
i would sometimes see if flicker to the right picture and then instantly dissapeare or go back to the original picture!

After 24hrs of tearing my hair out, I had some fresh eyes to look it over and help me problem solve. We took a bit of time but
I very suddenly realised that when the user hit submit, the code **would** execute as intended BUT the submit button refreshed the page
so the picture would go back!

Once we realised this, I re-directed the function to a randomize button and it worked perfectly!

```
  const buttonClick = document.querySelector("#randomize");

  buttonClick.addEventListener("click", () => {
    const ranImg = imageArray[Math.floor(Math.random() * imageArray.length)];
    const imgReveal = document.querySelector("#img-reveal");
    console.log("querySelector");
    imgReveal.src = `${ranImg}`;
    console.log(ranImg);
  });
```

The rest of the page was fairly easy as was just adding pictures for the showcase.

---

## Future Iterations and Unsolved Problems

For the Future Here are somethings I would like to add and figure out

---

- Carousel
  I would like to add a carousel to the movie and tvshow showcase. I think it would stand out and hit one of my goals from the user Stories.
  The reason I didnt this time was because I wanted to priorise getting the essentials done and although the carousel would look
  great, it was not aboslutly nesserarily for this iteration.

- Remind Me button
  I would like to add a button that the user can click next to the live streaming programs that would remind the user before the show
  airs

- Login and logout
  I know this needs backend, but would love to explore the different features of login and logout and how I can use it in certain features of the site
