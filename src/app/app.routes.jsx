import SignIn from './components/sign-in/sign-in';
import SignUp from './components/sign-up/sign-up';
import Dashboard from './components/dashboard/dashboard';

import { addLayouts, selectLayout } from './app.actions';

import Api from './components/api/api';

import store from './store/store';

const authCheck = (nextState, replace, callback) => {
    if (!Api.getCurrentUser()) {
        replace('/sign-in');
        callback();
    } else {
        Api.getData().then((snapshot) => {
            var layouts = snapshot.val();
            if (layouts) {
                addLayouts(store, layouts);
                selectLayout(store, layouts.length - 1);
            }
            callback();
        });
    }
};

const AppRoutes = {
    path: '/',
    indexRoute: { component: Dashboard, onEnter: authCheck },
    childRoutes: [
        { path: '/sign-in', component: SignIn },
        { path: '/sign-up', component: SignUp },
        { path: '/dashboard', component: Dashboard, onEnter: authCheck }
    ]
};

export default AppRoutes;