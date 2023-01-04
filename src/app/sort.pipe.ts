import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  // My Code
  // transform(value: any): any {
  //   return value.sort((a, b) => a.name.localeCompare(b.name))
  // };

  // Solution Code
  transform(value: any, propName: string) {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      };
    });
  };

};
