const Patient = require("./Patient.js");
const Treatment = require("./Treatment.js");
const Appountment = require("./Appountment.js");
const Clinic = require("./Clenic.js");
class Methods {

    static addPatient(patients){
        const prompt = require('prompt-sync')({sigint: true});

        let name = prompt('Enter your name: ');
        let gender; 
        switch (prompt('Enter a number 1 for male or 2 for female: ')) {
            case '1':
                gender = 'male';
            break;
            case '2':
                gender = 'female';
            break;
            default:
                gender = 'brefer not to say';
            break;
        }
        let age = prompt('Enter your age: ');
        let address = prompt('Enter your city: ');
        let email = prompt('Enter your email: ');
        let phonenumber = prompt('Enter your phonenumber: ');
        patients.push(new Patient( name, gender, age, address, phonenumber, email));
    }
    static addAppountment(patients, appountments){
        const prompt = require('prompt-sync')({sigint: true});
        console.table(patients);
        let id = (prompt('choose your patient(write the id): ')) ;
        let date = prompt('Enter the date (yyyy-mm-dd): ');
        let time = prompt('Enter the time hh:mm: ');
        const exist = patients.filter(function(patient) {
            return patient.id = id;
        });
        if(exist[0]!=undefined){
            appountments.push(new Appountment( id, date, time));
        }else{
            console.log(' this id is not exiest')
        }
    }
    static addTreatment(treatments){
        const prompt = require('prompt-sync')({sigint: true});
        let description = prompt('pleas describe the treatment: ');
        treatments.push(new Treatment(description));
    }
    static patientNeed(patients, treatments, clinic){
        const prompt = require('prompt-sync')({sigint: true});
        console.table(treatments);
        console.table(patients);
        let patientId = (prompt('choose your patient(write the id): ')) ;
        let toothNum = (prompt('choose number of tuth that need to treat: ')) ;
        let treatmentid = (prompt('choose the tretment(write the id): ')) ;
        const exist = patients.filter(function(patient) {
            return patient.id = patientId;
        });
        if(exist[0]!=undefined){
            Clinic.addTreatment(toothNum, treatmentid);
        }else{
            clinic.push(new Clinic(patientId, toothNum, treatmentid ));
        }
    }
    
}module.exports = Methods;