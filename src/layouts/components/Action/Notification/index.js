// Framework
import { memo } from 'react';
import { BsBellFill } from 'react-icons/bs';
import clsx from 'clsx';

// Component
import Popup from '@/components/Popup';
import Button from '@/components/Button';
import Box from '@/components/Box';
import BoxItem from '@/components/BoxItem';

// Style
import styles from './Notification.module.scss';

// Image
import { logo } from '@/assets/images';

const testData = {
    imgPath: logo,
    title: 'iPhone 14 Pro Max Đen 256GB',
    linkTo: '/test1/test2',
    description: "7 ngày trước"
};

function Notification() {
    const tippyRender = (
        <Box title="Thông báo" showMore="Đánh dấu đã đọc" showMoreLink="test" headerClass={clsx(styles.header)} titleClass={clsx(styles.title)} className={clsx(styles.items)}>
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
            <BoxItem className={clsx(styles.item)} data={testData} imgClass={clsx(styles.img)} />
        </Box>
    );
    const tippyProp = {
        trigger: 'click',
    };
    return (
        <Popup tippyProp={tippyProp} tippyRender={tippyRender} renderClass={clsx(styles.container)}>
            <Button leftIcon={<BsBellFill />} />
        </Popup>
    );
}

export default memo(Notification);
