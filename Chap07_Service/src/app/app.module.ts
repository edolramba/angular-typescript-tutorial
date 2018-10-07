import { A05Component } from './components/A05.promise.component';
import { A04Component } from './components/A04.mock.component';
import { A03Component } from './components/A03.jumsu.component';
import { A02Component } from './components/A02.jumsu.component';
import { A01Component } from './components/A01.service.component';

import { HelloService } from './service/A01.hello.service';
import { TwoVO } from './service/A02.twoVO.service';
import { TwoJumsu } from './service/A02.twoJumsu';
import { ThreeJumsu} from './service/A03.three.Jumsu';
import { MockService} from './service/A04.mock.service';
import { PromiseService } from './service/A05.promise.service';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ A01Component, A02Component, A03Component, A04Component, A05Component ],
  bootstrap:    [ A05Component ],
  providers: [
    HelloService, TwoJumsu, TwoVO, ThreeJumsu, MockService, PromiseService
    // {{ provide: HelloService, useClass: ...}}
  ]
})
export class AppModule { }
