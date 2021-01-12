import React from "react";
import { CourseCard } from "./CourseCard";

export default function AllCourses({ allCourses }) {
  return (
    <div className="mt-4 md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 xl:grid-cols-4">
      {allCourses.length === 0 ? (
        <p>No Courses Added</p>
      ) : (
        allCourses.map((item, index) => {
          return (
            <CourseCard
              key={index}
              icon={item.icon}
              time={item.time}
              price={item.price}
              desc={item.desc}
              title={item.title}
            />
          );
        })
      )}
    </div>
  );
}
