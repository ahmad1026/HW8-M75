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
        localStorage.setItem('database', JSON.stringify(database));

    },
    Remove(id, role) {
        let newdatabase = JSON.parse(localStorage.getItem('database'));
        delete newdatabase[role][id];
        localStorage.setItem('database', JSON.stringify(newdatabase));
        newdatabase = JSON.parse(localStorage.getItem('database'));
        console.log(newdatabase);
    },
    Find() {

    }

};


function Student(fullName, birthday, age, address, nationalId, gender, phoneNumber, grade, studyYear) {
    this._fullName = fullName;
    this._birthday = birthday;
    this._age = age;
    this._address = address;
    this._nationalId = nationalId;
    this._gender = gender;
    this._phoneNumber = phoneNumber;
    this._grade = grade;
    this._studyYear = studyYear;
    Object.defineProperty(this, "fullName", {
        set: function (value) {
            this._fullName = value;
            localStorage.setItem("student", JSON.stringify(this));
        },
        get: function () {
            return `${this.fullName}`;
        }
    }),
        Object.defineProperty(this, "birthday", {
            set: function (value) {
                this._birthday = value;
            },
            get: function () {
                return `${this.birthday}`;
            }
        }),
        Object.defineProperty(this, "age", {
            set: function (value) {
                this._age = value;
            },
            get: function () {
                return `${this.age}`;
            }
        }),
        Object.defineProperty(this, "address", {
            set: function (value) {
                this._address = value;
            },
            get: function () {
                return `${this.address}`;
            }
        }),
        Object.defineProperty(this, "gender", {
            set: function (value) {
                this._gender = value;
            },
            get: function () {
                return `${this.gender}`;
            }
        }),
        Object.defineProperty(this, "phoneNumber", {
            set: function (value) {
                this._phoneNumber = value;
            },
            get: function () {
                return `${this.phoneNumber}`;
            }
        }),
        Object.defineProperty(this, "grade", {
            set: function (value) {
                this._grade = value;
            },
            get: function () {
                return `${this.grade}`;
            }
        }),
        Object.defineProperty(this, "studyYear", {
            set: function (value) {
                this._studyYear = value;
            },
            get: function () {
                return `${this.studyYear}`;
            }
        })
}


let student = new Student("ahmad mohammdi", "1991/05/05");



function Teacher(fullName, birthday, age, address, nationalId, gender, phoneNumber, Field, Email, Salary) {
    this._fullName = fullName;
    this._birthday = birthday;
    this._age = age;
    this._address = address;
    this._nationalId = nationalId;
    this._gender = gender;
    this._phoneNumber = phoneNumber;
    this._Field = Field;
    this._Email = Email;
    this._Salary = Salary;
    Object.defineProperty(this, "fullName", {
        set: function (value) {
            this._fullName = value;
            localStorage.setItem("teacher", JSON.stringify(this));
        },
        get: function () {
            return `${this.fullName}`;
        }
    }),
        Object.defineProperty(this, "birthday", {
            set: function (value) {
                this._birthday = value;
            },
            get: function () {
                return `${this.birthday}`;
            }
        }),
        Object.defineProperty(this, "age", {
            set: function (value) {
                this._age = value;
            },
            get: function () {
                return `${this.age}`;
            }
        }),
        Object.defineProperty(this, "address", {
            set: function (value) {
                this._address = value;
            },
            get: function () {
                return `${this.address}`;
            }
        }),
        Object.defineProperty(this, "gender", {
            set: function (value) {
                this._gender = value;
            },
            get: function () {
                return `${this.gender}`;
            }
        }),
        Object.defineProperty(this, "phoneNumber", {
            set: function (value) {
                this._phoneNumber = value;
            },
            get: function () {
                return `${this.phoneNumber}`;
            }
        }),
        Object.defineProperty(this, "Field", {
            set: function (value) {
                this._Field = value;
            },
            get: function () {
                return `${this.Field}`;
            }
        }),
        Object.defineProperty(this, "Email", {
            set: function (value) {
                this._Email = value;
            },
            get: function () {
                return `${this.Email}`;
            }
        }),
        Object.defineProperty(this, "Salary", {
            set: function (value) {
                this._Salary = value;
            },
            get: function () {
                return `${this.Salary}`;
            }
        })

}




function Manager(fullName, birthday, age, address, nationalId, gender, phoneNumber, Email, Salary ,major) {
    this._fullName = fullName;
    this._birthday = birthday;
    this._age = age;
    this._address = address;
    this._nationalId = nationalId;
    this._gender = gender;
    this._phoneNumber = phoneNumber;
    this._Email = Email;
    this._Salary = Salary;
    this._major = major;
    Object.defineProperty(this, "fullName", {
        set: function (value) {
            this._fullName = value;
            localStorage.setItem("teacher", JSON.stringify(this));
        },
        get: function () {
            return `${this.fullName}`;
        }
    }),
        Object.defineProperty(this, "birthday", {
            set: function (value) {
                this._birthday = value;
            },
            get: function () {
                return `${this.birthday}`;
            }
        }),
        Object.defineProperty(this, "age", {
            set: function (value) {
                this._age = value;
            },
            get: function () {
                return `${this.age}`;
            }
        }),
        Object.defineProperty(this, "address", {
            set: function (value) {
                this._address = value;
            },
            get: function () {
                return `${this.address}`;
            }
        }),
        Object.defineProperty(this, "gender", {
            set: function (value) {
                this._gender = value;
            },
            get: function () {
                return `${this.gender}`;
            }
        }),
        Object.defineProperty(this, "phoneNumber", {
            set: function (value) {
                this._phoneNumber = value;
            },
            get: function () {
                return `${this.phoneNumber}`;
            }
        }),
        Object.defineProperty(this, "Email", {
            set: function (value) {
                this._Email = value;
            },
            get: function () {
                return `${this.Email}`;
            }
        }),
        Object.defineProperty(this, "Salary", {
            set: function (value) {
                this._Salary = value;
            },
            get: function () {
                return `${this.Salary}`;
            }
        }),
        Object.defineProperty(this, "major", {
            set: function (value) {
                this._major = value;
            },
            get: function () {
                return `${this.major}`;
            }
        })

}
