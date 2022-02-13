import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>THIS IS HOME</h1>
			<Button onClick={_ => navigate("/item/new")}>ITEM</Button>
		</div>
	);
};

export default Home;
