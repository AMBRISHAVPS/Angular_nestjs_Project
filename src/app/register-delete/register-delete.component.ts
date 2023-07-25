import { Component, OnInit } from '@angular/core';
import { RegistersService } from '../registers.service';
import { Registeritems } from '../registers-items';
declare var window: any;
@Component({
  selector: 'app-register-delete',
  templateUrl: './register-delete.component.html',
  styleUrls: ['./register-delete.component.css'],
})
export class RegisterDeleteComponent implements OnInit {
  constructor(private registersservice: RegistersService) {}
  registers: Registeritems[] = [];
  deleteModel: any;
  itemToDelete: any = '';
  ngOnInit(): void {
    this.deleteModel = new window.bootstrap.Modal(
      document.getElementById('delete Model')
    );
    this.getall();
  }

  openDeletePopup(id: string) {
    this.itemToDelete = id;
    this.deleteModel.show();
  }

  getall() {
    this.registersservice.get().subscribe((data) => {
      this.registers = data;
    });
  }

  delete() {
    this.registersservice.delete(this.itemToDelete).subscribe(() => {
      this.registers = this.registers.filter(
        (_) => _._id !== this.itemToDelete
      );
      this.deleteModel.hide();
    });
  }
}
