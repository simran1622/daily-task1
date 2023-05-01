let x=1;
let y="aa";
console.log(eval("x+y"))
//eval
//parseint
console.log(parseInt("F",16))
console.log(parseFloat("3.33"))
console.log(escape("text11"))
function sayHi ( message ,name ="world"){
console.log(message + name);

}
sayHi("hello");
sayHi("hi","john");
//rest parameters
function greet(message ,...name)
{
    console.log(message+'everyone!');
    name.forEach(element => console.log("hi",element));        
    }
greet("welo","fgd","gcgfx");