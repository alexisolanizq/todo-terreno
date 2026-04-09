import { Controller } from "react-hook-form"
import DropdownMenu from "../ui/DropdownMenu"

const DropdownController = ({
    control,
    name,
    items = [],
    placeholder = "",
    isActive,
    onToggle,
    defaultValue = [],
}) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={({ field }) => (
                <DropdownMenu
                    items={items}
                    placeholder={placeholder}
                    isActive={isActive}
                    onClick={onToggle}
                    value={field.value || []}
                    onSelect={field.onChange}
                />
            )}
        />
    )
}

export default DropdownController