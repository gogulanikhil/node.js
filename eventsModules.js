const EventEmitter = require("events")

const emitter=new EventEmitter

emitter.on("event", (num1)=>{
console.log(`add two num ${num1}`);
})
emitter.on("event",(num1,num2)=>{
    if(num1===1){console.log(`add two numbers ${num1} and ${num2}`);}
    
})
emitter.emit("event",1,2)