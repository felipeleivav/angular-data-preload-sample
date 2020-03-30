import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParameterProvider {

  endpoint = 'https://api.dynamock.com:7443/6BXV5T2/angular-data-preload-sample';

  _parameters: string[];

  constructor(private http: HttpClient) { }

  searchParameters() {
    return this.http.get(this.endpoint).toPromise().then((response: any) => {
      this._parameters = response.parameters;
    });
  }

  get parameters(): string[] {
    return this._parameters;
  }

}