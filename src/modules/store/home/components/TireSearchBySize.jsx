import React from 'react'
import Form from 'src/shared/components/form/Form'
import Select from 'src/shared/components/form/Select'
import Button from 'src/shared/components/ui/Button'
import useTireSearch from '../hooks/useTireSearch'

const TireSearchBySize = () => {

    const { tireSizes } = useTireSearch()

    return (
        <Form>
            <Select name='width' label="Ancho" options={tireSizes?.widths} />
            <Select name='aspect_ratio' label="Perfil" options={tireSizes?.aspect_ratio} />
            <Select name='rim_diameter' label="Rin" options={tireSizes?.rim_diameters} />
            <Button variant='outline'>Consultar</Button>
        </Form>
    )
}

export default TireSearchBySize