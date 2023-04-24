import clsx from 'clsx';
import styles from './Cart.module.scss';
import CheckBox from '@/components/CheckBox/CheckBox';
import Image from '@/components/Image/Image';
import { i14prm } from '@/assets/images';
import CountMachine from '@/components/CountMachine/CountMachine';
import Price from '@/components/Price/Price';
import { useEffect, useState } from 'react';

function Cart() {
    const [checkAll, setCheckAll] = useState(false);

    const onCheckAll = () => {
        setCheckAll(!checkAll);
    };

    return (
        <div className={clsx(styles.container, 'wrapper')}>
            <p className={clsx(styles.title)}>Giỏ hàng của tôi</p>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>
                            <div className={clsx(styles.item)}>
                                <CheckBox className="ma-auto" onCheck={() => onCheckAll()} />
                            </div>
                        </th>

                        <th>
                            <div className={clsx(styles.item)}>Sản phẩm</div>
                        </th>

                        <th>
                            <div className={clsx(styles.item)}>Số lượng</div>
                        </th>

                        <th>
                            <div className={clsx(styles.item)}>Đơn giá</div>
                        </th>

                        <th>
                            <div className={clsx(styles.item)}>Thao tác</div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className={styles.itemInfo}>
                        <td>
                            <div className={clsx(styles.item)}>
                                <CheckBox className="ma-auto" isCheck={checkAll} />
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item)}>
                                <div className="row ali-center">
                                    <Image src={i14prm.black.i1} className={styles.itemImg} />

                                    <div>
                                        <p>iPhone 14 Pro Max 256GB</p>
                                        <p>4 khuyến mãi</p>

                                        <p>Màu đen</p>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item, 'w-fit-content ma-auto')}>
                                <CountMachine />
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item, 'w-fit-content ma-auto')}>
                                <Price price="12500000" disCount="12000000" direction="vertical" />
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item, 'text-center')}>Xóa</div>
                        </td>
                    </tr>
                    <tr className={styles.itemInfo}>
                        <td>
                            <div className={clsx(styles.item)}>
                                <CheckBox className="ma-auto" isCheck={checkAll} />
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item)}>
                                <div className="row ali-center">
                                    <Image src={i14prm.black.i1} className={styles.itemImg} />

                                    <div>
                                        <p>iPhone 14 Pro Max 256GB</p>
                                        <p>4 khuyến mãi</p>

                                        <p>Màu đen</p>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item, 'w-fit-content ma-auto')}>
                                <CountMachine />
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item, 'w-fit-content ma-auto')}>
                                <Price price="12500000" disCount="12000000" direction="vertical" />
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item, 'text-center')}>Xóa</div>
                        </td>
                    </tr>
                    <tr className={styles.itemInfo}>
                        <td>
                            <div className={clsx(styles.item)}>
                                <CheckBox className="ma-auto" isCheck={checkAll} />
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item)}>
                                <div className="row ali-center">
                                    <Image src={i14prm.black.i1} className={styles.itemImg} />

                                    <div>
                                        <p>iPhone 14 Pro Max 256GB</p>
                                        <p>4 khuyến mãi</p>

                                        <p>Màu đen</p>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item, 'w-fit-content ma-auto')}>
                                <CountMachine />
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item, 'w-fit-content ma-auto')}>
                                <Price price="12500000" disCount="12000000" direction="vertical" />
                            </div>
                        </td>

                        <td>
                            <div className={clsx(styles.item, 'text-center')}>Xóa</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Cart;
