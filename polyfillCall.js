function printName(city, country) {
  return `${this.firstName} ${this.lastName}, ${city} - ${country}`;
}

const myName = {
  firstName: "Sankhojjal",
  lastName: "Chatterjee",
};

const val1 = printName.call(myName, "Kolkata", "WestBengal");

console.log("val1", val1);

Function.prototype.customCall = function (context, ...args) {
  context.fnc = this;
  return context.fnc(...args);
};

const val = printName.customCall(myName, "Kolkata", "WestBengal");
console.log("val", val);
