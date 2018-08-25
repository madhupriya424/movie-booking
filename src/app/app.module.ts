import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatListModule} from '@angular/material/list';

const appRoutes: Routes = [
  { 
    path: 'home', 
    component: LandingPageComponent 
  },  
  { 
    path: 'home/:city',
    component: CityComponent
  },
  { path: '**', 
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    PageNotFoundComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    HttpClientModule,
    HttpModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes 
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
