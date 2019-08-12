import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
/**----------------------------------------------------------------------------- */


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
