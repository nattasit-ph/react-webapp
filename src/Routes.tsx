import React from 'react'
import {Route, BrowserRouter as Router, Routes as Switch} from 'react-router-dom'
import FrontLayout from './components/layouts/FrontLayout';
import Home from './pages/Home';


// interface AppRouteProps {
//     component: React.ComponentType<any>;
//     layout: React.ComponentType<any>;
//     path: string;
//     exact?: boolean;
//     [key: string]: any; // To allow any additional props
// }

// const AppRoute: React.FC<AppRouteProps> = ({component: Component, layout: Layout, path, ...rest}) => {
//     return (
//         <Route 
//             {...rest} 
//             element={
//                 <Layout>
//                     <Component />
//                 </Layout>
//             }
//         />
//     );
// }

const Routes = () => {
  return (
    <Switch>
      {/* <AppRoute path="/" exact={true} layout={FrontLayout} component={Home} /> */}
      <Route 
        path="/" 
        element={
          <FrontLayout>
            <Home />
          </FrontLayout>
        } 
      />
    </Switch>
  );
}

export default Routes