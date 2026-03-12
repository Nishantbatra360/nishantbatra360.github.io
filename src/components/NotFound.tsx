import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.title}>Page Not Found</h2>
                <p className={styles.message}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <button onClick={() => navigate('/')} className={styles.button}>
                    Go Back Home
                </button>
            </div>
        </section>
    );
};
