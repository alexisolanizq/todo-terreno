import { useEffect, useState } from "react";

const useNavbar = () => {
    const [scrolling, setScrolling] = useState(false);

    const [visibleMenu, setVisibleMenu] = useState(false);

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
        scrolling,
        visibleMenu,
        changeVisibility,
    };
};

export default useNavbar;
