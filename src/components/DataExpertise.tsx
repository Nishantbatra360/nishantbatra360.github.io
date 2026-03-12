import { motion } from 'framer-motion';
import styles from './DataExpertise.module.css';

const capabilities = [
    {
        title: 'Data Analysis',
        detail: 'Trend analysis, KPI slicing, and root-cause breakdown across transactional, operational, and analytical datasets.'
    },
    {
        title: 'Data Profiling',
        detail: 'Column-level null checks, distribution checks, uniqueness rules, and anomaly detection before transformation.'
    },
    {
        title: 'ETL Scripting',
        detail: 'Reusable SQL/Python scripts for extraction, standardization, deduplication, joins, and incremental loading.'
    },
    {
        title: 'STTM Design',
        detail: 'Source-to-Target mappings with field-level lineage, transformation logic, and business-rule annotations.'
    },
    {
        title: 'Data Modeling',
        detail: 'Star schemas with facts and dimensions optimized for analytics, reconciliation, and executive dashboards.'
    },
    {
        title: 'Data Quality',
        detail: 'Validation framework for referential integrity, reconciliation tolerances, and automated exception reporting.'
    },
    {
        title: 'Gen AI Automation',
        detail: 'Built Gen AI-powered tools to automate repetitive data tasks such as analysis support, profiling checks, and documentation acceleration.'
    }
];

const pipelineFlow = [
    'Source Systems',
    'Profiling Layer',
    'STTM Mapping',
    'ETL Pipelines',
    'Curated Data Mart',
    'BI Consumption'
];

export const DataExpertise = () => {
    return (
        <section id="expertise" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.title}>Data Engineering Expertise</h2>
                    <p className={styles.subtitle}>
                        End-to-end capability across data analysis, profiling, STTM-driven ETL development, and analytics model delivery.
                    </p>
                </motion.div>

                <div className={styles.capabilityGrid}>
                    {capabilities.map((item, index) => (
                        <motion.article
                            key={item.title}
                            className={styles.capabilityCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.detail}</p>
                        </motion.article>
                    ))}
                </div>

                <motion.section
                    className={styles.flowBoard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h3>Delivery Flow</h3>
                    <div className={styles.flowTrack}>
                        {pipelineFlow.map((step) => (
                            <div key={step} className={styles.flowNode}>
                                {step}
                            </div>
                        ))}
                    </div>
                </motion.section>

            </div>
        </section>
    );
};
