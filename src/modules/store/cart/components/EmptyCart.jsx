import React from 'react'
import { Link } from 'react-router-dom'
import Section from 'src/components/store-ui/Section'

const EmptyCart = () => {
    return (
        <Section>
            <div className='w-full text-center space-y-2'>
                <i className="ri-shopping-cart-line text-7xl text-neutral-300" />
                <p className='text-2xl font-bold'>Tu carrito esta vacio</p>
                <p className='text-lg font-light'>Agrega productos a tu carrito para continuar con tu compra</p>
                <Link to={'/catalogo'} className='text-secondary font-semibold'>
                    Ver Cátalogo
                    <i className='ri-arrow-right-line m-2' />
                </Link>
            </div>
        </Section>
    )
}

export default EmptyCart