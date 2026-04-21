import { Text } from "~/components/ui/text"
import { Flex } from "~/components/ui/flex"

export default function AboutPage() {
  return (
    <div class="container mx-auto px-4 py-8">
      <Text variant="h1" class="text-3xl font-bold mb-8">About Us</Text>
      
      <div class="max-w-3xl space-y-6">
        <div class="bg-white rounded-lg border p-6">
          <Text variant="h2" class="text-xl font-semibold mb-4">Our Story</Text>
          <Text variant="body1" class="text-muted-foreground">
            StyleBox was founded in 2020 with a simple passion: to bring you the latest fashion trends at affordable prices. 
            What started as a small online boutique has grown into a beloved destination for fashion lovers who appreciate quality and style.
          </Text>
        </div>
        
        <div class="bg-white rounded-lg border p-6">
          <Text variant="h2" class="text-xl font-semibold mb-4">Our Mission</Text>
          <Text variant="body1" class="text-muted-foreground">
            We believe everyone deserves to look and feel their best. That's why we curate the latest trends, 
            source quality fabrics, and deliver fashion that fits your lifestyle.
          </Text>
        </div>
        
        <div class="bg-white rounded-lg border p-6">
          <Text variant="h2" class="text-xl font-semibold mb-4">Why Choose Us?</Text>
          <Flex class="flex-col gap-3">
            <Flex class="items-center gap-3">
              <span class="text-primary">✓</span>
              <Text variant="body1">Trendy designs for every season</Text>
            </Flex>
            <Flex class="items-center gap-3">
              <span class="text-primary">✓</span>
              <Text variant="body1">Quality materials</Text>
            </Flex>
            <Flex class="items-center gap-3">
              <span class="text-primary">✓</span>
              <Text variant="body1">Affordable prices</Text>
            </Flex>
            <Flex class="items-center gap-3">
              <span class="text-primary">✓</span>
              <Text variant="body1">Free returns within 30 days</Text>
            </Flex>
          </Flex>
        </div>
        
        <div class="bg-white rounded-lg border p-6">
          <Text variant="h2" class="text-xl font-semibold mb-4">Get in Touch</Text>
          <Text variant="body1" class="text-muted-foreground">
            Have questions? We'd love to hear from you. Reach out to us at hello@stylebox.com 
            or call us at +1 (555) 123-4567.
          </Text>
        </div>
      </div>
    </div>
  )
}