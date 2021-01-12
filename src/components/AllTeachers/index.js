import Teacher from "./Teacher";

export default function AllTeachers({ allTeachers }) {
  return (
    <div className="all-teachers bg-white shadow-custom p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">
          All Teachers
        </h3>
        <p className="text-xs">View All</p>
      </div>
      {allTeachers.length === 0 ? (
        <p data-testid="no-teacher-text">No Teacher</p>
      ) : (
        allTeachers.map((item, index) => {
          return (
            <Teacher
              bio={item.bio}
              name={item.name}
              follows={item.follows}
              avatar={item.avatar}
              key={index}
            />
          );
        })
      )}
    </div>
  );
}
