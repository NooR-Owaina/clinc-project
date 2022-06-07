class Patient {
    id = 000;
    static NUM =0;
    name;
    gender;
    age;
    address;
    email;
    phonenumber;
    
    constructor( name, gender, age, address, phonenumber, email) {
        this.id = Patient.NUM;
        this.setName(name);
        this.setGender(gender);
        this.setAge(age);
        this.setAdress(address);
        this.setPhoneNumber(phonenumber);
        this.setEmail(email);
        Patient.NUM++;
    }

    isString(value){
        if(typeof value != 'string'){
            throw new Error('name must be a string');
        }
    }
    isPhonNumber(value){
        if(typeof value != 'string' && !value.match( /^[0-9]*$ /)){
            throw new Error('You have entered an invalid phonenumber!');
        }
    }
    isNumber(value){
            if(typeof value != 'string' && !value.match( /^[0-9]*$ /)){

            throw new Error('age must be a number');

        }
    }
    isEmail(email) {
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            throw new Error('You have entered an invalid email address!');
        }
    }
    setName(value){
        this.isString(value);
        this.name = value;
    }
    setGender(value){
        this.isString(value);
        this.gender = value;
    }
    setAge(value){
        this.isNumber(value);
        this.age = value;
    }
    setAdress(value){
        this.isString(value);
        this.address = value;
    }
    setEmail(value){
        this.isEmail(value)
            this.email = value;
       
    }
    setPhoneNumber(value){
        this.isPhonNumber(value)
            this.phonenumber = value;
        
    }
    getName(){
        return this.name;
    }
    getGender(){
        return this.gender;
    }
    getAge(){
        return this.age;
    }
    getAdress(){
        return this.address;
    }
    getEmail(){
        return this.email;
    }
    getPhoneNumber(){
        return this.phonenumber;
    }
}
module.exports = Patient;
