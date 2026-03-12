import { motion } from 'framer-motion';
import styles from './Education.module.css';

const educationData = [
    {
        school: "Institut supérieur d'informatique ISI",
        degree: "Attestation of college studies",
        field: "Programming and Web Technologies",
        period: "Sep 2020 - Sep 2022",
        location: "Montreal, Canada"
    },
    {
        school: "Dyal Singh College",
        degree: "Bachelor's degree",
        field: "Computer Programming/Programmer, General",
        period: "2016 - 2019",
        location: "India"
    }
];

export const Education = () => {
    return (
        <section id="education" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.title}>Education</h2>
                    <p className={styles.subtitle}>
                        Academic background and qualifications
                    </p>
                </motion.div>

                <div className={styles.timeline}>
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.marker}></div>
                            <div className={styles.content}>
                                <h3 className={styles.school}>{edu.school}</h3>
                                <div className={styles.degree}>
                                    {edu.degree} • {edu.field}
                                </div>
                                <div className={styles.meta}>
                                    <span className={styles.period}>{edu.period}</span>
                                    <span className={styles.separator}>•</span>
                                    <span className={styles.location}>{edu.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
