
import Header from "./components/Header"
import Footer from "./components/Footer"
import { createBrowserRouter,Outlet } from 'react-router-dom';
import Body from "./components/Body";
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";


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
      path:"/",
      element:<AppLayOut/>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Body></Body>
        },
        {
          path:"about",
          element:<About></About>
        },
        {
          path:"contact",
          element:<Contact></Contact>
        },
        {
          path:"restaurant/:resId",
          element:<RestaurantMenu></RestaurantMenu>
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
