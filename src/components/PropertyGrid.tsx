import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  amenities: string[];
}

interface PropertyGridProps {
  properties?: Property[];
  loading?: boolean;
}

const PropertyGrid = ({
  properties = [],
  loading = false,
}: PropertyGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 12;

  // Default properties for when none are provided
  const defaultProperties: Property[] = [
    {
      id: "1",
      title: "Modern Beachfront Villa",
      location: "Malibu, California",
      price: 350,
      rating: 4.9,
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      ],
      amenities: ["Pool", "Wifi", "Kitchen", "Beach Access"],
    },
    {
      id: "2",
      title: "Downtown Luxury Apartment",
      location: "New York, NY",
      price: 200,
      rating: 4.7,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      ],
      amenities: ["Gym", "Wifi", "Doorman", "Washer/Dryer"],
    },
    {
      id: "3",
      title: "Mountain Retreat Cabin",
      location: "Aspen, Colorado",
      price: 275,
      rating: 4.8,
      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
        "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80",
      ],
      amenities: ["Fireplace", "Hot Tub", "Mountain View", "Hiking Trails"],
    },
    {
      id: "4",
      title: "Tropical Paradise Villa",
      location: "Bali, Indonesia",
      price: 180,
      rating: 4.9,
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      ],
      amenities: ["Pool", "Garden", "Breakfast", "Airport Transfer"],
    },
    {
      id: "5",
      title: "Historic City Loft",
      location: "Paris, France",
      price: 220,
      rating: 4.6,
      images: [
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
        "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=800&q=80",
      ],
      amenities: ["Eiffel Tower View", "Wifi", "Metro Access", "Balcony"],
    },
    {
      id: "6",
      title: "Lakefront Cottage",
      location: "Lake Tahoe, California",
      price: 195,
      rating: 4.8,
      images: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      ],
      amenities: ["Lake View", "Kayaks", "Fireplace", "BBQ"],
    },
    {
      id: "7",
      title: "Desert Oasis Home",
      location: "Scottsdale, Arizona",
      price: 165,
      rating: 4.7,
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?w=800&q=80",
      ],
      amenities: ["Pool", "Hot Tub", "Desert View", "Outdoor Shower"],
    },
    {
      id: "8",
      title: "Cozy Urban Studio",
      location: "San Francisco, California",
      price: 150,
      rating: 4.5,
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      ],
      amenities: ["City View", "Wifi", "Coffee Shop Below", "Public Transit"],
    },
    {
      id: "9",
      title: "Rustic Farmhouse",
      location: "Tuscany, Italy",
      price: 230,
      rating: 4.9,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=80",
      ],
      amenities: ["Vineyard", "Olive Grove", "Wine Cellar", "Cooking Classes"],
    },
    {
      id: "10",
      title: "Seaside Cottage",
      location: "Cornwall, UK",
      price: 140,
      rating: 4.7,
      images: [
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
        "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=800&q=80",
      ],
      amenities: ["Ocean View", "Beach Access", "Fireplace", "Garden"],
    },
    {
      id: "11",
      title: "Modern Ski Chalet",
      location: "Whistler, Canada",
      price: 320,
      rating: 4.8,
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
        "https://images.unsplash.com/photo-1585543805890-6051f7829f98?w=800&q=80",
      ],
      amenities: ["Ski-in/Ski-out", "Hot Tub", "Fireplace", "Mountain View"],
    },
    {
      id: "12",
      title: "Tropical Treehouse",
      location: "Costa Rica",
      price: 175,
      rating: 4.9,
      images: [
        "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?w=800&q=80",
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
      ],
      amenities: ["Jungle View", "Wildlife", "Outdoor Shower", "Hammock"],
    },
  ];

  const displayProperties =
    properties.length > 0 ? properties : defaultProperties;

  // Calculate pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = displayProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty,
  );
  const totalPages = Math.ceil(displayProperties.length / propertiesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white w-full">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-80 rounded-lg bg-gray-200 animate-pulse"
            ></div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {currentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 mb-12">
              <Pagination>
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                      />
                    </PaginationItem>
                  )}

                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        isActive={currentPage === index + 1}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PropertyGrid;
