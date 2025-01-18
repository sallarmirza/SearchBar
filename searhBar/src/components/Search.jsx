import { useState } from "react"
// passing fake data from data component
import { Data } from "./Data"
const Search = () => {
    // using store to 1st display data
    const [store,setStore]=useState(Data)
    // using this for applying filter
    const [data,setData]=useState('')
    const getData=(e)=>{
        console.log(e.target.value);
        setData(e.target.value)
    }
    // function passed into variable
    let filterOut=store.filter((cur)=>{
        // name or brand name 
        return cur.name.toLowerCase().includes(data) || cur.brand.toLowerCase().includes(data)
    })
  return (
    <div className='container'>
        {/* onchange applied on input */}
        <input type="text" placeholder='Search Here...' onChange={getData}/>
        <div className="card">
            {
                // data displayed
                filterOut.map((cur)=>{
                    return(
                        <div className="listItem">
                            <h2>{cur.name}</h2>
                            <p>{cur.brand}</p>
                        </div>
                    )
                })
            }

        </div>

    </div>
  )
}

export default Search