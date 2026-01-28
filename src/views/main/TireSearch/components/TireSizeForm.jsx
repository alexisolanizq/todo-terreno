import React from 'react'
import Form from 'src/components/form/Form'
import Select from 'src/components/form/Select'
import Button from 'src/components/layout/Button'
import useTireSizes from 'src/features/shop/hooks/useTireSizes'

const TireSizeForm = () => {

    const { data: tireSizes } = useTireSizes()


    return (
        <Form>
            <Select name='width' label="Ancho" options={tireSizes?.widths} />
            <Select name='aspect_ratio' label="Perfil" options={tireSizes?.aspect_ratio} />
            <Select name='rim_diameter' label="Rin" options={tireSizes?.rim_diameters} />
            {/* <button type='submit' className='bg-orange-500 rounded-lg border-2 border-orange-200 self-end py-3 text-white font-medium'>Consultar</button> */}
            <Button variant='outline'>Consultar</Button>
        </Form>
    )
}

export default TireSizeForm