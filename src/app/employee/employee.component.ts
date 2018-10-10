import { Component } from '@angular/core';
import { Employee } from './employee';
/**
* decorator
*
*/
@Component({
  selector: 'employee-tag',
  templateUrl: './employee.component.html'
})
/**
* EmployeeComponent
*
*/
export class EmployeeComponent
{
  public title = 'Component employees';
  public employee:Employee;
  public workers:Array<Employee>;
  public employee_external:boolean;
  public color:string;
  /**
  * constructor
  *
  */
  constructor()
  {
    this.employee = new Employee('Jonny Alexander', 28, 'Ing. sistemas', true);
    this.workers = [
      new Employee('Juan David Lopez', 30, 'Ing. sistemas', false),
      new Employee('Daniela Lopez', 56, 'Ing. industrial', true),
      new Employee('Jonathan Alexis', 26, 'Ing. sistemas', false)
    ];
    this.employee_external = false;
    this.color = '#285D91';
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit()
  {
    console.log(this.employee);
    console.log(this.workers);
  }
  /**
  * changeExternal
  *
  */
  changeExternal(param){
    this.employee_external = param;
  }
}
