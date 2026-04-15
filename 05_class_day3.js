


// class Person1{
//     constructor(name, age){ //constructron 은 생성자이다
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log('Hello, '+ this.name);
//     }
// }

// //person3은 Person1 클래스의 인스턴스

// const person3 = new Person1('양금명',20);
// console.log(person3.age,person3.name);
// person3.greet();



//Class사용 -private예제
// class Person2 {
//     #idNo;
//     constructor(name, age, idNo){
//         this.name=name;
//         this.age=age;
//         this.#idNo;
//     }


// getIDNO(){
//     console.log(`idNo:${this.#idNo}`)
// }}

//     const person4=new Person2('양금명',20,'123456');
//     person4.getIDNO();





//클래스 정의 실습

class Vehicle {
constructor(speed) {
this.speed = speed;
}
speedUp() {
this.speed += 10;
}
speedDn = () => {
this.speed -= 10;
};
}
const vehicle = new Vehicle(0);
// vehicle.speedUp();
// console.log(vehicle.speed);
// vehicle.speedDn();
// console.log(vehicle.speed);;



//상속의 구현
class Car extends Vehicle{
    constructor(speed,wheels,seats){
        super(speed);
        this.wheels = wheels;
        this.seats = seats;
    
    }
    drive(){
        console.log(`현재 속도는 ${this.speed}로 운행`);
    }

}
const car = new Car(100,4,4);
// car.speedUp();
// console.log(car.speed);
// car.drive();


// class Truck extends Car{
//     constructor(loadage){
//         this.loadage = loadage;
//     }
//     loadage = 0;

//     load(){
//         console.log(loadage);
//     }

//     upLoad(){
//         console.log(`적재량은 ${this.loadage}입니다`)
//     }
// }