import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetchBooks();
	}, []);

	const fetchBooks = async () => {
		try {
			const response = await fetch("http://127.0.0.1:8000/api/books/");
			const data = await response.json();
			setBooks(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<h1> Book Webiste</h1>

			<div>
				<input type="text" placeholder="Book Title" />
				<input type="number" placeholder="Release Date" />
				<button>Add Book</button>
			</div>
			{books.map((book) => (
				<div>
					<p>Title: {book.title}</p>
					<p>Release Year: {book.release_year}</p>
				</div>
			))}
		</>
	);
}

export default App;
