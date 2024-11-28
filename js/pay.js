const token= localStorage.getItem("session")


document.addEventListener("DOMContentLoaded",()=>{
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    
    const amountFromUrl = getQueryParam('amount');

   
    if (amountFromUrl) {
        const input = document.getElementById('amount');
        input.value = amountFromUrl;  
        input.disabled = true;  
    }
})


document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault()
    
    fetch("https://alesp-back.onrender.com/donation/",{
        method:"POST",
        headers: {
            "authorization": `Bearer ${token}`,
               'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            amount:parseInt(e.target.amount.value)
        })
    }).then(res=>res.json()).then(res=>console.log(res))
})