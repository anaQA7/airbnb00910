import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { DateRange } from "react-day-picker";
import { format, addDays } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { CalendarIcon, Users, Home, Search } from "lucide-react";

interface FilterBarProps {
  onFilterChange?: (filters: FilterOptions) => void;
}

interface FilterOptions {
  location: string;
  dateRange: DateRange | undefined;
  guests: number;
  propertyType: string;
  priceRange: number[];
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange = () => {} }) => {
  const [location, setLocation] = useState<string>("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  const [guests, setGuests] = useState<number>(2);
  const [propertyType, setPropertyType] = useState<string>("any");
  const [priceRange, setPriceRange] = useState<number[]>([50, 500]);

  const handleApplyFilters = () => {
    onFilterChange({
      location,
      dateRange,
      guests,
      propertyType,
      priceRange,
    });
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-10 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
        {/* Location Search */}
        <div className="relative w-full md:w-1/5">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Where to?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Date Range Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full md:w-auto justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "MMM d, yyyy")} -{" "}
                    {format(dateRange.to, "MMM d, yyyy")}
                  </>
                ) : (
                  format(dateRange.from, "MMM d, yyyy")
                )
              ) : (
                <span>Select dates</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>

        {/* Guests Selector */}
        <div className="flex items-center w-full md:w-auto gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <Select
            value={guests.toString()}
            onValueChange={(value) => setGuests(parseInt(value))}
          >
            <SelectTrigger className="w-full md:w-[120px]">
              <SelectValue placeholder="Guests" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div className="flex items-center w-full md:w-auto gap-2">
          <Home className="h-4 w-4 text-muted-foreground" />
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="w-full md:w-[150px]">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Type</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="cabin">Cabin</SelectItem>
              <SelectItem value="beachfront">Beachfront</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="w-full md:w-auto flex flex-col gap-1">
          <div className="text-sm text-muted-foreground text-center">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
          <Slider
            defaultValue={[50, 500]}
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
            className="w-full md:w-[200px]"
          />
        </div>

        {/* Apply Button */}
        <Button
          onClick={handleApplyFilters}
          className="w-full md:w-auto bg-primary text-white hover:bg-primary/90"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
