import SignIn from './components/sign-in/sign-in';
import SignUp from './components/sign-up/sign-up';
import Dashboard from './components/dashboard/dashboard';

const AppRoutes = {
    path: '/',
    indexRoute: { component: Dashboard },
    childRoutes: [
        { path: '/sign-in', component: SignIn },
        { path: '/sign-up', component: SignUp },
        { path: '/dashboard', component: Dashboard }
    ]
};

export default AppRoutes;