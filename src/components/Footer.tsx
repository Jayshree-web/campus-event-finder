
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold">CampusEvents</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover and share campus tech events from universities across the country.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary">Home</Link>
              <Link to="/submit" className="block text-sm text-muted-foreground hover:text-primary">Submit Event</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">About</h4>
            <p className="text-sm text-muted-foreground mb-4">
              CampusEvents is a platform designed to help students discover tech events happening 
              at college campuses nationwide.
            </p>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CampusEvents
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
