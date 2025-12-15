import Link from 'next/link'
import DownloadCVButton from './DownloadCVButton'
import { ModeToggle } from './theme/theme-toggle'

const Nav = () => {
  return (
    <nav className="fixed bottom-4 flex items-center justify-center w-full gap-3 z-[999] font-sans">
      <div className="flex items-center justify-center gap-3 bg-background px-5 md:px-1 py-1 border rounded-full shadow-xl">
        <DownloadCVButton />
        <Link
          href={'https://www.linkedin.com/in/leo-jonsson-a-b98048304/'}
          target="_blank"
          className="hover:underline transition-all"
        >
          Linkedin
        </Link>
        <Link
          href={'https://github.com/leo-jonsson'}
          target="_blank"
          className="hover:underline transition-all"
        >
          Github
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Nav
