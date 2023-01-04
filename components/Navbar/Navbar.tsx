import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link href="/"><button>Home</button></Link>
        <Link href="/about"><button>About</button></Link>
        <Link href="/projects"><button>Projects</button></Link>
        <Link href="/contact"><button>Contact</button></Link>
      </div>
    </div>
  )
}

export default Navbar