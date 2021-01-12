import Webinar from "./Webinar";

export default function AllWebinars({ allWebinars }) {
  return (
    <div className="mt-5 w-auto">
      {allWebinars.length === 0 ? (
        <p>No Webinars</p>
      ) : (
        allWebinars.map((item, index) => {
          return (
            <Webinar
              key={index}
              title={item.title}
              img={item.img}
              follows={item.follows}
              time={item.time}
            />
          );
        })
      )}
    </div>
  );
}
