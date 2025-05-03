
import { useState, useEffect } from "react";
import { EventCard, FeaturedEventCard } from "@/components/EventCard";
import { EventFilters, EventFilters as EventFiltersType } from "@/components/EventFilters";
import { mockEvents } from "@/data/mockEvents";
import { filterEvents } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Index() {
  const [filters, setFilters] = useState<EventFiltersType>({
    search: "",
    type: null,
    college: null,
    fromDate: null,
    toDate: null,
  });

  const [filteredEvents, setFilteredEvents] = useState(mockEvents);
  const [featuredEvents, setFeaturedEvents] = useState(mockEvents.filter(event => event.featured));
  
  // Apply filters when they change
  useEffect(() => {
    setFilteredEvents(filterEvents(mockEvents, filters));
  }, [filters]);

  const upcomingEvents = [...filteredEvents].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  const today = new Date();
  const thisWeekEvents = upcomingEvents.filter(event => {
    const eventDate = new Date(event.date);
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 7;
  });
  
  const thisMonthEvents = upcomingEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === today.getMonth() && eventDate.getFullYear() === today.getFullYear();
  });

  return (
    <div className="container py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Campus Event Finder</h1>
        <p className="text-lg text-muted-foreground">
          Discover tech talks, hackathons, and workshops happening at colleges nationwide
        </p>
      </section>

      {featuredEvents.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Events</h2>
          <div className="space-y-6">
            {featuredEvents.map(event => (
              <FeaturedEventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-semibold mb-6">All Events</h2>
        <EventFilters filters={filters} setFilters={setFilters} />

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Events ({upcomingEvents.length})</TabsTrigger>
            <TabsTrigger value="this-week">This Week ({thisWeekEvents.length})</TabsTrigger>
            <TabsTrigger value="this-month">This Month ({thisMonthEvents.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No events found matching your filters.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="this-week" className="mt-6">
            {thisWeekEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {thisWeekEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No events found for this week.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="this-month" className="mt-6">
            {thisMonthEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {thisMonthEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No events found for this month.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
