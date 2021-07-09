import style from './search.modules.css'
import React, {useState} from 'react';
const Search = ({query, setQuery}) => {
    const [search, setSearch] = useState('');
    

    const getSearch = e => {
        setSearch(e.target.value)
        console.log(search)
        
    }

    const getQuery = e =>{
        e.preventDefault();
        setQuery(search)
        setSearch('');
    }
    return (
        <form onSubmit={getQuery} style={{ marginTop:"50px"}}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    onChange={getSearch}
                    placeholder="enter food e.g rice"
                    />
            </div>
            <button 
                type="submit" 
                className="btn btn-success"
                >

                    Search
            </button>
        </form>
    )
}

export default Search;