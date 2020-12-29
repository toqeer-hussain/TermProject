
import Product from './Product';
import {initialState} from './reducer'

export default function makeproduct(start,number,data){
    let newarr=[];
    console.log("make product",data)
    for(let i=start;i<number;i++){
        newarr.push(
            <Product
              id={data[i]?._id}
              key={data[i]?._id}
              title={data[i]?.ProductName}
              image={`${initialState.baseUrl}/${data[i]?.Image[0]?.imgkey}`}
              rate={data[i]?.Rating}
              price={data[i]?.Price}
            />
        )
    }
    return newarr;
}

