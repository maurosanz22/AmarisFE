import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GeneralService {

  constructor(private http: Http) { }
  private errorHandler(error: Response) {
    if (error.status === 401) {
      location.pathname = '';
    }
    return Observable.throw(error || 'Server Error').toPromise();
  }
  public get(api: string): Promise<any> {
    let headers = new Headers({
      'Accept': 'application/json',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    });
    return this.http.get(api, { headers: headers, body: '' })
      .toPromise()
      .catch(this.errorHandler)
  }
}