import { Component } from '@angular/core';
/**
* decorator
*
*/
@Component({
  selector: 'fruit',
  templateUrl: './fruit.component.html'
})
/**
* FruitComponent
*
*/
export class FruitComponent
{
  public name_component = 'Fruit Component';
  public list_fruit = 'Apple, banana, mango and pear';

  public name:string;
  public age:number;
  public adult;
  public jobs:Array<string> = ['Carpenter', 'bricklayer', 'plumber'];
  public anyone:any;
  /**
  * constructor
  *
  */
  constructor()
  {
    this.name = 'jonnyalexbh';
    this.age = 28;
    this.adult = true;
    this.anyone = 'Yes';
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit()
  {
    this.changeName(this.name);
    this.changeAge(this.age);
  }
  /**
  * changeName - changeAge
  *
  */
  changeName(name) {
    console.log("My name is " + name);
  }

  changeAge(age) {
    console.log("My age is " + age);
  }
}
