// console.log("九九乘法表")

// for(let i = 1; i < 10; i++){
//     for(    let j = 1; j < 10; j++){
//         console.log(`${i}x${j}=${i*j}`)
//     }
// }

// console.log("撲克牌")

// for( let i = 1; i <=4; i++){
//     for(let j = 1; j < 14; j++){
//         if(i==1){
//             console.log(`黑桃${j}`)
//         }
//         if(i==2){
//             console.log(`紅心${j}`)
//         }
//         if(i==3){
//             console.log(`方塊${j}`)
//         }
//         if(i==4){
//             console.log(`梅花${j}`)
//         }

//     }
// }

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

// x = 99
// if(x==99){
//     console.log("只差一分")
// }

// for(let i=1; i<=100; i++){
//     if(i==44){
//         console.log("糖果")
//     }
//     else {
//         console.log(`${i}`)
//     }
// }

// for(let i=1; i<=9; i++){
//     for(let j=1; j<=9; j++){
//         console.log(`${i}x${j}=${i*j}`)
//     }
// }

let x = 1
let y = 2
z = 0
z=x
x=y
y=z
console.log(x)
console.log(y)