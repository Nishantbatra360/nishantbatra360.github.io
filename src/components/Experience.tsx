import { motion } from 'framer-motion';
import styles from './Experience.module.css';
import links from '../data/links.json';

export const Experience = () => {
    return (
        <section id="experience" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.title}>Professional Experience</h2>
                    <p className={styles.subtitle}>
                        My journey in the tech industry
                    </p>
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.highlight}>
                        <div className={styles.company}>Deloitte</div>
                        <div className={styles.duration}>4+ Years</div>
                        <div className={styles.roles}>
                            <span className={styles.currentRole}>Solution Specialist</span>
                            <span className={styles.separator}>•</span>
                            <span>Solution Analyst</span>
                            <span className={styles.separator}>•</span>
                            <span>Solution Developer</span>
                            <span className={styles.separator}>•</span>
                            <span>Solution Associate</span>
                        </div>
                        <p className={styles.description}>
                            Progressed through multiple roles at Deloitte, focusing on solution development,
                            data analysis, cloud technologies (Snowflake, Azure), and ETL pipeline development.
                        </p>
                        <ul className={styles.impactList}>
                            <li>4+ years across 4 progressive engineering roles in enterprise delivery.</li>
                            <li>Contributed to 5+ data pipeline initiatives from development through production support.</li>
                            <li>Delivered projects across 3 locations: Moncton, Montreal, and Hyderabad.</li>
                        </ul>
                    </div>

                    <a
                        href={links.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkedinButton}
                    >
                        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                        </svg>
                        View Full Experience on LinkedIn
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
