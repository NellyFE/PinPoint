export default function Sidebar({destinations, setDestinations}) {

    const handleAdd = () =>{
        console.log('add button clicked')
    }

    const handleExport = () => {
        console.log('export button clicked')
    }

    return(
        <div className="sidebar">

            {/* Header */}
            <div className="p-[1.5rem] border-b border-[#e5e7eb]">
                <h1 className="font-bold text-3xl">Wishlist</h1>
                <p>
                    {destinations.length} destination {destinations.length !== 1 ? 's' : ""}
                    </p>
            </div>

            {/* Button */}
            <div>
                <button onClick={handleAdd}>Add</button>

                <button onClick={handleExport}>Export</button>
            </div>

            {/* Destinations List */}

        </div>
    )
}