import { Injectable } from '@angular/core';
import { GeneralService } from './generalService';

const URL = 'http://www.mocky.io/v2/5808862710000087232b75ac';

@Injectable()
export class UsersService {

  constructor( private generalService: GeneralService) { }
  
  getAll(callback) {
    this.generalService.get(URL).then((response) => {
        callback(response.json());
    });
  }

  getById(id: string, callback){
    this.generalService.get(URL).then((response) => {
        let res  = response.json();
        
        callback(res.clients.find(x => { return x.id === id }));
    });
  }
}