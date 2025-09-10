import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface PropertyCardProps {
  id?: string;
  title?: string;
  location?: string;
  price?: number;
  rating?: number;
  images?: string[];
  amenities?: string[];
  onClick?: () => void;
}

const PropertyCard = ({
  id = "1",
  title = "Cozy Apartment with Mountain View",
  location = "San Francisco, California",
  price = 120,
  rating = 4.8,
  images = [
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
  ],
  amenities = ["WiFi", "Kitchen", "Free parking", "Pool"],
  onClick = () => {},
}: PropertyCardProps) => {
  return (
    <Card
      className="overflow-hidden h-full bg-white cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={image}
                    alt={`${title} - image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        <div className="absolute top-3 right-3 z-10">
          <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
            New
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-current text-yellow-500" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-2">{location}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {amenities.map((amenity, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs bg-slate-50"
            >
              {amenity}
            </Badge>
          ))}
        </div>

        <div className="mt-auto">
          <p className="font-semibold">
            ${price}{" "}
            <span className="font-normal text-muted-foreground">/ night</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
