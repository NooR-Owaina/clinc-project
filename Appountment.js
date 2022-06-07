class Appountment {
    personId;
    time;
    date;

    constructor(personId, time, date) {
        this.setId(personId);
        this.setTime(time);
        this.setDate(date);
    
    }

    isString(value){
        if(typeof value != 'string'){
            throw new Error('color must be a string');
        }
    }
    isDate(value){
        if(value.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)){
            throw new Error('date must be a (yyyy-mm-dd)');
        }
    }
    isTime(value){
        if(value.match( /^(1[0-2]|0?[1-9]):([0-5]?[0-9])(●?[AP]M)?$ /)){
            throw new Error('time must be a hh:mm ');
        }
    }
    getPersonId() {
        return this.personId;
    }
    getTime() {
        return this.time;
    }
    getDate() {
        return this.date;
    }
    personId(value){
        this.isString(value);
        this.personId = value;
    }
    setDate(value){
        this.isDate(value);
        this.date = value;
    }
    setTime(value){
        this.isTime(value);
        this.time = value;
    }
}module.exports = Appountment;