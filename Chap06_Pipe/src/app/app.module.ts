import { A04Component } from './components/A04.custom.component';
import { A03Component } from './components/A03.pipe.component'
import { A02Component } from './components/A02.pipe.component';
import { A01Component } from './components/A01.pipe.component';

import { UpLowClass, ReplaceClass, AbbrClass } from './pipe/custom.pipe';
import { LimitToClass, JumsuClass, OrderByClass, SearchClass } from './pipe/list.pipe';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DecimalPipe, PercentPipe, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ A01Component, A02Component, A03Component, A04Component, UpLowClass, ReplaceClass, AbbrClass, LimitToClass, JumsuClass, OrderByClass, SearchClass ],
  bootstrap:    [ A04Component ],

  // 예제 2번에서 기술할 파이프를 여기에 기술()
  // declarations 에 참여한 컴퍼넌트는 모두 주입만 받아 사용 가능.
  providers:    [ DecimalPipe, PercentPipe, SlicePipe, UpLowClass, ReplaceClass, AbbrClass, LimitToClass, JumsuClass, OrderByClass, SearchClass ]
})
export class AppModule { }
