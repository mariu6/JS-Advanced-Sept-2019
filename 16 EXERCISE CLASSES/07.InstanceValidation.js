class CheckingAccount {
    _clientId;
    _email;
    _firstName;
    _lastName;
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get clientId() {
        return this._clientId;
    }
    set clientId(id) {
        if (id == Number(id) && id.length === 6) {
            this._clientId = id;
        } else {
            throw TypeError("Client ID must be a 6-digit number");
        }
    }
    get email() {
        return this._email;
    }
    set email(mail) {
        if ((/(.+)@(.+){2,}\.(.+){2,}/).test(mail)) {
            this._email = mail;
        } else {
            throw TypeError("Invalid e-mail");
        }
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(name) {
        this._firstName = this.checker(name, "First");
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(name) {
        this._lastName = this.checker(name, "Last");
    }

    checker(name, firstLast) {
        if (name.length < 3 || name.length > 20) {
            throw TypeError(`${firstLast} name must be between 3 and 20 characters long`);
        }
        if (!(/^[A-Za-z]+$/g).test(name)) {
            throw TypeError(`${firstLast} name must contain only Latin characters`);
        }
        return name;
    }
}

let acc = new CheckingAccount('131415', 'ivan@some.com', 'Ivan', 'Petrov');
// TypeError: Client ID must be a 6-digit number

console.log(acc);
// let acc1 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
// // TypeError: Invalid e-mail

// let acc2 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
// // TypeError: First name must be between 3 and 20 characters long

// let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
// // TypeError: "First name must contain only Latin characters