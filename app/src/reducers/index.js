import {NEWS_FETCH_BEGIN,NEWS_FETCH_SUCCESS, NEWS_FETCH_FAIL, GRAB_LIST} from "../actions";


const initialState = {
    titles:[],
    date:'',
    is_fetching:false,
    content:'',
    err:''
}

function reducer(state=initialState, action){
    switch(action.type){
        case NEWS_FETCH_BEGIN:
            console.log('being news feed grab');
            console.log('state is ', state)
            return{
                titles:[],
                is_fetching: true
            }
        case NEWS_FETCH_SUCCESS:
            // console.log('current payload is inside success ',action.payload);
            return {

                titles:action.payload
            }

        case NEWS_FETCH_FAIL:
            console.log(action.payload);
            return{
                titles:[{title:'No results found, please try another subject',authors:[''],subject:['']}]
            }

        case GRAB_LIST:
            console.log('state in grab list is ',state)


        default:
            return state;
    }
}


export default reducer;