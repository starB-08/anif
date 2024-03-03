import {count} from './stores'

/**
 * 
 * @param {HTMLElement} header 
 */
export function setClearHeader( header){
    let isTransPage;
    const unSubscribe = count.subscribe(function(value){
        isTransPage = value;
    })

    if(isTransPage){
        header?.classList?.add('clear');
    }else if(header?.classList?.contains('clear')){
        header?.classList?.remove('clear');
    }
    console.log(header.classList.contains('clear'));

}