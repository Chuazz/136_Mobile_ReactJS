import { BsBoxSeam, BsTruck, BsTelephone } from 'react-icons/bs';
import { TfiLoop } from 'react-icons/tfi';
import { HiOutlineShieldCheck } from 'react-icons/hi';

const productPolicys = [
    {
        id: 1,
        icon: <BsBoxSeam />,
        value: 'Bộ sản phẩm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C',
    },
    {
        id: 2,
        icon: <TfiLoop />,
        value: 'Hư gì đổi nấy 12 tháng tại 3484 siêu thị trên toàn quốc',
    },
    {
        id: 5,
        icon: <BsTelephone />,
        value: 'Tổng đài: 1900.9696.42 (9h00 - 21h00 mỗi ngày)',
    },
    {
        id: 4,
        icon: <BsTruck />,
        value: 'Giao hàng nhanh toàn quốc',
    },
    {
        id: 3,
        icon: <HiOutlineShieldCheck />,
        value: 'Bảo hành chính hãng 1 năm',
    },
];

export default productPolicys;
