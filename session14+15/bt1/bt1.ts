class Students1{
    id:number;
    name:string;
    enrolledCourses:Course[];
    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
        this.enrolledCourses = []
    }
    enroll(registerCourse:Course){
        this.enrolledCourses.push(registerCourse)
    }
}
class Instructor{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id = id
        this.name = name
    }
    createCourse(title:string){
        return new Course(title,this.name)
    }
    createLesson(title:string){
        return new lesson(title)
    }
    createAsignment(asignment:string){
        return asignment
    }
    createAssesment(assesment:string){
        return assesment
    }
}
class Course {
    title:string;
    instructor:string;
    lessons :lesson[];
    assesment:string[];
    constructor(title:string,instructor:string){
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assesment = []
    }
}
class lesson {
    title:string;
    asignments:string[]
    constructor(title:string){
        this.title = title
        this.asignments = []
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