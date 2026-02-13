import React from "react";

/* Base Class */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name}.`;
  }
}
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

function App() {
  const person = new Person("Alex Johnson", 30);
  const student = new Student("Emma Watson", 20, "Computer Science");
  const teacher = new Teacher("Dr. James Wilson", 45, "Mathematics");

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      <div className="card">
        <h2>Alex Johnson (Person)</h2>
        <p><strong>Age:</strong> {person.age}</p>
        <em>{person.introduce()}</em>
      </div>

      <div className="card">
        <h2>Emma Watson (Student)</h2>
        <p><strong>Age:</strong> {student.age}</p>
        <em>{student.introduce()}</em>
        <p><strong>Major:</strong> {student.major}</p>
      </div>

      <div className="card">
        <h2>Dr. James Wilson (Teacher)</h2>
        <p><strong>Age:</strong> {teacher.age}</p>
        <em>{teacher.introduce()}</em>
        <p><strong>Teaching:</strong> {teacher.subject}</p>
      </div>
    </div>
  );
}

export default App;
