class Clinic{
    patientId;
    treatments;
    static tooths = [11,12,13,14,15,16,17,18,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,41,42,43,44,45,46,47,48];
    
    constructor(patientId, toothNum, treatmentID ){
        this.setId(personId);
    }

    isValideTooth(toothNum){
        const exist = Clinic.tooths.filter(function(number) {
            return number = toothNum;
        });
        if(exist[0]==undefined){
            throw new Error('enter a valid tooth');
        }
    }
    addTreatment(toothNumv, id) {
        treatment.push({ toothNum :toothNumv,
             treatmentID: id}); 
  
    }
    getTreatments(){
        return this.treatments
    }
    getPersonId() {
        return this.personId;
    }
   
    setpersonId(value){
        this.isString(value);
        this.personId = value;
    }

}module.exports = Clinic;
