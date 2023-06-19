class superhero{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name
    }
}

// module.exports =new superhero("someone")
// as it stores in  memroy cache there will be an bug if we call like this
module.exports=superhero