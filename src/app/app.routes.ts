import { Routes } from '@angular/router';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { ProjectspageComponent } from '../pages/projectspage/projectspage.component';

export const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        component:HomepageComponent
    },
    {
        path:"projects",
        component:ProjectspageComponent
    }
];
