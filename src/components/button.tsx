export default function Tombol_1() {
    
    function handleClick() {
        alert("Tombol di tekan!!!!");
    }

    function handleMouseOver() {
        alert("Hayolo, mau pencet tombol ya?");
    }
    
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={handleClick}
        // onMouseOver={handleMouseOver}
        >
            Ini tombol mas
        </button>
    )
}