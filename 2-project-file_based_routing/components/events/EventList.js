import React from 'react';

const EventList = (props) => {
	const { events } = props;

	return (
		<ul>
			{events.map((event) => {
				return <li>{event.title}</li>;
			})}
		</ul>
	);
};

export default EventList;
