import React from 'react'
import {Route, BrowserRouter as Router, Routes as Switch} from 'react-router-dom'
import FrontLayout from './components/layouts/FrontLayout';
import Home from './pages/Home';
import About from './pages/abouts/About';
import Team from './pages/teams/Team';
import Project from './pages/projects/Project';


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
      {/* <AppRoute path="/" exact={true} layout={FrontLayout} component={About} /> */}
      {/* <AppRoute path="/" exact={true} layout={FrontLayout} component={Team} /> */}
      {/* <AppRoute path="/" exact={true} layout={FrontLayout} component={Project} /> */}

      {/* <AppRoute path="/" exact={true} layout={AuthLayout} component={Login} /> */}
      {/* <AppRoute path="/" exact={true} layout={AuthLayout} component={Register} /> */}

      <Route path="/" element={<FrontLayout><Home /></FrontLayout>} />
      <Route path="/" element={<FrontLayout><About /></FrontLayout>} />
      <Route path="/" element={<FrontLayout><Team /></FrontLayout>} />
      <Route path="/" element={<FrontLayout><Project /></FrontLayout>} />
    </Switch>
  );
}

export default Routes