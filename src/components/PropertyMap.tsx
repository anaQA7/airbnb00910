import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Testcomponent from "./Testcomponent";
import { MapPin, X, ZoomIn, ZoomOut, Move } from "lucide-react";

interface Property {
  id: string;
  title: string;
  price: number;
  location: {
    lat: number;
    lng: number;
  };
  image: string;
}

interface PropertyMapProps {
  properties?: Property[];
  onPropertySelect?: (propertyId: string) => void;
  selectedProperty?: string;
  className?: string;
}

const PropertyMap = ({
  properties = [
    {
      id: "1",
      title: "Modern Downtown Apartment",
      price: 120,
      location: { lat: 40.7128, lng: -74.006 },
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80",
    },
    {
      id: "2",
      title: "Cozy Beach House",
      price: 200,
      location: { lat: 40.72, lng: -73.99 },
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80",
    },
    {
      id: "3",
      title: "Mountain Retreat",
      price: 150,
      location: { lat: 40.73, lng: -74.02 },
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=80",
    },
  ],
  onPropertySelect = () => {},
  selectedProperty,
  className = "",
}: PropertyMapProps) => {
  const [previewProperty, setPreviewProperty] = useState<string | null>(null);
  const [zoom, setZoom] = useState(12);

  // Mock function to handle map interactions
  const handleMarkerClick = (propertyId: string) => {
    setPreviewProperty(propertyId);
    onPropertySelect(propertyId);
  };

  const handleClosePreview = () => {
    setPreviewProperty(null);
  };

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 1, 20));
  };

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 1, 1));
  };

  // Find the property being previewed
  const previewedProperty = properties.find((p) => p.id === previewProperty);

  return (
    <div
      className={`relative bg-gray-100 rounded-lg overflow-hidden ${className}`}
      style={{ height: "700px" }}
    >
      {/* Map placeholder - in a real implementation, this would be replaced with a map library like Google Maps or Mapbox */}
      <div className="w-full h-full bg-gray-200 relative">
        {/* Fake map background */}
        <div className="absolute inset-0 bg-[#e8ecef] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {/* Fake map grid lines */}
            <div className="grid grid-cols-8 h-full w-full">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <div key={`col-${i}`} className="border-r border-gray-400">
                    <Testcomponent
                      title="Start hosting today"
                      description="Earn extra income and meet interesting guests by sharing your space."
                      buttonText="Become a Host"
                    />
                  </div>
                ))}
            </div>
            <div className="grid grid-rows-8 h-full w-full">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={`row-${i}`}
                    className="border-b border-gray-400"
                  ></div>
                ))}
            </div>
          </div>
        </div>

        {/* Property markers */}
        {properties.map((property) => (
          <div
            key={property.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 ${selectedProperty === property.id ? "z-20" : "z-10"}`}
            style={{
              top: `${30 + (property.location.lat - 40.7) * 1000}%`,
              left: `${50 + (property.location.lng + 74) * 100}%`,
            }}
            onClick={() => handleMarkerClick(property.id)}
          >
            <div
              className={`flex flex-col items-center ${selectedProperty === property.id ? "scale-110" : ""}`}
            >
              <div
                className={`p-2 rounded-full ${selectedProperty === property.id ? "bg-primary text-white" : "bg-white text-primary"} shadow-md`}
              >
                <MapPin size={20} />
              </div>
              {selectedProperty === property.id && (
                <div className="mt-1 px-2 py-1 bg-white rounded-md shadow-md text-xs font-medium">
                  ${property.price}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Property preview card */}
        {previewedProperty && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-64">
            <Card className="overflow-hidden">
              <div className="relative h-32">
                <img
                  src={previewedProperty.image}
                  alt={previewedProperty.title}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1 right-1 bg-white/80 rounded-full h-6 w-6"
                  onClick={handleClosePreview}
                >
                  <X size={14} />
                </Button>
              </div>
              <CardContent className="p-3">
                <h4 className="font-medium text-sm">
                  {previewedProperty.title}
                </h4>
                <p className="text-sm font-bold mt-1">
                  ${previewedProperty.price}{" "}
                  <span className="font-normal text-muted-foreground">
                    night
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Map controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-white"
            onClick={handleZoomIn}
          >
            <ZoomIn size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white"
            onClick={handleZoomOut}
          >
            <ZoomOut size={18} />
          </Button>
          <Button variant="outline" size="icon" className="bg-white">
            <Move size={18} />
          </Button>
        </div>

        {/* Zoom level indicator */}
        <div className="absolute bottom-4 right-4 bg-white/80 px-2 py-1 rounded text-xs">
          Zoom: {zoom}x
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;
