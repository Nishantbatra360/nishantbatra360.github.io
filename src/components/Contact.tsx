import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Contact.module.css';
import links from '../data/links.json';

export const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.title}>Let's Connect</h2>
                <p className={styles.text}>
                    I'm always open to discussing data engineering initiatives, analytics challenges, and opportunities to build reliable data platforms.
                </p>

                <p className={styles.emailLine}>
                    Email: <a href={`mailto:${links.contact.email}`}>{links.contact.email}</a>
                </p>

                <div className={styles.socialContainer}>
                    <a
                        href={links.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialLink} ${styles.linkedin}`}
                    >
                        <FaLinkedin className={styles.icon} />
                        <span>Connect on LinkedIn</span>
                    </a>

                    <a
                        href={links.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialLink} ${styles.github}`}
                    >
                        <FaGithub className={styles.icon} />
                        <span>Check out my GitHub</span>
                    </a>

                    <a
                        href={links.documents.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialLink} ${styles.resume}`}
                    >
                        <span>View Resume</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
