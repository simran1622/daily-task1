//let greeting =  nam =>"hello world  " + nam; 
//let mssg=greeting(" aman");
//console.log(greeting("mssg"));
/*let mesage ={
    name:"aman",
    regFun:function()
    { console.log(this)
        console.log("hello"+"  "+ this.name);
    },
    arroFun:() => console.log("hi"+"  "+ this.name)
    
}
mesage.regFun();
mesage.arroFun();*/

let person1=
{name:"john",
age:22};
let person2=
{
    name:"ana",
sayHi:function()
{
    return this.name;
}};
let getcopy =person2.sayHi.bind(person1);
console.log(getcopy);
//sayHi.call(person1);
//sayHi.call(person2);
//sayHi();
/*function introduction(name,profession ,aa)
{
    console.log("My name is "+ name +"  and I am a "+ profession +"  ."+aa);
}
introduction("john","lawyer");
introduction.apply( undefined,["marryc","lawyer","sd"]);
introduction.call( undefined,"marry","lawyer");
*/
