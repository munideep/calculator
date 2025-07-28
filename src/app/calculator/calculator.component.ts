import { Component } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
buttonLayout = [
  7, 8, 9, '/',
  4, 5, 6, '*',
  1, 2, 3, '-',
  0, '.', '=', '+'
];
operators=['+','-','*','/']
result=''
inputNum : any=''
displayInput=''
count=0
onButtonClick(btn: any){
this.inputNum+=btn
this.displayInput=this.inputNum
//this.currentOperator=btn;
// if(this.currentOperator ==='+' || this.currentOperator ==='/' || this.currentOperator ==='-' || this.currentOperator ==='*' ){

// }
const lastChar: string = this.inputNum.slice(-1);
const secondLastChar: string = this.inputNum.slice(-2, -1);
if (
  this.operators.includes(lastChar) &&
  this.operators.includes(secondLastChar)
) {
 return alert("Please clear and calculate again");
}
if(btn==='='){
  this.result=eval(this.inputNum.substr(0,[this.inputNum.length-1]))
  console.log(this.result);
  this.inputNum=this.result
}
}
clearValues(){
  this.inputNum=''
  this.result=''
  this.displayInput=''
}
}
