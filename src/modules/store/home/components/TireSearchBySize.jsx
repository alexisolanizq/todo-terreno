import React from 'react'
import Form from 'src/shared/components/form/Form'
import Select from 'src/shared/components/form/Select'
import Button from 'src/shared/components/ui/Button'
import useTireSearchBySize from 'src/modules/store/hooks/useTireSearchBySizes'

const TireSearchBySize = () => {

    const { data: tireSizes } = useTireSearchBySize()

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

export default TireSearchBySize