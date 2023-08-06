// console.log("1X1=1 1X2=2")

// let j = 1


// for (let j = 1; j <= 9; j++) {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`${j}X${i}=${j * i} `)
//   }
// }


// for (let j = 1; j <= 4; j++) {
//   for (let i = 1; i <= 13; i++) {
//     if (j == 1) {
//       console.log("梅花" + i)
//     }
//     if (j == 2) {
//       console.log("磚塊" + i)
//     }
//     if (j == 3) {
//       console.log("紅心" + i)
//     }
//     if (j == 4) {
//       console.log("黑桃" + i)
//     }
//   }
// }

// // 製作牌
// let color = ["梅花", "磚塊", "紅心", "黑桃"]
// let allCard = []

// for (let j = 1; j <= 4; j++) {
//   for (let i = 1; i <= 13; i++) {
//     if (j == 1) {
//       allCard.push("梅花" + i)
//     }
//     if (j == 2) {
//       allCard.push("磚塊" + i)
//     }
//     if (j == 3) {
//       allCard.push("紅心" + i)
//     }
//     if (j == 4) {
//       allCard.push("黑桃" + i)
//     }
//   }
// }
// // console.log(allCard)

// // 洗牌
// for (let k = 1; k <= 100; k++) {
//   let targetA = Math.floor(Math.random() * 52)
//   let targetB = Math.floor(Math.random() * 52)

//   let bucket = allCard[targetA]
//   allCard[targetA] = allCard[targetB]
//   allCard[targetB] = bucket
// }
// // console.log(allCard)

// // 發牌
// let player = []
// let j = 0
// let k = 0
// for (let l = 0; l <= 51; l++) {
//   if (k == 13) {
//     k = 0
//     j = j + 1
//   }
//   if (k >= 1) {
//     player[j] += `、${allCard[l]}`
//   }
//   else {
//     player[j] = `${allCard[l]}`

//   }
//   k++
// }

// console.log("玩家1手牌：" + player[1])
// console.log("玩家2手牌：" + player[2])
// console.log("玩家3手牌：" + player[3])
// console.log("玩家4手牌：" + player[0])


// 梅花1 
// 梅花2
// 梅花3
// ....

// for (i = 1; i <= 4; i++) {
//   for (j = 1; j <= 13; j++) {
//     if (i == 1) {
//       console.log(`梅花${j}`)
//     }
//     if (i == 2) {
//       console.log(`磚塊${j}`)
//     }
//     if (i == 3) {
//       console.log(`愛心${j}`)
//     }
//     if (i == 4) {
//       console.log(`黑桃${j}`)
//     }
//   }
// }


// for (let j = 1; j <= 4; j++) {
//   for (let i = 1; i <= 13; i++) {
//     if (j == 1) {
//       console.log(`梅花${i}`)
//     }
//     if (j == 2) {
//       console.log(`磚塊${i}`)
//     }
//     if (j == 3) {
//       console.log(`愛心${i}`)
//     }
//     if (j == 4) {
//       console.log(`黑桃${i}`)
//     }
//   }
// }

