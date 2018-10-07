import { A09Component } from './components/A09.weather.component';
import { A08Component } from './components/A08.weather.component';
import { A07Component } from './components/A07.observable.component';
import { A06Component } from './components/A06.ngIf.component';
import { A05Component } from './components/A05.ngModel.component';
import { A04Component } from './components/A04.binding.component'
import { A03Component } from './components/A03.binding.component';
import { A02Component } from './components/A02.expression.component';
import { A01Component } from './components/A01.template.component';
import { AppComponent }  from './app.component';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, A01Component, A02Component, A03Component, A04Component, A05Component, A06Component, A07Component, A08Component,A09Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
