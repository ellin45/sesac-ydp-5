
const initialState = {
  num: 0,
};

const counterBankReducer = (state = initialState, action) => {
  //action 객체 : {type : 'xxx'}
  switch (action.type) {
    case'DEPOSIT':
      return { num: state.num + parseInt(action.payload) };
    case 'WITHDRAW':
      return { num: state.num - parseInt(action.payload) };
    default:
      return state;
  }
};

export default counterBankReducer;