const slides = document.querySelectorAll('.slide')
for (const slide of slides) {
   slide.onclick= (x) =>{
      let currentActiveSlide=document.querySelector(".slide.active")
      currentActiveSlide.classList.remove("active")
      console.log(x.target.classList.add("active"))
   }
}