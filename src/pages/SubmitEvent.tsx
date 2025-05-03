
import { EventForm } from "@/components/EventForm";

export default function SubmitEvent() {
  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Submit an Event</h1>
        <p className="text-muted-foreground mb-8">
          Know about a tech event happening at your college? Share it with the community.
        </p>
        
        <div className="bg-card border rounded-lg p-6">
          <EventForm />
        </div>
      </div>
    </div>
  );
}
