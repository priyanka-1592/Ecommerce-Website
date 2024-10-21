let slide = document.querySelectorAll(".slideCard");
let card = document.querySelectorAll(".card");

let count = 0;

slide.forEach(function(slides,index){
    slides.style.left = `${slides * 100}%`
})

function myFunction(){
    slide.forEach(function(curVal){
        curVal.style.transform = `translateX(-${count * 100}%)`
    })
}

setInterval(function(){
  count++;
  if(count == slide.length){
    count=0;
  }
  myFunction();
  
}, 2000);

//card detail

card.forEach(function(curCard){
  curCard.addEventListener("click", function(){
       console.log(curCard.firstElementChild.src);

       document.querySelector(".container").style.display="none"
       
       let div = document.createElement("div");
       div.classList.add("cardDetail");
       div.innerHTML=`
       <img src=${curCard.firstElementChild.src} alt="">
    <div class="cardText">
        <h2>Top Trending Wear</h2>
        <h2>Upto 30% Off hurry..</h2>
        <p>Trending clothing styles are focusing on a mix of comfort.</p>
        <p>Low-rise jeans,cargo pants comeback from the early 2000s.</p>
        <p>Bright colors and bold accessories like chunky belts are key.</p>
        <p>More brands are embracing unisex designs clothing.</p>
        <button>Buy Now</button>
        <button>Add To Cart</button>
        <a href="">Back</a>
    </div>
     `
      document.querySelector("body").appendChild(div);

      // document.querySelector(".container").style.display="none";

  })
})
