const product =document.querySelector('#box');
  {
    fetch('https://64747a697de100807b1b0545.mockapi.io/product')
    .then(res=>res.json())
    .then(res=>
        res.forEach(el=>{
        product.innerHTML+=`<div class="image col-md-3">
        <div class="card bg-color-white">
            <div class="icon">
                ${el.icon}
            </div>
            <div class="card-body">
                <p class="card-text">${el.tittle}</p>
                <p>${el.text}</p>
            </div>
        </div>
    </div>`
        })
        ).catch(err=>console.log(err))
  }