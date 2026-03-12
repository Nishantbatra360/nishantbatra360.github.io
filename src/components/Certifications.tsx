import { motion } from 'framer-motion';
import { certifications } from '../data/professional';
import styles from './Certifications.module.css';

export const Certifications = () => {
    return (
        <section id="certifications" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.title}>Certifications</h2>
                    <p className={styles.subtitle}>
                        Professional credentials and recognitions
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.cardContent}>
                                {cert.credentialUrl ? (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.certNameLink}
                                    >
                                        <h3 className={styles.certName}>{cert.name}</h3>
                                    </a>
                                ) : (
                                    <h3 className={styles.certName}>{cert.name}</h3>
                                )}
                                <div className={styles.issuer}>{cert.issuer}</div>
                                <div className={styles.date}>
                                    Issued {cert.date}
                                    {cert.expiryDate && ` • Expires ${cert.expiryDate}`}
                                </div>
                                {cert.credentialId && (
                                    <div className={styles.credential}>
                                        Credential ID: <span>{cert.credentialId}</span>
                                    </div>
                                )}
                                {cert.skills && (
                                    <div className={styles.skills}>
                                        {cert.skills.map((skill) => (
                                            <span key={skill} className={styles.skillTag}>{skill}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
