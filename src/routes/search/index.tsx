import { ProductSearch } from "~/components/ui/product"
import { Search, SearchItem, SearchControl, SearchInput, SearchContent, SearchListbox, SearchNoResult } from "~/components/ui/search"
import { Product, ProductImage, ProductName, ProductPrice } from "~/components/ui/product"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"

export default function SearchPage() {
  return (
    <div class="bg-stone-50 min-h-screen">
      <div class="container mx-auto px-4 py-12">
        <Flex class="flex-col items-center mb-10">
          <Text variant="h1" class="text-2xl font-serif font-light">Search</Text>
          <Text class="text-stone-500 mt-2">Find your perfect style</Text>
        </Flex>
        
        <div class="max-w-xl mx-auto">
          <ProductSearch
            class="w-full"
            itemComponent={
              <SearchItem>
                <Product href="products">
                  <Flex class="items-center gap-3">
                    <ProductImage class="w-14 h-14 object-cover rounded-sm" />
                    <div>
                      <ProductName class="font-medium text-stone-800" />
                      <ProductPrice class="text-sm text-stone-500" />
                    </div>
                  </Flex>
                </Product>
              </SearchItem>
            }
          >
            <SearchControl>
              <SearchInput 
                placeholder="Search for styles..." 
                class="h-12 rounded-sm border-stone-200 focus:ring-stone-800 focus:border-stone-800"
              />
            </SearchControl>
            <SearchContent>
              <SearchListbox />
              <SearchNoResult class="px-4 py-6 text-sm text-stone-500 text-center">
                No styles found
              </SearchNoResult>
            </SearchContent>
          </ProductSearch>
        </div>
      </div>
    </div>
  )
}