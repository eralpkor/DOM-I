const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let items = [];
let jasonIds = [];
let result= [];

let nodes = ['a','img','h1', 'button', 'p', 'h4'];
let pars = [];

let containerChildren = document.querySelector('.container');

let navTags = document.getElementsByTagName('nav')[0];

let changeDivColor = document.querySelector('.main-content');


// Loop over site content keys values
Object.keys(siteContent).forEach(function (el) {
  // loop site content first object properties
  Object.values(siteContent[el]).forEach(function (ele) {
    // add all properties to jasonIds array
    jasonIds.push(ele);
  });

  Object.keys(siteContent[el]).forEach(function (val) {
    // add first properties to items array
    items.push(val);
  });
});

// for (let i = 0; i < nodes.length; i++) {
//   var nodeIterator = document.createNodeIterator(
//     containerChildren,
//     NodeFilter.SHOW_ELEMENT,
//     function(node) {
//         return node.nodeName.toLowerCase() === nodes[i] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;

//     }
//   );
  
//   var currentNode;
  
//   while (currentNode = nodeIterator.nextNode()) {
//   pars.push(currentNode);
//   }
// }



// IIFE function to check all child nodes with valid data 
// and push them to an array result
(function anyChild(value) {
  value.childNodes.forEach(function (el) {
    if (el.childNodes !== 0) anyChild(el);
    if (el.childNodes.length === 0 && el.nodeName !== '#text') result.push(el);
  });

})(containerChildren);

// map over array result to set all of the attributes and innerText
result.map((value, i) => {
  if (items[i].includes('img')) {
    value.setAttribute('src', jasonIds[i])
  } 

  value.innerText = jasonIds[i];
});


// Stretch goals
let aTags = document.getElementsByTagName('a');

for (let i = 0; i < aTags.length; i++) {
  aTags[i].style.color = "red";
}

// change color of navigation and add some padding too
[...document.getElementsByTagName('header')].forEach(function (el) {
  el.style.background = '#6ee99f';
  el.style.padding = '2%';
});

changeDivColor.style.backgroundColor = '#e7dbdb';
changeDivColor.style.border = '1px solid black';
changeDivColor.style.padding = '2%'
document.getElementById('middle-img').style.width = '100%';



