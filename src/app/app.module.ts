import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegistersComponent } from './registers-create/registers.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistersUpdateComponent } from './registers-update/registers-update.component';
import { RegisterDeleteComponent } from './register-delete/register-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistersComponent,
    RegistersUpdateComponent,
    RegisterDeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
