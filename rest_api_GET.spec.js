import {test, expect} from '@playwright/test'
test("Testing rest APi with GET method", async({request})=>{
    const URL='https://jsonplaceholder.typicode.com/posts/1'
    const response=await request.get(URL)
    expect(response.status()).toBe(200)

    const responseBody=await response.json()
    expect(responseBody.userId).toBe(1)
    expect(responseBody.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")



})