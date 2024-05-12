import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./About";

function App() {
	return (
		<>
			<Router>
				<center className="my-4">
					<Link to="/about" className="mx-3 p-2 bg-slate-200 rounded border">about</Link>
          <Link to={"/"} className="mx-3 p-2 bg-slate-200 rounded border">Home</Link>

          <br /><br />

					<Routes>
						<Route path="/about" element={<About />}></Route>
						<Route path="/" element={<h1>Hello</h1>}></Route>
					</Routes>
				</center>
			</Router>
		</>
	);
}

export default App;
