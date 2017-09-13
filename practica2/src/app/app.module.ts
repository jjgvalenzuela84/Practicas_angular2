import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './decorator/header/header.component';
import { FooterComponent} from './decorator/footer/footer.component';
import { Cp1Component} from './cuerpo/cp1/cp1.component';
import { Cp2Component} from './cuerpo/cp2/cp2.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent,
    Cp1Component,
    Cp2Component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
