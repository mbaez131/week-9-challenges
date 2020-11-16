var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"




function exercise(activity){
    function workout(){
      return "Today's activity: " + activity;
    }
    return workout;
}

console.log("=====================================")

var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"

function cutPizzaSlices(i){
    function pizzaSlice(sharePizza){
        return "Each person gets " + (i/sharePizza).toFixed(2) + " slices of pizza"
    }
    return pizzaSlice
}

console.log("=====================================")

var pii = {
    name: "brax",
    ssn: 101231020310231,
     getName : function(){
        return this.name
    }
}


console.log("=====================================")

function Person(name,job,age){
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise = function(){
        return "Running is great!"
    }
    this.fetchJob = function(){
        return this.name + " is a " + this.job;
    }
}

console.log("============================")

function Programmer(name,job,age,languages){
    Person.call(this,name,job,age);
    this.languages = languages;
    this.languages = [];
    this.busy = true;
    this.completeTask = function(){
        return this.busy = false;
    }
    this.acceptNewTask = function(){
        return this.busy = true;
    }
    this.offerNewTask = function(){
        if(this.busy === true){
            return name + " can't accept any new tasks right now. "
        } else return name + " would love to take on a new responsibility. "
    }
    this.learnLanguage = function(language){
        return this.languages.push(language)
    }
    this.listLanguages = function(){
        return this.languages
    }
}