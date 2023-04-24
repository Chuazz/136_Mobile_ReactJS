// Component
import routes from '@/config/routes';
import { Home, Phone, Accessory, Repair, OldPhone, Cart, Detail, Nofitication, Profile } from '@/pages/';

const publicRoutes = [
    {
        path: routes.home,
        element: Home,
    },
    {
        path: routes.phone,
        element: Phone,
    },
    {
        path: routes.accessory,
        element: Accessory,
    },
    {
        path: routes.repair,
        element: Repair,
    },
    {
        path: routes.old_phone,
        element: OldPhone,
    },
    {
        path: routes.cart,
        element: Cart,
    },
    {
        path: routes.detail,
        element: Detail,
    },
    {
        path: routes.notification,
        element: Nofitication,
    },
    {
        path: routes.profile,
        element: Profile,
    }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
