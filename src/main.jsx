import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Home from "./routes/Home";
import NewPost from './routes/NewPost'
import App from './App';
const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/new",
        element: <NewPost/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
