import { Component, OnInit } from '@angular/core';
import { RegistersService } from '../registers.service';
import { Registeritems } from '../registers-items';
import { Router } from '@angular/router';
import { CreateOrUpdateRegisteritems } from '../create-or-update-register-items';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css'],
})
export class RegistersComponent implements OnInit {
  constructor(
    private registersservice: RegistersService,
    private router: Router
  ) {}
  registers: CreateOrUpdateRegisteritems = {
    Firstname: '',
    Lastname: '',
    Email: '',
    Password: '',
  };

  ngOnInit(): void {}
  create() {
    this.registersservice.create(this.registers).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
