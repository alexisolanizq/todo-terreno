import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCartQuery } from "src/modules/store/cart/queries/cart.query";

const useNavbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [theme, setTheme] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const { data: cart } = useCartQuery()

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

    const linkTo = (path = '') => {
        navigate(path)
        changeVisibility()
    }

    return {
        cart,
        theme,
        linkTo,
        setTheme,
        location,
        scrolling,
        visibleMenu,
        changeVisibility,
    };
};

export default useNavbar;
