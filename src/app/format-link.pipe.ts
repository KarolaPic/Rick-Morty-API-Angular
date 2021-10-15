import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLink'
})
export class FormatLinkPipe implements PipeTransform {

  transform(value: String): String {
    return value.replace(' ', '-').toLowerCase();
}

}

