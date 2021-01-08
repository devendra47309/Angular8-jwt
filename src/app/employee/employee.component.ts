import { Component, OnInit } from "@angular/core";
import { HttpClientService, Employee } from "../service/httpclient.service";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  displayedColumns: string[] = ["salutation", "firstName", "lastName","email","dob", "delete","edit"];

  constructor(private httpClientService: HttpClientService,private _empService:EmployeeService) {}

  ngOnInit() {
    this.httpClientService
      .getEmployees()
      .subscribe(response => this.handleSuccessfulResponse(response));

      console.log(this.employees);
      
  }

  handleSuccessfulResponse(response) {
    this.employees = response;
  }

  deleteEmployee(employee: Employee): void {
    this.httpClientService.deleteEmployee(employee).subscribe(data => {
      this.employees = this.employees.filter(u => u !== employee);
    });
  }
  editEmployee(employee: Employee): void {
    this._empService.employee = employee;
  }
}
