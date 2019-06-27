import *as ActionTypes from './Type';
export function register(){
    return function(dispatch){
        dispatch({
            type:"REGISTER"
        });
    }
}