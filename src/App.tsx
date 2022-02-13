import { useEffect } from "react";
import "reflect-metadata";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createConnection } from "typeorm";
import { Motors } from "./entities";
import "./App.css";

import { Header } from "./components";
import { Home, Item } from "./pages";

function App() {
	const connect = async () => {
		try {
			await createConnection({
				type: "sqlite",
				entities: [Motors],
				database: "db.sqlite3",
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		connect();
	}, []);

	return (
		<div>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/item/:id" element={<Item />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
