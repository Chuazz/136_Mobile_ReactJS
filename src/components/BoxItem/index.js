// Framework
import propTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Image from '../Image';

// Style
import styles from './BoxItem.module.scss';
import { memo } from 'react';

const BoxItem = ({ className, data, imgClass, titleClass, descriptionClass }) => {
    const classNames = clsx(styles.container, className, 'row ali-center');

    return (
        <Link className={classNames} to={data.linkTo}>
            <Image src={data.imgPath} className={clsx(styles.img, imgClass)} />

            <div className="ma-l-12">
                <p className={clsx(styles.title, titleClass)}>{data.title}</p>
                {data.description && <p className={clsx(styles.description, descriptionClass)}>{data.description}</p>}
            </div>
        </Link>
    );
};

BoxItem.propTypes = {
    className: propTypes.string,
    data: propTypes.object.isRequired,
    imgClass: propTypes.string,
    titleClass: propTypes.string,
    descriptionClass: propTypes.string,
};

export default memo(BoxItem);
