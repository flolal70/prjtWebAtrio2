import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
