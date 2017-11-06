import { Injectable } from '@angular/core';
import { GeneralService } from './generalService';

@Injectable()
export class PoliciesService {

  constructor( private generalService: GeneralService) { }
  
  getByUserId(userId: string,callback) {
    this.generalService.get('http://www.mocky.io/v2/580891a4100000e8242b75c5').then((response) => {
        let res = response.json() 
        let policies = [];

        res.policies.forEach(element => {
          if (element.clientId === userId){
            policies.push(element);
          }
        });
        
        callback(policies);
    });
  }
}