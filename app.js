var image = document.querySelector(".image")
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")

let i = 1;

next.addEventListener('click',()=>{
    i++
    image.src =`./${i}.jpg`
    if(i > 4){
        
        i = 0
    }  
})

prev.addEventListener('click',()=>{
    if(i <= 1){
        i = 5
        image.src =`./${i}.jpg`
    }else{
        i--
        image.src =`./${i}.jpg`
    }

})