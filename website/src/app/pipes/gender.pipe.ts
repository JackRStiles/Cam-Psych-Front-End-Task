import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Gender'
})

export class GenderPipe implements PipeTransform {
  transform(value: string) {
    switch (value) {
      case 'M':
        return 'Male';
        break;
      case 'F':
        return 'Female';
        break;
      default: 
        return 'Other';
    }
  }
  
}