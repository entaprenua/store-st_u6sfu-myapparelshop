import { A } from "@solidjs/router"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"

export function Footer() {
  return (
    <footer class="bg-pink-50 text-stone-600 py-16">
      <div class="container mx-auto px-4">
        <Grid cols={4} gap={10}>
          <div>
            <h3 class="text-stone-800 font-semibold mb-5">Shop</h3>
            <Flex class="flex-col gap-3">
              <A href="/categories" class="text-sm hover:text-pink-600 transition-colors">All Collections</A>
              <A href="/products" class="text-sm hover:text-pink-600 transition-colors">New Arrivals</A>
              <A href="/products" class="text-sm hover:text-pink-600 transition-colors">Best Sellers</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-stone-800 font-semibold mb-5">Help</h3>
            <Flex class="flex-col gap-3">
              <A href="/contact" class="text-sm hover:text-pink-600 transition-colors">Contact Us</A>
              <A href="/about" class="text-sm hover:text-pink-600 transition-colors">About Us</A>
              <A href="/faq" class="text-sm hover:text-pink-600 transition-colors">FAQ</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-stone-800 font-semibold mb-5">Legal</h3>
            <Flex class="flex-col gap-3">
              <A href="/privacy" class="text-sm hover:text-pink-600 transition-colors">Privacy Policy</A>
              <A href="/terms" class="text-sm hover:text-pink-600 transition-colors">Terms of Service</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-stone-800 font-semibold mb-5">Follow Us</h3>
            <Flex class="flex-col gap-3">
              <A href="https://instagram.com" class="text-sm hover:text-pink-600 transition-colors">Instagram</A>
              <A href="https://pinterest.com" class="text-sm hover:text-pink-600 transition-colors">Pinterest</A>
              <A href="https://tiktok.com" class="text-sm hover:text-pink-600 transition-colors">TikTok</A>
            </Flex>
          </div>
        </Grid>
        <div class="border-t border-pink-200 mt-12 pt-8 text-center">
          <p class="text-sm">© 2024 StyleBox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}