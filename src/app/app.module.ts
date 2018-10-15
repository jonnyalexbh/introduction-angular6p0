import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { ConverterPipe } from './pipes/converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    EmployeeComponent,
    HomeComponent,
    ContactComponent,
    ConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
