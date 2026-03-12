import styles from './Navbar.module.css';
import { ThemeToggle } from './ThemeToggle';
import { scrollToSection } from '../utils/scrollToSection';

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
];

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                Nishant<span>Batra</span>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.links}>
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href="#/"
                        className={styles.link}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.id);
                        }}
                    >
                        {link.label}
                    </a>
                ))}
                </div>
                <ThemeToggle />
            </div>
        </nav>
    );
};
