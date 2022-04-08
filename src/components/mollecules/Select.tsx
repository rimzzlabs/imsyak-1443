import { SelectToggle } from '@/components/atoms/SelectToggle'

import useCity from '@/hooks/useCity'
import useRegency from '@/hooks/useRegency'

import { Spinner } from '../atoms/Spinner'

import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, Suspense, lazy } from 'react'

const SelectItem = lazy(() => import('@/components/atoms/SelectItem'))

const Select = () => {
  const { changeCity } = useCity()
  const regency = useRegency()

  return (
    <Menu as='div' className='relative'>
      <SelectToggle />

      <Transition
        as={Fragment}
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Menu.Items
          className={clsx(
            'absolute right-0 w-72 mt-2 origin-top-right',
            'rounded-lg border transition-all z-30',
            'border-theme-2 dark:border-theme-3',
            'bg-theme-1 dark:bg-theme-4',
            'focus-within:outline-none focus:ring-2 ring-primary-1'
          )}
        >
          <div className={clsx('p-1 divide-y', 'divide-theme-2 dark:divide-theme-3')}>
            <Suspense
              fallback={
                <div className='flex flex-col items-center justify-center w-full h-40'>
                  <Spinner />
                  <span>Loading</span>
                </div>
              }
            >
              {regency.length > 0 &&
                regency.map((prop) => (
                  <SelectItem key={prop.id} name={prop.name} onClick={() => changeCity(prop.name)} />
                ))}
            </Suspense>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Select
