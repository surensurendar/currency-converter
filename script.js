// script.js

let select = document.querySelectorAll(".currency")
let btn = document.getElementById("btn")


fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displaydropdown(res))


function displaydropdown(res){
    //console.log(Object.entries(res)[0][0]);
    let curr = Object.entries(res)

    for(let i=0;i<curr.length;i++){
        let opt= `<option value="${curr[i][0]}"> ${curr[i][0]}</option>`
        select[0].innerHTML +=opt
        select[1].innerHTML +=opt
    }
}

btn.addEventListener()('click',()=>{
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = input.value
    if(curr1===curr2)
      alert("Choose different currencies")
    else
      convert(curr1,curr2,inputVal)
  });


function convert(){}
