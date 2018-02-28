// setTimeout(function(){
//         $('body').addClass('loaded');
//         $('h1').css('color','#222222');
//     }, 3000);
document.querySelector('.cd-nav-trigger').classList.add('hidden');

setTimeout(function(){
  document.querySelector('body').classList.add('loaded');

  setTimeout(function(){
    document.querySelector('.cd-nav-trigger').classList.remove('hidden');

    document.querySelector(".wrapper").classList.add('hidden');

    document.querySelector('.logo').style.zIndex = '1';

    document.querySelector('.logo-cont').style.zIndex = '1';
  },3000);
},3500);

setTimeout(function(){
  var options = {
    strings: ["endoza&nbsp;Web&nbsp;Design"],
    startDelay: 1000,
    typeSpeed: 70
  }
  var typed = new Typed(".txt-typed",options);
},6000);
