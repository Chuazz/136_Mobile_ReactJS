// Framework
import clsx from 'clsx';
import { FaUserSecret } from 'react-icons/fa';
import { Collapse } from 'react-collapse';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

// Component
import Button from '@/components/Button';

// Style
import styles from '../Comment.module.scss';
import { useState } from 'react';

function CommentForm({
    className,
    isCollapsed = false,
    commentText = 'Bình luận',
    onCancel = () => {},
    onSubmit = () => {},
}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
    } = useForm();

    const [collapsed, setCollapsed] = useState(isCollapsed);
    const [writting, setWritting] = useState(false);

    const handleOnSubmit = (data) => {
        resetField('content');
        setCollapsed(false);
        onSubmit(data, (value) => {
            setCollapsed(value);
        });
    };

    const hanldeCancleClick = (e) => {
        resetField('content');
        setCollapsed(false);
        onCancel((value) => {
            setCollapsed(value);
        });
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleOnSubmit)} className={className}>
                <div className="row">
                    <div>
                        <Button leftIcon={<FaUserSecret />} className={clsx(styles.userIcon)} shape="circle"></Button>
                    </div>
                    <div className="flex-1">
                        <div
                            className={clsx(
                                { [styles.error]: errors.content, [styles.writting]: writting },
                                'relative',
                            )}
                        >
                            <ReactTextareaAutosize
                                {...register('content', {
                                    required: 'Nội dung không được để trống',
                                })}
                                placeholder="Thêm bình luận..."
                                onClick={() => {
                                    setCollapsed(true);
                                    setWritting(true);
                                }}
                                spellCheck={false}
                                className={clsx(styles.content)}
                                onBlur={() => {
                                    setWritting(false);
                                }}
                            />
                            <div className={styles.contentBorder}></div>
                        </div>

                        <ErrorMessage
                            errors={errors}
                            name="content"
                            render={({ message }) => <p className={clsx(styles.errorMess)}>{message}</p>}
                        />
                    </div>
                </div>

                <Collapse
                    isOpened={collapsed}
                    theme={{ content: clsx('row jus-end ma-t-12'), collapse: clsx(styles.collapse) }}
                >
                    <Button className={clsx(styles.uploadBtn, styles.cancel)} onClick={hanldeCancleClick}>
                        Hủy
                    </Button>
                    <Button className={clsx(styles.uploadBtn)}>{commentText}</Button>
                </Collapse>
            </form>
        </>
    );
}

export default CommentForm;
