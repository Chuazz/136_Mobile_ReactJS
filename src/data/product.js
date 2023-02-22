import { i14prm } from '@/assets/images';

const products = [
    {
        id: '14prm',
        name: 'iPhone 14 Pro Max',
        description:
            'Bắt trọn chi tiết ấn tượng với Camera Chính 48MP. Trải nghiệm iPhone theo cách hoàn toàn mới với Dynamic Island và màn hình Luôn Bật. Công nghệ an toàn quan trọng – Phát Hiện Va Chạm thay bạn gọi trợ giúp khi cần thiết.',

        capacities: [
            {
                value: '128GB',
                price: 29190000,
                discount: 34490000,
                colors: [
                    {
                        linkTo: '14prm?v=128GB&c=594f63',
                        label: 'Tím',
                        value: '#594f63',
                    },
                    {
                        linkTo: '14prm?v=128GB&c=f4e8ce',
                        label: 'Vàng',
                        value: '#f4e8ce',
                    },
                    {
                        linkTo: '14prm?v=128GB&c=403e3d',
                        label: 'Đen',
                        value: '#403e3d',
                    },
                    {
                        linkTo: '14prm?v=128GB&c=f0f2f2',
                        label: 'Bạc',
                        value: '#f0f2f2',
                    },
                ],
            },
            {
                value: '256GB',
                price: 31690000,
                colors: [
                    {
                        linkTo: '14prm?v=256GB&c=594f63',
                        label: 'Tím',
                        value: '#594f63',
                    },
                    {
                        linkTo: '14prm?v=256GB&c=f4e8ce',
                        label: 'Vàng',
                        value: '#f4e8ce',
                    },
                ],
            },
        ],

        promotions: [],

        parameters: [],

        sharedImgs: [
            {
                colorValue: '#594f63',
                imgPaths: [
                    i14prm.purple.i1,
                    i14prm.purple.i2,
                    i14prm.purple.i3,
                    i14prm.purple.i5,
                    i14prm.purple.i6,
                    i14prm.purple.i7,
                ],
            },
            {
                colorValue: '#f4e8ce',
                imgPaths: [
                    i14prm.yellow.i1,
                    i14prm.yellow.i2,
                    i14prm.yellow.i3,
                    i14prm.yellow.i4,
                    i14prm.yellow.i5,
                    i14prm.yellow.i6,
                    i14prm.yellow.i7,
                ],
            },
            {
                colorValue: '#403e3d',
                imgPaths: [
                    i14prm.black.i1,
                    i14prm.black.i2,
                    i14prm.black.i3,
                    i14prm.black.i4,
                    i14prm.black.i5,
                    i14prm.black.i6,
                    i14prm.black.i7,
                ],
            },
            {
                colorValue: '#f0f2f2',
                imgPaths: [
                    i14prm.gray.i1,
                    i14prm.gray.i2,
                    i14prm.gray.i3,
                    i14prm.gray.i4,
                    i14prm.gray.i5,
                    i14prm.gray.i6,
                    i14prm.gray.i7,
                ],
            },
            {
                colorValue: 'all',
                imgPaths: [i14prm.i1, i14prm.i2, i14prm.i3, i14prm.i4],
            },
        ],
    },
];

export default products;
