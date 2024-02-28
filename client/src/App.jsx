import "./App.css";
import { useEffect, useState } from "react";
import getCourse from "./api/course";
function App() {
  const [course, setCourse] = useState(null);
  const fetchData = async () => {
    const app = await getCourse();
    console.log(app?.data);
    setCourse(app?.data?.response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex gap-3">
      {course?.map((el, index) => {
        return (
          <div key={index} className="shadow-lg border-2 m-[50px] rounded-lg">
            <div className="h-[200px] object-cover">
              <img src={el?.image} className="h-[100%] w-[100%] rounded-t-lg" />
            </div>
            <div className="m-[10px]">
              <h2 className="font-bold">
                {el?.title}
                {" - "}
                {el?.course_id}
              </h2>
              <h3>{el?.teacher}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
