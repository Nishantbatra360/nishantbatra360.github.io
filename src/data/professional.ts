import links from './links.json';

export interface SkillCategory {
    name: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        name: "Data Engineering",
        skills: [
            "ETL Pipelines",
            "Data Profiling",
            "Data Quality",
            "STTM Mapping",
            "Data Modeling",
            "Data Analysis"
        ]
    },
    {
        name: "Cloud & Platforms",
        skills: [
            "Snowflake",
            "Microsoft Azure",
            "Cloud Computing",
            "Data Warehousing",
            "Databases"
        ]
    },
    {
        name: "Programming & Query",
        skills: [
            "SQL",
            "Python",
            "Java",
            "JavaScript",
            "C#",
            "C++"
        ]
    },
    {
        name: "Analytics & BI",
        skills: [
            "Power BI",
            "DAX",
            "Data Visualization",
            "KPI Reporting",
            "Dashboard Development"
        ]
    },
    {
        name: "Tools & Practices",
        skills: [
            "MySQL",
            "Microsoft SQL Server",
            "Git",
            "Agile Delivery",
            "Software Testing"
        ]
    }
];

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    expiryDate?: string;
    skills?: string[];
    credentialUrl?: string;
}

export const certifications: Certification[] = [
    {
        name: "SnowPro Core Certification",
        issuer: "Snowflake",
        date: "Apr 2024",
        expiryDate: "Apr 2026",
        credentialId: "S0029296",
        skills: ["Cloud Computing", "Databases", "Snowflake Cloud"],
        credentialUrl: links.certifications.snowproCore
    },
    {
        name: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft", date: "May 2022",
        credentialUrl: links.certifications.azureFundamentals
    },
    {
        name: "Microsoft Certified: Power BI Data Analyst Associate",
        issuer: "Microsoft",
        date: "Jan 2026",
        expiryDate: "Jan 2027",
        skills: ["Power BI", "Data Modeling", "Data Visualization", "DAX"],
        credentialUrl: links.certifications.powerBiDataAnalystAssociate
    },
    {
        name: "Verified International Academic Qualifications",
        issuer: "World Education Services",
        date: "Aug 2023",
        credentialUrl: links.certifications.internationalAcademicQualifications
    }
];

export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    type: string;
    skills?: string[];
    current?: boolean;
}

export const experiences: Experience[] = [
    {
        title: "Solution Specialist",
        company: "Deloitte",
        location: "Moncton, New Brunswick, Canada",
        period: "Aug 2024 - Present",
        type: "Permanent Full-time",
        current: true
    },
    {
        title: "Solution Analyst",
        company: "Deloitte",
        location: "Moncton, New Brunswick, Canada",
        period: "Oct 2023 - Aug 2024",
        type: "Permanent Full-time"
    },
    {
        title: "Solution Developer",
        company: "Deloitte",
        location: "Moncton, New Brunswick, Canada",
        period: "Aug 2023 - Oct 2023",
        type: "Permanent Full-time"
    },
    {
        title: "Solution Developer",
        company: "Deloitte",
        location: "Montreal, Quebec, Canada",
        period: "Oct 2022 - Jul 2023",
        type: "Permanent Full-time",
        skills: ["Software Testing"]
    },
    {
        title: "Solution Associate",
        company: "Deloitte",
        location: "Montreal, Quebec, Canada",
        period: "May 2022 - Sep 2022",
        type: "Co-op",
        skills: ["Data Analysis", "Snowflake"]
    },
    {
        title: "Jr. Program Analyst",
        company: "IO Solutions Contact Center",
        location: "Montreal, Quebec, Canada",
        period: "Feb 2022 - Apr 2022",
        type: "Internship"
    },
    {
        title: "Proactive Sales Representative",
        company: "IO Solutions Contact Center",
        location: "Montreal, Quebec, Canada",
        period: "Nov 2020 - Jan 2022",
        type: "Part-time"
    },
    {
        title: "Associate Analyst",
        company: "Deloitte India (Offices of the US)",
        location: "Hyderabad, Telangana, India",
        period: "Jan 2020 - Apr 2020",
        type: "Full-time"
    }
];

export interface Language {
    name: string;
    proficiency: string;
}

export const languages: Language[] = [
    { name: "English", proficiency: "Professional working proficiency" },
    { name: "Hindi", proficiency: "Native or bilingual proficiency" },
    { name: "Punjabi", proficiency: "Native or bilingual proficiency" }
];
