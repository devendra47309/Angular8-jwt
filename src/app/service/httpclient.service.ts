import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class Employee {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public salutation: string,
    public password: string,
    public dob: Date,
    public email: string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getEmployees() {
    return this.httpClient.get<Employee[]>("http://localhost:8080/employees");
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>(
      "http://localhost:8080/employees" + "/" + employee.id
    );
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>(
      "http://localhost:8080/employees",
      employee
    );
  }

  public editEmployee(employee) {
    return this.httpClient.put<Employee>(
      "http://localhost:8080/employees",
      employee
    );
  }
}
