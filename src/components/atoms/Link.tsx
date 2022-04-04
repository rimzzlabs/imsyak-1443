interface LinkProps {
  href: string
}

export const Link: React.FunctionComponent<LinkProps> = ({ href, children }) => {
  return (
    <a href={href} className='text-primary-3 dark:text-primary-1' target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}
