import { useState } from 'react'

export default function useField (defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}
