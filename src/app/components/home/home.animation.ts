import { GetjsonService } from './../../services/get-json-data/get-json.service';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

export module HomeAnimation {

  export const statusChange = trigger('statusChange', [
    transition('* <=> loop-state', [
      animate('120s ease-in-out', keyframes(
        setStyle()
      ),
      )])
  ]);

  function getStyle(getjsonService: GetjsonService) {
    return getjsonService.getJsonData()?.[1];
  }

  function setStyle() {
    // jsonファイルの指定したスタイル設定を返す
    const styleList: any = [];
    const target = getStyle(new GetjsonService);

    if (target) {
      [...Object.values(target), ...Object.values(target).reverse()].forEach(item => {
        styleList.push(style(item));
      });
    }

    return styleList;
  }
}



