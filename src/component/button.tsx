

export function Tombol_2({isiPesan, namaTombol}:any ){
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={() => alert(isiPesan)}>
        {namaTombol}
        </button>
    )
}
export default function Tombol_1(){

    function handleClick(){
        alert("Tombol telah ditekan!");
    }

    function handleMouseOver(){
        alert("Eits,mau mencet tombol ya?");
    }
    return(
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={handleClick}
        //onMouseLeave={handleMouseOver}
        onMouseLeave={()=>{
            alert("loh,kok sudah pergi!!")
        }}
        >
            ini adalah Tombol
        </button>
        );
}
