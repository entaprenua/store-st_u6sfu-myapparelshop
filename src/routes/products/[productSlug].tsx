import { Product, ProductMedia, ProductMediaView, ProductMediaItem, ProductMediaItemsContent } from "~/components/ui/product"
import { ProductName, ProductImage, ProductPrice, ProductComparePrice, ProductStockBadge, ProductDescription, ProductQuantityActions, ProductAddToCartTrigger, ProductToggleWishlistTrigger } from "~/components/ui/product"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"

export default function ProductDetailPage() {
  return (
    <Product includeMedia>
      <div class="bg-stone-50 min-h-screen">
        <Flex class="container mx-auto px-4 py-12 justify-start">
          <Grid cols={1} colsMd={2} gap={12}>
            <ProductImage class="max-h-96 max-w-96 rounded-sm shadow-lg" />
            <div class="space-y-6">
              <ProductName class="text-3xl font-light text-stone-800" />
              <div class="flex items-baseline gap-3">
                <ProductPrice class="text-2xl font-semibold text-stone-800" />
                <ProductComparePrice class="text-lg text-stone-400 line-through" />
              </div>
              <ProductStockBadge />
              <ProductDescription class="text-stone-600 leading-relaxed" />

              <ProductQuantityActions class="border border-stone-200 rounded-sm" />

              <Flex class="gap-4 pt-4">
                <ProductAddToCartTrigger class="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-sm" />
                <ProductToggleWishlistTrigger class="border border-stone-200 hover:border-pink-500 hover:text-pink-500 rounded-sm" />
              </Flex>
            </div>
          </Grid>
        </Flex>
        <MediaSection />
      </div>
    </Product>
  )
}

function MediaSection() {
  return (
    <ProductMedia>
      <ProductMediaItemsContent>
        <div class="container mx-auto px-4 py-8">
          <Text variant="h2" class="text-xl font-light mb-6">Product Gallery</Text>
          <Flex class="border border-stone-100 rounded-sm overflow-auto">
            <ProductMediaView>
              <ProductMediaItem class="w-full h-80 m-2 bg-stone-100 aspect-square object-cover rounded-sm" />
            </ProductMediaView>
          </Flex>
        </div>
      </ProductMediaItemsContent>
    </ProductMedia>
  )
}