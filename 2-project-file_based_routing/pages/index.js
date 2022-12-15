import React from 'react';
import EventList from '../components/events/EventList.js';
import { getFeaturedEvents } from '../dummy-data.js';

const Home = () => {
	const featuredEvents = getFeaturedEvents();
	return (
		<div>
			<h1>Home Page</h1>
			<EventList events={featuredEvents} />
		</div>
	);
};

export default Home;
