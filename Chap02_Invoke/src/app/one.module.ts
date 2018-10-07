// app.module.ts

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// View 에 올라올 Component 의 경로를 하나씩 다 설정해야 한다.
// 이 파일 기준으로 from 경로를 설정한다
// import {ClassName} from '파일경로';
import { OneComponent } from './one.component';
import { A01Component } from './components/A01.Invoke';
import { A02Component } from './components/A02.Invokes';
import { A03Component } from './components/A03.Invokes';

@NgModule({
    imports:      [ BrowserModule, FormsModule ], //기본 지시자 등이 있는 모듈 
    declarations: [ OneComponent, A01Component ], //화면에 참가할 작성 모듈
    bootstrap:    [ OneComponent]  //HTML 에 올라올 모듈
})
export class OneModule {  }