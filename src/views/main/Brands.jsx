import Section from "src/components/layout/Section"
import useMarquee from "src/hooks/brands/useMarquee"
import { brands } from "src/utils/brands"

const Brands = () => {

    const { distance, trackRef, viewportRef } = useMarquee()
    return (
        <Section title="Marcas Premium" description="Explora nuestra selección de marcas top y encuentra los productos que necesitas, de los mejores fabricantes." actions={[{ label: 'Ver más' }]}>
            {/* <div className="flex items-center justify-center flex-wrap gap-12 px-6">
                {brands.map((item) => (
                    <img
                        key={item.name}
                        src={item.url}
                        alt={item.name}
                        className="h-10 object-contain filter grayscale opacity-60 transition-all duration-400"
                        draggable={false}
                    />
                ))}
            </div> */}
            <div
                ref={viewportRef}
                className="relative overflow-hidden container mx-auto py-20 select-none"
            >
                <div className="bg-neutral-50 mask-image-gradient pointer-events-none absolute inset-0 z-20"
                />

                <div
                    ref={trackRef}
                    className="flex w-max will-change-transform animate-marquee"
                    style={{
                        "--marquee-distance": `-${distance}px`,
                    }}
                >
                    <div className="flex items-center gap-12 px-6">
                        {brands.map((item) => (
                            <img
                                key={item.name}
                                src={item.url}
                                alt={item.name}
                                className="h-10 object-contain filter grayscale opacity-60 transition-all duration-400"
                                draggable={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Brands