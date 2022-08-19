import {
  Page,
  Layout
} from "@shopify/polaris";

import { ProductsCard } from "./ProductsCard";
import Welcome from "./Welcome";
import Products from "./Products";

export function HomePage() {
  return (
    <Page fullWidth>
      {/* <Layout>
        <Layout.Section>
          <Welcome />
        </Layout.Section>
        <Layout.Section secondary>
          <ProductsCard />
        </Layout.Section>
      </Layout> */}
      <Layout>
        <Layout.Section>
          <Products />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
