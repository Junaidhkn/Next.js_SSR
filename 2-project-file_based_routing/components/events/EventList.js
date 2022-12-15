import React from 'react';
import EventItem from './EventItem.js';

const EventList = (props) => {
	const { events } = props;

	return (
		<ul>
			{events.map((event) => {
				return (
					<EventItem
						key={event.id}
						event={event}
					/>
				);
			})}
		</ul>
	);
};

export default EventList;
