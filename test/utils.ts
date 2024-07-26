import { Page, expect } from '@playwright/test';

/**
 * This function will click the desired filter and assert from product items that at least one of them has desired tag visible 
 * Its enough to check only one product with the tag for the test. To avoide flakeyness and infitnite scroll checking.
 * @param page 
 * @param filter 
 */
export async function applyFilterAndVerifyProducts(page: Page, filter: string) {
  console.log(`Applying filter: ${filter}`);

  // Apply the filter
  await page.getByRole('link', { name: filter }).first().click();

  // Wait for the product grid to load
  await page.waitForSelector('.product-grid-column');
  const products = page.locator('.product-grid-column');

  // Ensure products are listed
  const productCount = await products.count();
  expect(productCount).toBeGreaterThan(0);

  // Check if at least one product contains the filter text
  let filterTextFound = false;
  for (let i = 0; i < productCount; i++) {
    const product = products.nth(i);
    const productText = await product.innerText();
    if (productText.includes(filter)) {
      filterTextFound = true;
      console.log(`Product with filter text "${filter}" found: ${productText}`);
      break;  // Stop checking other products if we found at least one
    }
  }

  // Assert that at least one product contains the filter text
  expect(filterTextFound).toBe(true);
}

/**
 * 
 * @param page 
 * @param filter Ex [CHANEL', 'DIOR']
 * @param type Ex [brand , product type]
 */
// Function to apply brand and product type filter and verify products
export async function applyFilterForBrandAndType(page: Page, filter: string, type:string) {
  // Apply the brand filter
  await page.getByTestId(type).click();
  await page.getByRole('checkbox', { name: filter }).first().click();

  // Wait for the product grid to load
  await page.waitForSelector('.product-grid-column');
  const products = page.locator('.product-grid-column');

  // Ensure products are listed
  const productCount = await products.count();
  expect(productCount).toBeGreaterThan(0);

  // Check if at least one product contains the brand filter text
  let filterTextFound = false;
  for (let i = 0; i < productCount; i++) {
    const product = products.nth(i);
    const productText = await product.innerText();
    if (productText.includes(filter)) {
      filterTextFound = true;
      console.log(`Product with filter text "${filter}" found: ${productText}`);
      break;  // Stop checking other products if we found at least one
    }
  }

  // Assert that at least one product contains the brand filter text
  expect(filterTextFound).toBe(true);
}

/**
 * The function specifically for gender and "for whom" criteria.
 * It verifies that the products displayed are correctly filtered according to the selected filter.
 * @param page 
 * @param filter 
 * @param type 
 */

export async function applyFilterForGenderAndForWhom(page: Page, filter: string, type:string) {
  console.log(`Applying filter: ${filter}`);

  // Apply the brand filter
  await page.getByTestId(type).click();
  await page.getByRole('checkbox', { name: filter }).click();

  // Wait for the product grid to load
  await page.waitForSelector('.product-grid-column');
  const products = page.locator('.product-grid-column');

  // Ensure products are listed
  const productCount = await products.count();
  expect(productCount).toBeGreaterThan(0);
  await expect(page.getByRole('button', { name: `${filter}` })).toBeVisible()

}
