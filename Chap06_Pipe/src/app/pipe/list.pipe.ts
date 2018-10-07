// list.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
// LimitTo => 배열에서 지정한 수만큼만 가져다가 표시

@Pipe({
    name: 'limitTo'
})

export class LimitToClass implements PipeTransform{

    transform(data: Array<any>, limit: number){
        return data.filter((item, index) => {
            if(index < limit){
                return item;
            }
        })
    }
}

@Pipe({
    name: 'jumsu'
})
export class JumsuClass implements PipeTransform{
    transform(data: Array<any>, field: string, min=0, max=1){
        let keyName: string[];

        if(!field){
            keyName = Object.keys(data[0]); //id, name, kor, eng 가 배열에 들어온다.
        }

        return data.filter( (item, index) => { 
            if(field){
                if(item[field] >= min && item[field] <= max){
                    return item;
                }
            }else{
                for(let i = 0; i < keyName.length; i++){
                    let key: string = keyName[i];
                    if(item[key] >= min && item[key] <= max){
                        return item;
                    }
                }
            }
        })
    }
}

@Pipe({
    name: 'orderBy'
})
export class OrderByClass implements PipeTransform{
    transform(data: Array<any>, field: string, sortType: string = 'asc'){
        if(!field){
            let key = Object.keys(data[0]) // id, name, kor, eng
            field = key[0];                // id
        }

        if(sortType === 'asc'){
            data.sort( (x,y) => {
                if(x[field] > y[field]) return -1
                else if(x[field] < y[field]) return 1
                else return 0;
            })
        }else if(sortType === 'desc'){
            data.sort( (x,y) => {
                if(x[field] > y[field]) return 1
                else if(x[field] < y[field]) return -1
                else return 0;
            })
        }

        return data;
    }
}

// 지정한 필드에 지정한 값이 있으면 출력
@Pipe({
    name : 'search'
})
export class SearchClass implements PipeTransform{
    transform(data: Array<any>, searchValue: string, field: string, ignore: boolean = false){
        // 검색할 값이 없는 경우 모든 자료를 출력
        if(!searchValue) return data;

        if(!field){
            let keys = Object.keys(data[0]) //id, name...
            field = keys[0];
        }

        if(ignore){
            return data.filter( (item, index) => {
                if(item[field].toString().toLowerCase().indexOf(searchValue.toLowerCase()) != -1){
                    return item;
                }
            })
        }else{
            return data.filter( (item, index) => {
                if(item[field].toString().indexOf(searchValue) != -1){
                    return item;
                }
            })
        }
        
    }
}