import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { Ngswitch2Component } from './ngswitch2/ngswitch2.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustdirDirective } from './custdir.directive';
import { Ngclass2Component } from './ngclass2/ngclass2.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { Ass3Component } from './ass3/ass3.component';
import { SimpletemplateComponent } from './simpletemplate/simpletemplate.component';
import { StudentformComponent } from './studentform/studentform.component';
import { Studentform2Component } from './studentform2/studentform2.component';
import { Practice1Component } from './practice1/practice1.component';
import { Simpletemplate02Component } from './simpletemplate02/simpletemplate02.component';
import { Practice2Component } from './practice2/practice2.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BookappoinmentComponent } from './bookappoinment/bookappoinment.component';
import {HttpClientModule} from '@angular/common/http';
import { UserdemoComponent } from './userdemo/userdemo.component';
import { PasswComponent } from './passw/passw.component';
import { Custdir2Directive } from './custdir-2.directive';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { DigitcountPipe } from './pipes/digitcount.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    NgforComponent, 
    NgswitchComponent,
    Ngswitch2Component,
    NgstyleComponent,
    NgclassComponent,
    CustdirDirective,
    Ngclass2Component,
    ChildComponent,
    Child2Component,
    LifecyclehooksComponent,
    Ass3Component,
    SimpletemplateComponent,
    StudentformComponent,
    Studentform2Component,
    Practice1Component,
    Simpletemplate02Component,
    Practice2Component,
    ReactiveformComponent,
    BookappoinmentComponent,
    UserdemoComponent,
    PasswComponent,
    Custdir2Directive,
    PipedemoComponent,
    DigitcountPipe,
    FilterPipe,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
