import {getCalories} from '../api/index';

//action creators

const getCaloriesCount = async() =>  {
    try{
        const apiData = await getCalories();
        console.log(apiData);
    }catch(error){
        console.log(error.message)
    }

}

export default getCaloriesCount;