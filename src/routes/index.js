// Component
import routes from '@/config/routes';
import { Home, Phone, Accessory, Repair, OldPhone, Cart } from '@/pages/';

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
