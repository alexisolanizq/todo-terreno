import { Link } from "react-router-dom"
import { menu } from "src/utils/menu"
import MobileMenu from "./MobileMenu"
import useNavbar from "src/hooks/layout/useNavbar"

const Navbar = () => {

    const { visibleMenu, changeVisibility } = useNavbar()

    return (
        <header className="sticky top-0 z-30 w-full bg-white shadow-lg">
            <nav className="w-full bg-hero">
                <div className="w-11/12 lg:w-[80%] relative flex items-center justify-between mx-auto py-2 px-4 md:px-0">
                    <p className="text-primary text-sm lg:text-base">Envíos 08:00 a.m - 07:00 p.m </p>
                    <div className="flex gap-10">
                        <div className="hidden lg:flex items-center">
                            <ul className="flex gap-x-12 items-center">
                                {
                                    menu.map((item) => (
                                        <li className="first:bg-orange-500 first:py-1 first:px-4 first:rounded-4xl text-primary text-sm self-center" key={item.id}>
                                            <Link to={item.to}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="flex gap-x-5 lg:gap-x-10">
                            <button>
                                <i className="ri-moon-line text-2xl text-primary" />
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
                <nav className="w-11/12 lg:w-[80%] mx-auto flex justify-between items-center py-3 px-4 md:px-0">
                    <Link to={'/'} className="flex items-center">
                        <img src="/src/assets/images/logo.svg" alt="Todo terreno logo" className="w-16 md:w-19" />
                    </Link>
                    <div className="flex items-center gap-8">
                        <button className="self-center">
                            <i className="ri-user-line text-accent-orange p-2 rounded-full hover:bg-neutral-100 text-3xl" />
                        </button>
                        <button className="self-center">
                            <i className="ri-customer-service-line text-accent-orange p-2 rounded-full hover:bg-neutral-100 text-3xl" />
                        </button>
                        <button className="flex items-center justify-center gap-4 p-3 hover:bg-neutral-100 hover:rounded-full">
                            <div className="relative">
                                <i className="ri-shopping-cart-line text-3xl text-accent-orange font-medium" />
                                <div className="badge absolute -right-2 -top-1 bg-orange-400 rounded-full text-sm font-semibold w-5 h-5">4</div>
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