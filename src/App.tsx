import { useEffect, useState } from "react";
import "reflect-metadata";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createConnection } from "typeorm";
import { Motors } from "./entities";
import "./App.css";

import { Header } from "./components";
import { Home, Item } from "./pages";

function App() {
	const [DBConnected, setDBConnected] = useState(false);
	const connect = async () => {
		try {
			await createConnection({
				type: "sqlite",
				entities: [Motors],
				database: "db.sqlite3",
				synchronize: true,
			});
			setDBConnected(true);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		connect();
	}, []);

	if (!DBConnected) return null;

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
