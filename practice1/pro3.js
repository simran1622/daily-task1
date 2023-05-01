/*unction greetings()
{
   let message ='hello';}
   let sayHi = function hi()
   {
    console.log(message);
   }

sayHi()

greetings();
/*function sum(num1 ,num2)
{

     let res = num1+num2 ;
     console.log(res);
}
let result = sum(2);
let message='hello';
if (message==="hello")
{
    let count=100;//count is not defined

}
console.log(count);

(function ()
    {
console.log("hello i am iffe function");
    }
)();
let greetings = (function()
{
    let message= 'hello ';
    let getMessage =()=>message;
return {
    getMessage:getMessage,

};
})();
console.log(greetings.getMessage());*/

function setupCounter(val)
{
    return function counter()
    {
        return val++;
    }
}
let counter1 =setupCounter(2);
console.log(counter1());
console.log(counter1());

let counter2 =setupCounter(20);
console.log(counter2());

