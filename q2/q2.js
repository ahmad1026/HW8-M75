let database = {
    student: {},
    teacher: {},
    manager: {}
}
let user = {
    id: 0,
    firstName: "",
    family: "",
    nationalId: "",
    role: "",
    Add(firstName, family, nationalId, role) {
        this.firstName = firstName;
        this.family = family;
        this.nationalId = nationalId;
        this.role = role;
        database[role][++this.id] = {
            firstName,
            family,
            nationalId,
            role
        }
        window.localStorage.setItem('database', JSON.stringify(database));

    },
    Remove(id, role) {
        let newdatabase = JSON.parse(window.localStorage.getItem('database'));
        delete newdatabase[role][id];
        window.localStorage.setItem('database', JSON.stringify(newdatabase));
        newdatabase = JSON.parse(window.localStorage.getItem('database'));
        console.log(newdatabase);
    },
    Find() {

    }

};

user.Add("ahmad", "mohammadi", "654545", "student");
user.Add("ahmad", "mohammadi", "654545", "student");
user.Add("ahmad", "mohammadi", "654545", "student");
user.Add("ahmad", "mohammadi", "654545", "student");


const Student = {

    set fullName(value){
        this.fullName = value;
    },
    get fullName(){
        return this.fullName;
    },

    set age(value){
        this.age = value;
    },
    get age(){
        return this.age;
    },

    set address(value){
        this.address = value;
    },
    get address(){
        return this.address;
    },

    set nationalId(value){
        this.nationalId = value;
    },
    get nationalId(){
        return this.nationalId;
    },

    set gender(value){
        this.gender = value;
    },
    get gender(){
        return this.gender;
    },

    set phoneNumber(value){
        this.phoneNumber = value;
    },
    get phoneNumber(){
        return this.phoneNumber;
    },

    set grade(value){
        this.grade = value;
    },
    get grade(){
        return this.grade;
    },

    set studyYear(value){
        this.studyYear = value;
    },
    get studyYear(){
        return this.studyYear;
    }








}