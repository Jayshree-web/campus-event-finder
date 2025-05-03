
import { Event } from "@/data/mockEvents";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "@/lib/utils";

export function EventTypeLabel({ type }: { type: Event["type"] }) {
  const typeConfig = {
    hackathon: {
      label: "Hackathon",
      color: "bg-eventType-hackathon",
    },
    techtalk: {
      label: "Tech Talk",
      color: "bg-eventType-techtalk",
    },
    workshop: {
      label: "Workshop",
      color: "bg-eventType-workshop",
    },
  };

  const { label, color } = typeConfig[type];

  return (
    <Badge className={`${color} hover:${color}`}>
      {label}
    </Badge>
  );
}

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="event-card overflow-hidden">
      {event.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <Link to={`/event/${event.id}`} className="hover:text-primary transition-colors">
            <h3 className="text-lg font-semibold line-clamp-2">{event.title}</h3>
          </Link>
          <EventTypeLabel type={event.type} />
        </div>
        <p className="text-sm text-muted-foreground">{event.college}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm line-clamp-3 mb-4">{event.description}</p>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{formatDate(event.date)} • {event.time}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="line-clamp-1">{event.location}</span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <Link 
            to={`/event/${event.id}`} 
            className="text-sm text-primary hover:underline"
          >
            Details
          </Link>
          {event.link && (
            <a 
              href={event.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm text-muted-foreground hover:text-primary"
            >
              Visit Website
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export function FeaturedEventCard({ event }: { event: Event }) {
  return (
    <Card className="event-card overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {event.image ? (
          <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            />
          </div>
        ) : (
          <div className="md:w-1/3 h-48 md:h-auto bg-muted flex items-center justify-center">
            <Calendar className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
        
        <div className="flex-1 p-6">
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge className="bg-primary hover:bg-primary">Featured</Badge>
            <EventTypeLabel type={event.type} />
          </div>
          
          <Link to={`/event/${event.id}`} className="hover:text-primary transition-colors">
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          </Link>
          
          <p className="text-sm font-medium text-muted-foreground mb-2">{event.college}</p>
          <p className="text-sm mb-4">{event.description}</p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{event.location}</span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-4">
            <Link 
              to={`/event/${event.id}`} 
              className="text-sm font-medium text-primary hover:underline"
            >
              View Details
            </Link>
            {event.link && (
              <a 
                href={event.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-sm text-muted-foreground hover:text-primary"
              >
                Visit Website
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
