import { A09Component, A09OneDirective } from './components/A09.importPosition';
import { A08Component, A08One } from './components/A08.templateRef';
import { A07Component } from './components/A07.templateRef'
import { A06Component, A06OneDirective } from './components/A06.renderer';
import { A05Component, A05OneDirective } from './components/A05.renderer';
import { A04Component, A04OneDirective, A04TwoDirective } from './components/A04.hostListener';
import { A03Component, A03OneDirective } from './components/A03_output';
import { A02Component } from './components/A02.input';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { A01Component }  from './components/A01.directive';
import { A01OneDirective, A01TwoDirective, A01ThreeDirective }  from './directive/A01.event.directive';
import { A02OneDirective, A02TwoDirective } from './directive/A02.input.directive';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ A01Component, A01OneDirective, A01TwoDirective, A01ThreeDirective, 
            A02Component, A02OneDirective, A02TwoDirective, 
            A03OneDirective, A03Component,
            A04Component, A04OneDirective, A04TwoDirective,
            A05Component, A05OneDirective,
            A06Component, A06OneDirective,
            A07Component,
            A08Component, A08One,
            A09Component, A09OneDirective
          ],
  bootstrap:    [ A09Component ]
})
export class AppModule { }
