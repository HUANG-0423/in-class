function getDom(Dom){
    return document.querySelector(Dom);
}
// function= 每當需要function裡的程式碼，只要寫出function就可以被執行，不用重新在寫一次

let bugarBtn=getDom(".bugar")
let navMobile=getDom(".nav-mobile")
let isNavMobileOpen = true
//讓漢堡條可以被啟動(?)
//出現那個按鈕和旁邊的條

bugarBtn.addEventListener("click",open)
//按下按鈕

function open () {
    if(isNavMobileOpen) {
        navMobile.style.display = "block"
        isNavMobileOpen=false
    }
    else{

    navMobile.style.display = "none"
    isNavMobileOpen=true
    }
    //按下按鈕可以打開和關閉漢堡條
}

