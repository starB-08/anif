import {count} from './stores'

/**
 * 
 * @param {HTMLElement} header 
 * @param {Boolean} notTrans
 */
export function setClearHeader(header, notTrans = true){
    let isTransPage;
    const unSubscribe = count.subscribe(function(value){
        isTransPage = value;
    })

    if(isTransPage && window.innerWidth > 720 && notTrans){
        header?.classList?.add('clear');
    }else if(header?.classList?.contains('clear')){
        header?.classList?.remove('clear');
    }

}
/**
 * 
 * @param {HTMLElement} sidebar 
 */
export function toggleSidebar(sidebar){
    sidebar.classList.toggle('hide');
    document.querySelector('#sidePannelbtn')?.classList.toggle('hide');
}