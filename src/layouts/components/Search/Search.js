// Framework
import clsx from 'clsx';
import { memo, useEffect, useRef, useState } from 'react';

// Component
import Box from '@/components/Box';
import BoxItem from '@/components/BoxItem';
import Popup from '@/components/Popup';
import { MagnifyingGlass } from '@/components/SvgIcon/SvgIcon';

// Style
import styles from './Search.module.scss';

const testData = {
    imgPath:
        'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_300x300/https://cdn.tgdd.vn/Products/Images/42/289700/s16/iPhone-14-Pro-series-%20(1)-650x650.png',
    title: 'iPhone 14 Pro Max Đen 256GB',
    linkTo: '/test1/test2',
};

const Search = () => {
    const [content, setcontent] = useState('');
    const [visible, setVisible] = useState(true);
    const tippyProp = {
        visible: content && visible ? true : false,
    };

    const inputRef = useRef();
    const resultRef = useRef();

    const tippyRender = (
        <div>
            <div className="row ali-center ma-b-16">
                <MagnifyingGlass className={clsx(styles.icon)} />
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
            </Box>
        </div>
    );

    useEffect(() => {
        const onClick = (e) => {
            const resultClass = `.${resultRef.current.className}`;
            const inputClass = `.${inputRef.current.className}`;

            if (!e.target.closest(resultClass) && !e.target.closest(inputClass)) {
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
                className={clsx(styles.container)}
                renderClass={clsx(styles.result)}
                tippyRender={tippyRender}
                tippyProp={tippyProp}
                ref={resultRef}
            >
                <div className="row ali-center">
                    <MagnifyingGlass className={clsx(styles.icon)} />

                    <input
                        ref={inputRef}
                        className={clsx(styles.content)}
                        placeholder="Tìm kiếm điện thoại, phụ kiện"
                        spellCheck={false}
                        onInput={onInput}
                        onClick={onClick}
                    />
                </div>
            </Popup>
        </div>
    );
};

export default memo(Search);
