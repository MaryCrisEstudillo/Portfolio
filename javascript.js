////////// horizontal/////////////////////////////////////
const images = document.querySelectorAll('.anim');
    
observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
        entry.target.style.animation = `anim1H 2s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
        entry.target.style.animation = 'none';
        }
    })
})  

images.forEach(image => {
       observer.observe(image)
})

/////////////// VERTICAL //////////////////////////////////
const verticals = document.querySelectorAll('.vert');

observer = new IntersectionObserver((verties) => {

    verties.forEach(verty => {
            if(verty.intersectionRatio > 0) {
            verty.target.style.animation = `anim2V 2s ${verty.target.dataset.delay} forwards ease-out`;
            }
            else {
            verty.target.style.animation = 'none';
            }
        })
    })
verticals.forEach(vertical => {
    observer.observe(vertical)
})

/////////////// RIGHT //////////////////////////////////
const animationR = document.querySelectorAll('.animRight');
    
observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
        entry.target.style.animation = `animRight 2s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
        entry.target.style.animation = 'none';
        }
    })
})  

animationR.forEach(animV => {
       observer.observe(animV)
})
/////////////// LEFT //////////////////////////////////
const animationL = document.querySelectorAll('.animLeft');
    
observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
        entry.target.style.animation = `animLeft 2s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
        entry.target.style.animation = 'none';
        }
    })
})  

animationL.forEach(animL => {
       observer.observe(animL)
})


function closeModal() {
    var modal = document.getElementById("modalContact");
    if (modal.style.visibility === "hidden") {
      modal.style.visibility = "visible";
    } else {
      modal.style.visibility = "hidden";
    }
  }