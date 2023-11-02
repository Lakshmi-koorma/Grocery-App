
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Category from './Category';

function CategoryList(){
    const [categories , setCategories] = useState([])

    const fetchData = () => {
        axios.get("https://orca-app-jhg4l.ondigitalocean.app/api/category").
        then(response => setCategories(response.data.data))
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div className=' container'>
            <h2 className='text-center'>Category list</h2> <br/>
            <div class="row">
           {
        categories.map((category)=><Category data={category}/>)
           } 
        </div>
        </div>
    )
}
export default CategoryList