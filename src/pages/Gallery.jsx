import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Backend logic to filter photos based on categories
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
        {/* Placeholder for photos */}
        {/* Backend logic to fetch photos from the device and populate the gallery */}
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Photo {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg"
                alt="placeholder"
                className="mx-auto object-cover w-full h-[200px]"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;