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