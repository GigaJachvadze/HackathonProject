import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ThemeModule } from '../theme/theme.module';
import { lightTheme } from '../theme/light-theme';
import { darkTheme } from '../theme/dark-theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
