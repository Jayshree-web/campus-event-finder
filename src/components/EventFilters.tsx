
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { DatePicker } from "./DatePicker";
import { Search, Calendar, Filter, X } from "lucide-react";
import { mockEvents } from "@/data/mockEvents";

export interface EventFilters {
  search: string;
  type: string | null;
  college: string | null;
  fromDate: Date | null;
  toDate: Date | null;
}

interface EventFiltersProps {
  filters: EventFilters;
  setFilters: React.Dispatch<React.SetStateAction<EventFilters>>;
}

export function EventFilters({ filters, setFilters }: EventFiltersProps) {
  const [colleges, setColleges] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract unique colleges for the college filter
  useEffect(() => {
    const uniqueColleges = Array.from(new Set(mockEvents.map(event => event.college)));
    setColleges(uniqueColleges);
  }, []);

  const resetFilters = () => {
    setFilters({
      search: "",
      type: null,
      college: null,
      fromDate: null,
      toDate: null,
    });
  };

  return (
    <div className="bg-card border rounded-lg p-4 mb-6 animate-fade-in">
      {/* Basic search - always visible */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="pl-9"
          />
        </div>
        <div className="flex flex-row gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="shrink-0"
          >
            <Filter className="h-4 w-4" />
            <span className="sr-only">Toggle filters</span>
          </Button>
          <Button 
            variant="secondary"
            onClick={resetFilters}
            className="shrink-0"
          >
            <X className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>

      {/* Advanced filters - expandable */}
      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 animate-fade-in">
          <div>
            <Label htmlFor="event-type">Event Type</Label>
            <Select
              value={filters.type || ""}
              onValueChange={(value) => setFilters({ ...filters, type: value || null })}
            >
              <SelectTrigger id="event-type">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All types</SelectItem>
                <SelectItem value="hackathon">Hackathon</SelectItem>
                <SelectItem value="techtalk">Tech Talk</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="college">College</Label>
            <Select
              value={filters.college || ""}
              onValueChange={(value) => setFilters({ ...filters, college: value || null })}
            >
              <SelectTrigger id="college">
                <SelectValue placeholder="All colleges" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All colleges</SelectItem>
                {colleges.map((college) => (
                  <SelectItem key={college} value={college}>
                    {college}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>From Date</Label>
            <DatePicker 
              date={filters.fromDate} 
              setDate={(date) => setFilters({ ...filters, fromDate: date })} 
              placeholder="From date"
            />
          </div>

          <div>
            <Label>To Date</Label>
            <DatePicker 
              date={filters.toDate} 
              setDate={(date) => setFilters({ ...filters, toDate: date })} 
              placeholder="To date"
            />
          </div>
        </div>
      )}
    </div>
  );
}
