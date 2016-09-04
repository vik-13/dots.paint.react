import SignIn from './components/sign-in/sign-in';
import SignUp from './components/sign-up/sign-up';
import Dashboard from './components/dashboard/dashboard';

import { addLayouts, selectLayout, addPaintings, selectPainting } from './app.actions';

import Api from './components/api/api';

import store from './store/store';

const authCheck = (nextState, replace, callback) => {
    Api.getCurrentUser().then((user) => {
        Api.getPaintings().then((snapshot) => {
            let paintings = snapshot.val();
            if (paintings) {
                addPaintings(store, paintings);
                selectPainting(store, paintings.length - 1);

                Api.getLayouts(paintings[paintings.length - 1].id).then((snapshot) => {
                    let layouts = snapshot.val();
                    if (layouts) {
                        addLayouts(store, layouts);
                        selectLayout(store, layouts.length - 1);
                    }
                    callback();
                });
            } else {
                callback();
            }
        });
    }, () => {
        replace('/sign-in');
        callback();
    });
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