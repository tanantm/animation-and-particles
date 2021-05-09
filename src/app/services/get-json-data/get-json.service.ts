import { Injectable } from '@angular/core';
import setting from '../../config/style.setting.json';

@Injectable({
  providedIn: 'root'
})
export class GetjsonService {

  constructor() { }

  getJsonData() {
    return Object.entries(setting).find(x => x[0] === this.getValue());
  }

  getBackColor() {
    return Object.entries(setting).find(x => x[0] === `${this.getValue()}BackColor`)
  }

  getValue() {
    return 'default';
  }
}
