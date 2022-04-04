import clsx from 'clsx'

export const Spinner = () => (
  <div
    className={clsx(
      'w-6 md:w-8 h-6 md:h-8',
      'border-4 border-t-transparent rounded-full',
      'border-primary-1',
      'animate-spin'
    )}
  ></div>
)
