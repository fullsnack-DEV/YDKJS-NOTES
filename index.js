//Scoping Example 
function PrintName(name)  {
console.log(`${name} and age is ${age}`)
//Engine will try to fins the age variable here and then will move to one level up in global scope
}
//Finally Engine will find this age here lying in gloabl scope
const age = 21; 

PrintName("Prateek");
