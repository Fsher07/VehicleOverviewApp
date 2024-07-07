import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carName',
})
export class CarNamePipe implements PipeTransform {
  transform(value: string): string {
    // const splitValue = value.split('##')
    const regex = /[^a-zA-Z0-9 ]/;
    const splitValue = value.split(regex);
    return splitValue[0].trim();
  }
}
