// its a synchronous callback function which the greet function is called immediately

function greet(Name){
    console.log(`hello ${Name}`);
}
function higherOrderFunction(callback){
   const Name="nikhil"
    callback(Name);
}
higherOrderFunction(greet)