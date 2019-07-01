import * as ActionTypes from '../Action/Type';
import browserhistory from '../Utils/browserHistory';
    const initialState={  
        firstname:'',
        lastname:'',
        username:'',
        password:''
      };
      export default(state=initialState,action)=>{
        switch(action.type){
            case  ActionTypes.REGISTER:{
                browserhistory.push("/Login");
                return{...state}
                
                        break;
            }
                       
                    
                    default:
                         return state;
        }
    }

    