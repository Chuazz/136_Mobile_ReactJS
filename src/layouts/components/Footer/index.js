// Framework
import clsx from 'clsx';

// Style
import styles from './Footer.module.scss';

// Component
import Logo from '@/components/Logo';

// Data
import { abouts, infos } from '@/data';
import Button from '@/components/Button';

function Footer() {
    return (
        <div className={clsx(styles.container, 'wide')}>
            <div
                className="row jus-center"
                style={{
                    maxWidth: 1100,
                    margin: '0 auto',
                }}
            >
                <div className={clsx(styles.column, 'h-3')}>
                    <Logo className={clsx(styles.logo)} />

                    <div className={clsx(styles.list)}>
                        {infos.map((info) => (
                            <div key={info.name}>
                                <Button className={clsx(styles.listItem)} textClass={clsx(styles.title)}>
                                    {info.name}:
                                    <a className="ma-l-4" href={info.link}>
                                        {info.value}
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={clsx(styles.column, 'h-2 row jus-center')}>
                    <div>
                        <div className={clsx(styles.logo)}>
                            <h2>VỀ 136</h2>
                        </div>

                        <div className={clsx(styles.list)}>
                            {abouts.map((about) => (
                                <div key={about.name}>
                                    <Button
                                        className={clsx(styles.listItem)}
                                        tag="link"
                                        linkTo={about.path}
                                        textClass={clsx(styles.title)}
                                    >
                                        {about.name}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.column, 'h-2 row jus-center')}>
                    <div>
                        <div className={clsx(styles.logo)}>
                            <h2>SẢN PHẨM</h2>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.column, 'h-2 row jus-center')}>
                    <div>
                        <div className={clsx(styles.logo)}>
                            <h2>CÔNG CỤ</h2>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.column, 'h-3')}>
                    <div>
                        <div className={clsx(styles.logo)}>
                            <h2>CỬA HÀNG MUA BÁN VÀ SỬA CHỬA ĐIỆN THOẠI 136</h2>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.copyRight, 'h-12')}>
                    <p>&copy; 2023 136 mobile. Cửa hàng mua bán và sửa chửa điện thoại</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
