import fs from 'fs'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
let Parser = require('rss-parser')
let parser = new Parser()

const fixedMarkdownContent = `## Hello there <sup>👋</sup>  

My name is **_Jeff_**.  

I'm a:  

- Biology company employee <sup>🧬</sup>   
- Technology amateur <sup>📱</sup>    

Latest update on my blog:
  
`

let newPostsMarkdownContent = ''

let feed = await parser.parseURL('https://blog.zzbd.org/atom.xml')
console.log(feed.title);

// keep only 5
feed.items.forEach(post => {
  newPostsMarkdownContent += `- [${post.title}](${post.link}) \n`
})

fs.writeFileSync('./README.md', fixedMarkdownContent + newPostsMarkdownContent)
