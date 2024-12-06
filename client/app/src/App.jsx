import { useState } from "react";
import "./App.css";

function App() {
	const [books, setBooks] = useState(0);

	return (
		<>
			<h1> Book Webiste</h1>

			<div>
				<input type="text" placeholder="Book Title" />
				<input type="number" placeholder="Release Date" />
				<button>Add Book</button>
			</div>
		</>
	);
}

export default App;
