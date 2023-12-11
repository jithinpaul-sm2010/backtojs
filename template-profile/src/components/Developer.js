// src/components/Developer.js
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import VideoCarouselBasicExample from "./Carousel";

const Developer = () => {
  return (
    <div className="min-h-fit bg-gray-50 flex flex-col">
      <Header />

      <VideoCarouselBasicExample />
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Hello Dashboard</h1>
        <p className="text-gray-600">Main content</p>
      </main>
      <Footer />
    </div>
  );
};

export default Developer;
