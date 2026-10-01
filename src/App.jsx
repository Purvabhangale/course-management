import React from 'react'
import Navbar from './Componenets/Navbar'
import Login from '../Login'
import Register from './Pages/Register'
import CourseList from './Pages/CourseList'
import CourseDetails from './Pages/CourseDetails'


const App = () => {
  return (
    <div>
      <>
            <Navbar/> <Routes>
                <Route
                    path="/"element={<Login />}
                />

                <Route
                    path="/register" element={<Register/>}
                />

                <Route
                    path="/courses" element={<CourseList/>}
                />

                <Route
                    path="/courses/:id" element={<CourseDetails />}
                />

                <Route
                    path="/my-courses" element={<MyCourses />}
                />

              

            </Routes>
        </>
    </div>
  )
}

export default App