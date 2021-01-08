import { Injectable } from '@angular/core';
import { Employee } from '../service/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: Employee=null;

  constructor() { }

  
}
