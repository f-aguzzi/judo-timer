import React from 'react';
import BottomBar from './components/BottomBar';
import OsaeKomi from './components/OsaeKomi';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <div className="h-screen w-screen bg-zinc-700 grid grid-rows-3">
				<div className="my-10">
					<TopBar />
				</div>
        <div className="my-auto">
					<OsaeKomi />
				</div>
				<div className="my-10">
					<BottomBar />
				</div>
      </div>
    </div>
  );
}

export default App;
