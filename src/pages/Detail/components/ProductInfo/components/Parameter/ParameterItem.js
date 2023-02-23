// Framework
import { Collapse } from 'react-collapse';
import clsx from 'clsx';
import { TbChevronDown } from 'react-icons/tb';

// Style
import styles from './Parameter.module.scss';
import { useState } from 'react';

function ParameterItem({ data }) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <div className={clsx(styles.title, 'row ali-center jus-between')} onClick={() => setCollapsed(!collapsed)}>
                <p>{data.name}</p>
                <div className={clsx(styles.action, { [styles.active]: collapsed }, 'row ali-center')}>
                    <TbChevronDown />
                </div>
            </div>

            <Collapse isOpened={collapsed} theme={{ collapse: clsx(styles.content) }}>
                {data.values.map((item, index) => (
                    <div className={clsx(styles.item, 'row jus-between')} key={index}>
                        <p className={clsx.name}>{item.name}</p>

                        <div>
                            {item.values.map((value) => (
                                <p key={value} className={clsx(styles.value)}>
                                    {value}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </Collapse>
        </div>
    );
}

export default ParameterItem;
