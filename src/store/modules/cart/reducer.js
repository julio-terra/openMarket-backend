import produce from 'immer';

const INITIAL_STATE = {
    costumer: {},
};

function cart(state = INITIAL_STATE, action){
    switch(action.type){
        case '@cart/SET_CUSTOMER' : {
            return produce(state, (draft) =>{
                draft.costumer = action.costumer;
            })
        }
        default:{
            return state;
        }
    }
}
export default cart;