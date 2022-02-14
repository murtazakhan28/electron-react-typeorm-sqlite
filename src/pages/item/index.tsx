import { useState, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRepository } from "typeorm";
import { Button, Input } from "../../components";
import { Motors } from "../../entities";

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

	const handleSave = async () => {
		const { srno, type, rpm, hp, position, place } = formData;
		const motor = new Motors();
		motor.srno = srno;
		motor.type = type;
		motor.rpm = Number(rpm);
		motor.hp = Number(hp);
		motor.position = position;
		motor.place = place;
		const { id: motorId } = await getRepository(Motors).save(motor);
		navigate(`/item/${motorId}`);
	};

	return (
		<div>
			<div className="row">
				<Button onClick={_ => navigate("/")} className="m-1">
					Back
				</Button>
				<Button className="m-1" onClick={handleSave}>
					{id === "new" ? "Save" : "Update"}
				</Button>
			</div>
			{fields.map(({ label, key }) => {
				return (
					<div className="row m-1 align-items-center" key={key}>
						<div className="field-label">{label}:</div>
						<Input className="ml-1" onChange={event => handleChange(event, key)} />
					</div>
				);
			})}
		</div>
	);
};

export default Item;
