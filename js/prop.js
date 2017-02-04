function Person () {
    this.name = "ren";
}
Person.prototype.getName = function () {
    return this.name;
}
Person.prototype.getSex = function () {
    return this.sex;
}
function Man () {
    this.sex = "nan";
}

Man.prototype = new Person();

var instance = new Man();
console.log(instance.getName());
console.log(instance.getSex());


