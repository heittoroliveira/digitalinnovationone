import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'  
})

export class ReplacePipe implements PipeTransform {
    // primiero parametro e o valor passado na view
    transform(value: string, char: string, valueToReplace:string){
        return value.replace(char, valueToReplace);
    }
}