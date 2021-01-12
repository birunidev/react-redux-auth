import { Link } from "react-router-dom";

export const SidebarItem = ({ path, img, label }) => {
  return (
    <div className="py-4 items-center">
      <img
        src={img}
        alt=""
        className="md:w-4 md:h-4 w-6 h-6 inline-block mr-3"
      />
      <Link
        className="text-md md:text-md font-medium text-gray-custom"
        to={path}
      >
        {label}
      </Link>
    </div>
  );
};

export default function Sidebar() {
  return (
    <>
      <div className="md:hidden py-2">
        <div className="text-right container mx-auto">
          <button className="mr-3">
            <img src="/assets/bars-icon.svg" alt="" />
          </button>
        </div>
      </div>
      <nav className="flex flex-col bg-indigo-900 py-5">
        <div className="hidden md:block pl-4 mt-1 mb-8">
          <img src="/assets/sidebar-logo.svg" className="w-24" alt="" />
        </div>
        <ul className="px-2">
          <li className="text-center md:text-left px-3">
            <SidebarItem
              path="/"
              img="/assets/dashboard-icon.svg"
              label="Dashboard"
            />
          </li>
          <li className="text-center md:text-left px-3">
            <SidebarItem
              path="/courses"
              img="/assets/course-icon.svg"
              label="Courses"
            />
          </li>
          <li className="text-center md:text-left px-3">
            <SidebarItem
              path="/"
              img="/assets/teacher-icon.svg"
              label="Teachers"
            />
          </li>
          <li className="text-center md:text-left px-3">
            <SidebarItem path="/" img="/assets/book-icon.svg" label="Library" />
          </li>
          <li className="text-center md:text-left px-3">
            <SidebarItem
              path="/"
              img="/assets/setting-icon.svg"
              label="Settings"
            />
          </li>
        </ul>
        <ul className="mt-12 px-2">
          <li className="text-center md:text-left px-3">
            <SidebarItem
              path="/logout"
              img="/assets/logout.svg"
              label="Logout"
            />
          </li>
        </ul>
      </nav>
    </>
  );
}
