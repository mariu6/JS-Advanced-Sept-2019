class PaymentPackage {
    constructor(name, value) {
      this.name = name;
      this.value = value;
      this.VAT = 20;      // Default value    
      this.active = true; // Default value
    }
  
    get name() {
      return this._name;
    }
  
    set name(newValue) {
      if (typeof newValue !== 'string') {
        throw new Error('Name must be a non-empty string');
      }
      if (newValue.length === 0) {
        throw new Error('Name must be a non-empty string');
      }
      this._name = newValue;
    }
  
    get value() {
      return this._value;
    }
  
    set value(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('Value must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('Value must be a non-negative number');
      }
      this._value = newValue;
    }
  
    get VAT() {
      return this._VAT;
    }
  
    set VAT(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('VAT must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('VAT must be a non-negative number');
      }
      this._VAT = newValue;
    }
  
    get active() {
      return this._active;
    }
  
    set active(newValue) {
      if (typeof newValue !== 'boolean') {
        throw new Error('Active status must be a boolean');
      }
      this._active = newValue;
    }
  
    toString() {
      const output = [
        `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${this.value}`,
        `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
      ];
      return output.join('\n');
    }
  }
  
module.exports = PaymentPackage;

//   try {
//     const hrPack = new PaymentPackage('HR Services');   // има име, няма value, Error:... 
// } catch(err) {
//     console.log('Error: ' + err.message);
// }
// const packages = [
//     new PaymentPackage('HR Services', 1500),
//     new PaymentPackage('Consultation', 800),
//     new PaymentPackage('Partnership Fee', 7000),
// ];
// console.log(packages.join('\n'));

// const wrongPack = new PaymentPackage('Transfer Fee', 100);
// // Should throw an error
// try {
//     wrongPack.active = null;      // null не е boolean , Error:...
// } catch(err) {
//     console.log('Error: ' + err.message);
// }

let a = new PaymentPackage("ata", 10);
console.log(a.toString());
a.name = "az";
console.log(a.toString());
a.active = false
console.log(a.toString());
a.VAT = 120;
console.log(a.toString());
console.log(a);