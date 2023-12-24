'use client'
import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Input
} from '@nextui-org/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Nav () {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  const menuItems = ['SiRekap', 'Hotline', 'Help & Feedback']

  const isActive = href => {
    return pathname === href
  }

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='dark text-foreground bg-background'
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-2',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary'
        ]
      }}
    >
      <NavbarContent className='pr-3 sm:hidden' justify='center'>
        <NavbarBrand className='gap-2'>
          <Image src='/PPK.png' width={40} height={40} alt='ppk seyegan' />
          <p className='font-bold text-inherit'>PPK Seyegan</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='start'>
        <NavbarBrand className='gap-2'>
          <Image src='/PPK.png' width={40} height={40} alt='ppk seyegan' />
          <p className='font-bold text-inherit'>PPK Seyegan</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex' justify='center'>
        <NavbarItem isActive={isActive('/sirekap')}>
          <Link color='foreground' href='/sirekap'>
            SiRekap
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/Customers')}>
          <Link color='foreground' href=''>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/permasalahan')}>
          <Link color='foreground' href='/permasalahan'>
            Permasalahan
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end' className='hidden sm:flex'>
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
          }}
          placeholder='Search...'
          size='sm'
          startContent={
            <Image src='/search.svg' height={18} width={18} alt='search' />
          }
          type='search'
        />
      </NavbarContent>

      <NavbarContent className='sm:hidden' justify='end'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                isActive(`/${item.toLowerCase()}`) ? 'primary' : 'foreground'
              }
              href={`/${item.toLowerCase()}`}
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
