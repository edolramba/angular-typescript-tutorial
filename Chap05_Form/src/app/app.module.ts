import { A05Component } from './components/A05_FormGroupValidation';
import { A04Component } from './components/A04_FormBuilter';
import { A03Component } from './components/A03_FormArray';
import { A02Component } from './components/A02_FormGroup';
import { A01Component } from './components/A01_NgForm';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Form 요소에 직접 기술하여 값을 획득하기 위한 모듈 => FormsModule
// Form 객체를 생성하여 값을 획득하기 위한 모듈 => ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ A01Component, A02Component, A03Component, A04Component, A05Component ],
  bootstrap:    [ A05Component ]
})
export class AppModule { }
