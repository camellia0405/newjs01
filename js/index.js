

for(let step = 1 ; step<=100; step++){

    if ((step % 2)==0 && step % 3==0 && step % 5 ==0){
        console.log(step+"回目　アホ犬になる")
    }else if((step % 2)==0 && step % 3 == 0){
        console.log(step+"回目　アホになる")
    }else if((step % 2)==0 && step % 5 == 0){
        console.log(step+"回目　犬になる")
    }else if((step % 2)==0){
        console.log(step+"回目")
    }
}