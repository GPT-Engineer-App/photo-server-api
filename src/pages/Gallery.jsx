import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // TODO: Implement backend logic to fetch photos from the device
    // Example: fetchPhotos().then(setPhotos);
  }, []);

  const handleSearch = () => {
    // TODO: Implement backend logic to filter photos based on categories
    // Example: filterPhotos(searchTerm).then(setPhotos);
    console.log("Search term:", searchTerm);
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center space-x-2">
        <Input
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{photo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="mx-auto object-cover w-full h-[200px]"
                />
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No photos available</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;