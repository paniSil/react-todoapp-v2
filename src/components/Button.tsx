interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  title: string
  className: string
  disabled: boolean
  type: 'button' | 'submit' | 'reset'
}

const Button = ({ children, ...props }: Partial<ButtonProps>) => {
  return <button {...props}>{children}</button>
}

export default Button
