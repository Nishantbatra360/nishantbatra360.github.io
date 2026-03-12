export const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navOffset = 84;
    const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: 'smooth' });

    if (window.location.hash !== '#/') {
        window.history.replaceState(null, '', '#/');
    }
};
