// Framework
import clsx from 'clsx';
import { useContext } from 'react';
import { DetailContext } from '@/contexts';

// Component
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

// Style
import styles from './Comment.module.scss';

function Comment() {
    const context = useContext(DetailContext);
    const { currComments } = context;

    return (
        <div className={clsx(styles.container)}>
            <div>
                <CommentForm />
            </div>

            <div className="ma-t-24">
                <CommentList comments={currComments.conversations} />
            </div>
        </div>
    );
}

export default Comment;
