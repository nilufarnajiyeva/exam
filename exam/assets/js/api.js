document.querySelector('#btn').addEventListener('click',function() {
    const fetched= fetch('https://646e6c3c9c677e23218ba4ab.mockapi.io/product',{
      
          
              method: "POST", 
              headers: {
                "Content-Type": "application/json",
                
              },
              
              body: JSON.stringify({
                icon.documentquerySelector('#icon').icon,
                title.documentquerySelector('#title').title,
                text.documentquerySelector('#text').text,
            }),
        })
           
fetched.then(res=>{
    (res.ok==true)
    {
        document.querySelector('#icon').value='';
        document.querySelector('#title').value='';
        document.querySelector('#text').value='';

    }
}).catch(err=>console.log(err))
})