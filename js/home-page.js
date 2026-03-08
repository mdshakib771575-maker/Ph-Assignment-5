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
         <div onclick="loadModal(${data.id})" class="card w-96 bg-base-100 card-lg shadow-2xl]">
        <div class="card-body space-y-4 shadow-xl">
          <div class="flex justify-between">
            <img src="./images/Open-Status.png" alt="">
            <button class="bb border rounded-2xl px-2">${data.priority}</button>
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
lodeAllCard();

function loadModal(id){
// my_modal_5.showModal()
console.log(id)
fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
.then((res)=>res.json())
.then((data)=>displaymodal(data.data))


}

function displaymodal(data){
const modalContainer = document.getElementById('modal-container');
modalContainer.innerHTML=`
 <div class="space-y-5">
          <h2 class="font-bold text-xl">${data.title}</h2>
          <div class="flex gap-3 items-center">
            <p class="rounded-xl bg-green-600 text-white px-2">${data.status}</p>
            <p class="flex items-center gap-2"><i class="fa-solid fa-circle text-[5px]"></i>Opened by ${data.author}</p>
            <p class="flex items-center gap-2"><i class="fa-solid fa-circle text-[5px]"></i>${data.createdAt}</p>
          </div>
          <div class="flex gap-2">
            <p class="bg-[#EF4444] rounded-xl text-white px-2.5">${data.labels[0]}</p>
            <p class="bg-[#D97706] rounded-xl text-white px-2.5">${data.labels[1]}</p>
          </div>
          <p>${data.description}</p>
          <div class="flex gap-30 bg-base-200 shadow">
            <div class="space-y-2">
              <p>Assignee :</p>
              <p class="font-bold">${data.author}</p>

            </div>
            <div class="space-y-2">
              <p>Priority:</p>
              <p class="border rounded text-center px-2">${data.priority}</p>
            </div>

          </div>
           <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn btn-primary">Close</button>
          </form>
        </div>
`
document.getElementById('my_modal_5').showModal();
}


allBtn.addEventListener('click',()=>{
  cardContainer.innerHTML ="";
   allBtn.classList.add('btn-primary',"text-white")
  openBtn.classList.remove('btn-primary',"text-white")
  closedBtn.classList.remove('btn-primary',"text-white")
  
lodeAllCard()
})

openBtn.addEventListener('click',()=>{
  cardContainer.innerHTML = "";
  allBtn.classList.remove('btn-primary',"text-white")
  closedBtn.classList.remove('btn-primary',"text-white")
  openBtn.classList.add('btn-primary',"text-white")
  
fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then((res)=>res.json())
    .then((datas)=>
    datas.data.forEach(data => {
      if(data.status ==='open'){

    
  
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML = `
         <div onclick="loadModal(${data.id})"class="card w-96 bg-base-100 card-lg shadow-2xl]">
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

closedBtn.addEventListener('click',()=>{
  cardContainer.innerHTML ="";
  allBtn.classList.remove('btn-primary',"text-white")
  openBtn.classList.remove('btn-primary',"text-white")
  closedBtn.classList.add('btn-primary',"text-white")
  
  fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then((res)=>res.json())
    .then((datas)=>
    datas.data.forEach(data => {
      if(data.status ==='closed'){

    
  
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML = `
         <div onclick="loadModal(${data.id})" class="card w-96 bg-base-100 card-lg shadow-2xl]">
        <div class="card-body space-y-4 shadow-xl">
          <div class="flex justify-between">
            <img src="./images/Open-Status.png" alt="">
            <button class="border rounded-2xl px-2 bu">${data.priority}</button>
          </div>
          <p class="font-bold text-[20px]">${data.title}</p>
          <p class="line-clamp-2">${data.description}</p>
          <div class="flex gap-3">
            <button class="bg-yellow-400 rounded-md">${data.labels[0]}</button>
            <button class="bg-yellow-400 px-3 rounded-2xl">${data.labels[1]?data.labels[1]:"no found data"}</button>
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
if(data.status==='closed'){
        const card = document.querySelector(".card");
        card.classList='border-t-5 border-purple-500' 
        count.innerText ="6"

      }
       

}

    }))

})




