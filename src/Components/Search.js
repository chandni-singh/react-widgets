import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    console.log(results);

    //Wiki API request using async-await helper function and useEffect to rerender everytime 'term' updates
    useEffect (() =>  {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php' , {
                params : {
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch : term,
                },
            });

            setResults(data.query.search);
        }

    //call the helper function with delay of 500ms to avoid API request for every input/alphabet change
    const timeOutID = setTimeout( () => {
        if (term) {
            search();
        }
    }, 500);

    // clean-up function of useEffect
    return () => {
        clearTimeout(timeOutID);
    }
    
    }, [term]);

    const renderedList = results.map( (result) => {
            return (
                <div className = "item" key = {result.pageid}>

                    {/* Button linking to wiki page */}
                    <div className = "right floated content">
                        <a className = "ui button" href = {`https://en.wikipedia.org?curid = ${result.pageid}`}>
                            GO
                        </a>
                    </div>

                    {/* cotent */}
                    <div className = "content">
                        <div className = "header">
                            {result.title}
                        </div>
                        {/* can cause cross site script (XSS) attacks */}
                        <span dangerouslySetInnerHTML = {{__html : result.snippet}}></span>
                    </div>

                </div>
            );
        }
    );
    

    //Defining input search Bar using controlled element
    return (
        <div>
            <div className = "ui form">
                <div className = "field">
                    <label>Enter Search term</label>
                    <input className = "input" value = {term} onChange = {(e) => setTerm(e.target.value)} />
                </div>       
            </div>
            <div className = "ui celled list">
                {renderedList}
            </div>
        </div>
    );
}

export default Search;