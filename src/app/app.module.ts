import { rootRouterConfig } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
RouterModule.forRoot(rootRouterConfig)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
