function getDom (Dom){

    return document.querySelector(`${Dom}`)
}
let bugarBtn = getDom(".bugar")
let navMobile = getDom(".nav-mobile")
let isNavMoblieOpen = true

bugarBtn.addEventListener("click",open)

function open (){
    if(isNavMoblieOpen){
        navMobile.style.display = "block"
        isNavMoblieOpen = false    
    }
    else{
        navMobile.style.display = "none"
        isNavMoblieOpen = true
    }
}