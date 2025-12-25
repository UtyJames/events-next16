import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className="flex items-center gap-2">
                <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
                <p>Dev Event</p>
            </Link>

            <ul>
                <Link href="/events">Home</Link>
                <Link href="/events">Events</Link>
                <Link href="/events">Create Events</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar