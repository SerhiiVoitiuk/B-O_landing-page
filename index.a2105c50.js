window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")}),document.getElementById("form").addEventListener("submit",function(o){o.preventDefault(),document.getElementById("form").reset()});var o=document.querySelector(".loading"),t=document.querySelector(".header");setTimeout(function(){o&&(o.classList.add("hidden"),setTimeout(function(){o.remove(),t.scrollIntoView({behavior:"smooth"})},900))},3e3),setTimeout(function(){gsap.fromTo(".header__title",{opacity:0,y:50},{y:0,opacity:1,duretion:2,delay:.5})},3003),gsap.registerPlugin(ScrollTrigger),gsap.utils.toArray(".product__photo-container").forEach(function(o){gsap.fromTo(o,{opacity:0,y:50},{y:0,opacity:1,duration:.5,scrollTrigger:{trigger:o,start:"top 90%",end:"top 10%",toggleActions:"play none none reverse"}})}),gsap.utils.toArray(".categories__photo-container").forEach(function(o){gsap.fromTo(o,{opacity:0,y:50},{y:0,opacity:1,duration:.5,scrollTrigger:{trigger:o,start:"top 90%",end:"top 10%",toggleActions:"play none none reverse"}})}),gsap.utils.toArray(".page__section--title").forEach(function(o){gsap.fromTo(o,{opacity:0,x:-100},{opacity:1,x:0,duration:.5,scrollTrigger:{trigger:o,start:"top 90%",end:"top 10%",toggleActions:"play none none reverse"}})}),gsap.fromTo(".about__description",{opacity:0,x:100},{opacity:1,x:0,duration:.5,scrollTrigger:{trigger:".about__description",start:"top 70%",end:"top 30%",toggleActions:"play none none reverse"}}),gsap.fromTo(".contacts__container",{opacity:0,y:50},{opacity:1,y:0,duration:.5,scrollTrigger:{trigger:".contacts__container",start:"top 90%",end:"top 10%",toggleActions:"play none none reverse"}});
//# sourceMappingURL=index.a2105c50.js.map
