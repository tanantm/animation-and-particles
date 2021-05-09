import { Injectable } from '@angular/core';
import setting from '../../config/style.setting.json';

@Injectable({
  providedIn: 'root'
})
export class GetjsonService {
  time = new Date();
  constructor() { }

  getJsonData() {
    return Object.entries(setting).find(x => x[0] === this.getValue());
  }

  getBackColor(){
    return Object.entries(setting).find(x => x[0] === `${this.getValue()}BackColor`)
  }

  getValue() {
    switch (this.time.getHours()) {
      // case 1:
      // case 2:
      // case 3:
      // case 4:
      //   return 'midnight';
      // case 5:
      // case 6:
      //   return 'dawn';
      // case 7:
      // case 8:
      // case 9:
      // case 10:
      //   return 'morning';
      // case 11:
      // case 12:
      //   return 'noon';
      // case 13:
      // case 14:
      // case 15:
      //   return 'afternoon';
      // case 16:
      // case 17:
      //   return 'evening';
      // case 18:
      // case 19:
      //   return 'sunset';
      // case 20:
      // case 21:
      // case 22:
      // case 23:
      // case 0:
      //   return 'night';
      default:
        return 'default';
    }
  }
}
