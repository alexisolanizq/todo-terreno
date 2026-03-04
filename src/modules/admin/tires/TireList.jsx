import useTireList from "./hooks/useTireList"

const TireList = () => {

    const {tires} = useTireList()

    console.log(tires);
    

    return (
        <div>
            
        </div>
    )
}

export default TireList