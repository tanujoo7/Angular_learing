import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    'name':'replacePipe'
})
export class ReplacePipe implements PipeTransform{
    transform(value:any,limit:number){
        if(value.length >limit ){
            return value.substr(0,limit) + "subString working"
        }
        return value
    }
}

@Pipe({
    'name':'filterPipe',
})
export class FilterPipe implements PipeTransform{
    transform(value:any,filterString:string,propName:string):any{
            if(value.length === 0){
                return value;
            }
            const holdArrayValue=[];
            for(const item of value){
                if(item[propName] === filterString){
                        holdArrayValue.push(item)
                }    
            }
            return holdArrayValue;
    }
}