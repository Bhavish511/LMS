import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";

const CourseDetail = () => {
  const { allCourses, calculateRating, currency } = useContext(AppContext);
  const { id } = useParams();
  const [courseData, setCourseData] = React.useState(null);

  const fetchCourseData = async () => {
    const course = allCourses.find((course) => course._id === id);
    setCourseData(course);
  };
  useEffect(() => {
    fetchCourseData();
  }, []);
  return courseData ? (
    <>
      <div
        className="flex md:flex-row flex-col-reverse gap-10 relative 
      items-start justify-between md:px-36 px-8 md:pt-32 pt-20 text-left"
      >
        <div
          className="absolute top-0 left-0 w-full h-section-height z-10
        bg-gradient-to-b from-cyan-100/70"
        ></div>
        {/*Left column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="md:text-course-deatails-heading-large text-course-deatails-heading-small font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>
          <p
            className="pt-4 text-sm md:text-base"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>
          {/* Ratings and reviews */}
          <div className="flex -items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={
                    index < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt="star"
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})
            </p>
            <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>
          </div>
          <p className="text-sm">Course by <span className="text-blue-600 underline">GreatStack</span></p>
        </div>
        {/* right column */}
        <div></div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetail;
