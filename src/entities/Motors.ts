import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Motors {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "text" })
	srno: string;

	@Column({ type: "text" })
	type: string;

	@Column({ type: "int" })
	rpm: number;

	@Column({ type: "int" })
	hp: number;

	@Column({ type: "text" })
	position: string;

	@Column({ type: "text" })
	place: string;
}
