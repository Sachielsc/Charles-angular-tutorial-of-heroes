import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-page/hero-detail/hero-detail.component';
import { HeroPageComponent } from './hero-page/hero-page.component'
// import { HeroService } from './hero/hero.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroPageComponent
  ],
  bootstrap:    [ AppComponent ],
  // providers: [HeroService]
})
export class AppModule { }
