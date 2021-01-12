import Stars from "components/Stars";

const FeaturedCourse = ({ img, title, mentor, price, star }) => {
  return (
    <div className="inline-block md:mr-5">
      <div className="featured-course rounded-3xl bg-white sm:flex sm:justify-between sm:items-center mb-4 p-3 pr-6 custom-shadow">
        <div className="featured-course__img sm:m-0 text-center">
          <img
            data-testid="featured-course-img"
            src={img}
            className="mx-auto"
            alt=""
          />
        </div>
        <div>
          <h2
            className="text-indigo-900 font-semibold"
            data-testid="featured-course-title"
          >
            {title}
          </h2>
          <Stars num={star} />
          <div className="mt-6">
            <span>
              by{" "}
              <span
                className="text-blue-500 mr-4"
                data-testid="featured-course-mentor"
              >
                {mentor}
              </span>
            </span>
            <span
              className="font-bold text-indigo-900"
              data-testid="featured-course-price"
            >
              ${price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourse;
