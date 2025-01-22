import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  itemsPerPage = 5;
  employees: any[] = [];
  itemsPerPageSelect = [5, 10, 15, 20, 25];
  currentPage = 1;
  totalPage!: number;

  constructor(private employeeService: EmployeeService) {}
  
  ngOnInit(): void {
    this.employees = this.employeeService.getAllEmployees();
    this.calculateTotalPages();
  }

  calculateTotalPages() {
    this.totalPage = Math.ceil(this.employees.length / this.itemsPerPage);
  }

  onItemsPerPageChange() {
    this.currentPage = 1;
    this.calculateTotalPages();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPage }, (_, i) => i + 1);
  }
}
