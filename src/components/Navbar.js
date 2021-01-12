export const NavMobile = () => {
  return (
    <header className="w-full md:hidden mx-auto px-3 py-2 bg-white ">
      <nav className="flex justify-between items-center">
        <form className="flex justify-start items-center">
          <img src="/assets/search-icon.svg" alt="" />
          <input
            placeholder="Search..."
            type="text"
            className="inline-block ml-3 focus:outline-none border border-white focus:border-gray-100 text-gray-400 px-4 py-3 w-3/4 xl:w-11/12"
          />
        </form>
        <div className="flex justify-between items-center">
          <button className="flex items-center">
            <img
              src="/assets/avatar.png"
              className="w-8 h-8 inline-block"
              alt=""
            />
            <img
              className="inline-block ml-2"
              src="/assets/drop-icon.svg"
              alt=""
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default function Navbar() {
  return (
    <header className="hidden md:block w-full md:w-auto mx-auto px-3 py-2 bg-white ">
      <nav className="flex justify-between items-center">
        <form className="flex justify-start items-center">
          <img src="/assets/search-icon.svg" alt="" />
          <input
            placeholder="Search..."
            type="text"
            className="inline-block ml-3 focus:outline-none border border-white focus:border-gray-100 text-gray-400 px-4 py-3 w-3/4 xl:w-11/12"
          />
        </form>
        <div className="flex justify-between items-center">
          <button className="mr-4 hidden md:block">
            <img src="/assets/email-icon-2.svg" alt="" />
          </button>
          <button className="mr-4 hidden md:block">
            <img src="/assets/notif-icon.svg" alt="" />
          </button>
          <button className="flex items-center">
            <img
              src="/assets/avatar.png"
              className="w-8 h-8 inline-block"
              alt=""
            />
            <img
              className="inline-block ml-2"
              src="/assets/drop-icon.svg"
              alt=""
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
