import React,{useState} from 'react';

const ThinkPedia = () => {


    const [search,setSearch]=useState("");
    const[result,setResult]=useState([]);
    const [searchInfo,setSearchInfo]=useState({});
    const suggestion_limit = 25;

    const handleSearch=async e =>{
        e.preventDefault();
        if(search==='') return;

        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${suggestion_limit}&srsearch=${search}`;

        const response = await fetch(url);
        console.log(url);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        setResult(json.query.search);
        setSearchInfo(json.query.searchinfo)
    }
  return (
    <div className="App">
        <header>
            <h1>Think Pedia <i className="bi bi-search"></i></h1>
            <form 
            className="search-box"
            onSubmit={handleSearch}
           >
         <input
             type="search" 
             placeholder="search..."
             value={search} 
             onChange={e=>setSearch(e.target.value)}
             />
           </form>
           {(searchInfo.totalhits)?<p><span className="total_results">Search Results: </span><span className="count">{searchInfo.totalhits}</span></p>: ''}
        </header>
        <div className="results">
            {result.map((results,i)=>{
                const link = `https://en.wikipedia.org/?curid=${results.pageid}`
                return(
                    <div className="result" key={i}>
                    <h3>{results.title}</h3>
                <p dangerouslySetInnerHTML={{__html: results.snippet}}>
                    </p>
                    <a href={link} target='_blank' rel="noreferrer">Read more</a>
                </div>
                )
            })}
           
        </div>
        
    </div>
  );
}

export default ThinkPedia;