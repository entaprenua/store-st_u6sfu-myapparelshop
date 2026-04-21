import { CategoryList, CategoryListView, CategoryListEmptyView, Category, CategoryImage, CategoryName, CategoryListContent } from "~/components/ui/category"
import { ProductList, ProductListView, ProductListEmptyView, ProductListContent } from "~/components/ui/product"
import { Product, ProductImage, ProductName, ProductPrice, ProductStockBadge, ProductAddToCartTrigger, ProductToggleWishlistTrigger } from "~/components/ui/product"
import { Grid } from "~/components/ui/grid"
import { Text } from "~/components/ui/text"
import { Flex } from "~/components/ui/flex"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "~/components/ui/breadcrumb"

function ProductCard() {
  return (
    <Product href="/products" class="group bg-white rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300">
      <div class="relative overflow-hidden bg-stone-50">
        <ProductImage class="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105" />
        <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ProductToggleWishlistTrigger class="p-2 bg-white rounded-full shadow-md hover:text-pink-500" />
        </div>
        <div class="absolute bottom-3 left-3">
          <ProductStockBadge class="text-xs bg-white/90 backdrop-blur-sm" />
        </div>
      </div>
      <div class="p-4">
        <ProductName class="font-medium text-stone-800 line-clamp-2 min-h-[2.5rem]" />
        <div class="flex items-baseline gap-2 mt-3">
          <ProductPrice class="text-lg font-semibold text-stone-800" />
        </div>
        <div class="mt-4">
          <ProductAddToCartTrigger class="w-full bg-pink-500 hover:bg-pink-600 text-white text-sm py-2 rounded-sm" />
        </div>
      </div>
    </Product>
  )
}

function CategoryHeader() {
  return (
    <div class="bg-pink-50">
      <div class="container mx-auto px-4 py-8">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" class="text-stone-500">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/categories" class="text-stone-800 font-medium">Collections</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex class="flex-col items-center mt-6">
          <Text variant="h1" class="text-3xl font-light">Shop Collections</Text>
          <Text class="text-stone-500 mt-2">Find your perfect style</Text>
        </Flex>
      </div>
    </div>
  )
}

function CategorySection() {
  return (
    <section class="py-10">
      <div class="container mx-auto px-4">
        <Text variant="h2" class="text-xl font-light mb-6">Browse by Category</Text>
        <CategoryList mode="root">
          <CategoryListEmptyView />
          <Grid cols={2} colsSm={2} colsMd={4} colsLg={4}>
            <CategoryListView>
              <Category href="categories" class="group">
                <div class="relative overflow-hidden rounded-sm aspect-square">
                  <CategoryImage class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div class="absolute bottom-4 left-4 right-4">
                    <CategoryName class="text-white font-medium" />
                  </div>
                </div>
              </Category>
            </CategoryListView>
          </Grid>
        </CategoryList>
      </div>
    </section>
  )
}

export default function CategoriesPage() {
  return (
    <div>
      <CategoryHeader />
      <CategorySection />
    </div>
  )
}