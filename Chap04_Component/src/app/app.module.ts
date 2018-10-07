import { A10Component, A10One } from './components/A10.host.component';
import { A09Component, A09One } from './components/A09.life.component';
import { A08Component, A08One } from './components/A08.projection.component';
import { A07Component, A07One } from './components/A07.viewChildren.component';
import { A06Component, A06One } from './components/A06.viewChild.component';
import { A05Component, A05One, A05TwoComponent } from './components/A05.inOutput.component';
import { A03Component, A03One } from './components/A03.inputs.component';
import { A04Component, A04One } from './components/A04.output.component';
import { A01TwoComponent } from './components/A01.grand.component';
import { A01OneComponent } from './components/A01.child.component';
import { A01Component } from './components/A01.nested.component';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  // 독립적으로 view에 참여하거나, 어디에 속해서 View에 
  // 참여하거나 Vview 에 참여하면 참여하는 Component 는 
  // 모두 declarations 선언해야 한다.
  declarations: [ A01Component, A01OneComponent, A01TwoComponent, A03Component, A03One, A04Component, A04One, A05Component, A05One, A05TwoComponent, A06Component, A06One, A07Component, A07One, A08Component, A08One, A09Component, A09One, A10Component, A10One],
  bootstrap:    [ A10Component ]
})
export class AppModule { }
