import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import profileImage from '../assets/profile.jpg';
import cyberpunkAvatar from '../assets/cyberpunk_avatar.png';
import resumePdf from '../assets/Nishant_Batra_Resume.pdf';
import { scrollToSection } from '../utils/scrollToSection';
import { useTheme } from '../context/useTheme';

export const Hero = () => {
    const { theme } = useTheme();

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={`${styles.content} ${theme === 'cyberpunk' ? styles.cyberpunkContent : ''}`}>
                    <motion.span
                        className={styles.greeting}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hi, I'm Nishant Batra
                    </motion.span>

                    <motion.div
                        className={styles.openTo}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                    >
                        Open to: Technical Consultant | Data Consultant | Analytics Consultant
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className={styles.titleGradient}>Data Engineer</span> specializing in ETL & Cloud Migration
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Transforming raw data into actionable insights through robust ETL pipelines, cloud-native solutions, and scalable data infrastructure.
                    </motion.p>

                    <motion.p
                        className={styles.aboutInline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        Data Engineer with enterprise delivery experience across ETL modernization, cloud migration, analytics-ready modeling, web development using React.js, Node.js, and Python, and Gen AI-based task automation for data workflows.
                    </motion.p>

                    <motion.div
                        className={styles.inlineStats}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.28 }}
                    >
                        <span className={styles.statPill}><strong>4+</strong> Years Experience</span>
                        <span className={styles.statPill}><strong>5+</strong> Pipelines Delivered</span>
                        <span className={styles.statPill}><strong>10+</strong> Technologies</span>
                    </motion.div>

                    <motion.div
                        className={styles.stackStrip}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.29 }}
                    >
                        <span>Production Stack</span>
                        <span>Azure</span>
                        <span>Snowflake</span>
                        <span>SQL</span>
                        <span>Python</span>
                        <span>Power BI</span>
                    </motion.div>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a
                            href="#/"
                            className={`${styles.button} ${styles.primaryButton}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('expertise');
                            }}
                        >
                            View Expertise
                        </a>
                        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.secondaryButton}`}>
                            Download Resume
                        </a>
                        <a
                            href="#/"
                            className={`${styles.button} ${styles.secondaryButton}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('contact');
                            }}
                        >
                            Get In Touch
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.profileImageContainer}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img src={theme === 'cyberpunk' ? cyberpunkAvatar : profileImage} alt="Nishant Batra" className={styles.profileImage} />
                </motion.div>
            </div>
        </section>
    );
};
