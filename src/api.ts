import axios from "axios";
import { Recipe } from "./constants";

export async function HandleType(url : string ) { 
    const res = await axios.get(url);
    const myData : {[key : string] : Recipe[]} = {};
    for(const i of res.data.foods){
        const types =  i.type ?? "autre"
        if(myData[types] == undefined){
            myData[types] = [];
        }
        myData[types] = [...myData[types] , i]  
    }
    
    return myData 
}

export async function HandleTypeDrink(url : string ) { 
    const res = await axios.get(url);
   
    return {Boisson : res.data.drink} 
}