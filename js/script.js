
/*let progressBar = document.querySelector('.progressbar');
let hauteurTot  = (document.body.scrollHeight)-document.body.offsetHeight;

window.addEventListener('scroll', function() {
  let alreadyScrolled = window.pageYOffset;
  let largeurPB = (alreadyScrolled / hauteurTot)*100;
  progressBar.style.width= largeurPB+'%';
});*/

window.addEventListener('scroll', function() {
    let progressBar = document.querySelector(".progressbar");
    let hauteurTot  = (document.body.scrollHeight)-window.innerHeight;
    let alreadyScrolled = window.pageYOffset;
    let largeurPB = (alreadyScrolled / hauteurTot)*100;
    progressBar.style.width= largeurPB+'%';

  console.log (document.body.scrollHeight + '+' + document.body.offsetHeight)
});








/*
let hWindow = window.innerHeight;
let navigation =  document.querySelector("nav");
let hNav = navigation.offsetHeight;
let toScroll = hWindow - hNav;

// console.log ("la heuteur de ma fenetre est de : " + hWindow + " et la hauteur de la nav est de : " + hNav)
// console.log ("Je dois scroller : " + toScroll + " pixels pour arriver à mon objectif !")

// console.log("Nav height : " + window.scrollY);

window.addEventListener('scroll', function () {
    let alreadyScrolled = window.pageYOffset;
    if (window.scrollY >= document.getElementById('header').clientHeight)
    document.getElementById('nav').classList.add("sticky");
    else
    document.getElementById('nav').classList.remove("sticky");
});
*/

