import { FC, HTMLAttributes } from 'react'
import { Button } from '@chakra-ui/react'

interface iButton extends HTMLAttributes<HTMLButtonElement> {
  loading: boolean
  title: string
  color?: string
  icon?: string
  size?: {
    base?: string
    md?: string
    lg?: string
    xl?: string
  }
}

export const ButtonComponent: FC<iButton> = (
  { loading, title, icon, color, size },
  props
) => {
  return <Button {...props}>{title}</Button>
}
