import {test, expect} from '@playwright/test'
test("Delete method in api", async({request})=>{
    const response= await request.delete("https://jsonplaceholder.typicode.com/posts/1")
    expect(response.status()).toBe(200)
    const responseHeaders= await response.headers()
    expect(responseHeaders['transfer-encoding']).toContain("chunked")
})