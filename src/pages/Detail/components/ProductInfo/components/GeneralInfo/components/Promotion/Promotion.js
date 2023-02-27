// Framework
import { DetailContext } from '@/contexts';
import clsx from 'clsx';
import { useContext, useEffect } from 'react';

// Style
import styles from './Promotion.module.scss';

function Promotion() {
    const context = useContext(DetailContext);
    const { currPromotion, currPackage, currPackages, setCurrPackage, setCurrPackages } = context;

    useEffect(() => {
        if (currPromotion.packages !== currPackages) {
            setCurrPackages(currPromotion.packages);
            setCurrPackage();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currPackages]);

    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.wrapper)}>
                <div className={clsx(styles.header)}>
                    <p className={clsx(styles.title)}>Khuyến mãi</p>
                    <p className={clsx(styles.note)}>Giá và khuyến mãi dự kiến áp dụng đến {currPromotion.time}</p>
                </div>

                <ul>
                    <li>Chọn 1 trong {currPromotion.packages.length} khuyến mãi:</li>
                </ul>

                <div className={clsx(styles.list)}>
                    {currPromotion.packages.map((item) => (
                        <label
                            className={clsx(styles.item, 'row ali-center')}
                            key={item.id}
                            onClick={() => setCurrPackage(item)}
                        >
                            <input type="radio" name="promotion" />
                            <p className="ma-l-4">{item.value}</p>
                        </label>
                    ))}
                </div>

                <div className={clsx(styles.footer)}>
                    <p className={clsx(styles.note)}>
                        Giá hoặc khuyến mãi không áp dụng trả góp lãi suất đặc biệt (0%, 0.5%, 1%)
                    </p>
                </div>
            </div>

            {currPackage && (
                <div className={clsx(styles.wrapper)}>
                    <p className={clsx(styles.notify)}>Bạn đã chọn khuyến mãi: {currPackage.value}</p>
                </div>
            )}
        </div>
    );
}

export default Promotion;
