import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Limited', href: '/limited' }
]

const Header = () => (
  <header className='bg-white'>
    <nav className='mx-auto flex max-w-7xl items-center p-6 lg:px-8' aria-label='Global'>
      <div className='flex lg:flex-1'>
        <a href='https://rek.ai' className='-m-1.5 p-1.5'>
          <span className='sr-only'>Rek.ai logo</span>
          <img className='h-8 w-auto' src='https://web.rek.ai/app/uploads/2022/10/logo-rekai-blue.svg' alt='' />
        </a>
      </div>
      <div className='hidden lg:flex lg:gap-x-12'>
        {navigation.map(item => (
          <Link key={item.name} to={item.href} className='text-sm font-semibold leading-6 text-gray-900'>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  </header>
)

export default Header
