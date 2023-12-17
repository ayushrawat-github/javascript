let myheros = ["thor " , "ironman"]

let heropower = {
    thor : "hammer",
    ironman : "suit",

    getironmanpower : function(){
        console.log(`ironman power is ${this.ironman}`);
    }

}

Object.prototype.ayush = function(){
    console.log(`ayush is present in all object`);
}

Array.prototype.hiayush = function(){
    console.log(`ayush says hello`);
}

heropower.ayush()
myheros.ayush()
myheros.hiayush()
