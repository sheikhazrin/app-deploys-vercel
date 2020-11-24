import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { loginContext } from "../services/loginContext";
import Topbar from "../components/Topbar";

const PublicRoute = ({ path, component: Component, render, ...rest }) => {
  const { checkAuth } = useContext(loginContext);
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Topbar />
          <Component {...props} />
          {/* <Footer /> */}
        </>
      )}
    />
  );
};

// const PublicRoute = ({ path, component: Component, render, ...rest }) => {
//   const { checkAuth } = useContext(loginContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (!checkAuth())
//           return Component ? <Component {...props} /> : render(props);
//         return (
//           <Redirect
//             to={{ pathname: "/dashboard", state: { from: props.location } }}
//           />
//         );
//       }}
//     />
//   );
// };
export default PublicRoute;

// const AuthRoute = ({ component: Component, ...rest }) => (
// 	<Route
// 		{...rest}
// 		render={(props) => (
// 			<>
// 				<SideBar />
// 				<Component {...props} />
// 				<Footer />
// 			</>
// 		)}
// 	/>
// );
// );
