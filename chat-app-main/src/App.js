import Client from "./components/client";
import Server from "./components/server";
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/server" element={<Server />} />
					<Route path="/client" element={<Client />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
