import { Component, OnInit } from "@angular/core";
import { HttpClientService, Employee } from "../service/httpclient.service";
import { Router } from '@angular/router';
import { MatDatepickerInputEvent } from "@angular/material";

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"]
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = new Employee(null,"", "", "", "", null, "");
  minStartDate = new Date("1900-01-01");
  maxStartDate = new Date();

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit() { }
  onDateChange(evt: MatDatepickerInputEvent<Date>) {
    this.employee.dob = evt.value;
  }
  createEmployee(): void {
    console.log(this.employee);
    this.httpClientService.createEmployee(this.employee).subscribe(data => {
      alert("Employee created successfully.");
      this.router.navigate([''])
    });
  }
}
