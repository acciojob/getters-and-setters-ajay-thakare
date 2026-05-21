//complete this code
constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set age(n) {
    this._age = n;
  }

class Student extends Person {

  study(){
    console.log(`${this.name} is studying`)
  }
}

class Teacher extends Person {

   teach(){
    console.log(`${this.name} is teaching`)
  }
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
