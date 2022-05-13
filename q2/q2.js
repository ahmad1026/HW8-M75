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
        let newdatabase = localStorage.getItem('database');
        console.log(newdatabase);
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
        localStorage.setItem('database', database);
    },
    Remove() {

    },
    Find() {

    }

};

user.Add("ahmad", "mohammadi", "654545", "student");
// user.Add("ahmad", "mohammadi", "654545", "student");
// user.Add("ahmad", "mohammadi", "654545", "student");
// user.Add("ahmad", "mohammadi", "654545", "student");
console.log(database);