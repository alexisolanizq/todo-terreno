import { Controller } from "react-hook-form"
import DropdownMenu from "../ui/DropdownMenu"

const DropdownController = ({
    control,
    name,
    items = [],
    placeholder = "",
    isActive,
    onToggle,
    keyValue = 'id',
    keyLabel = 'title',
    defaultValue = [],
}) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={({ field }) => (
                <DropdownMenu
                    keyLabel={keyLabel}
                    keyValue={keyValue}
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