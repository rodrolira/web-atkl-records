import Select from 'react-select'
<<<<<<< HEAD
import { useTranslation } from 'react-i18next'
=======
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

const MultiSelect = ({
    field,
    form,
    options,
    isMulti = false,
    placeholder = 'Select',
}) => {
<<<<<<< HEAD
    const { t } = useTranslation()

=======
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
    const onChange = (option) => {
        form.setFieldValue(
            field.name,
            option ? option.map(item => item.value) : []
        )
    }

    const getValue = () => {
        if (options) {
            return isMulti
                ? options.filter(option => field.value.indexOf(option.value) >= 0)
                : options.find(option => option.value === field.value)
        }
        return isMulti ? [] : ''
    }

    return (
        <Select
            className={isMulti ? 'react-select-container' : ''}
            classNamePrefix={isMulti ? 'react-select' : ''}
            options={options}
            name={field.name}
            value={getValue()}
            onChange={isMulti ? onChange : (option) => form.setFieldValue(field.name, option.value)}
            onBlur={field.onBlur}
            isMulti={isMulti}
<<<<<<< HEAD
            placeholder={t(placeholder)} // Traducir el placeholder
=======
            placeholder={placeholder}
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
        />
    )
}

export default MultiSelect
