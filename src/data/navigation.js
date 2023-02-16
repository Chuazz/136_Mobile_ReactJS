// Framework
import { AiFillHome } from 'react-icons/ai';
import { MdSmartphone, MdPhonelinkSetup } from 'react-icons/md';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { FaHeadphones } from 'react-icons/fa';

// Config
import { routes } from '@/config';

const navigations = [
    {
        id: 'home',
        name: 'Chính',
        path: routes.home,
        icon: <AiFillHome />,
    },
    {
        id: 'phone',
        name: 'iPhone',
        path: routes.phone,
        icon: <MdSmartphone />,
    },
    {
        id: 'old_phone',
        name: 'Cũ',
        path: routes.old_phone,
        icon: <MdPhonelinkSetup />,
    },
    {
        id: 'accessory',
        name: 'Phụ kiện',
        path: routes.accessory,
        icon: <FaHeadphones />,
    },
    {
        id: 'repair',
        name: 'Sửa chửa',
        path: routes.accessory,
        icon: <HiWrenchScrewdriver />,
    },
];

export default navigations;
