import {test, expect} from '@playwright/test'
test('patch method', async({request})=>{
    const response= await request.patch("https://jsonplaceholder.typicode.com/posts/1",{
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
    data: {
    title: 'foo',
    },
})

    expect (response.status()).toBe(200)

    const responseData= await response.json()

    expect(responseData.title).toBe('foo')

    const responseHeaders = await response.headers()
    expect(responseHeaders['content-type']).toContain('application/json')

})