import React, { useState } from "react";
import { Search, X } from "lucide-react";
import FilterBar from "./FilterBar";
import PropertyGrid from "./PropertyGrid";
import PropertyMap from "./PropertyMap";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";

interface HomeProps {
  initialLocation?: string;
}

const Home = ({ initialLocation = "Anywhere" }: HomeProps) => {
  const [showMap, setShowMap] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {/* Custom Airbnb logo SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-[#FF5A5F]"
            >
              <path d="M12 2c1 0 3 2 3 2s2-2 3-2c3 0 4 3 4 6 0 3.5-5 10-7 10s-7-6.5-7-10c0-3 1-6 4-6z" />
            </svg>
            <span className="ml-2 text-xl font-bold text-[#FF5A5F] hidden md:inline">
              airbnb
            </span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border rounded-full shadow-sm hover:shadow-md transition-shadow px-4 py-2 max-w-md w-full">
            <Input
              type="text"
              placeholder="Search destinations"
              className="border-none shadow-none focus-visible:ring-0 flex-grow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              size="sm"
              className="rounded-full bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 ml-2"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* User Menu */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="text-sm font-medium mr-2 hidden md:flex"
            >
              Become a Host
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-300"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                      alt="User"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Bookings</DropdownMenuItem>
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <FilterBar />

      {/* Mobile Search */}
      <div className="md:hidden px-4 py-3">
        <div className="flex items-center border rounded-full shadow-sm px-4 py-2">
          <Search className="h-4 w-4 mr-2" />
          <Input
            type="text"
            placeholder="Where to?"
            className="border-none shadow-none focus-visible:ring-0 flex-grow text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 md:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Property Grid */}
          <div className={`${showMap ? "lg:w-2/3" : "w-full"}`}>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold">
                300+ stays in {initialLocation}
              </h1>
              <Button
                variant="outline"
                onClick={() => setShowMap(!showMap)}
                className="hidden lg:flex"
              >
                {showMap ? "Hide Map" : "Show Map"}
              </Button>
            </div>
            <PropertyGrid />
          </div>

          {/* Map */}
          {showMap && (
            <div className="lg:w-1/3 h-[500px] lg:h-auto sticky top-[100px] hidden lg:block">
              <PropertyMap />
            </div>
          )}
        </div>

        {/* Mobile Map Toggle */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 lg:hidden z-10">
          <Button
            onClick={() => setShowMap(!showMap)}
            className="rounded-full bg-gray-900 text-white shadow-lg px-6"
          >
            {showMap ? "List" : "Map"}
          </Button>
        </div>

        {/* Mobile Map (Full Screen) */}
        {showMap && (
          <div className="fixed inset-0 z-20 bg-white lg:hidden">
            <div className="h-full">
              <PropertyMap />
              <Button
                className="absolute top-4 left-4 rounded-full bg-white shadow-md"
                onClick={() => setShowMap(false)}
                size="icon"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>Help Center</li>
                <li>Safety information</li>
                <li>Cancellation options</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>Disaster relief housing</li>
                <li>Support refugees</li>
                <li>Combating discrimination</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hosting</h3>
              <ul className="space-y-2 text-sm">
                <li>Try hosting</li>
                <li>AirCover for Hosts</li>
                <li>Explore hosting resources</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2023 Airbnb, Inc. · Privacy · Terms · Sitemap
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">English (US)</span>
              <span className="text-sm font-medium">$ USD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;