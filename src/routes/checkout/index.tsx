import { Product, ProductImage, ProductName, ProductPrice } from "~/components/ui/product"
import {
  OrderItems, OrderEmpty, OrderItemsView, OrderConfirmation,
  OrderNumber, OrderTotal, CheckoutForm, CheckoutEmailField,
  CheckoutAddressField, CheckoutMpesaPayment, CheckoutPaymentMethodSelect,
  CheckoutSubtotal, CheckoutTotal, CheckoutShipping, CheckoutErrorMessage
} from "~/components/ui/order"
import { Text } from "~/components/ui/text"
import { Flex } from "~/components/ui/flex"
import { Separator } from "~/components/ui/separator"
import { Button } from "~/components/ui/button"
import { Link } from "~/components/ui/link"
import ShoppingBagIcon from "lucide-solid/icons/shopping-bag"
import TruckIcon from "lucide-solid/icons/truck"
import CreditCardIcon from "lucide-solid/icons/credit-card"
import PhoneIcon from "lucide-solid/icons/phone"
import CheckIcon from "lucide-solid/icons/check"

export default function CheckoutPage() {
  return (
    <CheckoutForm>
      <div class="bg-stone-50 min-h-screen">
        <div class="container mx-auto px-4 py-12 max-w-6xl">
          <Text variant="h1" class="text-2xl font-serif font-light mb-8">Checkout</Text>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
              <div class="bg-white rounded-sm p-8 space-y-8">
                <div class="space-y-4">
                  <h3 class="font-medium flex items-center gap-2 text-stone-700">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Information
                  </h3>
                  <CheckoutEmailField class="w-full" />
                </div>

                <Separator />

                <div class="space-y-4">
                  <h3 class="font-medium flex items-center gap-2 text-stone-700">
                    <TruckIcon class="w-5 h-5" />
                    Shipping Address
                  </h3>
                  <CheckoutAddressField type="shipping" class="space-y-4" />
                </div>

                <Separator />

                <div class="space-y-4">
                  <h3 class="font-medium flex items-center gap-2 text-stone-700">
                    <CreditCardIcon class="w-5 h-5" />
                    Payment Method
                  </h3>
                  <CheckoutPaymentMethodSelect class="space-y-3">
                    <Flex gap={3} class="p-4 border border-stone-200 rounded-sm cursor-pointer hover:bg-stone-50">
                      <PhoneIcon class="w-5 h-5" />
                      <Text class="text-stone-700">M-Pesa</Text>
                    </Flex>
                    <CheckoutMpesaPayment class="ml-9 max-w-xs" />
                  </CheckoutPaymentMethodSelect>
                </div>

                <Separator />

                <div class="space-y-4">
                  <h3 class="font-medium flex items-center gap-2 text-stone-700">
                    <ShoppingBagIcon class="w-5 h-5" />
                    Order Items
                  </h3>
                  <OrderItems>
                    <OrderItemsView>
                      <Flex gap={4} class="bg-stone-50 rounded-sm p-4">
                        <Product class="flex gap-4 flex-1 min-w-0">
                          <ProductImage class="w-16 h-16 object-cover rounded-sm" />
                          <div class="flex-1">
                            <ProductName class="text-sm text-stone-800" />
                            <Text class="text-xs text-stone-500">Qty: 1</Text>
                          </div>
                          <ProductPrice class="text-sm text-stone-700" />
                        </Product>
                      </Flex>
                    </OrderItemsView>
                  </OrderItems>
                </div>

                <CheckoutErrorMessage class="p-4 bg-red-50 text-red-600 rounded-sm" />
              </div>
            </div>

            <div class="lg:col-span-1">
              <div class="bg-white rounded-sm p-6 sticky top-4 space-y-6">
                <Text variant="h2" class="text-lg font-serif font-light">Order Summary</Text>

                <div class="space-y-3">
                  <Flex justify="between">
                    <Text class="text-stone-500">Subtotal</Text>
                    <CheckoutSubtotal />
                  </Flex>
                  <Flex justify="between">
                    <Text class="text-stone-500">Shipping</Text>
                    <CheckoutShipping />
                  </Flex>
                  <Separator />
                  <Flex justify="between">
                    <Text class="font-medium">Total</Text>
                    <CheckoutTotal class="text-lg font-bold" />
                  </Flex>
                </div>

                <Button type="submit" class="w-full bg-stone-800 hover:bg-stone-700 text-white py-3 rounded-sm" size="lg">
                  Place Order
                </Button>

                <Text class="text-xs text-center text-stone-400">
                  By placing your order, you agree to our Terms of Service
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderConfirmation>
        <div class="bg-stone-50 min-h-screen">
          <div class="container mx-auto px-4 py-12 max-w-6xl">
            <div class="bg-white rounded-sm p-8">
              <div class="text-center py-12 space-y-6">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckIcon class="w-10 h-10 text-green-600" />
                </div>
                <div>
                  <Text variant="h2" class="text-2xl font-serif font-light mb-2">Order Confirmed!</Text>
                  <Text class="text-stone-500">Thank you for your order</Text>
                </div>
                <div class="bg-stone-50 rounded-sm p-6 space-y-2">
                  <Flex justify="between">
                    <Text class="text-stone-500">Order Number</Text>
                    <OrderNumber class="font-bold" />
                  </Flex>
                  <Flex justify="between">
                    <Text class="text-stone-500">Total</Text>
                    <OrderTotal />
                  </Flex>
                </div>
                <div class="space-y-3">
                  <Button as={Link} href="/products" class="w-full bg-stone-800 hover:bg-stone-700 text-white">
                    Continue Shopping
                  </Button>
                  <Button as={Link} href="/cart" variant="outline" class="w-full border-stone-300 text-stone-700">
                    View Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OrderConfirmation>

      <OrderEmpty variant="checkout" />
    </CheckoutForm>
  )
}
