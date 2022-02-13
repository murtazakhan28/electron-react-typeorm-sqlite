interface Header {
	key: string;
	label: string;
}

interface Props {
	headers: Header[];
	data: any[];
}

const Table = ({ headers, data }: Props) => {
	return (
		<table className="app-table">
			<thead>
				<tr className="app-thead">
					{headers.map(({ key, label }) => (
						<th className="pl-1" key={key}>
							{label}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => {
					return (
						<tr className="table-row" key={rowIndex}>
							{headers.map(({ key }) => {
								return (
									<td className="pl-1" key={key}>
										{row[key]}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
