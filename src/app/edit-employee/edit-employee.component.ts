import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeService } from '../employee/employee.service';
import { Employee, HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee = null;
  date = new Date();

  constructor(private route: ActivatedRoute, private _empService: EmployeeService, private _httpClientService: HttpClientService, private _router:Router) { }


  ngOnInit() {
    this.employee = this._empService.employee;
    this.date = new Date(this.employee.dob);
  }

  saveEmployee() : void {
    console.log(this.employee);
    this._httpClientService.editEmployee(this.employee).subscribe(data => {
      alert("Employee edited successfully.");
      this._router.navigate([''])
    });
  }
}
