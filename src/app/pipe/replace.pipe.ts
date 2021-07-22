import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform{
    
    transform(value: string, char: string, valueToReplace: string) {
        //throw new Error("Method not implemented.");
        return value.replace(char, valueToReplace);
    }

}