// Framework
import clsx from 'clsx';
import { memo } from 'react';

// Component
import CommentItem from './CommentItem';

// Style
import styles from '../Comment.module.scss';

function ReplyItem({ comments, comment }) {
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

    return finalReplys.map((finalReply, index) => <CommentItem key={index} info={finalReply} />);
}

export default memo(ReplyItem);
