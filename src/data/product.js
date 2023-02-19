const products = [
    {
        id: '14prm',
        name: 'iPhone 14 Pro Max',

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
                        linkTo: '14prm?v=256gb&c=594f63',
                        label: 'Tím',
                        value: '#594f63',
                    },
                    {
                        linkTo: '14prm?v=128GB&c=f4e8ce',
                        label: 'Vàng',
                        value: '#f4e8ce',
                    },
                ],
            },
        ],

        sharedImgs: [
            {
                colorValue: '#594f63',
                imgPaths: [
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone-14-pro-max-tim-650x650.png',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-1_deep_purple_color-0-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-1_deep_purple_color-1-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-2_design-2-3-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-3_camera-3-3-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-4_design_detail-4-3-650x650.jpg',

                    // 'https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_004.jpg',
                    // 'https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_005.jpg',
                    // 'https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_006.jpg',
                    // 'https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_007.jpg',
                    // 'https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_010.jpg',
                    // 'https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_011.jpg',
                ],
            },
            {
                colorValue: '#f4e8ce',
                imgPaths: [
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone-14-pro-max-vang-650x650.png',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/phone_14_pro_max_pdp_position-1_gold_color-0-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/phone_14_pro_max_pdp_position-1_gold_color-1-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-2_design-2-2-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-3_camera-3-2-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-4_design_detail-4-2-650x650.jpg',
                ],
            },
            {
                colorValue: '#403e3d',
                imgPaths: [
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone-14-pro-max-den-650x650.png',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-1_space_black_color-0-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-1_space_black_color-1-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-2_design-2-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-3_camera-3-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-4_design_detail-4-650x650.jpg',
                ],
            },
            {
                colorValue: '#f0f2f2',
                imgPaths: [
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone-14-pro-max-trang-650x650.png',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-1_silver_color-0-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-1_silver_color-1-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-2_design-2-1-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-3_camera-3-1-650x650.jpg',
                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone_14_pro_max_pdp_position-4_design_detail-4-1-650x650.jpg',
                ],
            },
            {
                colorValue: 'all',
                imgPaths: [],
            },
        ],
    },
];

export default products;
