import {test, expect} from '@playwright/test'
test("Asserting complete JSOn response", async({page})=>{
    const URL='https://jsonplaceholder.typicode.com/posts'
    const response=await page.request.get(URL)
    await expect(response).toBeOK()

    const users = await response.json();
    await expect(users.length).toBeGreaterThan(0)

    await expect(users[1].id).toBe(2)

})