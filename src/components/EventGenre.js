import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(() => getData());
	}, [events]);

	const getData = () => {
		const genres = ['React', 'Javascript', 'Node', 'jQuery', 'AngularJS'];
		const data = genres.map(genre => {
			const value = events.filter(({ summary }) =>
				summary.split(' ').includes(genre)
			).length;
			return { name: genre, value };
		});
		return data;
	};

	return (
		<ResponsiveContainer height={400}>
			<PieChart width={400} height={400}>
				<Pie
					data={getData()}
					cx={200}
					cy={200}
					labelLine={false}
					outerRadius={80}
					fill='#8884d8'
					label={({ name, percent }) =>
						`${name} ${(percent * 100).toFixed(0)}%`
					}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default EventGenre;
