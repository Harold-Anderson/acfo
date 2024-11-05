## Did Bun Work?

This `bun` branch of the repository is designed to test bun and see if there is any benefit
to using Bun as a build tool for Cloudflare Pages. My experiments showed that bun builds my Astro site in 31 seconds,
whereas pnpm takes 71 seconds. There is no difference in the rendered output, since Cloudflare Pages uses V8, not bun.

Here is a link to the deployed website: https://81a121cb.acfo.pages.dev/

At this point, for my purposes it would be better to use bun than pnpm, since the build time is more than halved and there is no difference in the output or the Lighthouse scores. I have not tried deploying to a hosting provider such as Kinsta, Render, Northflank, Clever Cloud, Back4App, or Fly.io that uses the bun runtime. The ones I looked at had slower time to first byte, so would probably not show any benefit. My Lighthouse score
for a small static Astro site is currently dominated by browser rendering and network, not delay in the runtime.

## Changes you need to make to use Bun as a build tool and package manager

Bun is less forgiving than vite and requires explicit configuration of Tailwind and PostCSS. Once this is done, the same code can be built
using pnpm or bun. In addition, I have added a `detect-runtime.js` file that will ensure that vite is using bun for the build, not node.  
It is important to use `bun run --bun` and not `bun run`. Please see https://bun.sh/docs/cli/run#bun

## How to Build and Deploy with Bun

In order to build this website, clone it from GitHub, change into the directory, then:

```
bun run --bun build
bun run --bun preview  #this will allow you to test the site using the bun runtime
```

When setting up a Cloudflare Pages project, you can elect to automatically deploy from GitHub. If you do that, to deploy it to Cloudflare Pages, just check it in to GitHub, and Cloudflare will start the build process.

You may ask how Cloudflare knows how to use bun instead of npm by looking at this repository. It doesn't. You need to change that in the Settings > Build Configuration for your pages project on the Cloudflare Dashboard. change the Build Command to `bun run --bun build`

You may ask how Cloudflare knows what version of Bun to use. If you don't specify the `BUN_VERSION` variable on the Settings for your Pages Project, Cloudflare will use its default version, currently 1.1.33. I would recommend letting Cloudflare choose the version.

Please note that you can't have different build commands for the Production and Preview environments. This is kind of a pain. If you want to have one bun branch and another pnpm branch, you would have to change the build command in the Cloudflare dashboard every time you do a deployment.

The rest of this README.md discusses the [AstroWind template](https://github.com/onwidget/astrowind) and [Cloudflare Pages](https://pages.cloudflare.com/).

# Website based on AstroWind, a template for Astro, and hosted on Cloudflare Pages

The repository contains the source code for my company website [acfo.co](https://acfo.co),
which is built using the [AstroWind](https://github.com/onwidget/astrowind)
template for Astro and hosted on Cloudflare Pages.
The website is designed to be fast and free.
Please refer to the AstroWind repository for more information about the template and its features.  
I am only going to discuss additional information not in the AstroWind README.md.

## Speed and Hosting.

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
  make sure that HTTP/3 and HTTP/2 to Origin are enabled. You probably can enable everything
  on the protocols tab.
- On the Content optimization tab, turn off Speed Brain and Rocket Loader.
  I haven't found a problem with Cloudflare Fonts or Early Hints, so you can
  leave those on.
- Under Caching > Configuration, set the Caching level to Standard.
- On the same tab, set the Browser Cache TTL to respect existing headers.  
  Cloudflare Pages will set these.
- On the same tab, set Always Online to be true. I hate downtime.
- Under Caching > Tiered Cache, use their Smart Tiered Caching Topology.
- On your Workers & Pages dashboard, set up Custom Domains for both your root
  and www.

It might be possible to further improve LCP by preloading the hero image. Astro does not really support this. There are workarounds, but I haven't gotten them to work.

## About the Astro Template

The AstroWind template version I used has a bug where it will optimize
even images in /public. This is a problem if you need to post your blog
entries on LinkedIn, for instance, which does not accept webp files.

I didn't want my blog entries to be displayed by date. I wanted to be able to
order them the way I wanted to. So this repository orders blog entries
by file name.

## A Final Word

Thank you for reading this. I hope it helps you. There are certainly
things that could be improved. Please drop me a line if you have any
comments or questions.
