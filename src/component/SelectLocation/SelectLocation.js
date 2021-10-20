
import Select from 'react-select'

const options = [
    { value: 'ukraine', label: 'Ukraine' },
    { value: 'us', label: "US" },
  ]

export const SelectLocation = () => {

    return(
        <Select options={options} />
    )
}