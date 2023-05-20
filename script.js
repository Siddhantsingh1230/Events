//Control Variables
console.log(typeof window);
let mainFlag = false;
let SpinController=0; // 0 or 1 
let spinnerTimingControl = 3550*SpinController; //3.5sec
// Nav Section
let hamburgerObj;
let clicked = false;
let clickItteration = 0;

let menuList = document.getElementById("menuList");
let menuSideSheet = document.getElementById("menuSideSheet");
let hamBars = document.querySelectorAll(".bar");

//animating nav list
const animateList = () => {
  let menuItem = document.querySelectorAll("#menu li");
  let menuLowerItem = document.querySelectorAll(".menuGrp");
  let i = 0;
  menuItem.forEach((item) => {
    item.classList.toggle("animateList");
    item.style.animationDelay = `${i}s`;
    i += 0.3;
  });
  i = 0.2;
  menuLowerItem.forEach((item) => {
    item.classList.toggle("animateList");
    item.style.animationDelay = `${i}s`;
    i += 0.3;
  });
};

//Hamburger Icon Animation
function myFunction(x) {
  hamburgerObj = x;
  x.classList.toggle("change");
  animateList();
  if (clickItteration % 2 == 0) {
    clicked = true;
    menuList.style.transform = "translate(0)";
    menuList.style.visibility = "visible";
    hamBars.forEach(function (element) {
      element.style.backgroundColor = "var(--black)";
      menuSideSheet.style.transform = "translate(0)";
      menuSideSheet.style.visibility = "visible";

      //for disabling scroll
      scrollingToggle();
    });
  } else {
    menuList.style.transform = "translate(55vw)";
    menuList.style.visibility = "hidden";
    menuSideSheet.style.visibility = "hidden";
    menuSideSheet.style.transform = "translate(-45vw)";
    clicked = false;
    hamBars.forEach(function (element) {
      element.style.backgroundColor = "var(--title)";
      //for re-enabling scroll
      scrollingToggle();
    });
  }

  clickItteration++;
}
//
//Hamburger Border Show
function borderToggle(x) {
  x.classList.toggle("hamIconBorder");
}

addEventListener("click", function () {
  if (
    !event.target.closest("#menuList") &&
    clicked &&
    !event.target.closest(".hamIcon")
  ) {
    //console.log('Click outside the hamburger element');
    myFunction(hamburgerObj);
    borderToggle(hamburgerObj);
    menuList.style.transform = "translate(65vw)";
  }
});

/////////

//scroll Toggle For Ham Menu
function scrollingToggle() {
  document.body.classList.toggle("scrollingToggle");
}

//  "Up" Div Show on scroll
let up = document.getElementById("up");
addEventListener("scroll", function () {
  if (window.scrollY >= "65" && mainFlag) {
    up.style.display = "flex";
    up.style.animation = "pop ease 0.35s";
  } else {
    up.style.animation = "revPop ease 0.2s";
    up.style.animationFillMode = "forwards";
  }
});
up.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//s1 img movement
let s1Img = document.querySelector(".s1 img");
let s1 = document.querySelector(".s1");
s1.addEventListener("mousemove", (coords) => {
  s1Img.style.top = 1 - coords.y * 0.05 + "px";
  s1Img.style.left = 1 - coords.x * 0.05 + "px";
});

//Spinner
var spinner = document.querySelector(".spinner");

// Hide the main element by default
var main = document.querySelector(".main");
// Wait for n seconds before removing the spinner and showing the main element
setTimeout(function () {
  // Remove the spinner
  spinner.parentNode.removeChild(spinner);

  // Show the main element
  main.style.display = "block";
  mainFlag = true;
}, spinnerTimingControl);



/* scroll Indicator */
window.onscroll=()=>{
  let bar =document.getElementById("scrollIndicator");
  let doc = document.documentElement;
  let body = document.body;
  let top = body.scrollTop || doc.scrollTop;
  let height = doc.scrollHeight - doc.clientHeight;
 let progress = (top/height)*100;
 bar.style.width=progress+"%";
}

// astrospos container
class AtroposComponent extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.atropos = new Atropos({
        el: this.querySelector('.atropos'),
        onEnter() {
          console.log('Atropos Component: Enter');
        },
        onLeave() {
          console.log('Atropos Component: Leave');
        },
        onRotate(x, y) {
          console.log('Atropos Component: Rotate', x, y);
        }
      });

      console.log('Atropos Component: Connected!', this);
    }

    disconnectedCallback() {
      this.atropos.destroy();

      console.log('Atropos Component: Disconnected!', this);
    }
  }

  customElements.define('atropos-component', AtroposComponent);

let astroBtn=document.getElementById("astroBtn");
astroBtn.addEventListener("onmouseover",(event)=>{
  event.stopPropagation();
});