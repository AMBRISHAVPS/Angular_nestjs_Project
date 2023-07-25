import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistersComponent } from './registers-create/registers.component';
import { RegistersUpdateComponent } from './registers-update/registers-update.component';
import { RegisterDeleteComponent } from './register-delete/register-delete.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterDeleteComponent,
  },
  {
    path: 'create-registers',
    component: RegistersComponent,
  },
  {
    path: 'edit-registers/:id',
    component: RegistersUpdateComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
