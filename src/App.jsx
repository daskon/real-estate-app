import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/homePage/Home';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';
import LoginPage from "./routes/loginPage/LoginPage"
import Layout from './routes/layout/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/login",
          element: <LoginPage/>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App