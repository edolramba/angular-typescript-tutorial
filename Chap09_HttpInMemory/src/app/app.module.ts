import { PersonData } from './resources/data/personData';
import { A08Component } from './components/A08.crud.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,
                    InMemoryWebApiModule.forRoot(PersonData)      // 작성한 테이터를 root에 올린다
                ],
  declarations: [ A08Component ],
  bootstrap:    [ A08Component ]
})
export class AppModule { }
