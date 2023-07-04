
import Header from "./components/Header"
import Footer from "./components/Footer"
import { createBrowserRouter,Outlet } from 'react-router-dom';
import Body from "./components/Body";
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import Cart from "./components/Cart";


const AppLayOut = ()=>{
  return(
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

const appRouter = createBrowserRouter(
  [
    {
      path:"",
      element:<AppLayOut/>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Body></Body>
        },
        {
          path:"About",
          element:<About></About>
        },
        {
          path:"Contact",
          element:<Contact></Contact>
        }

      ]
    },
    {
      path:"/Cart",
      element:<Cart></Cart>
    }

  ]
)



export default appRouter;
