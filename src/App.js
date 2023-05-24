import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx"
import Grafico from './Components/Dashboard/Dashboard.jsx';

function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Grafico/>
		</React.Fragment>
	);
}

export default App;