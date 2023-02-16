// Framework
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { memo, useContext } from 'react';
import { PageContext } from '@/contexts/pageProvider';
import clsx from 'clsx';

// Component
import Image from '../Image';

// Style
import styles from './Logo.module.scss';

// Image
import { logo } from '@/assets/images';
import routes from '@/config/routes';

const Logo = ({ className }) => {
    const context = useContext(PageContext);

    return (
        <div className={clsx(styles.container, className)}>
            <div className="row ali-center">
                <Link to={routes.home} className="row ali-center">
                    <Image src={logo} onClick={() => context.onClick('home')} />
                </Link>
                <p className={clsx(styles.title)}>Mua bán và sửa chữa</p>
            </div>
        </div>
    );
};

Logo.propTypes = {
    className: propTypes.string,
};

export default memo(Logo);
