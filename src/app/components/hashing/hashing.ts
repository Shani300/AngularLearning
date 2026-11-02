import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hashing',
  imports: [FormsModule],
  templateUrl: './hashing.html',
  styleUrl: './hashing.scss',
})
export class Hashing {
    hash=signal("choose")
    word=signal("")
    res:number=0
    atBash:Record<string,string>={
      'א':'ת',
      'ב':'ש',
      'ג':'ר',
      'ד':'ק',
      'ה':'צ',
      'ו':'פ',
      'ז':'ע',
      'ח':'ס',
      'ט':'נ',
      'י':'מ',
      'כ':'ל',
      'ל':'כ',
      'מ':'י',
      'נ':'ט',
      'ס':'ח',
      'ע':'ז',
      'פ':'ו',
      'צ':'ה',
      'ק':'ד',
      'ר':'ג',
      'ש':'ב',
      'ת':'א',

    }
    gimatriaDIct:Record<string,number>={
      'א':1,
      'ב':2,
      'ג':3,
      'ד':4,
      'ה':5,
      'ו':6,
      'ז':7,
      'ח':8,
      'ט':9,
      'י':10,
      'כ':20,
      'ל':30,
      'מ':40,
      'נ':50,
      'ס':60,
      'ע':70,
      'פ':80,
      'צ':90,
      'ק':100,
      'ר':200,
      'ש':300,
      'ת':400,
      'ך':500,
      'ם':600,
      'ן':700,
      'ף':800,
      'ץ':900,
    }

    solution=computed(()=>{
        switch(this.hash()){
          case "atbath": return this.makeAtBash();
          case "gim": return this.makeGimatria();
          case "choose": return this.word();
          default: return this.word();
        }
    })

    makeAtBash=(()=>{
        return this.word().split('').map(c=> this.atBash[c]).join('') 
    })

    makeGimatria=(()=>{
        this.word().split('').forEach(c=>this.res+= this.gimatriaDIct[c]) 
        return this.res
    })
  }