import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SInterpolationComponent } from './components/s-interpolation/s-interpolation.component';
import { PbindingComponent } from './components/pbinding/pbinding.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { TwowayDatabindingComponent } from './components/twoway-databinding/twoway-databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';
 
import { IfComponent } from './directives/if/if.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SelcetedComponent } from './components/selceted/selceted.component';
import{ HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { TdfComponent } from './components/tdf/tdf.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TDFPRCComponent } from './components/tdfprc/tdfprc.component';
import { CHighlightDirective } from './directive/c-highlight.directive';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { CoursesService } from './services/courses.service';
import { PrivacyInterceptor } from './privacy.interceptor';
import { PipesComponent } from './components/pipes/pipes.component';
 
 
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    SInterpolationComponent,
    PbindingComponent,
    EventbindingComponent,
    TwowayDatabindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    
    IfComponent,
    ParentComponent,
    ChildComponent,
    CoursesComponent,
    CoursedetailsComponent,
    PagenotfoundComponent,
    SelcetedComponent,
    ProductComponent,
    TdfComponent,
    ReactiveComponent,
    TDFPRCComponent,
    CHighlightDirective,
    ViewchildComponent,
    PipesComponent,
    
     
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule, 
     
    
  ],
  providers: [CoursesService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:PrivacyInterceptor,
      multi:true
    },
  ],
  
  bootstrap: [AppComponent]


})
export class AppModule { }
