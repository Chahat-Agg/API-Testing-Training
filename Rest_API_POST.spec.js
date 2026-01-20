import {test, expect} from '@playwright/test'
test("Creating a new POST request", async({request})=>{
    const response=await request.post("https://jsonplaceholder.typicode.com/posts", {
    
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    data:{
    title: 'This is a new Post request',
    body: 'Body1',
    userId: 1,
  },
    })

    expect(response.status()).toBe(201)

    const responseData= await response.json()
    expect(responseData.title).toBe('This is a new Post request')

    const responseHeaders= await response.headers()
    expect (responseHeaders['content-type']).toContain('application/json')
})