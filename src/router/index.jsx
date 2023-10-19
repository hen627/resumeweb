import { createHashRouter } from "react-router-dom";
import Home from '../pages/0. Home/Home'
import Resume from '../pages/1. Resume/Resume'
import Live from '../pages/2. Live Chat/Live'
import About from '../pages/3. About/About'
import Projects from '../pages/4. Projects/Projects'


const router = createHashRouter([

    {
        path: '/',
        element: <Home />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/live',
        element: <Live />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },

]);

export default router
// THE ABOVE IS ALL THE PATHS, ready, 
// but need to create the pages.