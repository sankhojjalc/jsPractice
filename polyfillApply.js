function printName(city, country) {
  return `${this.firstName} ${this.lastName}, ${city} - ${country}`;
}

const myName = {
  firstName: "Sankhojjal",
  lastName: "Chatterjee",
};

const val1 = printName.apply(myName, ["Kolkata", "WestBengal"]);
console.log("val1", val1);

Function.prototype.customApply = function (ctx, args) {
  ctx.myapply = this;
  return ctx.myapply(...args);
};

const val = printName.customApply(myName, ["Kolkata", "WestBengal"]);
console.log("val", val);
