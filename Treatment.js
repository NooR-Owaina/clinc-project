class Treatment {
    treatmentId;
    static id=0
    description;

    constructor( description) {
        this.setId(Treatment.id);
        this.setTime(description);
        id++;
    }

    isString(value){
        if(typeof value !='string'){
        throw new Error('color must be a string');
        }
    }
    getId() {
        return this.treatmentId;
    }
    getDescription() {
        return this.description;
    }
    setId(value){
        this.isString(value);
        this.treatmentId = value;
    }
    setDesceiption(value){
        this.isString(value)
        this.description = value;
    }
}
module.exports = Treatment;