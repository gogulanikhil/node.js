//  we have 5 type of patterns to explore a function

// 1st way
// const add=(a,b)=>{
//     return a+b;
// }
// module.exports=add

// 2nd way
// module.exports=(a,b)=>{

//     return a+b;
// }

// 3rd way
// const add=(a,b)=>{

//     return a+b;
// }
// const subtract=(a,b)=>{
//     return a-b;
// }
// module.exports={add,subtract}

// 4th way
// module.exports.add=(a,b)=>{

//     return a+b;
// }
// module.exports.subtract=(a,b)=>{
//     return a-b;
// }

// 5th way
// exports.add=(a,b)=>{

//     return a+b;
// }
// exports.subtract=(a,b)=>{
//     return a-b;
// }

const add=(a,b)=>{
    return a+b
}
const subtract=(a,b)=>{
    return a-b
}

module.exports={
    add,subtract
}