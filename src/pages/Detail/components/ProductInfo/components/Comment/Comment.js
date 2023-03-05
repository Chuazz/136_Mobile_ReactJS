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
    const { currComments, setCurrComments } = context;

    return (
        <div className={clsx(styles.container)}>
            <div>
                <CommentForm
                    onSubmit={(data) => {
                        setCurrComments({
                            ...currComments,
                            conversations: [
                                {
                                    id: Math.random(),
                                    role: 'user',
                                    userName: 'Vịt Donald',
                                    content: data.content,
                                    fullTime: Date(),
                                    likes: 0,
                                },
                                ...currComments.conversations,
                            ],
                        });
                    }}
                />
            </div>

            <div className="ma-t-16">
                <CommentList comments={currComments.conversations} />
            </div>
        </div>
    );
}

export default Comment;
