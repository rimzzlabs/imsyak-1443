import { Link } from './atoms/Link'
import { DarkMode } from './mollecules/DarkMode'

export const Footer = () => {
  return (
    <footer className='layout py-2 md:py-4 border-t border-theme-2 dark:border-theme-3'>
      <div className='flex items-center justify-end w-full py-4 md:py-8'>
        <DarkMode />
      </div>
      <section className='max-w-prose'>
        <h3 className='mb-4'>Tentang Website</h3>
        <p className='mb-1.5'>
          Website ini dibuat untuk menampilkan informasi mengenai jadwal imsakiyah, dan shalat selama Ramadhan 1443 H
          atau 2022 Masehi
        </p>
        <p className='mb-4'>
          Adapun data yang ditampilkan berdasarkan dari pihak ketiga, yakni data Imsyakiyah berasal dari{' '}
          <Link href='https://imsakiyah-api.santrikoding.com/'>Santri Koding</Link>, dan data wilayah dari{' '}
          <Link href='https://github.com/emsifa/api-wilayah-indonesia'>GitHub Emsifa</Link>.
        </p>
        <p>
          Built with ⚛ by <Link href='https://rizkicitra.dev'>Rizki M Citra</Link>
        </p>
      </section>
    </footer>
  )
}
