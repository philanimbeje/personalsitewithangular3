import { Routes } from '@angular/router';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { ProjectspageComponent } from '../pages/projectspage/projectspage.component';
import { DownloadspageComponent } from '../pages/downloadspage/downloadspage.component';

export const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        component:HomepageComponent
    },
    {
        path:"projects",
        component:ProjectspageComponent
    },
    {
        path:"downloads",
        component:DownloadspageComponent
    }
];
