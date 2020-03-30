import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParameterProvider } from './parameters.provider';

export function parameterProviderFactory(provider: ParameterProvider) {
  return () => provider.searchParameters();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ParameterProvider,
    { provide: APP_INITIALIZER, useFactory: parameterProviderFactory, deps: [ParameterProvider], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
