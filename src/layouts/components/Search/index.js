// Framework
import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

// Component
import Popup from '@/components/Popup';
import Box from '@/components/Box';

// Style
import styles from './Search.module.scss';
import BoxItem from '@/components/BoxItem';

const testData = {
    imgPath:
        'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_300x300/https://cdn.tgdd.vn/Products/Images/42/289700/s16/iPhone-14-Pro-series-%20(1)-650x650.png',
    title: "iPhone 14 Pro Max Đen 256GB",
    linkTo: "/test1/test2"
};

function Search() {
    const [content, setcontent] = useState('');
    const [visible, setVisible] = useState(true);
    const tippyProp = {
        visible: content && visible ? true : false,
        // visible: true,
    };

    const tippyRender = (
        <div>
            <div className="row ali-center ma-b-16">
                <FiSearch className={clsx(styles.icon)} />
                <div className={clsx(styles.title)}>Kết quả tìm kiếm cho '{content}'</div>
            </div>

            <Box title="Điện thoại" showMore="Xem thêm" showMoreLink="test" isDevided>
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
                <BoxItem data={testData} />
            </Box>
        </div>
    );

    useEffect(() => {
        const onClick = (e) => {
            if (!e.target.closest(`.${styles.result}`) && !e.target.closest(`.${styles.content}`)) {
                setVisible(false);
            }
        };

        window.addEventListener('click', onClick);

        return () => window.removeEventListener('click', onClick);
    });

    const onInput = (e) => {
        setcontent(e.target.value);
        setVisible(true);
    };

    const onClick = (e) => {
        if (e.target.value !== '') {
            setVisible(true);
        }
    };

    return (
        <div>
            <Popup
                className={clsx(styles.container, 'row ali-center relative')}
                renderClass={clsx(styles.result)}
                tippyRender={tippyRender}
                tippyProp={tippyProp}
            >
                <FiSearch className={clsx(styles.icon)} />

                <input
                    className={clsx(styles.content)}
                    placeholder="Tìm kiếm điện thoại, phụ kiện"
                    spellCheck={false}
                    onInput={onInput}
                    onClick={onClick}
                />
            </Popup>
        </div>
    );
}

export default memo(Search);

{
    /* {visible && (
                            <>
                                <ImSpinner7 className={clsx(styles.icon, styles.spinner)} />
                                <div className={clsx(styles.title)}>Kết quả tìm kiếm cho '{content}'</div>
                            </>
                        )} */
}
