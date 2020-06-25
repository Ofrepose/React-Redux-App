import axios from 'axios';

export const NEWS_FETCH_BEGIN ='NEWS_FETCH_BEGIN';
export const NEWS_FETCH_SUCCESS ='NEWS_FETCH_SUCCESS';
export const NEWS_FETCH_FAIL = 'NEWS_FETCH_FAIL';
export const GRAB_LIST='GRAB_LIST'

let searchQ='war';

export const getNews = (subject) => dispatch => {
    dispatch({type:NEWS_FETCH_BEGIN});
    axios
        .get(`https://openlibrary.org/subjects/${subject}.json?details=true`)
        .then(res=>{
            console.log('data results are ', res);
            dispatch({type:NEWS_FETCH_SUCCESS, payload:res.data.works})
        })
        .catch(err=>{
            dispatch({type:NEWS_FETCH_FAIL, payload: err})
        })
}

export const inquire = () =>{
    return{
        type: GRAB_LIST
    }
}