export class Employee
{
  /*
  public name:string;
  public age:number;

  constructor(name, age)
  {
  this.name = name;
  this.age = age;
}
*/

/**
* constructor
*
*/
constructor(
  public name:string,
  public age:number,
  public position:string,
  public salaried:boolean
){}

}
