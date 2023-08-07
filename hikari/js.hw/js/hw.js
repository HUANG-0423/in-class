for (let i = 1; i <= 8; i++) {
    if (i == 2) {
        console.log(`${i}號恭喜中獎`)
    }
    else {
        console.log(`${i}號沒有中獎`)
    }
}

for (let i = 1; i <= 33; i++) {
    for (let j = 1; j <= 1; j++) {
        if(j==1){
            console.log(`第${i}組${(i-1)*3+j}.${i*3-j}.${i*3}`)
        }
    }
}