import { Component, OnInit } from '@angular/core';
import { ParameterProvider } from './parameters.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  parameters: string[];

  constructor(private parameterProvider: ParameterProvider) { }

  ngOnInit() {
    this.parameters = this.parameterProvider.parameters;
  }

}
