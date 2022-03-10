class Player{
    constructor (name ,age){
        this.name = name;
        this.age = age;
    }
    // toPrint() {
    //     let _this = this;
    //     setTimeout(function( ){
    //         console.log(this.name + "---" + this.age);
    //     },1000)
    // }
    toPrint(){
        setTimeout(() => {
            console.log(this.name + "---" + this.age);
        },1000)
    }
}

let player1 = Player("aaa",123);
console.log(player1);
    