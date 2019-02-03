import asyncComponent from '../components/AsyncComponent';
import App from '../App';

const AsyncDashboard = asyncComponent(() => import('../pages/dashboard'));
const AsyncPageOne = asyncComponent(() => import('../pages/page1'));
const AsyncNotFound = asyncComponent(() => import('../pages/notfound'))
export default [
    {
        component: App,
        routes: [
            {
                component: AsyncDashboard,
                path: '/dashboard',
                exact: true,
            },
            {
                component: AsyncPageOne,
                path: '/pageone',
            },
            {
                component: AsyncNotFound
            }
        ]
    }
]