 // app.router.ts
import { ProductActivateComponent } from './product05.active.component';
import { DescriptionComponent } from './childComponent/description.component';
import { SellerComponent } from './childComponent/seller.component';
import { ProductChildComponent } from './product04.childMain.component';
import { ProductArgsComponent } from './product03.args.component';
import { ProductDataComponent } from './product02.data.component';
import { ProductParamComponent } from './product01.param.component';
import { ProductDetailComponent } from './product.component';
import { HomeComponent } from './home.component';

// Activate 에 관련 서비스
import { LoginService } from './../service/Login.service';
import { LogoutService } from './../service/Logout.service';

import { CanActivate, RouterModule, Routes } from '@angular/router';

 const routes: Routes = [
            { path: '',          component: HomeComponent},
            { path: 'home',      component: HomeComponent},
            { path: 'product',   component: ProductDetailComponent},

            // 패스/: 임의의 이름 => 임의의 이름은 패스가 된다. 단 어떤 이름이 와도 된다는
            // 또한 이 이름이 변수명 역할도 한다.
            { path: 'productParam/:id',   component: ProductParamComponent},

            // 고정된 데이터를 전달
            { path: 'productData/:id',  component: ProductDataComponent,
                    data: [
                        {isProd: true, name: 'Hong', age: 20},
                        {isProd: false, name: 'IM', age: 30},
                    ]
            },

            // 주소줄에 붙여 넘기는데 이건 parameter로 넘긴다. 위는 패스로 넘겼음
            {path: 'productArgs/:num',    component: ProductArgsComponent},

            // <router-outlet> 안쪽에 다시 <router-outlet> 형태로 로드된 페이지에 
            // <router-outlet>이 있어서 그 로드된 <router-outlet> 에 표시 
            {path: 'productChild/:id',    component: ProductChildComponent,
                                // 이 children 에 들어오는 패스는 ProductChildComponent 에서 설정
                                children: [
                                    {path: '', component: DescriptionComponent},
                                    {path: 'seller', component: SellerComponent}
                                ]
            },

            // Guard : 지정한 페이지로 이동 가능하게 할까? -> CanActivate
            // 페이지에서 다른 페이지로 이동 가능하게 할까? -> DecanActivate
            // 서비스로 구현한다.
            {path: 'productActivate/:id', component: ProductActivateComponent,
                      canActivate: [LoginService],
                      canDeactivate: [LogoutService]
            }




 ]

 export const appRoutes = RouterModule.forRoot(routes);