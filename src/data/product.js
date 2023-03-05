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
                promotion: {
                    time: '23:59 | 24/02',
                    packages: ['discount1M', 'warranty12ms', 'insurance6msdrop'],
                },
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
                promotion: {
                    time: '23:59 | 24/02',
                    packages: ['discount1M', 'insurance6msdrop'],
                },
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

        packages: [
            {
                id: 'discount1M',
                value: 'Giảm giá 1.000.000đ',
            },
            {
                id: 'warranty12ms',
                value: 'Bảo hành 24 tháng (12 tháng chính hãng + 12 tháng bảo hành mở rộng) (Trị giá đến 2 triệu)',
            },
            {
                id: 'insurance6msdrop',
                value: 'Tặng gói bảo hiểm rơi vỡ 6 tháng (Trị giá đến 2 triệu)',
            },
        ],

        parameters: [
            {
                id: 'screen',
                name: 'Màn hình',
                values: [
                    {
                        name: 'Công nghệ màn hình',
                        values: ['OLED'],
                    },
                    {
                        name: 'Độ phân giải',
                        values: ['2796 x 1290 Pixels'],
                    },
                    {
                        name: 'Màn hình rộng',
                        values: ['6.7" - Tần số quét 120 Hz'],
                    },
                    {
                        name: 'Độ sáng tối đa',
                        values: ['2000 nits'],
                    },
                    {
                        name: 'Mặt kính cảm ứng',
                        values: ['Kính cường lực Ceramic Shield'],
                    },
                ],
            },
            {
                id: 'backcamera',
                name: 'Camera sau',
                values: [
                    {
                        name: 'Độ phân giải',
                        values: ['Chính 48 MP & Phụ 12 MP, 12 MP'],
                    },
                    {
                        name: 'Quay phim',
                        values: [
                            '4K 2160p@24fps',
                            '4K 2160p@30fps',
                            '4K 2160p@60fps',
                            'FullHD 1080p@30fps',
                            'FullHD 1080p@60fps',
                            'HD 720p@30fps',
                        ],
                    },
                ],
            },
        ],

        comments: [
            {
                productId: '14prm',
                capacityValue: '128GB',
                colorValue: '#594f63',
                conversations: [
                    {
                        id: 1,
                        role: 'user',
                        userName: 'Ngô Văn Sơn',
                        content: 'Sản phẩm này còn hàng tại thành phố Hồ Chí Minh không shop ????',
                        fullTime: 'Tue Feb 27 2020 09:17:11 GMT+0700 (Indochina Time)',
                        likes: 2,
                    },
                    {
                        id: 2,
                        role: 'user',
                        userName: 'Thanh Tài Lanh',
                        content: 'Thủ tục trả góp của sản phẩm này như nào vậy shop ?',
                        fullTime: 'Mon Feb 27 2023 09:17:11 GMT+0700 (Indochina Time)',
                        likes: 1,
                    },
                    {
                        id: 3,
                        replyId: 1,
                        role: 'admin',
                        userName: 'Quản trị viên',
                        content:
                            'Chào anh. sản phẩm hiện đang có tại các cửa hàng của 136 Mobile trên toàn quốc, rất mong được đón tiếp anh tại các cửa hàng của 136 mobile. Thông tin đến anh',
                        fullTime: 'Mon Feb 22 2023 09:17:11 GMT+0700 (Indochina Time)',
                        likes: 4,
                    },
                    {
                        id: 4,
                        replyId: 2,
                        role: 'user',
                        userName: 'Duy Đức',
                        content: 'Tiền ăn sáng thì deo có mà cứ đồi 14 pro max, hảo hảo chua cay',
                        fullTime: 'Mon Feb 22 2023 09:17:11 GMT+0700 (Indochina Time)',
                        likes: 4,
                    },
                    {
                        id: 5,
                        role: 'user',
                        userName: 'Thị Hà',
                        content: 'Có cửa hàng nào tại Bình Dương không nhể ?',
                        fullTime: 'Mon Feb 22 2023 09:17:11 GMT+0700 (Indochina Time)',
                        likes: 4,
                    },
                    {
                        id: 6,
                        role: 'admin',
                        replyId: 5,
                        userName: 'Quản trị viên',
                        content:
                            'Chào chị. sản phẩm hiện đang có tại các cửa hàng của 136 Mobile trên toàn quốc, rất mong được đón tiếp chị tại các cửa hàng của 136 mobile. Thông tin đến chị',
                        fullTime: 'Mon Feb 22 2023 09:17:11 GMT+0700 (Indochina Time)',
                        likes: 4,
                    },
                ],
            },
            {
                productId: '14prm',
                capacityValue: '128GB',
                colorValue: '#f4e8ce',
                conversations: [
                    {
                        id: 1,
                        role: 'user',
                        userName: 'Vịt Donald',
                        content: 'Ước gì được cửa hàng tặng cho 1 cái về sài chơi',
                        fullTime: 'Tue Feb 27 2020 09:17:11 GMT+0700 (Indochina Time)',
                        likes: 100,
                    },
                    {
                        id: 2,
                        role: 'admin',
                        replyId: 1,
                        userName: 'Quản trị viên',
                        content:
                            'Chào vịt. Đó là 1 việc rất khó đối với bên em, rất mong nhận được sự thông cảm từ vịt. Thông tin đến vịt',
                        fullTime: 'Mon Feb 22 2023 09:17:11 GMT+0700 (Indochina Time)',
                        likes: 4,
                    },
                ],
            },
        ],

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
