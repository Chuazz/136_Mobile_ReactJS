// Framework
import clsx from 'clsx';
import { FaUserSecret, FaUserNurse } from 'react-icons/fa';
import { Collapse } from 'react-collapse';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

// Component
import Button from '@/components/Button';

// Style
import styles from '../Comment.module.scss';
import { useState } from 'react';

function CommentForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
    } = useForm();
    const onSubmit = (data) => console.log(data);

    const [collapsed, setCollapsed] = useState(false);
    const [writting, setWritting] = useState(false);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
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

                <Collapse isOpened={collapsed} theme={{ content: clsx(styles.collapse, 'row jus-end') }}>
                    <Button
                        className={clsx(styles.uploadBtn, styles.cancel)}
                        onClick={(e) => {
                            resetField('content');
                            setCollapsed(false);
                            e.preventDefault();
                        }}
                    >
                        Hủy
                    </Button>
                    <Button className={clsx(styles.uploadBtn)}>Bình luận</Button>
                </Collapse>
            </form>
        </>
    );
}

export default CommentForm;
