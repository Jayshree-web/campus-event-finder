
import { useParams, Link, useNavigate } from "react-router-dom";
import { mockEvents } from "@/data/mockEvents";
import { Button } from "@/components/ui/button";
import { EventTypeLabel } from "@/components/EventCard";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowLeft, 
  Globe, 
  Share2
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const event = mockEvents.find(e => e.id === id);
  
  useEffect(() => {
    if (!event) {
      navigate("/");
    }
  }, [event, navigate]);
  
  if (!event) {
    return null; // Will redirect in useEffect
  }
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied to clipboard",
        description: "You can now share this event with others",
      });
    }
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <EventTypeLabel type={event.type} />
        </div>
        
        <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Hosted by {event.college}
        </p>
      </div>
      
      {event.image && (
        <div className="rounded-lg overflow-hidden mb-8 max-h-[400px]">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
            <p className="text-base mb-4">{event.description}</p>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-4">Event Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                <div>
                  <div className="font-medium">Date</div>
                  <div className="text-muted-foreground">{formatDate(event.date)}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                <div>
                  <div className="font-medium">Time</div>
                  <div className="text-muted-foreground">{event.time}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">{event.location}</div>
                </div>
              </div>
              
              {event.link && (
                <div className="pt-4">
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">
                      <Globe className="h-4 w-4 mr-2" />
                      Visit Website
                    </Button>
                  </a>
                </div>
              )}
              
              <div>
                <Button variant="secondary" className="w-full" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
