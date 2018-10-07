import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { A01Component } from './components/A01.promise.component';
import { A02Component } from './components/A02.http.promise.component';
import { A03Component } from './components/A03.http.observable.component';
import { A04Component } from './components/A04.http.service.component';
import { A05Component } from './components/A05.jsonp.component';
import { A06Component } from './components/A06.jsonp.component';
import { A07Component } from './components/A07.profit.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule, FormsModule ],
  declarations: [ A01Component, A02Component, A03Component, A04Component, A05Component
    , A06Component, A07Component ],
  bootstrap:    [ A07Component ]
})
export class AppModule { }
