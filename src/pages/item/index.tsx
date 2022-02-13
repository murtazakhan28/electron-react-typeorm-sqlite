import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../../components";

const fields = [
	{ label: "Serial Number", key: "srno" },
	{ label: "Type", key: "type" },
	{ label: "RPM", key: "rpm" },
	{ label: "HP", key: "hp" },
	{ label: "Position", key: "position" },
	{ label: "Place", key: "place" },
];

const Item = () => {
	const [formData, setFormData] = useState({ srno: "", type: "", rpm: "", hp: "", position: "", place: "" });
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();

	const handleChange = (event: ChangeEvent<HTMLInputElement>, field: string) => {
		setFormData(state => ({ ...state, [field]: event.target.value }));
	};

	return (
		<div>
			<div className="row">
				<Button onClick={_ => navigate(-1)} className="m-1">
					Back
				</Button>
				<Button className="m-1" onClick={_ => alert(JSON.stringify(formData, null, 4))}>
					{id === "new" ? "Save" : "Update"}
				</Button>
			</div>
			{fields.map(({ label, key }) => {
				return (
					<div className="row m-1 align-items-center">
						<div className="field-label">{label}:</div>
						<Input className="ml-1" onChange={event => handleChange(event, key)} />
					</div>
				);
			})}
		</div>
	);
};

export default Item;
