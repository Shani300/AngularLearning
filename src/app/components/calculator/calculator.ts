import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  firstNum=signal(0)
  secondNum=signal(0)
  choose=signal('+')

  solution=computed(()=>{
    switch(this.choose()){
      case '+': return this.firstNum()+this.secondNum();
      case '-': return this.firstNum()-this.secondNum();
      case '*': return this.firstNum()*this.secondNum();
      case '/': {if(this.secondNum()!=0) return this.firstNum()/this.secondNum() ;
                  else return NaN
      }
      default: return 0;
    }
  })
}
