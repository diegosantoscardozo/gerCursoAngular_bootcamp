import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { CourseModule } from './course/course-module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
       
  ],
  imports: [
    BrowserModule, 
    FormsModule,   
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([      
      {
        path:'', redirectTo: 'courses', pathMatch: 'full'
      }      
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
