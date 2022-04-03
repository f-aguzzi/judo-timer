import React, { useEffect, useState } from 'react';
import BottomBar from './components/BottomBar';
import OsaeKomi from './components/OsaeKomi';
import TopBar from './components/TopBar';

import { Settings } from './types/Settings';

function App() {

	// Settings
	const [totalTime, setTotalTime] = useState(120);
	const [wazaari, setWazaari] = useState(10);
	const [ippon, setIppon] = useState(20);

	// State
	const [seconds, setSeconds] = useState(120);
	const [active, setActive] = useState(false);

	// Functions
	const reset = () => {
		setSeconds(totalTime);
	}

	const toggle = () => {
		setActive(!active);
	}

	useEffect(() => {
		let interval: any;
		if (active) {
		  interval = setInterval(() => {
			setSeconds(seconds => seconds - 1);
		  }, 1000);
		} else if (!active && seconds !== 0) {
		  clearInterval(interval);
		}
		return () => clearInterval(interval);
	  }, [active, seconds]);

	return (
    	<div className="App">
    		<div className="h-screen w-screen bg-zinc-700 grid grid-rows-3">
				<div className="my-10">
					<TopBar toggle={toggle} seconds={seconds} />
				</div>
        		<div className="my-auto">
					<OsaeKomi />
				</div>
				<div className="my-10">
					<BottomBar reset={reset} />
				</div>
      		</div>
   		</div>
  	);
}

export default App;
