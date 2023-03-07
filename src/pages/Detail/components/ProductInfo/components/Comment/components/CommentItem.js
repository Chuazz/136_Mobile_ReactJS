// Framework
import { DetailContext } from '@/contexts';
import clsx from 'clsx';
import { useContext, useState } from 'react';
import { Collapse } from 'react-collapse';
import { FaUserSecret, FaUserNurse } from 'react-icons/fa';

// Component
import Button from '@/components/Button';
import CommentForm from './CommentForm';
import ReplyItem from './ReplyItem';
import { Like } from '@/components/SvgIcon';

// Util
import { getTimeOfComment } from '@/utils';

// Style
import styles from '../Comment.module.scss';

function CommentItem({ info }) {
    const [likes, setLikes] = useState();
    const [liked, setLiked] = useState(false);
    const [reply, setReply] = useState(false);
    const userName = '@' + info.userName + ' ';

    const context = useContext(DetailContext);
    const { currComments, setCurrComments } = context;

    const handleLikeClick = () => {
        if (!liked) {
            setLiked(true);
            setLikes((likes || info.likes) + 1);
        } else {
            setLiked(false);
            setLikes((likes || info.likes) - 1);
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

                            {(likes || info.likes) > 0 && (
                                <div className={clsx(styles.likeCount, 'row ali-center')}>
                                    <Like />

                                    {(likes || info.likes) > 1 && <p className="ma-l-4 p-r-4">{likes || info.likes}</p>}
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
                    className={clsx(styles.replyRole, styles.commentForm)}
                    commentText="Phản hồi"
                    onCancel={(setCollapsed) => {
                        setReply(false);
                        setCollapsed(true);
                    }}
                    onSubmit={(data, setCollapsed) => {
                        setCurrComments({
                            ...currComments,
                            conversations: [
                                {
                                    id: currComments.conversations.length + 1,
                                    replyId: info.id,
                                    role: 'user',
                                    userName: 'Vịt Donald',
                                    content: data.content.replace(userName, ''),
                                    fullTime: Date(),
                                    likes: 0,
                                },
                                ...currComments.conversations,
                            ],
                        });

                        setReply(false);
                        setCollapsed(true);
                    }}
                />
            </Collapse>

            <ReplyItem comments={currComments.conversations} comment={info} />
        </>
    );
}

export default CommentItem;
