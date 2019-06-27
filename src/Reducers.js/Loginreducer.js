import * as ActionTypes from '../Action/Type';

    const initialState={  
        username:'',
        password:'',
        message:''
      };
      export default(state=initialState,action)=>{
        switch(action.type){
            case  ActionTypes.LOGIN:{

                return{...state,message:'Logged in Successfully'}
                
                        break;
            }
                       
                    
                    default:
                         return state;
        }
    }

    