import React from 'react'
import Section from 'src/components/sotre-ui/Section'
import TextField from 'src/shared/components/form/TextField'
import Button from 'src/shared/components/ui/Button'
import Flex from 'src/shared/components/ui/Flex'
import QuantityCart from '../../home/components/QuantityCart'
import { Link } from 'react-router-dom'

const Cart = () => {



  return (
    <Section >
      <div className="grid lg:grid-cols-3 gap-8 relative">
        <div className='lg:col-span-2 space-y-4 shadow-sm rounded-xl bg-primary'>
          <div className='flex flex-col lg:flex-row items-center w-full p-4'>
            <Link to={'/'} className='p-2'>
              <img src="https://llantastogo.com/images/models/medium/contipowercontact-84h-185-60R15.webp" className='w-30 self-center' alt="Tire" />
            </Link>
            <div className='w-full space-y-4 p-2'>
              <div className='flex justify-between items-start'>
                <div>
                  <p className='text-secondary font-medium'>Micheline</p>
                  <Link className='font-semibold'>Micheline Pilot Sport 5</Link>
                  <p className='text-neutral-500 font-semibold'>Medida: 225/45 R17</p>
                </div>
                <button>
                  <i className='ri-delete-bin-5-line text-xl' />
                </button>
              </div>
              <div className='flex justify-between items-center w-full'>
                <QuantityCart hideLabel />
                <p className='text-xl font-semibold'>$1899 MXN</p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:col-span-1 shadow-sm rounded-xl bg-primary sticky'>
          <p>Resumen del pedido</p>
          <Flex>
            <TextField name='coupon' placeholder='Código de descuento' withIcon={false} />
            <Button>
              <i className='ri-price-tag-3-line' />
            </Button>
          </Flex>
        </div>
      </div>
    </Section>
  )
}

export default Cart