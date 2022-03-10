//对应对象
class Player{
    //定义构造函数
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    //定义成员函数
    toPrint(){
        console.log(this.name + "-----" + this.age);
    }
}

class BestPlayer extends Player{
    constructor(){
        super();
        this.name = "hahaha";
        this.age = 56;
    }
}

var player1 = new Player("张三",12);
player1.toPrint();

let bestPlayer = new BestPlayer();
bestPlayer.toPrint();