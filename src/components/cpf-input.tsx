import { useState } from 'react'

import { Input } from './ui/input'

interface CPFInputProps {
  id?: string
}

function CPFInput({ id }: CPFInputProps) {
  const [cpf, setCpf] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    let value = e.target.value

    // Remove non-numeric characters
    value = value.replace(/\D/g, '')

    // Limit to 11 characters
    if (value.length > 11) {
      value = value.slice(0, 11)
    }

    // Apply CPF mask
    if (value.length <= 3) {
      value = value.replace(/(\d{3})(\d{0,3})/, '$1.$2')
    } else if (value.length <= 6) {
      value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3')
    } else if (value.length <= 9) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4')
    } else {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') // Ensure this is applied for exactly 11 digits
    }

    setCpf(value)
  }

  return (
    <Input
      id={id} // Pass the id prop to the input
      type="text"
      value={cpf}
      onChange={handleChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="appearance-none"
      placeholder={isFocused ? '___.___.___-__' : ''}
    />
  )
}

export default CPFInput
