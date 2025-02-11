import { Component, OnInit, signal } from '@angular/core';
import { Project } from '../../models/project';
import { CustomTileComponent } from '../../components/custom-tile/custom-tile.component';
import { ProjectsService } from './service/projects.service';

@Component({
  selector: 'app-projectspage',
  imports: [CustomTileComponent],
  templateUrl: './projectspage.component.html',
  styleUrl: './projectspage.component.css'
})
export class ProjectspageComponent implements OnInit{
  projects = signal<Project[]>([]);
  projectService:ProjectsService;

  constructor(projectService: ProjectsService)
  {
    this.projectService = projectService;
  }
  
  ngOnInit(){
    this.projects.set(this.projectService.getProjects())
  }

}
