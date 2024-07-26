import { test } from '@playwright/test';
import { applyFilterAndVerifyProducts, applyFilterForBrandAndType, applyFilterForGenderAndForWhom, } from './utils'
 // Filter categories
 const highlightsFilters = ['SALE', 'NEU'];
 const markeFilters = ['CHANEL', 'DIOR'];
 const produktartFilters = ['Eau de Parfum', 'Eau de Toilette'];
 const geschenkfürFilters = ['Jahrestag', 'Geburtstag'];
 const fürWenFilters = ['Weiblich', 'Männlich'];

 test.beforeEach(async ({ page }) => {
    // Step 1: Navigate to the website
    await page.goto('https://www.douglas.de/de');
  
    // Step 2: Handle the cookie consent
    await page.getByTestId('uc-accept-all-button').click();
  
    // Step 3: Click on "Parfum"
    const parfumButton = page.getByTestId('header-component-item--navigation').getByRole('link', { name: 'PARFUM' }).first()
    await parfumButton.click()
    await page.waitForLoadState('domcontentloaded');
});

test.describe('Douglas.de E-commerce ',async () => {

  test('TC_001 Test with highlightsFilters Filters', async ({ page }) => {
    // Test highlight filters
  for await (const filter of highlightsFilters) {
    await applyFilterAndVerifyProducts(page, filter);
    await page.getByTestId('header-component-item--navigation').getByRole('link', { name: 'PARFUM' }).first().click()
  }
  })

  test('TC_002 Test with brand Filters', async ({ page }) => {
    // Test brand filters
  for await (const filter of markeFilters) {
    await applyFilterForBrandAndType(page, filter, 'brand')
    await page.getByTestId('header-component-item--navigation').getByRole('link', { name: 'PARFUM' }).first().click()
  }
  })

  test('TC_003 Test with product type Filters', async ({ page }) => {

  // Test product type filters
  for await (const filter of produktartFilters) {
    await applyFilterForBrandAndType(page, filter, 'classificationClassName');
    await page.getByTestId('header-component-item--navigation').getByRole('link', { name: 'PARFUM' }).first().click()
  }
  })

  test('TC_004 Test with For Whom Filters', async ({ page }) => {
    // Test gift for filters
  for await (const filter of geschenkfürFilters) {
    await applyFilterForGenderAndForWhom(page, filter, 'Geschenk für');  
    await page.getByTestId('header-component-item--navigation').getByRole('link', { name: 'PARFUM' }).first().click()
  }
  })

  test('TC_005 Test with gender Filters', async ({ page }) => {
    // Test for whom filters
    for await (const filter of fürWenFilters) {
      await applyFilterForGenderAndForWhom(page, filter, 'gender');
      await page.getByTestId('header-component-item--navigation').getByRole('link', { name: 'PARFUM' }).first().click()
    }
  })
})



 


