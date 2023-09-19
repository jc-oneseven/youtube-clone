import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import UseMemoDemo from "./components/UseMemoDemo";
import UseRefDemo from "./components/UseRefDemo";
/**
 *
 * Head
 * Body
 *  Sidebar
 *    Menu Items
 *  MainContainer
 *    ButtonList
 *    VideoContainer
 *      VideoCard
 */

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
      {
        path: "/demo",
        element: (
          <>
            <UseMemoDemo />
            <UseRefDemo />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="h-full">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
