import AllCourses from "components/AllCourses";
import AllTeachers from "components/AllTeachers";
import AllWebinars from "components/AllWebinars";
import FeaturedCourse from "components/AllCourses/FeaturedCourses";
import Navbar, { NavMobile } from "components/Navbar";
import requireAuth from "components/requireAuth";
import Sidebar from "components/Sidebar";
import React from "react";
import { featured_courses } from "data/featured_course";
import { all_courses } from "data/all_courses";
import { all_teachers } from "data/all_teachers";
import { all_webinars } from "data/all_webinars";

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row">
      <NavMobile />
      <div className="bg-indigo-900 w-full md:w-1/4 lg:w-1/3 h-auto">
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <div className="md:flex md:flex-row">
          <div className="w-full mx-auto">
            <section className="my-4 mx-4">
              <h1 className="text-lg font-semibold text-indigo-800">
                Featured Course
              </h1>
              <FeaturedCourse featuredCourses={featured_courses} />
            </section>
            <section className="my-4 mx-4">
              <h2 className="text-lg font-semibold text-indigo-800">
                All Courses
              </h2>
              <AllCourses allCourses={all_courses} />
            </section>

            <section className="my-4 mx-4">
              <div className="md:grid md:grid-cols-2 md:gap-5">
                <AllTeachers allTeachers={all_teachers} />
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-indigo-800">
                    Popular Online Webinars
                  </h3>
                  <AllWebinars allWebinars={all_webinars} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default requireAuth(Dashboard);
