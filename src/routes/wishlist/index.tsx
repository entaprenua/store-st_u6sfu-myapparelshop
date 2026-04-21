import { WishlistItems, WishlistItemsView, WishlistEmpty, WishlistItem, WishlistItemCheckbox, WishlistItemRemoveTrigger } from "~/components/ui/wishlist"
import { Product, ProductImage, ProductName, ProductPrice, ProductAddToCartTrigger } from "~/components/ui/product"
import { Button } from "~/components/ui/button"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"
import { Link } from "~/components/ui/link"

export default function WishlistPage() {
  return (
    <div class="container mx-auto px-4 py-8 max-w-6xl">
      <Text variant="h1" class="text-2xl font-bold mb-6">Your Wishlist</Text>
      
      <WishlistItems>
        <WishlistItemsView>
          <div class="space-y-4">
            <div class="bg-white rounded-lg border p-4">
              <Flex gap={4} align="start" class="flex-wrap">
                <WishlistItemCheckbox />
                <Product class="flex gap-4 flex-1 min-w-0">
                  <ProductImage class="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                  <div class="flex-1 min-w-0">
                    <ProductName class="font-medium truncate" />
                    <ProductPrice class="text-sm text-muted-foreground mt-1" />
                  </div>
                  <div class="flex items-center gap-3">
                    <ProductAddToCartTrigger class="shrink-0" />
                    <WishlistItemRemoveTrigger class="text-muted-foreground hover:text-destructive shrink-0" />
                  </div>
                </Product>
              </Flex>
            </div>
          </div>
        </WishlistItemsView>
        
        <WishlistEmpty>
          <div class="bg-white rounded-lg border p-12 text-center">
            <div class="text-6xl mb-4">❤️</div>
            <h2 class="text-xl font-medium mb-2">Your wishlist is empty</h2>
            <p class="text-muted-foreground mb-6">Save items you love to your wishlist.</p>
            <Button as={Link} href="/products" class="px-6">
              Browse Collection
            </Button>
          </div>
        </WishlistEmpty>
      </WishlistItems>
    </div>
  )
}