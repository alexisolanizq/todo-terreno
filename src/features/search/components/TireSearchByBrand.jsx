import Form from "src/components/form/Form"
import Select from "src/components/form/Select"
import useBrandList from "src/features/catalog/hooks/useBrandList"

const TireSearchByBrand = () => {

    const { data: brands } = useBrandList()

    return (
        <Form className='grid-cols-1'>
            <Select name='brand' label="Marcas" options={brands} />
        </Form>
    )
}

export default TireSearchByBrand