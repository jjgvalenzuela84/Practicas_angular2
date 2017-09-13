import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './decorator/header/header.component';
import { FooterComponent} from './decorator/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
