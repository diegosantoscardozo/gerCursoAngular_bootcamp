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

    constructor(private service: CourseService){

    }
    

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
        this.retrieveAll();
    }
    
    retrieveAll(): void{
        this.service.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;  // FOI COLOCADO P DENTRO DO 'NEXT' POIS É ASSINCRONO
            },
            error: err => console.log('Error: ', err) 
        })
    }

    deleteById(idParam:number): void{
       this.service.deleteById(idParam).subscribe({
           next: () => {
               console.log("Deleted with success");
               this.retrieveAll();
           },
           error: err => console.log('Error ao deletar id ',err)
        })
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