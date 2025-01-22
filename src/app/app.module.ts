import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { PaginationPipe } from './pagination.pipe';
import { SalaryPipe } from './salary.pipe';

@NgModule({
  declarations: [AppComponent, PaginationPipe, SalaryPipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
