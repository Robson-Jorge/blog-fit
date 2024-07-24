import { LinkButton } from './style'

interface ButtonLinkProps {
  to: string
  isEspecial?: boolean
  children: React.ReactNode
}

export function ButtonLink({
  to,
  isEspecial = false,
  children,
}: ButtonLinkProps) {
  return (
    <LinkButton isEspecial={isEspecial} to={to}>
      {children}
    </LinkButton>
  )
}
