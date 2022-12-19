import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/event-list';

function HomePage(props) {
	return (
		<div>
			<EventList items={props.Events} />
		</div>
	);
}

export default HomePage;

export const getStaticProps = async () => {
	const featuredEvents = await getFeaturedEvents();
	return {
		props: {
			Events: featuredEvents,
		},
	};
};
