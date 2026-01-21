import {test, expect} from '@playwright/test'
test('mock a fruit list and does not call the actual API', async({page})=>{
    await page.route('*/**/api/v1/fruits', async route=>{
        const json= [{name:'Testing', id:30}]
        await route.fulfill({json})
    }
    )
    await page.goto('https://demo.playwright.dev/api-mocking/')
    await expect(page.getByText('Testing')).toBeVisible()
})