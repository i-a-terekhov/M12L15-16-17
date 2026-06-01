import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {

  transform(value: string, wordParts: string[]): string {
    let result: string = value.toLowerCase();  /* нормализуем строку, чтобы сделать последующую проверку проще */

    wordParts.forEach((item: string): void => {
      result = result.replace(new RegExp('[а-я]*' + item + '[а-я]*', 'g'), (match: string) => {
        return match.toUpperCase();
      });
    });
    result = result.charAt(0).toUpperCase() + result.slice(1);  /* возвращаем предложению заглавную букву */
    return result;
  }

}
