import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'listFilter'})
export class FilterPipe implements PipeTransform {

    transform(list: any[], filterText: string): any {
        return list ? list.filter(item => item.projectName.search(new RegExp(filterText, 'i')) > -1) : [];
    }
}