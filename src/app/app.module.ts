import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoxyComponent } from './boxy/boxy.component';
import { ShrinkOutComponent } from './shrink-out/shrink-out.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrintComponent } from './print/print.component';
import { TypeStatusComponent } from './type-status/type-status.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxyComponent,
    ShrinkOutComponent,
    FooterComponent,
    NavbarComponent,
    PrintComponent,
    TypeStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
