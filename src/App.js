import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HabitsComponent from "./Component/Habits/HabitsComponent";
import NavbarComponent from "./Component/Navbar/NavbarComponent";
import WeekViewComponent from "./Component/WeekView/WeekViewComponent";
import { Provider } from "react-redux";
import { store } from "./redux/Store/store";
import About from "./Component/Habits/about/about";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarComponent />,
      children: [
        { path: "/", element: <HabitsComponent /> },
        { path: "weekview", element: <WeekViewComponent /> },
        {path: 'About',element:<About/>}
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
