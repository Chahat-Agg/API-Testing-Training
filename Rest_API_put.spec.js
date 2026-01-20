import {test, expect} from '@playwright/test'
test('put method', async({request})=>{
    const response= await request.put("https://jsonplaceholder.typicode.com/posts/1",{
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
    data: {
        id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
    },
})

    expect (response.status()).toBe(200)
    const responseData= await response.json()
    expect (responseData.body).toBe('bar')

    expect(responseData.title).toBe('foo')

    const responseHeaders = await response.headers()
    expect(responseHeaders['content-type']).toContain('application/json')

})