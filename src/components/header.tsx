import { A } from "@solidjs/router"
import { Navbar, NavbarBrand, NavbarContent, NavbarEnd, NavbarLink } from "~/components/ui/navbar"
import { Flex } from "~/components/ui/flex"
import { CartCount } from "~/components/ui/cart"

export function Header() {
  return (
    <Navbar position="sticky" variant="default" class="bg-white">
      <NavbarBrand>
        <A href="/" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
            </svg>
          </div>
          <span class="text-xl font-bold tracking-tight">StyleBox</span>
        </A>
      </NavbarBrand>

      <NavbarContent>
        <Flex class="gap-8 ml-8">
          <NavbarLink href="/categories" class="text-sm font-medium hover:text-pink-600">Collections</NavbarLink>
          <NavbarLink href="/products" class="text-sm font-medium hover:text-pink-600">New In</NavbarLink>
          <NavbarLink href="/about" class="text-sm font-medium hover:text-pink-600">About</NavbarLink>
          <NavbarLink href="/contact" class="text-sm font-medium hover:text-pink-600">Contact</NavbarLink>
        </Flex>
      </NavbarContent>
      <NavbarEnd>
        <Flex class="gap-4">
          <NavbarLink href="/cart" class="relative p-2">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <CartCount class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-pink-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center" />
          </NavbarLink>
        </Flex>
      </NavbarEnd>
    </Navbar>
  )
}