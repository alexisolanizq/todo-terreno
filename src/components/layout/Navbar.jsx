import { Link } from "react-router-dom"
import { menu } from "src/utils/menu"
import MobileMenu from "./MobileMenu"
import useNavbar from "src/components/layout/hooks/useNavbar"
import logo from "/public/logo.svg"

const Navbar = () => {

    const { visibleMenu, changeVisibility, setTheme, theme } = useNavbar()

    return (
        <header className="sticky top-0 z-30 w-full bg-white shadow-lg">
            <nav className="w-full bg-accent-bg">
                <div className="w-full lg:w-[80%] relative flex items-center justify-between mx-auto py-2 px-4 md:px-0">
                    <p className="text-primary text-xs lg:text-sm">Lun. - Sab. 08:00 a.m - 07:00 p.m </p>
                    <div className="flex items-center gap-4">
                        <button className="self-center">
                            <i className="ri-customer-service-line text-primary p-2 rounded-full text-xl" />
                        </button>
                        <div className="flex gap-x-5 lg:gap-x-10">
                            <button onClick={() => setTheme(!theme)}>
                                <i className="ri-moon-line text-xl text-primary" />
                            </button>
                            <button onClick={changeVisibility} className="block lg:hidden cursor-pointer">
                                <i className="ri-menu-3-fill text-2xl text-white" />
                            </button>
                            <MobileMenu visible={visibleMenu} />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full bg-white">
                <nav className="w-11/12 lg:w-[80%] mx-auto flex justify-between items-center py-4 lg:py-6">
                    <Link to={'/'} className="flex items-center">
                        <img src={logo} alt="Todo terreno logo" className="h-4 md:h-5" />
                    </Link>
                    <div className="hidden lg:flex items-center">
                        <ul className="flex gap-x-12 items-center">
                            {
                                menu.map((item) => (
                                    <li className="first:bg-orange-500 first:text-primary first:py-1 first:px-4 first:rounded-4xl font-medium text-black self-center" key={item.id}>
                                        <Link to={item.to}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex items-center gap-x-2 lg:gap-x-4">
                        <button className="self-center">
                            <i className="ri-user-line text-accent-orange p-2 rounded-full hover:bg-neutral-100 text-2xl lg:text-3xl" />
                        </button>
                        <button className="flex items-center justify-center gap-4">
                            <div className="relative">
                                <i className="ri-shopping-cart-line text-2xl lg:text-3xl text-accent-orange font-medium p-2 lg:p-0" />
                                <div className="badge absolute -right-1 -top-2 bg-orange-400 rounded-full text-xs font-semibold w-5 h-5 pt-0.5">4</div>
                            </div>
                            <div className="hidden md:flex flex-col items-start">
                                <p className="text-muted text-xs">Carrito de compras</p>
                                <p className="font-semibold text-sm">$438.92</p>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )

}

export default Navbar