import {Pipe, PipeTransform} from '@angular/core';
import { layoutPaths } from '../../pipes';

@Pipe({name: 'baProfilePicture'})
export class BaProfilePicturePipe implements PipeTransform {

  transform(input:string, ext = 'png'):string {
    return layoutPaths.images.profile + input + '.' + ext;
  }
}
