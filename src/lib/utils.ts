
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parseISO } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'MMM d, yyyy');
}

export function filterEvents(
  events: any[],
  { search, type, college, fromDate, toDate }: {
    search: string;
    type: string | null;
    college: string | null;
    fromDate: Date | null;
    toDate: Date | null;
  }
) {
  return events.filter(event => {
    // Filter by search text
    if (search) {
      const searchLower = search.toLowerCase();
      const matchesSearch = 
        event.title.toLowerCase().includes(searchLower) || 
        event.description.toLowerCase().includes(searchLower) ||
        event.college.toLowerCase().includes(searchLower) ||
        event.location.toLowerCase().includes(searchLower);
      
      if (!matchesSearch) return false;
    }
    
    // Filter by event type
    if (type && event.type !== type) return false;
    
    // Filter by college
    if (college && event.college !== college) return false;
    
    // Filter by date range
    if (fromDate) {
      const eventDate = new Date(event.date);
      if (eventDate < fromDate) return false;
    }
    
    if (toDate) {
      const eventDate = new Date(event.date);
      if (eventDate > toDate) return false;
    }
    
    return true;
  });
}
