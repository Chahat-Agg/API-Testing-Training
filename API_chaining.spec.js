import {test, expect} from '@playwright/test'
test('API Chaining', async({request})=>{

    //Get all posts
    const postsResponse=await request.get("https://jsonplaceholder.typicode.com/posts")
    expect(postsResponse.status()).toBe(200)

    //parse response body to JSON
    const posts= await postsResponse.json()
    const first_post=posts[0]
    console.log(first_post)

    //get comments from the selected post
    const comments_response=await request.get(`https://jsonplaceholder.typicode.com/posts/${first_post.id}/comments`)
    expect(comments_response.status()).toBe(200)

    //parse response body to JSON
    const comments=await comments_response.json()
    expect(comments.length).toBeGreaterThan(0)

    expect(comments[0].postId).toBe(first_post.id)
    console.log(comments[0].postId)
})