import * as ActionTypes from '../Action/Type';

    const initialState={  
        firstname:'',
        lastname:'',
        username:'',
        password:''
      };
      export default(state=initialState,action)=>{
        switch(action.type){
            case  ActionTypes.REGISTER:{

                return{...state,message:'Logged in Successfully'}
                
                        break;
            }
                       
                    
                    default:
                         return state;
        }
    }

    