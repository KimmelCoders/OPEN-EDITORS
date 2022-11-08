function sayHello(){

}

const player = {
    name: "Jeongmin",
    sayHello: function (otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
}

console.log(player.name);
player.sayHello("Yuri");