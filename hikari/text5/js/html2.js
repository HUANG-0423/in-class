function getDom(Dom) {
    return (document.querySelector(`${Dom}`))
}
// 找到Dom元素

function appearTo(e) {
    e.preventDefault()
    console.log(toDo.value)
    if (toDo.value == "") {
    }
    else {
        list.innerHTML += `<li class="to-do-text">${toDo.value}</li>`
        allText=Array.from(document.querySelectorAll(".to-do-text"))

        for(let i=0; i<allText.length; i++){
            allText[i].addEventListener("click",dashed)
        }
    }
    // list.innerHTML = list.innerHTML + `<li>${toDo.value}</li>`
}
// 阻止重新整理

function dashed(){
    if(this.style.textDecoration == "line-through"){
        this.style.textDecoration = ""
    }
    else{
    this.style.textDecoration = "line-through"
    } 
}

let allText = []
const preventSubmit = getDom("#prevent-submit")
const toDo = getDom(".to-do")
const list = getDom(".list")



preventSubmit.addEventListener(
    "click", appearTo
)
