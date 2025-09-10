import React, { useState } from "react";
import {
  ArrowLeft,
  Camera,
  Edit,
  MapPin,
  Star,
  Calendar,
  Home,
  Heart,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import Testcomponent from "./Testcomponent";
import Aboutcomponent from "./Aboutcomponent";

interface ProfilePageProps {
  onBack?: () => void;
}

const ProfilePage = ({ onBack }: ProfilePageProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Travel enthusiast and photographer. Love exploring new cultures and meeting people from around the world. Host since 2019.",
    joinDate: "March 2019",
    verified: true,
    languages: ["English", "Spanish", "French"],
    responseRate: "98%",
    responseTime: "Within an hour",
  });

  const [bookings] = useState([
    {
      id: 1,
      property: "Cozy Downtown Loft",
      location: "New York, NY",
      dates: "Dec 15-18, 2023",
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80",
    },
    {
      id: 2,
      property: "Beachfront Villa",
      location: "Miami, FL",
      dates: "Nov 20-25, 2023",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80",
    },
  ]);

  const [wishlist] = useState([
    {
      id: 1,
      property: "Mountain Cabin Retreat",
      location: "Aspen, CO",
      price: "$280/night",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
    },
    {
      id: 2,
      property: "Historic City Apartment",
      location: "Paris, France",
      price: "$150/night",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&q=80",
    },
  ]);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="mr-4"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold">Profile</h1>
          </div>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            variant={"destructive"}
          >
            {isEditing ? (
              "Save Changes"
            ) : (
              <>
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </>
            )}
          </Button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card className="bg-white">
              <CardContent className="p-6">
                <Separator className="my-6" />
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <Avatar className="h-32 w-32 mx-auto">
                        <AvatarImage
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
                          alt={profile.name}
                        />
                        <AvatarFallback className="text-2xl">SJ</AvatarFallback>
                      </Avatar>
                      {isEditing && (
                        <Button
                          size="icon"
                          className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                        >
                          <Camera className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="mt-4">
                      {isEditing ? (
                        <Input
                          value={profile.name}
                          onChange={(e) =>
                            setProfile({ ...profile, name: e.target.value })
                          }
                          className="text-center text-xl font-bold"
                        />
                      ) : (
                        <h2 className="text-xl font-bold">{profile.name}</h2>
                      )}

                      <div className="flex items-center justify-center mt-2 text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {isEditing ? (
                          <Input
                            value={profile.location}
                            onChange={(e) =>
                              setProfile({
                                ...profile,
                                location: e.target.value,
                              })
                            }
                            className="text-center"
                          />
                        ) : (
                          <span>{profile.location}</span>
                        )}
                      </div>
                    </div>

                    {profile.verified && (
                      <Badge className="mt-3 bg-green-100 text-green-800">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {profile.languages.map((lang) => (
                        <Badge key={lang} variant="secondary">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Aboutcomponent
                    bio={profile.bio}
                    isEditing={isEditing}
                    onBioChange={(bio) => setProfile({ ...profile, bio })}
                  >
                    <h3 className="font-semibold mb-2">Languages</h3>
                  </Aboutcomponent>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Response rate:</span>
                      <p className="text-gray-600">{profile.responseRate}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Response time:</span>
                      <p className="text-gray-600">{profile.responseTime}</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Joined:</span>
                    <p className="text-gray-600">{profile.joinDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="bookings" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="bookings" className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Bookings
                </TabsTrigger>
                <TabsTrigger value="wishlist" className="flex items-center">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </TabsTrigger>
                <TabsTrigger value="hosting" className="flex items-center">
                  <Home className="h-4 w-4 mr-2" />
                  Hosting
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bookings" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="flex items-center space-x-4 p-4 border rounded-lg"
                        >
                          <img
                            src={booking.image}
                            alt={booking.property}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold">
                              {booking.property}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {booking.location}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {booking.dates}
                            </p>
                          </div>
                          <Badge
                            variant={
                              booking.status === "Upcoming"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wishlist" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Wishlist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {wishlist.map((item) => (
                        <div
                          key={item.id}
                          className="border rounded-lg overflow-hidden"
                        >
                          <img
                            src={item.image}
                            alt={item.property}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold">{item.property}</h3>
                            <p className="text-gray-600 text-sm">
                              {item.location}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="text-sm ml-1">
                                  {item.rating}
                                </span>
                              </div>
                              <span className="font-semibold">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hosting" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Hosting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Testcomponent />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <Testcomponent
              title="Start hosting today"
              description="Earn extra income and meet interesting guests by sharing your space."
              buttonText="Become a Host"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
