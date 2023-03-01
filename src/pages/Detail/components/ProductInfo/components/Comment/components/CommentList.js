// Framework
import clsx from 'clsx';

// Component
import CommentItem from './CommentItem';

// Style
import styles from '../Comment.module.scss';
import { memo } from 'react';

function CommentList({ comments }) {
    return comments.map((comment) => (
        <div key={comment.id}>
            {!comment.replyId && (
                <div>
                    <CommentItem info={comment} />
                    {comments
                        .filter((t) => t.replyId === comment.id)
                        .map((reply, index) => {
                            const content = (
                                <>
                                    <span className={clsx(styles.userName, styles.replyUserName)}>
                                        {comment.userName}{' '}
                                    </span>
                                    {reply.content}
                                </>
                            );

                            const finalReply = {
                                ...reply,
                                content,
                            };

                            return <CommentItem key={index} info={finalReply} />;
                        })}
                </div>
            )}
        </div>
    ));
}

export default memo(CommentList);
