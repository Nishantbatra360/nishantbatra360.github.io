import { motion } from 'framer-motion';
import { skillsData } from '../data/professional';
import styles from './Skills.module.css';

export const Skills = () => {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.title}>Skills & Expertise</h2>
                    <p className={styles.subtitle}>
                        Technologies and tools I work with
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.name}
                            className={styles.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className={styles.categoryName}>{category.name}</h3>
                            <div className={styles.skillsList}>
                                {category.skills.map((skill) => (
                                    <span key={skill} className={styles.skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
