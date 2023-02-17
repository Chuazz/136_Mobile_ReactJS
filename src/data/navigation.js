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
        linkTo: routes.home,
        icon: <AiFillHome />,
    },
    {
        id: 'phone',
        name: 'iPhone',
        linkTo: routes.phone,
        icon: <MdSmartphone />,
    },
    {
        id: 'old_phone',
        name: 'Cũ',
        linkTo: routes.old_phone,
        icon: <MdPhonelinkSetup />,
    },
    {
        id: 'accessory',
        name: 'Phụ kiện',
        linkTo: routes.accessory,
        icon: <FaHeadphones />,
    },
    {
        id: 'repair',
        name: 'Sửa chửa',
        linkTo: routes.accessory,
        icon: <HiWrenchScrewdriver />,
    },
];

export default navigations;
