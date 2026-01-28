import Section from "src/components/layout/Section"
import heroImage from '/public/hero-tire.webp'

const Hero = () => {
    return (
        <Section density="large" className="bg-hero">
            <div className="grid lg:grid-cols-2 gap-28 items-center w-full lg:w-[90%] mx-auto">
                <div className="flex flex-col gap-5 lg:gap-10">
                    <h1 className="capitalize text-primary text-4xl lg:text-6xl font-bold tracking-wide text-center lg:text-start">Las mejores<span className="text-accent-orange"> llantas</span> para tu vehículo
                    </h1>
                    <p className="text-lg lg:text-2xl font-light text-neutral-50 text-center lg:text-start">Descubre nuestra selección de llantas premium de las mejores marcas mundiales. Rendimiento, seguridad y durabilidad garantizados.</p>
                    <div className="w-fit flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center mx-auto lg:mx-0">
                        <div className="flex items-center justify-center gap-x-2 px-6 py-2 lg:py-1 rounded-full bg-white shadow-lg text-sm lg:text-lg">
                            <i className="ri-flashlight-line text-xl lg:text-2xl font-medium text-secondary" />
                            <p className="text-sm font-semibold">
                                Compra rápida y segura
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-x-2 px-6 py-2 lg:py-1 rounded-full bg-white shadow-lg text-sm lg:text-lg">
                            <i className="ri-shield-check-line text-xl lg:text-2xl font-medium text-secondary" />
                            <p className="text-sm font-semibold">
                                Pago 100% protegido
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block mx-auto">
                    <div className="relative">
                        <div className="absolute inset-bg-linear-to-r from-primary/30 to-secondary-light/30 rounded-full blur-3xl opacity-50" />
                        <img src={heroImage} alt="hero tire" className="relative z-10 h-full max-w-lg mx-auto rounded-2xl shadow-2xl animate-[float-y_3.8s_ease-in-out_infinite]" />
                        <div className="absolute top-5 -left-25 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-2 bg-white z-10">
                            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                                <i className="ri-shield-check-line text-primary text-lg" />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold">Garantia</p>
                                <p className="font-light text-sm">5 años</p>
                            </div>
                        </div>
                        <div className="absolute bottom-5 -right-25 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-2 bg-white z-10">
                            <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
                                <i className="ri-shield-check-line text-primary text-lg" />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold">Garantia</p>
                                <p className="font-light text-sm">5 años</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Hero