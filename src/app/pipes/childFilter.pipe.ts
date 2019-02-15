import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'childFilter'
})
export class ChildFilterPipe implements PipeTransform {

  transform(children: any[], args?: any): any {
    if (args === 0) {
      args = 1;
    }
   
    else {
      return children.filter(function (el: any) {
        return el.deleted == args;
      })
    }
      console.log(children);
    return children;
  }

}