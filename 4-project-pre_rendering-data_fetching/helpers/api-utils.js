export const getAllEvents = async () => {
   const response = await fetch( 'https://nextjs-project-pre-rendering-default-rtdb.asia-southeast1.firebasedatabase.app/events.json' )

   const data = await response.json()

   const events = []

   for ( const key in data ) {
      events.push( { id: key, ...data[key] } )
   }
   return events

}


export const getFeaturedEvents = async () => {
   const allEvents = await getAllEvents()
   const featuredEvents = allEvents.filter( ( event ) => event.isFeatured );
   return featuredEvents
}
