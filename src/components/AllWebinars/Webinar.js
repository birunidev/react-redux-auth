const Webinar = ({ img, title, time, follows }) => {
  return (
    <div className="flex justify-start md:items-center bg-white rounded p-2 mb-3">
      <div>
        <img data-testid="webinar-image" src={img} className="w-full" alt="" />
      </div>
      <div className="w-3/4">
        <p className="font-semibold my-3" data-testid="webinar-title">
          {title}
        </p>
        <div className="flex justify-start">
          <div className="mr-2 sm:mr-5">
            <img
              src="/assets/time-icon-pink.svg"
              className="inline-block"
              alt=""
            />
            <span className="text-xs md:text-sm" data-testid="webinar-time">
              {time}
            </span>
          </div>
          <div>
            <img
              src="/assets/follower-icon.svg"
              className="inline-block"
              alt=""
            />
            <span className="text-xs md:text-sm" data-testid="webinar-follows">
              {follows} Joined
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
