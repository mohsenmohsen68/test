


const btn = document.getElementById("btn")
const par = document.getElementById("para")

let arr = [2]
let sum =0;
mydata = []
const getdata = fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json =>  {
    console.log(json)
    json.map(item=>{
        console.log(item.title)
    })
})



btn.addEventListener("click",()=>{  
    // console.log(mydata.title)

})

