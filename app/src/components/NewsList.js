import React,{useState} from 'react';
import { connect } from 'react-redux';


import {getNews, inquire} from "../actions";


const NewsList = props =>{
    const [subject, changeSubject] = useState("");

    const handleChange = e=>{
        changeSubject(e.target.value);
    }

    const fetchNews = e =>{
        e.preventDefault();
        changeSubject("");
        props.getNews(subject);
    }

    const fetchList = e =>{
        e.preventDefault();
        props.inquire();
    }

    const searchByCat = e =>{
        console.log('E is ',e.item);
        props.getNews(e.item.toLowerCase());
    }



    return(
        <>
            <input
                type="text"
                value={subject}
                onChange={handleChange}
                placeholder="Search by Subject"
                />
            <button onClick={fetchNews}>Search by subject</button>
            {/*<button onClick={fetchList}>get list</button>*/}
            {props.titles.map(item=>{
                return (
                    <div key={item.key}>
                        <h1>{item.title}</h1>
                        <h3>{item.authors[0].name}</h3>
                        <div className='subjectDiv'>
                            {item.subject.map(item=>{
                                return(
                                    <p className="subjects" onClick={()=>{searchByCat({item})}}>{item}</p>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </>
    )

}


const mapStateToProps = state => ({
    titles: state.titles
});

export default connect(
    mapStateToProps,
    {getNews, inquire})(NewsList);
