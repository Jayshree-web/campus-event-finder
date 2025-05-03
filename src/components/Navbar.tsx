
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Menu, PlusCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 mr-4">
          <Calendar className="h-6 w-6 text-primary" />
          <Link to="/" className="text-xl font-bold">
            CampusEvents
          </Link>
        </div>

        {/* Mobile navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col gap-4 py-4">
              <Link 
                to="/" 
                className="px-4 py-2 text-lg font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/submit" 
                className="px-4 py-2 text-lg font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Submit Event
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-2">
          <Link to="/submit">
            <Button className="hidden md:flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Submit Event
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
