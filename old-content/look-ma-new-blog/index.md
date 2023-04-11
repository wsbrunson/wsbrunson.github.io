---
title: Look Ma, New Blog!
date: "2019-01-06"
---

I’ve tried multiple blogging platforms/libraries/websites/frameworks. Jekyll? Check. Medium? Check. Wordpress? Actually, no, and thankfully I won’t have to. This latest iteration is using Gatsby.js and I feel like I’ve finally found the one.

Gatsby is a static site generator that uses React, GraphQL, web pack, and other, modern JavaScript technologies. If you are a fan of React/JSX, this is the static site generator for you. Gatsby handles configuration and performance optimizations under the hood. With some extra plugins, you can have a static, offline-ready, progressive, mobile-first website with barely any configuration. That’s a big list of buzzwords without much work on your part. Check out the [Gatsby site](https://www.gatsbyjs.org/) to learn more about its out-of-the-box features plus community plugins to take it further.

Below I’ll list some of the plugins I’m using for this blog

### PurgeCSS + Tachyons

I’m using Tachyons for styling. Tachyons is a functional CSS library that makes writing styles clearer and more consistent. A super TL;DR is that it provides class names for most CSS properties you would want to use. For example. to create a green, rounded button you would do `class="bg-green white br3 pa2`. This applies background color green, color white, a border radius of 3, and padding top, bottom, left, and right (a = all) of 2. Seems verbose I know but once you start using it you realize how fast you can write CSS with the added benefit of co-locating styles with components.

[The PurgeCSS plugin](https://github.com/anantoghosh/gatsby-plugin-purgecss) is useful for stripping unused CSS from your app's bundled assets. The full Tachyons CSS library is huge. You can save your users' data plans by and patience by only sending the styles you need to.

### Github GraphQL Helper

When using Gatsby, a lot of times you will want to find a source plugin to pull in data and make it available for use by your pages. I’m using [gatsby-source-github](https://github.com/pravdomil/gatsby-source-github) to fetch my repositories to use in my [Project](https://www.wsbrunson.com/projects/) page . I am writing a follow-up post to explain how this works.

### TypeScript

Gatsby has TypeScript support! Using [this plugin](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-typescript), you can use .ts and .tsx files for your site.

There are some caveats though. There isn't support for compiler errors. Unlike using TypeScript in a project, the plugin hides implementation details and as a consequence, you won’t receive errors in the compiler. If you use VSCode though, it will show you all errors and give you better autocomplete support. There is also no support for Enums or Namespaces which are advanced features of TypeScript.

### Conclusion

That's just a sub-set of what I'm using for this blog. There are other plugins in there that handle transforming markdown files into HTML pages but these use-cases are documented in many other places and included in [Gatsby's starter blog package](https://github.com/gatsbyjs/gatsby-starter-blog). Or check out the source code for this blog [here](https://github.com/wsbrunson/wsbrunson.github.io)!
