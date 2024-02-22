import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Students from './pages/Students';
import RootLayout from './pages/Root';
import SingleStudent from './pages/SingleStudent';
import UpdateStudentPage from './pages/UpdateStudentPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/students',
        element: <Students />,
      },
      {
        path: '/students/:id',
        element: <SingleStudent />,
      },
      {
        path: '/students/update/:id',
        element: <UpdateStudentPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
