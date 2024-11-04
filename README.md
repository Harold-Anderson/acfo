## Did Bun Work?

This `bun` branch of the repository is designed to test bun and see if there is any benefit
to using Bun as a build tool for Cloudflare Pages. My experiments showed there was not. Although
things are better than they were when Reuben Tier wrote his [blog article](https://blog.otterlord.dev/posts/hello-from-bun/)
there are still some problems.

Here is a link to the deployed website: https://e3d5994f.acfo.pages.dev/
It looks fine, but when you run Lighthouse, you will see:

- The speed of the site is virtually identical to the site built with pnpm, so there is no speed benefit.  
  For instance, here is one with pnpm: https://a996d454.acfo.pages.dev/
- Lighthouse complains about large layout shifts, which does not happen with pnpm.
- Lighthouse informs us that pages are set up not to be indexed by robots. So the page wouln't show up in search engines.  
  This is by design. Non-production deployments are not indexed. Cloudflare inserts this.

I have not investigated the layout shift. It is enough for me to just use pnpm.

## Website based on AstroWind, a template for Astro, and hosted on Cloudflare Pages

The repository contains the source code for my company website [acfo.co](https://acfo.co),
which is built using the [AstroWind](https://github.com/onwidget/astrowind)
template for Astro and hosted on Cloudflare Pages.
The website is designed to be fast and free.
Please refer to the AstroWind repository for more information about the template and its features.  
I am only going to discuss additional information not in the AstroWind README.md.

# Speed and Hosting

I played with many hosting providers. Eventually I settled on Cloudflare Pages because Cloudflare are experts
in DDoS mitigation, and I didn't want to get stuck with a large traffic bill if my website was attacked.
This has happened to Netlify customers, for instance.

Cloudflare is among the fastest hosting providers:
[https://bejamas.io/compare/github-pages-vs-firebase-vs-cloudflare-pages]

Firebase is the absolute fastest hosting provider, but this comes at a cost.
For me, the 40 ms penalty for using Cloudflare Pages was worth it for the
peace of mind of not having to worry about DDoS attacks.

The Largest Contentful Paint (LCP) of this site is 346 milliseconds according to Lighthouse on my 1 Gigabit connection
on my desktop computer. In order to achieve this, you need to make a few choices on Cloudflare:

- Transfer your domain to Cloudflare and use their nameservers.
- In your DNS, CNAME both your root and www to your pages url:
  https://yourpage.pages.dev
- Both CNAMES should be proxied in Cloudflare DNS.
- Do not have any redirect rules from your root to www. This is important.
- Please note that I am not setting cache headers. [Let Cloudflare
  do that](https://developers.cloudflare.com/pages/configuration/serving-pages/).

  > In most situations, you should avoid setting up any custom caching on your site. Pages comes with built in caching defaults that are optimized for caching as much as possible, while providing the most up to date content. Every time you deploy an asset to Pages, the asset remains cached on the Cloudflare CDN until your next deployment.

- In the settings for your domain (not the Astro site), under Speed > optimization > Protocol optimization
  make sure that HTTP/3 and HTTP/2 to Origin are enaabled. You probably can enable everthing
  on the protocols tab.
- On the Content optimization tab, turn off Speed Brain and Rocket Loader.
  I haven't found a problem with Cloudflare Fonts or Early Hints, so you can
  leave those on.
- Under Caching > Configuration, set the Caching level to Standard.
- On the same tab, set the Browser Cache TTL to respect existing headers.  
  Cloudflare Pages will set these.
- On the same tab, set Always Online to be true. I hate downtime.
- Under Cachint > Tiered Cache, use their Smart Tiered Caching Topology.
- On your Workers & Pagest dashboard, set up Custom Domains for both your root
  and www.

It might be possible to further improve LCP by preloading the hero image. Astro does not really support this. There are workarounds, but I haven't gotten them to work.

# How to Build and Deploy with Bun

I used bun instead of npm because it is faster.
In order to build this website, clone it from GitHub, change into the directory, then:

```
bun run build
bun run preview  #optional
```

To deploy it to Cloudflare Pages, just check it in to GitHub, and Cloudflare will start the build process. You may ask how Cloudflare knows how to use bun instead of npm by looking at this repository. It doesn't. You need to change that in the Settings > Build Configuration for your pages project on the Cloudflare Dashboard. change the Build Command to `bun run build`

You may ask how Cloudflare knows what version of Bun to use. If you don't specify the `BUN_VERSION` variable on the Settings for your Pages Project, Cloudflare will use its default version, currently 1.1.33. I would recommend letting Cloudflare choose the version.

Please note that you can't have different build commands for the Production and Preview environments. This is kind of a pain. If you want to have one bun branch and another pnpm branch, you would have to change the build command in the Cloudflare dashboard every time you do a deployment.

# About the Astro Template

The AstroWind template version I used has a bug where it will optimize
even images in /public. This is a problem if you need to post your blog
entries on LinkedIn, for instance, which does not accept webp files.

I didn't want my blog entries to be displayed by date. I wanted to be able to
order them the way I wanted to. So this repository orders blog entries
by file name.

# A Final Word

Thank you for reading this. I hope it helps you. There are certainly
things that could be improved. Please drop me a line if you have any
comments or questions.
