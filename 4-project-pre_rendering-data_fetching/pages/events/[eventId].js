import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById } from '../../helpers/api-utils.js';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(props) {
	const event = props.eventDetail;

	if (!event) {
		return (
			<ErrorAlert>
				<p>No event found!</p>
			</ErrorAlert>
		);
	}

	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	);
}

export default EventDetailPage;

export const getStaticProps = async (context) => {
	const eventId = context.params.eventId;
	const event = await getEventById(eventId);
	return {
		props: {
			eventDetail: event,
		},
	};
};
