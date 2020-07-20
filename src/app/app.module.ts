import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// tslint:disable-next-line: import-spacing
import  {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { CrudService } from './shared/crud.service';
import {AngularFireDatabaseModule} from '@angular/fire/database';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule


  ],
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
