import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Motors {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "string" })
	srno: string;

	@Column({ type: "string" })
	type: string;

	@Column({ type: "number" })
	rpm: number;

	@Column({ type: "number" })
	hp: number;

	@Column({ type: "string" })
	position: string;

	@Column({ type: "string" })
	place: string;
}
