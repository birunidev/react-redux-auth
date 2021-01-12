const Teacher = ({ name, bio, follows, avatar }) => {
  return (
    <div className="teacher flex justify-between items-center my-6">
      <div className="flex">
        <img
          className="w-8 h-8 mr-3"
          src={avatar}
          alt=""
          data-testid="teacher-avatar"
        />
        <div>
          <p className="text-sm font-semibold" data-testid="teacher-name">
            {name}
          </p>
          <span
            className="text-xs block text-gray-400"
            data-testid="teacher-bio"
          >
            {bio}
          </span>
        </div>
      </div>
      <div className="hidden lg:block">
        <p data-testid="teacher-follows" className="text-sm font-semibold">
          {follows}
        </p>
        <span className="text-xs block">Follower</span>
      </div>
      <div>
        <button className="p-1 bg-blue-700 rounded">
          <img src="/assets/email-icon.svg" className="w-6 h-6" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Teacher;
