// Framework
import clsx from 'clsx';

// Style
import styles from './Comment.module.scss';
import CommentForm from './components/CommentForm';

function Comment() {
    return (
        <div className={clsx(styles.container)}>
            <div>
                <CommentForm />
            </div>
        </div>
    );
}

export default Comment;
