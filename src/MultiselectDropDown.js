import react,{ useState, useEffect} from 'react';
import Multiselect, { multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';

function MultiselectDropDown(){

    const [categories, setCategories]=useState([]);


    const fetchCatAPI = async() => {
       
        const responseCat = await axios.get("http://localhost:8080/api/categories");
        setCategories(responseCat.data);    
        
    }

    console.log(categories);

    useEffect( ()=> {
        fetchCatAPI();
    }, [])

    // const data=[
    //     {Catselect:'Travel',id:1},
    //     {Catselect:'Education',id:2},
    //     {Catselect:'Loan',id:3},
    //     {Catselect:'Food',id:4},
    //     {Catselect:'Shopping',id:5}
    // ]
    
    function handleSelection(event) { 
        const selectedValues = Array.from(event.target.selectedOptions, category => category.name);
    }

    // const [options] = useState(data);

    return(
        <select multiple onChange={handleSelection}>
            {categories.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>
            ))}
        </select>

    )
}
export default MultiselectDropDown
