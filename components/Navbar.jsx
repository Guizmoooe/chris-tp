import React from 'react'
import Link from 'next/link'
import { Burger } from './Burger'
import { Logo } from './Logo'
import { useDeviceContext } from '../context/DeviceContext'
import PropTypes from 'prop-types'

const Navbar = ({ categories = [] }) => {
  const currentDevice = useDeviceContext()
  return (
    <div>
      {currentDevice ? (
        <nav>
          <Logo currentDevice={currentDevice} />
          <ul id='menu-category'>
            {categories.map(category => (
              <li key={category.title}>
                <Link href={`/${category.id}`}>
                  <a>{category.title}</a>
                </Link>
              </li>
            ))}
            <li>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav style={{ justifyContent: 'space-between' }}>
          <Logo currentDevice={currentDevice} />
          <Burger categories={categories} />
        </nav>
      )}
    </div>
  )
}

Navbar.propTypes = {
  categories: PropTypes.array
}
export default Navbar
