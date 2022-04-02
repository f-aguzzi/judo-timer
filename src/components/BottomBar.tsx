import React from "react";
import IWS from "./IWS";

function BottomBar() {
    return(
        <div className="grid grid-cols-3 text-center">
			<IWS />
			<div className="grid grid-rows-3 mx-10">
				<button className="text-center text-xl text-zinc-700 font-bold bg-yellow-400 hover:bg-yellow-300 p-4 my-auto rounded-md">Reset</button>
				<button className="text-center text-xl text-zinc-700 font-bold bg-yellow-400 hover:bg-yellow-300 p-4 my-auto rounded-md">Log</button>
				<button className="text-6xl text-zinc-300 mx-auto my-auto hover:text-white">⚙</button>
			</div>
			<IWS />
        </div>
    )
}

export default BottomBar;