import Form from "src/shared/components/form/Form"
import SelectController from "src/shared/components/form/SelectController"
import useTireSearch from "../hooks/useTireSearch"
import Button from "src/shared/components/ui/Button"

const TireSearchByBrand = () => {

    const { control, handleSubmit, onSubmit, brands } = useTireSearch()

    return (
        <Form grids={2} onSubmit={handleSubmit(onSubmit)}>
            <SelectController control={control} name='brand' label="Marcas" options={brands} keyValue="slug" />
            <Button variant='outline'>Consultar</Button>
        </Form>
    )
}

export default TireSearchByBrand