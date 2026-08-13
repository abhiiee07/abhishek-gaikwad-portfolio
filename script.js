window.addEventListener("load",()=>document.querySelector(".loader").classList.add("done"));
const menu=document.querySelector(".menu-btn"), navLinks=document.querySelector(".nav-links");
menu.addEventListener("click",()=>{navLinks.classList.toggle("open");menu.classList.toggle("active")});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const glow=document.querySelector(".cursor-glow");
window.addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
window.addEventListener("scroll",()=>document.querySelector("nav").style.boxShadow=scrollY>20?"0 8px 30px rgba(0,0,0,.18)":"none");
