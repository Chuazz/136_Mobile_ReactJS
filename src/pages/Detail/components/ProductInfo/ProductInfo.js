// Framework
import clsx from 'clsx';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

// Style
import styles from './ProductInfo.module.scss';

// Data
import { detailTabs } from '@/data';
import GeneralInfo from '../GeneralInfo';

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
        </div>
    );
}

export default ProductInfo;
