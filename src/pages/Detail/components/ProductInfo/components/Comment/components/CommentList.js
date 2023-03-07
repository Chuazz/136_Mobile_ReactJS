// Framework
import { memo } from 'react';

// Component
import CommentItem from './CommentItem';

function CommentList({ comments }) {
    return (
        <div>
            {comments.map((comment) => {
                return <div key={comment.id}>{!comment.replyId && <CommentItem info={comment} />}</div>;
            })}
        </div>
    );
}

export default memo(CommentList);
