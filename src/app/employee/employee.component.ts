import { Component } from '@angular/core';
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
  public title = 'Title of the component employee';
}
