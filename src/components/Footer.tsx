import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';
import links from '../data/links.json';

export const Footer = () => {
    const lastUpdated = new Date().toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });

    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a href={links.social.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href={links.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a
                    href={`mailto:${links.contact.email}`}
                    className={styles.socialLink}
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
            </div>
            <p className={styles.text}>
                © {new Date().getFullYear()} Nishant Batra. Data Engineer Portfolio.
            </p>
            <p className={styles.updated}>Last updated: {lastUpdated}</p>
        </footer>
    );
};
