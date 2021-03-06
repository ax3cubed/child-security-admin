import {Pipe, PipeTransform} from '@angular/core';
import {layoutPaths} from '../../pipes';

@Pipe({name: 'baAppPicture'})
export class BaAppPicturePipe implements PipeTransform {

  transform(input:string):string {
    return layoutPaths.images.root + input;
  }
}
