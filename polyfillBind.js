function printName(city, country) {
  return `${this.firstName} ${this.lastName}, ${city} - ${country}`;
}

const myName = {
  firstName: "Sankhojjal",
  lastName: "Chatterjee",
};

const val1 = printName.bind(myName, "Kolkata", "WestBengal");

console.log("val1", val1());

Function.prototype.customBind = function (context, ...args) {
  context.myBind = this;
  return () => context.myBind(args);
};

const val = printName.customBind(myName, "Kolkata", "WestBengal");

console.log("val", val());
