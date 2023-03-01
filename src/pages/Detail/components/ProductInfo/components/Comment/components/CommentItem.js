// Framework
import Button from '@/components/Button';
import Image from '@/components/Image';
import { Like } from '@/components/SvgIcon';
import { getTimeOfComment } from '@/utils';
import clsx from 'clsx';
import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { FaUserSecret, FaUserNurse } from 'react-icons/fa';

// Style
import styles from '../Comment.module.scss';
import CommentForm from './CommentForm';

function CommentItem({ info }) {
    const [likes, setLikes] = useState(info.likes);
    const [liked, setLiked] = useState(false);
    const [reply, setReply] = useState(false);

    const handleLikeClick = () => {
        if (!liked) {
            setLiked(true);
            setLikes(likes + 1);
        } else {
            setLiked(false);
            setLikes(likes - 1);
        }
    };

    return (
        <>
            <div className={clsx(styles.item, { [styles.replyRole]: info.replyId })}>
                <div className="row">
                    <div>
                        <Button
                            className={clsx(styles.userIcon, {
                                [styles.adminIcon]: info.role === 'admin' ? true : false,
                            })}
                            shape="circle"
                            leftIcon={info.role === 'user' ? <FaUserSecret /> : <FaUserNurse />}
                        />
                    </div>

                    <div className="flex-1">
                        <div className={clsx(styles.userInfo, 'relative')}>
                            <p className={clsx(styles.userName)}>{info.userName}</p>
                            <p className={clsx(styles.userContent)}>{info.content}</p>

                            {likes > 0 && (
                                <div className={clsx(styles.likeCount, 'row ali-center')}>
                                    <Like />

                                    {likes > 1 && <p className="ma-l-4 p-r-4">{likes}</p>}
                                </div>
                            )}
                        </div>
                        <div className={clsx(styles.userAction, 'row ali-center')}>
                            <p onClick={handleLikeClick} className={clsx(styles.likeBtn, { [styles.active]: liked })}>
                                Thích
                            </p>
                            <p onClick={() => setReply(true)}>Phản hồi</p>
                            <p className={clsx(styles.commentTime)}>{getTimeOfComment(info.fullTime, Date())}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Collapse isOpened={reply} theme={{ collapse: clsx(styles.collapse) }}>
                <CommentForm
                    isCollapsed
                    inputValue={'@' + info.userName + ' '}
                    className={clsx(styles.replyRole, styles.commentForm)}
                    commentText="Phản hồi"
                    onCancel={(setCollapsed) => {
                        setReply(false);
                        setCollapsed(true);
                    }}
                />
            </Collapse>
        </>
    );
}

export default CommentItem;
