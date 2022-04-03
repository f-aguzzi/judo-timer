import React, { useEffect, useState } from 'react';
import BottomBar from './components/BottomBar';
import OsaeKomi from './components/OsaeKomi';
import TopBar from './components/TopBar';

import { Settings } from './types/Settings';

function App() {

	// Settings
	const [totalTime, setTotalTime] = useState(120);
	const [wazaariTime, setWazaariTime] = useState(10);
	const [ipponTime, setIpponTime] = useState(20);

	// State
	const [seconds, setSeconds] = useState(totalTime);
	const [active, setActive] = useState(false);

	// State - White Belt
	const [osaeKomi1, setOsaeKomi1_t] = useState(false);
	const [osaeKomiTime1, setOsaeKomiTime1] = useState(0);
	const [ippon1, setIppon1] = useState(0);
	const [wazaari1, setWazaari1] = useState(0);
	const [shido1, setShido1] = useState(0);

	// State - Red Belt
	const [osaeKomi2, setOsaeKomi2_t] = useState(false);
	const [osaeKomiTime2, setOsaeKomiTime2] = useState(0);
	const [ippon2, setIppon2] = useState(0);
	const [wazaari2, setWazaari2] = useState(0);
	const [shido2, setShido2] = useState(0);

	// Custom hooks
	const setOsaeKomi1 = (e: boolean) => {
		if (osaeKomi2 && e) {
			setOsaeKomi2_t(false)
		}
		setOsaeKomi1_t(e);
	}

	const setOsaeKomi2 = (e: boolean) => {
		if (osaeKomi1 && e) {
			setOsaeKomi1_t(false)
		}
		setOsaeKomi2_t(e);
	}



	// Functions
	const log = () => {

	}

	const reset = () => {
		log();

		// Main state
		setSeconds(totalTime);
		setActive(false);

		// White belt - state
		setIppon1(0);
		setWazaari1(0);
		setShido1(0);
		setOsaeKomi1_t(false);
		setOsaeKomiTime1(0);

		// Red belt  - state
		setIppon2(0);
		setWazaari2(0);
		setShido2(0);
		setOsaeKomi2_t(false);
		setOsaeKomiTime2(0);
	}

	const toggle = () => {
		if (active === false) {
			setOsaeKomi1_t(false);
			setOsaeKomi2_t(false);
			setOsaeKomiTime1(0);
			setOsaeKomiTime2(0);
		}

		setActive(!active);
	}

	// Main timer
	useEffect(() => {
		let interval: any;
		if (active && seconds > 0) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds - 1);
		  	}, 1000);
		} else if (!active && seconds !== 0) {
			clearInterval(interval);
		} else if (active && seconds === 0) {
			return;
		}
		return () => clearInterval(interval);
	}, [active, seconds]);

	// OsaeKomi for white belt
	useEffect(() => {
		let interval1: any;
		if (osaeKomi1 && (active === true)) {
			interval1 = setInterval(() => {
				setOsaeKomiTime1(seconds => seconds + 1);
		  	}, 1000);
		} else if (!osaeKomi1 && osaeKomiTime1 !== 0) {
			clearInterval(interval1);
			setOsaeKomiTime1(0);
		} else if (osaeKomi1 && (active === false)) {
			return;
		}
		return () => clearInterval(interval1);
	}, [osaeKomi1, osaeKomiTime1]);

	// OsaeKomi for red belt
	useEffect(() => {
		let interval2: any;
		if (osaeKomi2 && (active === true)) {
			interval2 = setInterval(() => {
				setOsaeKomiTime2(seconds => seconds + 1);
		  	}, 1000);
		} else if (!osaeKomi2 && osaeKomiTime2 !== 0) {
			clearInterval(interval2);
			setOsaeKomiTime1(0);
		} else if (osaeKomi2 && (active === false)) {
			return;
		}
		return () => clearInterval(interval2);
	}, [osaeKomi2, osaeKomiTime2]);

	// Automatic scoring based on OsaeKomi time: white belt
	useEffect(() => {
		if (osaeKomi1) {
			if (osaeKomiTime1 === wazaariTime) {
				setWazaari1(wazaari1 + 1);
			}
			if (osaeKomiTime1 === ipponTime) {
				setIppon1(1);
				toggle();
				setOsaeKomi1(false);
			}
		}
	}, [osaeKomi1, osaeKomiTime1]);

	// Automatic scoring based on OsaeKomi time: red belt
	useEffect(() => {
		if (osaeKomi2) {
			if (osaeKomiTime2 === wazaariTime) {
				setWazaari2(wazaari2 + 1);
			}
			if (osaeKomiTime2 === ipponTime) {
				setIppon2(1);
				toggle();
				setOsaeKomi2(false);
			}
		}
	}, [osaeKomi2, osaeKomiTime2]);

	// Reset OsaeKomi when main timer starts



	return (
    	<div className="App">
    		<div className="h-screen w-screen bg-zinc-700 grid grid-rows-3">
				<div className="my-10">
					<TopBar toggle={toggle} seconds={seconds} />
				</div>
        		<div className="my-auto">
					<OsaeKomi
						osaeKomi1={osaeKomi1}
						setOsaeKomi1={setOsaeKomi1}
						osaeKomiTime1={osaeKomiTime1}
						
						osaeKomi2={osaeKomi2}
						setOsaeKomi2={setOsaeKomi2}
						osaeKomiTime2={osaeKomiTime2}
					/>
				</div>
				<div className="my-10">
					<BottomBar
						reset={reset}

						ippon1={ippon1}
						wazaari1={wazaari1}
						shido1={shido1}

						ippon2={ippon2}
						wazaari2={wazaari2}
						shido2={shido2}
					/>
				</div>
      		</div>
   		</div>
  	);
}

export default App;
