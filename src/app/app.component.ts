import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RegistersService } from './registers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    private registersService: RegistersService
  ) {}

  title = 'Angularjs';
}
