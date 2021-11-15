// a weather class
class Weather { // no public, private etc.
    // members of this class
    _description = 'windy' // use a name to indicate it's meant to be accessed by methods
    _temperature = 8
    _wind_speed  = 12
    // constructor is optional
    constructor(){} // no data typing
    // we can provide get/set methods (accessor and mutator methods)
    get description(){ // instead of directly accessing, use this function
        return this._description
    }
    set description(new_desc){
        if (new_desc != '' && typeof(new_desc)== 'string'){
            this._description = new_desc
        } else {
            this._description = 'default'
        }
    }
    // write get/set for temperature, 
    // which must be a number between -18 and +42
    get temperature(){
        return this._temperature
    }
    set temperature(new_temp){
        if (typeof(new_temp)=='number' && (new_temp >=-18 && new_temp<=42)){
            this._temperature = new_temp
        } else {
            this._temperature = 12 // sensible default
        }
    }

    // methods of this class
    showWeather(){
        let w = `It is ${this.description} at ${this.temperature}&deg; wind speed is ${this.wind_speed}`
        output.innerHTML = w
    }


}
