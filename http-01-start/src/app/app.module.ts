import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterseptorService } from './auth-interceptor.service';
import { LoggingServiceInterceptor } from './logging-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterseptorService,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoggingServiceInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
