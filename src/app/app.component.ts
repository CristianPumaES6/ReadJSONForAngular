import { Component } from '@angular/core';
import data from '../assets/data/lol.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Read JSON in Angular! - Leer un archivo JSON en Angular';
  jsonData = data;
  stringJsonData = JSON.stringify(data);
}
