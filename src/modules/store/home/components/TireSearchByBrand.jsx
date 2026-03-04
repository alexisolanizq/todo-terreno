import Form from "src/shared/components/form/Form"
import Select from "src/shared/components/form/Select"
import useBrandList from "src/modules/store/hooks/useBrandList"

const TireSearchByBrand = () => {

    const { data: brands } = useBrandList()

    return (
        <Form className='grid-cols-1'>
            <Select name='brand' label="Marcas" options={brands} />
        </Form>
    )
}

export default TireSearchByBrand