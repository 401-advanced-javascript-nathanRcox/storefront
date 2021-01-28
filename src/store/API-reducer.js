
let initalState = [] ;

// Actions
// export const get = () => dispatch => {

//   console.log('GET in API');

//   return superagent.get('https://nrc-api-auth.herokuapp.com/api/v1/storefront')
//   .then(response => {
//     dispatch(getAction(response.body));
//   });
// };

// export const getAction = payload => {
//   return {
//     type: 'GET',
//     payload: payload,
//   };
// };

// Reducer
const APIswitch = (state=initalState, action) => {
  let { type, payload } = action;
  switch(type) {
    case 'GET':
      return {...state, payload};
    
    default:
      return state;
  };
};

export default APIswitch;
