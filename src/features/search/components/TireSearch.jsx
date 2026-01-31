import React from 'react'
import Select from 'src/components/form/Select'
import Section from 'src/components/layout/Section'
import useTireSearch from 'src/features/search/hooks/useTireSearch'

const TireSearch = () => {

    const { tabs, activeTabComponent, setActiveTab, activeTab } = useTireSearch()

    return (
        <Section className='relative z-10' density='xsmall'>
            <div className="relative mx-auto w-[90%] lg:w-4/6 bg-white shadow-xl p-8 -top-20 rounded-2xl">
                <div className="mb-8">
                    <h2 className="text-center capitalize font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Encuentra La Llanta Perfecta</h2>
                    <p className="text-center text-lg text-muted ">Búsqueda rápida por medida o marca</p>
                </div>
                <div className='items-center justify-center rounded-full p-1 text-muted grid w-full grid-cols-2 mb-6 h-12 bg-neutral-200/50'>
                    {
                        tabs.map((tab) => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1 text-xs lg:text-sm font-medium ring-offset transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 h-10 ${activeTab === tab.id
                                ? 'bg-secondary text-primary shadow-lg font-semibold'
                                : 'bg-transparent text-muted'
                                }`}>
                                {tab.label}
                            </button>
                        ))
                    }
                </div>

                <div key={activeTab}>
                    {
                        activeTabComponent.component
                    }
                </div>
            </div>
        </Section>
    )
}

export default TireSearch