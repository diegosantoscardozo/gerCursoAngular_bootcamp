import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";


@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
        
    _courses: Course[] = [];
    _filtro!: string;
    filteredCourses: Course[] = [];

    constructor(private courseService: CourseService){

    }
    

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    set filtrar(filtroParam: string){
        this._filtro = filtroParam;  
        this.filteredCourses = this._courses.filter(
            (course : Course) => course.name.toLocaleLowerCase().indexOf(this._filtro.toLocaleLowerCase()) > -1);
    }

    get filtrar(){
        return this._filtro;
    }
}