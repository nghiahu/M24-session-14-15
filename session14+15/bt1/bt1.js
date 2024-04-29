"use strict";
class Students1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(registerCourse) {
        this.enrolledCourses.push(registerCourse);
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        return new Course(title, this.name);
    }
    createLesson(title) {
        return new lesson(title);
    }
    createAsignment(asignment) {
        return asignment;
    }
    createAssesment(assesment) {
        return assesment;
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assesment = [];
    }
}
class lesson {
    constructor(title) {
        this.title = title;
        this.asignments = [];
    }
}
let instructor = new Instructor(1, "Quốc Hai");
let course1 = instructor.createCourse("Lập trình");
let lesson1 = instructor.createLesson("JavaScript");
let lesson2 = instructor.createLesson("TypeScript");
course1.lessons.push(lesson1, lesson2);
lesson1.asignments.push(instructor.createAsignment("ss1"));
course1.assesment.push(instructor.createAssesment("Hackathon"));
let student1 = new Students1(1, "Nam");
student1.enroll(course1);
console.log(student1);
console.log(course1);
