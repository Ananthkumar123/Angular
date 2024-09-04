import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PbindingComponent } from './components/pbinding/pbinding.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { SelcetedComponent } from './components/selceted/selceted.component';
import { ProductComponent } from './components/product/product.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { SInterpolationComponent } from './components/s-interpolation/s-interpolation.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';
import { TwowayDatabindingComponent } from './components/twoway-databinding/twoway-databinding.component';
import { TDFPRCComponent } from './components/tdfprc/tdfprc.component';
import { PipesComponent } from './components/pipes/pipes.component';
 
 
const routes: Routes = [
  { 
    path: "", //localhost:4200,
    redirectTo: 'home', //localhost:4200/home
    pathMatch: 'full'
    },
    {
      path:'home',
      component :HomeComponent
    },
    {
      path :'pbinding',
      component :PbindingComponent,
    },
     {
      path :'parent',
      component :ParentComponent
     },
     {
      path :'child',
      component :ChildComponent
     },
     {
      path :'courses',
      component :CoursesComponent
     },
     {
      path :'coursedetails',
      component :CoursedetailsComponent
     },
     {
      path :'selected/:name',
      component : SelcetedComponent
     },
     {
      path:'tdfprc',
      component:TDFPRCComponent
     },
     
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'tdf',
        component :TdfComponent
      },
      {
        path:'reactive',
        component:ReactiveComponent
      },
      {
        path:'s-interpolation',
        component: SInterpolationComponent

      },
      {
        path:'event',
        component:EventbindingComponent
       },
       {
        path:'style',
        component:StylebindingComponent
       },
       {
        path:'twoway',
        component:TwowayDatabindingComponent
       },
       {
        path:'pipes',
        component:PipesComponent
       },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
     {
      path :'**',
      component :PagenotfoundComponent
     }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 