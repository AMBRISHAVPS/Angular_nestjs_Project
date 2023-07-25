import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistersService } from '../registers.service';
import { Registeritems } from '../registers-items';
import { CreateOrUpdateRegisteritems } from '../create-or-update-register-items';

@Component({
  selector: 'app-registers-update',
  templateUrl: './registers-update.component.html',
  styleUrls: ['./registers-update.component.css'],
})
export class RegistersUpdateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private registersService: RegistersService,
    private router: Router
  ) {}

  itemId: string = '';

  registers: CreateOrUpdateRegisteritems = {
    Firstname: '',
    Lastname: '',
    Email: '',
    Password: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.itemId = param.get('id') ?? '';
      this.getbyid();
    });
  }
  getbyid() {
    this.registersService.getById(this.itemId).subscribe((data) => {
      this.registers.Firstname = data.Firstname;
      this.registers.Lastname = data.Lastname;
      this.registers.Email = data.Email;
      this.registers.Password = data.Password;
    });
  }

  update() {
    this.registersService.update(this.itemId, this.registers).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
