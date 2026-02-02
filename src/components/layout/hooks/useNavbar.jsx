import { useEffect, useState } from "react";

const useNavbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        if (theme) {
            document.querySelector("html").setAttribute('data-theme', 'dark');
        } else {
            document.querySelector("html").removeAttribute('data-theme', "dark");
        }
    }, [theme]);

    const changeVisibility = () => setVisibleMenu(!visibleMenu);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return {
        theme,
        setTheme,
        scrolling,
        visibleMenu,
        changeVisibility,
    };
};

export default useNavbar;
