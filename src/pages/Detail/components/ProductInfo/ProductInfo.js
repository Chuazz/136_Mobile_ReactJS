// Framework
import clsx from 'clsx';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { BsFillBagPlusFill, BsFillBagCheckFill } from 'react-icons/bs';

// Component
import GeneralInfo from '../GeneralInfo';
import Button from '@/components/Button';

// Style
import styles from './ProductInfo.module.scss';

// Data
import { detailTabs } from '@/data';

function ProductInfo({ info, capacity, color }) {
    return (
        <div className={clsx(styles.container)}>
            <Tabs selectedTabClassName={clsx(styles.activeTab)}>
                <TabList className={clsx(styles.tabs, 'row ali-center')}>
                    {detailTabs.map((detailTab) => (
                        <Tab className={clsx(styles.tab)} key={detailTab.id}>
                            {detailTab.name}

                            <div className={clsx(styles.border)}></div>
                        </Tab>
                    ))}
                </TabList>

                <div className={styles.tabContent}>
                    <TabPanel>
                        <GeneralInfo info={info} capacity={capacity} color={color} />
                    </TabPanel>

                    <TabPanel>Thông Số</TabPanel>

                    <TabPanel>Bình luận</TabPanel>
                </div>
            </Tabs>

            <div className="row ali-center jus-center ma-t-12">
                <Button
                    className={clsx(styles.action)}
                    rightIcon={<BsFillBagCheckFill />}
                    textClass={clsx(styles.actionContent)}
                >
                    Mua ngay
                </Button>
                <Button
                    className={clsx(styles.action)}
                    rightIcon={<BsFillBagPlusFill />}
                    textClass={clsx(styles.actionContent)}
                >
                    Thêm vào giỏ
                </Button>
            </div>
        </div>
    );
}

export default ProductInfo;
