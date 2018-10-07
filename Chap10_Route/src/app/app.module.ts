import { ProductActivateComponent } from './components/product05.active.component';
import { SellerComponent } from './components/childComponent/seller.component';
import { DescriptionComponent } from './components/childComponent/description.component';
import { ProductChildComponent } from './components/product04.childMain.component';
import { ProductArgsComponent } from './components/product03.args.component';
import { ProductDataComponent } from './components/product02.data.component';
import { ProductParamComponent } from './components/product01.param.component';
import { ProductDetailComponent } from './components/product.component';
import { HomeComponent } from './components/home.component';
import { AppComponent }  from './components/app.component';

import { appRoutes } from './components/app.router';

import { LoginService } from './service/Login.service';
import { LogoutService } from './service/Logout.service';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// 1. 라우터 모듈 import 및 사용 파일 등록 (외부 파일로 뺀다)
// (문의) 직접 URL 입력을 못하게 막는 방법이 있는지? URL 에 뒷 주소 숨기기는 어떻게?
// 2. RouterModule.forRoot 에 참여하는 component는 declarations에도 등록
// 3. 해당 페이지가 로드될 위치를 appComponent에 <router-outlet>으로 등록
//    이 안쪽에 지정한 component 가 로드된다.
// 4. 링크를 [router-link] = "['pathName']" 형태로 걸어준다.

@NgModule({
  imports:      [ BrowserModule, FormsModule,
                // RouterModule.forRoot([
                //   { path: '',          component: HomeComponent},
                //   { path: 'home',      component: HomeComponent},
                //   { path: 'product',   component: ProductDetailComponent}
                // ])
                appRoutes
  ],
  declarations: [ AppComponent, HomeComponent, ProductDetailComponent, ProductParamComponent, ProductDataComponent, ProductArgsComponent
                 , ProductChildComponent, DescriptionComponent, SellerComponent, ProductActivateComponent, ],
  bootstrap:    [ AppComponent ],
  providers:    [ LoginService, LogoutService ]
})
export class AppModule { }
