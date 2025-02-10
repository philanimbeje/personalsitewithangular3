import { Component, signal } from '@angular/core';
import { Project } from '../../models/project';
import { CustomTileComponent } from '../../components/custom-tile/custom-tile.component';

@Component({
  selector: 'app-projectspage',
  imports: [CustomTileComponent],
  templateUrl: './projectspage.component.html',
  styleUrl: './projectspage.component.css'
})
export class ProjectspageComponent {
  projects = signal<Project[]>([
    {
      "id":1,
      "project": "Simple Portfolio Website",
      "type": "software",
      "tools": [ "Angular v19", " Typescript", " p5.js", " Angular Material", " Tailwind", " Font-Awesome", " tilt.js"],
      "deployment": {
        "accessUrl": "http://www.philanimbeje.co.za",
        "hostPlatform": "Github Pges"
      },
      "projectUrl": "https://github.com/philanimbeje/personalsitewithangular3",
      "description": "A simple portfolio project",
      "imageUrl": "https://wallpaperaccess.com/full/2272665.jpg",
      "symbol": "fa-user"
    }
  ]);

}
