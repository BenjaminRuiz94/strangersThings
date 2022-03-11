import React from "react"

const BASE_URL = "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT"

export async function fetchAllPosts () {
    if (localStorage.getItem("posts")) {
        return JSON.parse(localStorage.getItem("posts"))
    }

    const url = `${BASE_URL}/posts`

    try {
        const response = await fetch(`${BASE_URL}/posts`)
        const result = await response.json()
        const posts = result.data.posts

        localStorage.setItem("posts", JSON.stringify(posts))

        return posts
    } catch (err) {
        console.error("cant fetch posts")
    }
}



