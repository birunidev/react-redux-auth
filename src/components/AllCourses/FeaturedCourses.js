import { useRef } from "react";
import FeaturedCourse from "./FeaturedCourse";

export default function FeaturedCourses({ featuredCourses }) {
  const featureWrapper = useRef();

  const scroll = (scrollOffset) => {
    featureWrapper.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="md:relative ">
      <div className="overflow-hidden">
        <div
          className="featured-courses grid grid-cols-2 gap-2 md:block md:whitespace-nowrap my-3 w-full md:overflow-y-auto"
          ref={featureWrapper}
        >
          {featuredCourses &&
            (featuredCourses.length === 0 ? (
              <>
                <p data-testid="no-feature-text">No Featured Courses</p>
              </>
            ) : (
              featuredCourses.length > 0 &&
              featuredCourses.map((item, index) => {
                return (
                  <FeaturedCourse
                    key={index}
                    img={item.img}
                    title={item.title}
                    mentor={item.mentor}
                    price={item.price}
                    star={item.stars}
                  />
                );
              })
            ))}
        </div>
      </div>

      <div className="hidden md:block md:absolute md:top-16 md:-left-4 z-20">
        <button
          onClick={() => scroll(-300)}
          className="bg-white rounded-full w-8 h-8 text-pink-400"
        >
          {"<"}
        </button>
      </div>
      <div className="hidden md:block md:absolute md:top-16 md:-right-4 z-20">
        <button
          onClick={() => scroll(300)}
          className="bg-white rounded-full w-8 h-8 text-pink-400"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
