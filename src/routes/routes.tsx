import { createBrowserRouter } from "react-router-dom";
import { LogIn } from "./Authentication/LogIn/LogIn";
import { Register } from "./Authentication/Register/Register";
import { AddCourse } from "./Courses/Pages/AddCourse/AddCourse";
import { AddLesson } from "./Courses/Pages/AddLesson/AddLesson";
import { Course } from "./Courses/Pages/Course/Course";
import { CourseEdit } from "./Courses/Pages/CourseEdit/CourseEdit";
import { Courses } from "./Courses/Pages/Courses/Courses";
import { InstructorsCourses } from "./Courses/Pages/Courses/InstructorsCourses";
import { LessonPage } from "./Courses/Pages/LessonPage/Lesson";
import { Home } from "./Home/Home";
import { Layout } from "./Layout/Layout";

const authPages = [
    {
      path: 'signIn',
      element: <LogIn />
    },
    {
      path: 'register',
      element: <Register />
    },
  ];
  
  const coursesPages = [
    {
      path: 'courses',
      element: <Courses />,
    },
    {
      path: 'courses/:courseId/lesson/add-new',
      element: <AddLesson />
    },  
    {
      path: 'courses/:courseId/lesson/:lessonId',
      element: <LessonPage />
    }, 
    {
      path: 'courses/:courseId/edit',
      element: <CourseEdit />
    },
    {
      path: 'courses/:courseId',
      element: <Course />
    },
    {
      path: 'courses/:instructors',
      element: <InstructorsCourses />
    },
    {
      path: 'courses/:add-course',
      element: <AddCourse />
    },  
  ];
  
export const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />
          },  
          ...authPages,
          ...coursesPages
        ]
      },    
  ]);