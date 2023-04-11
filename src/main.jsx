import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import cartJobsLoader from './loaders/cartJobsLoader';
import JobDetails from './components/Jobs/JobDetails';
import jobDetailsById from './loaders/jobDetailsById';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: cartJobsLoader,
    children: [
      {
        path: '/',
        element: <Home />
      },
      // {
      //   path: 'job/',
      //   element: <JobDetails />,
      // },
      {
        path: 'job/:jobId',
        element: <JobDetails />,
        loader: ({params}) => jobDetailsById(`${params.jobId}`)
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs />
      },
      {
        path: 'blog',
        element: <Blog />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);