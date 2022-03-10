let name = "Tom";
let age = 33;

let player1 = {
    // name : name,
    // age : age,
    // 等同于
    name,
    age,
    toPrint: function(){
        console.log(player1);
    }
}

player1.toPrint()