// Framework
import clsx from 'clsx';
import { memo, useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';

// Component
import CommentItem from './CommentItem';

// Style
import styles from '../Comment.module.scss';
import { Collapse } from 'react-collapse';
import Button from '@/components/Button';

function ReplyItem({ comments, comment }) {
    const [commentcollapse, setCommentCollapse] = useState(false);

    const replys = comments.filter((t) => t.replyId === comment.id);
    const finalReplys = replys.map((reply) => {
        const content = (
            <>
                <span className={clsx(styles.userName, styles.replyUserName)}>{comment.userName} </span>
                {reply.content}
            </>
        );

        return {
            ...reply,
            content,
        };
    });

    return (
        <>
            {finalReplys.length > 0 && (
                <Button
                    className={clsx(styles.replyRole, styles.showAll)}
                    rightIconClass={clsx(styles.showIcon, 'row ali-center jus-center', {
                        [styles.active]: commentcollapse,
                    })}
                    rightIcon={<TbChevronDown />}
                    onClick={() => setCommentCollapse(!commentcollapse)}
                >
                    <p>Xem tất cả bình luận</p>
                </Button>
            )}

            <Collapse isOpened={commentcollapse} theme={{ collapse: clsx(styles.collapse) }}>
                {finalReplys.map((finalReply, index) => (
                    <CommentItem key={index} info={finalReply} />
                ))}
            </Collapse>
        </>
    );
}

export default memo(ReplyItem);
