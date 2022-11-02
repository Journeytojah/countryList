import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
