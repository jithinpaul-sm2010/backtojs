import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function VideoCarouselBasicExample() {
  return (
    <>
      <TECarousel showControls showIndicators crossfade ride="carousel">
        <div className="relative h-96 overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video className="w-full" autoPlay loop muted>
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Click</h5>
              <p>Learning Tailwind.</p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video className="w-full" autoPlay loop muted>
              <source
                src="https://tecdn.b-cdn.net/img/video/forest.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Updates</h5>
              <p>Learn.</p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video className="w-full" autoPlay loop muted>
              <source
                src="https://tecdn.b-cdn.net/img/video/Agua-natural.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Video</h5>
              <p>Video 3.</p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
