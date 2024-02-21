import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Students from './pages/Students';
import RootLayout from './pages/Root';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
