import *as ActionTypes from './Type';
export function login(){
    return function(dispatch){
        dispatch({
            type:"LOGIN"
        });
    }
}




