# JS 2023 趋势

> https://www.jamesqquick.com/blog/javascript-trends-2023/

js 生态改变的非常快。坦白说，很难跟上。让我们快速看一下2023年需要关注的JS的五个趋势。

## 写更少的JS

为什么这么说？有几个原因

### TS
听起来有点站不住脚，但确实如此。TS增长的飞快，每天我都听到越来越多的人说他们离开TS不能活。即使TS非常明显地跟JS很像，但从技术上说，TS跟JS不是一个东西。

### AI服务
坦白说，我很怀疑AI服务可以做到多好，甚至好到为我们写代码。但是，我确实被Copilot和ChatGPT惊艳到了。他们能做到的事情太不可思议了。
尽管我不认为他们会取代我们的工作，但我确实认为他们会为我们生成越来越多的代码，这样的话，我们就会写更少的代码。

### BaaS
BasS的增长使我们减少一部分代码的开发。像Supabase, Appwrite等可以处理数据库交互、身份认证、实时更新等等事情。有些人可能喜欢什么代码都自己写，但我不是，我喜欢快速造一些东西出来，如果有平台可以接管一部分后端工作，我很乐意。

## 我们使用的工具更少用JS了

> 也许是时候学其他语言了

在工具领域，JS被用的越来越少。听起来很奇怪？这里有一些JS工具例子，但是是用其他语言写的：
* esbuild       2020        go
* Turbopack 2022        Rust
* Bun             2022        Zig

开发者越来越频繁地正在用其他语言写JS工具，为了好的性能。期待！

## 使用更多JS运行时（比只使用Node）

当有人问怎么在服务端使用JS，默认回答Node，已经持续很长一段时间了。但是有些事情在悄然改变着。我认为开发者已经逐渐认识到了Node的限制，可能会对其他替代方案感兴趣。这里有一些其他可用的运行时：
* Deno
* Bun
* Workers(Cloudflare)
  随着ESR边缘渲染的增长，不同运行时方案的采纳量会继续增长。

## 往浏览器传输更少JS代码

因为性能在变得对网站越来越重要，所以这就变成了趋势。让我们面对网站性能直接影响收入的事实吧。加速应用的一种方式是往浏览器传输更少的JS，许多框架都在这方面加大投入。

就我个人而言，我认为 Remix 在推动框架更多地关注服务端而不是浏览器端方面是一个巨大的火花。从一开始，Remix 就提供了在服务器上加载数据的hooks，这样你就不必在浏览器中加载数据了。这种尽可能利用服务器的主题在最近对我最喜欢的一些框架(如 Next.js 和 SvelteKit)的更新中很明显;

另外，我喜欢的另一个框架Astro，默认情况下，向浏览器传输的JS代码量的0KB。它的主要目标就是性能。如果你还没了解，快去看看。


## 更多使用 元框架

虽然已经有很多的元框架，但人们还会创造更多。

不管是新的还是旧的，开发者会继续使用元框架因为他们给我们节省了大量时间。元框架正在创造越来越多的模板代码给我们使用，我认为JS的开发者都很喜欢。


