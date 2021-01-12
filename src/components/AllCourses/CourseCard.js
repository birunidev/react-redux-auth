export const CourseCard = ({ title, icon, time, price, desc }) => {
  return (
    <div className="course-card p-6  bg-white rounded-xl custom-shadow mb-5 md:mb-0">
      <div className="flex justify-between items-center my-3 mb-8">
        <div>
          <img data-testid="course-icon" src={icon} alt="" />
        </div>
        <button>
          <img src="/assets/kebab.svg" alt="" />
        </button>
      </div>
      <div className="my-4">
        <h5 className="text-indigo-900 font-bold" data-testid="course-title">
          {title}
        </h5>
        <p className="text-gray-custom text-sm my-3" data-testid="course-desc">
          {desc}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="p-2 bg-gray-100 rounded">
          <img
            src="/assets/time-icon.svg"
            className="inline-block mr-3"
            alt=""
          />
          <span className="inline-block text-xs" data-testid="course-time">
            {time}
          </span>
        </span>
        <span
          className="font-bold text-indigo-900 w-auto"
          data-testid="course-price"
        >
          ${price}
        </span>
      </div>
    </div>
  );
};
