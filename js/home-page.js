const allBtn = document.getElementById('all-btn')
const openBtn = document.getElementById('open-btn')
const closedBtn = document.getElementById('closed-btn')
const cardContainer = document.getElementById('card-container')
const count = document.getElementById('count')
function lodeAllCard(){
 fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then((res)=>res.json())
    .then((datas)=>
    datas.data.forEach(data => {
  
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML = `
         <div class="card w-96 bg-base-100 card-lg shadow-2xl]">
        <div class="card-body space-y-4 shadow-xl">
          <div class="flex justify-between">
            <img src="./images/Open-Status.png" alt="">
            <button class="border rounded-2xl px-2 bu">${data.priority}</button>
          </div>
          <p class="font-bold text-[20px]">${data.title}</p>
          <p class="line-clamp-2">${data.description}</p>
          <div class="flex gap-3">
            <button class="bg-yellow-400 rounded-md">${data.labels[0]}</button>
            <button class="bg-yellow-400 px-3 rounded-2xl">${data.labels[1]}</button>
          </div>
          <hr>
          <div class="flex flex-col gap-3">
              <p>#${data.author}</p>
              <p>${data.createdAt}</p>
            </div>
        </div>
      </div>
        `
cardContainer.appendChild(cardDiv)
    if(data.status==='open'){
        const card = document.querySelector(".card");
        card.classList='border-t-5  border-green-500' 

      }
    if(data.status==='closed'){
        const card = document.querySelector(".card");
        card.classList='border-t-5 border-purple-500' 

      }
       
count.innerText = data.id;
    }))
  
}
// lodeAllCard()

allBtn.addEventListener('click',()=>{
  cardContainer.innerHTML ="";
lodeAllCard()
})

openBtn.addEventListener('click',()=>{
  cardContainer.innerHTML = "";
fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then((res)=>res.json())
    .then((datas)=>
    datas.data.forEach(data => {
      if(data.status ==='open'){

    
  
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML = `
         <div class="card w-96 bg-base-100 card-lg shadow-2xl]">
        <div class="card-body space-y-4 shadow-xl">
          <div class="flex justify-between">
            <img src="./images/Open-Status.png" alt="">
            <button class="border rounded-2xl px-2 bu">${data.priority}</button>
          </div>
          <p class="font-bold text-[20px]">${data.title}</p>
          <p class="line-clamp-2">${data.description}</p>
          <div class="flex gap-3">
            <button class="bg-yellow-400 rounded-md">${data.labels[0]}</button>
            <button class="bg-yellow-400 px-3 rounded-2xl">${data.labels[1]}</button>
          </div>
          <hr>
          <div class="flex flex-col gap-3">
              <p>#${data.author}</p>
              <p>${data.createdAt}</p>
            </div>
        </div>
      </div>
        `
cardContainer.appendChild(cardDiv)
if(data.status==='open'){
        const card = document.querySelector(".card");
        card.classList='border-t-5 border-green-500' 
        count.innerText ="44"

      }
       

}

    }))
})

