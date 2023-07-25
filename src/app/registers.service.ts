import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registeritems } from './registers-items';
import { CreateOrUpdateRegisteritems } from './create-or-update-register-items';
@Injectable({
  providedIn: 'root',
})
export class RegistersService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Registeritems[]>('http://localhost:3000/registration');
  }

  create(registercreate: CreateOrUpdateRegisteritems) {
    return this.http.post('http://localhost:3000/registration', registercreate);
  }

  getById(id: string) {
    return this.http.get<Registeritems>(
      `http://localhost:3000/registration/${id}`
    );
  }

  update(id: string, registeritems: CreateOrUpdateRegisteritems) {
    return this.http.put(
      `http://localhost:3000/registration/${id}`,
      registeritems
    );
  }

  delete(id: string) {
    return this.http.delete(`http://localhost:3000/registration/${id}`);
  }
}
