import React from "react";
import IWS from "./IWS";

interface BottomBarProps {
	reset: () => void;

	ippon1: number;
	wazaari1: number;
	shido1: number;

	ippon2: number;
	wazaari2: number;
	shido2: number;
}

function BottomBar({
	reset,
	ippon1, wazaari1, shido1,
	ippon2, wazaari2, shido2 
	}: BottomBarProps) {
    return(
        <div className="grid grid-cols-3 text-center">
			<IWS 
				ippon={ippon1}
				wazaari={wazaari1}
				shido={shido1}
			/>
			<div className="grid grid-rows-3 mx-10">
				<button onClick={() => reset()} className="text-center text-xl text-zinc-700 font-bold bg-yellow-400 hover:bg-yellow-300 p-4 my-auto rounded-md">Reset</button>
				<button className="text-center text-xl text-zinc-700 font-bold bg-yellow-400 hover:bg-yellow-300 p-4 my-auto rounded-md">Log</button>
				<button className="text-6xl text-zinc-300 mx-auto my-auto hover:text-white">⚙</button>
			</div>
			<IWS 
				ippon={ippon2}
				wazaari={wazaari2}
				shido={shido2}
			/>
        </div>
    )
}

export default BottomBar;