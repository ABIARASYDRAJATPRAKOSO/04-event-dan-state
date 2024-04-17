import { sculptureList } from "@/data/article";
import { useState } from "react";
export default function Gallery(){
    const [index, setIndex]= useState(0); 

    function handleClick(){
        setIndex(index+1);
        if (index==4){
            setIndex(0)
        }
    }

    function handleClick2(){
        setIndex(index-1);
        if (index==0){
            setIndex(4)
        }
    }
    let sculpture  = sculptureList[index];

return(
    <>
    <button 
    onClick={handleClick2}
    className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded">Artikel Sebelumnya</button>
    <h2><i>{sculpture.name}</i> oleh {sculpture.artist}</h2>
    <h3>({index+1} dari {sculptureList.length})</h3>
    <img src={sculpture.url} alt={sculpture.alt}/>
    <p>
        {sculpture.description}
    </p>
    </>
);
}




