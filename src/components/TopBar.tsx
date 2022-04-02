import React from "react";

function TopBar() {
    return(
        <div className="grid grid-cols-3">
            <div className="text-center align-middle h-1/2 m-2 p-2 rounded-lg bg-zinc-100">
                <p className="font-bold my-auto text-xl text-zinc-700">Cintura bianca</p>
            </div>
            <button className="text-6xl font-bold font-mono border-4 m-2 p-2 py-6 rounded-lg border-zinc-100 text-orange-400 hover:text-orange-300">3:00</button>
            <div className="text-center align-middle h-1/2 m-2 p-2 rounded-lg bg-red-500">
                <p className="font-bold my-auto text-xl text-zinc-100">Cintura rossa</p>
            </div>
            
        </div>
    )
}

export default TopBar;