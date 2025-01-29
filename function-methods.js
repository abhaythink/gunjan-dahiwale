//apply() method
let grapes = {type: 'Grape', colour: 'Green'};
let apples = {type: 'Apple', colour: 'Red'};

const find = function(message){
    console.log(message);
    console.log(this.type+" has "+this.colour);
};
find.apply(grapes, ['What colour has grapes?']);
find.apply(apples, ['What colour has apples?']);


//bind() method
let bus = {
    speed: 10,
    start: function(){
        console.log('Start with '+ this.speed + ' km/h');
    }
};
let flight = {
    speed: 10,
    fly: function(){
        console.log('Flying');       
    }
}
let billing = bus.start.bind(flight);