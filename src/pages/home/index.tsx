import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRepository } from "typeorm";
import { Button, Table } from "../../components";
import { Motors } from "../../entities";

const tableHeaders = [
	{ key: "srno", label: "Sr. No." },
	{ key: "type", label: "Type" },
	{ key: "rpm", label: "RPM" },
	{ key: "hp", label: "HP" },
	{ key: "position", label: "Position" },
	{ key: "place", label: "Place" },
];

const Home = () => {
	const [tableData, setTableData] = useState<Motors[]>([]);
	const navigate = useNavigate();

	const fetchData = async () => {
		const data = await getRepository(Motors).find();
		setTableData(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className="row justify-content-end">
				<Button className="m-1" onClick={_ => navigate("/item/new")}>
					+ Add Item
				</Button>
			</div>
			<div className="m-1">
				<Table headers={tableHeaders} data={tableData} />
			</div>
		</>
	);
};

export default Home;
