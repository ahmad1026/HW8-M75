let database = {
    student: {},
    teacher: {},
    manager: {}
}
let user = {
    id: 0,
    Add(data, role) {
        let user;
        switch (role) {
            case "student": user = new Student(data);
                break;
            case "teacher": user = new Teacher(data);
                break;
            case "manager": user = new Manager(data);
                break;
        }
        // database[role][++this.id] = user;
        // localStorage.setItem('database', JSON.stringify(database));
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

function Student({fullName, birthday, age, address, nationalId, gender, phoneNumber, grade, studyYear}) {
    this._fullName = fullName;
    this._birthday = birthday || [];
    this._age = new Date().getFullYear() - this._birthday[0] || age;
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
                this._birthday[0] = value.getFullYear();/// yyyy
                this._birthday[0] = value.getMounth() + 1;
                this._birthday[0] = value.getDate();
                this._age = new Date().getFullYear() - this._birthday[0];
                localStorage.setItem("student", JSON.stringify(this));
            },
            get: function () {
                return `${this.birthday[0]}/${this.birthday[1]}/${this.birthday[2]}`;
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

if (!localStorage.getItem("student")) {
    const student = new Student({});
    localStorage.setItem("student", JSON.stringify(student));
}



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
                this._birthday[0] = value.getFullYear();/// yyyy
                this._birthday[0] = value.getMounth() + 1;
                this._birthday[0] = value.getDate();
                this._age = new Date().getFullYear() - this._birthday[0];
                localStorage.setItem("teacher", JSON.stringify(this));
            },
            get: function () {
                return `${this.birthday[0]}/${this.birthday[1]}/${this.birthday[2]}`;
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

if (!localStorage.getItem("teacher")) {
    const teacher = new Teacher({});
    localStorage.setItem("teacher", JSON.stringify(teacher));
}




function Manager(fullName, birthday, age, address, nationalId, gender, phoneNumber, Email, Salary, major) {
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
                this._birthday[0] = value.getFullYear();/// yyyy
                this._birthday[0] = value.getMounth() + 1;
                this._birthday[0] = value.getDate();
                this._age = new Date().getFullYear() - this._birthday[0];
                localStorage.setItem("manager", JSON.stringify(this));
            },
            get: function () {
                return `${this.birthday[0]}/${this.birthday[1]}/${this.birthday[2]}`;
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

if (!localStorage.getItem("manager")) {
    const manager = new Manager({});

    localStorage.setItem("manager", JSON.stringify(manager));
}
