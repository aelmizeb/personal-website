import { Article } from "@/types";
import { basePath } from '@/utils/constants';

export const articles: Article[] = [
  {
    slug: "optimizing-magento-performance",
    title: "Optimizing Magento Performance: Tips for Faster Stores",
    date: "2025-08-26",
    excerpt: "Magento is powerful, but performance can be challenging. Learn practical strategies to speed up your store and enhance user experience.",
    content: `
      <div>
        <h2>Why Performance Matters ?</h2>
        <p>In the world of e-commerce, <strong>every millisecond counts</strong>. A slow-loading store can frustrate customers, reduce conversions, and impact SEO rankings. Magento is a robust platform, but without proper optimization, its rich features can become a bottleneck.</p>

        <h2>Core Performance Strategies</h2>
        <ul>
          <li><strong>Enable Varnish Cache:</strong> Magento natively supports Varnish. It caches full pages at the edge, significantly reducing server load and improving load times for repeat visitors.</li>
          <li><strong>Use Redis:</strong> Store sessions, default caches, and other temporary data in Redis. This decreases database queries, accelerates page rendering, and scales seamlessly under heavy traffic.</li>
          <li><strong>Optimize Images:</strong> Use modern formats like <code>WebP</code>, lazy-load images, and compress them without losing quality. This reduces page weight and improves LCP (Largest Contentful Paint) metrics.</li>
          <li><strong>Upgrade PHP & Infrastructure:</strong> Always run the latest stable PHP version and leverage PHP-FPM for better concurrency. Combine this with high-performance hosting and SSD storage for optimal results.</li>
          <li><strong>Leverage a CDN:</strong> Use CDNs like Cloudflare or Fastly to deliver static assets from the closest server to the user. This reduces latency and offloads traffic from your origin server.</li>
        </ul>

        <h2>Advanced Optimization Techniques</h2>
        <p>Beyond basic caching and hosting improvements, consider these advanced techniques:</p>
        <ul>
          <li><strong>Full Page Caching Strategy:</strong> Configure cache invalidation rules to prevent stale content while keeping pages highly responsive.</li>
          <li><strong>JavaScript & CSS Minification:</strong> Combine, minify, and defer loading of JS/CSS to reduce render-blocking resources.</li>
          <li><strong>Database Optimization:</strong> Regularly clean logs, enable query caching, and optimize indexes to improve database efficiency.</li>
          <li><strong>Asynchronous Operations:</strong> Use asynchronous APIs for heavy tasks (like sending emails or updating stock) to prevent blocking frontend requests.</li>
        </ul>

        <h2>Monitoring and Continuous Improvement</h2>
        <p>Performance optimization is ongoing. Use tools like <a href="https://pagespeed.web.dev/">Google PageSpeed Insights</a> and <a href="https://gtmetrix.com/">GTmetrix</a> to monitor your store. Identify bottlenecks, test changes in staging, and iterate frequently.</p>

        <p>Optimizing Magento is a combination of <strong>smart caching, efficient hosting, asset optimization, and continuous monitoring</strong>. By layering these strategies, you can deliver a fast, reliable, and enjoyable shopping experience to your customers, increasing conversions and satisfaction.</p>
      </div>
    `,
    image: `${basePath}/articles/magento-performance.webp`,
  },
  {
    slug: "php-8-features",
    title: "PHP 8 Features Every Developer Should Know",
    date: "2025-08-25",
    excerpt: "PHP 8 introduced major improvements that modernize development. Discover features, performance upgrades, and why you should upgrade.",
    content: `
      <div>
        <h2>PHP 8: A Leap Forward</h2>
        <p>PHP 8 represents a major milestone in PHP's evolution, bringing both <strong>performance enhancements</strong> and <strong>developer-friendly features</strong>. For many applications, upgrading from PHP 7 can significantly improve speed and code maintainability.</p>

        <h2>Performance Comparison: PHP 7 vs PHP 8</h2>
        <p>Benchmarks show PHP 8 is notably faster than PHP 7 in many scenarios:</p>
        <ul>
          <li><strong>PHP 7.4:</strong> Baseline performance for most web applications.</li>
          <li><strong>PHP 8.0:</strong> Up to <strong>10-15% faster</strong> in real-world applications due to JIT compilation and optimized engine internals.</li>
          <li><strong>PHP 8.1:</strong> Adds <code>Fibers</code> for asynchronous programming, performance improvements in array operations, and minor JIT enhancements.</li>
          <li><strong>PHP 8.2:</strong> Introduces read-only classes, improved type safety, and better performance for enumerations and object handling.</li>
          <li><strong>PHP 8.3:</strong> Expected to improve string handling, memory usage, and introduce further JIT optimizations for CPU-heavy workloads.</li>
          <li><strong>PHP 8.4:</strong> Focused on further JIT improvements, performance for multi-threaded tasks, and advanced syntax features to modernize PHP even further.</li>
        </ul>

        <h2>Key Features in PHP 8</h2>
        <h3>1. JIT Compilation</h3>
        <p>The Just-in-Time compiler improves performance for CPU-intensive tasks such as complex calculations or image processing.</p>

        <h3>2. Union Types</h3>
        <p>Functions and methods can now accept multiple types:</p>
        <pre><code>function calculate(int|float $value): int|float { ... }</code></pre>

        <h3>3. Named Arguments</h3>
        <p>Call functions using argument names:</p>
        <pre><code>createUser(name: 'Alice', age: 30);</code></pre>

        <h3>4. Attributes</h3>
        <p>PHP 8 introduces native attributes with <code>#[Attribute]</code>.</p>

        <h3>5. Match Expression</h3>
        <p>A modern alternative to <code>switch</code>.</p>

        <h3>6. Constructor Property Promotion</h3>
        <p>Simplifies class definitions:</p>
        <pre><code>class User {
  public function __construct(public string $name, public int $age) {}
}</code></pre>

        <h3>7. Nullsafe Operator</h3>
        <p>Safely access nested object properties:</p>
        <pre><code>$country = $user?->address?->country;</code></pre>
        
        <p>PHP 8 and its minor versions bring <strong>speed improvements, modern syntax, and developer-friendly features</strong>. Keeping PHP up-to-date ensures your projects stay maintainable and competitive.</p>
      </div>
    `,
    image: `${basePath}/articles/php-8.webp`,
  },
  {
    slug: "web-performance-best-practices",
    title: "Web Performance Best Practices in 2025",
    date: "2025-08-20",
    excerpt: "Fast websites win. A comprehensive guide to modern web performance best practices for 2025, including optimization strategies and monitoring tips.",
    content: `
      <div>
        <h2>Why Speed is Everything ?</h2>
        <p>Website performance directly impacts <strong>user experience, conversion rates, and SEO rankings</strong>.</p>

        <h2>Comprehensive Best Practices</h2>
        <p>Here's a detailed checklist of techniques:</p>
        <ul>
          <li><strong>Lazy Loading:</strong> Load images, videos, and iframes only when they enter the viewport.</li>
          <li><strong>Code Splitting & Tree Shaking:</strong> Bundle only the JavaScript needed per page.</li>
          <li><strong>Minimize JavaScript:</strong> Use <code>async</code> and <code>defer</code> attributes.</li>
          <li><strong>HTTP/3 & Protocol Optimization:</strong> Upgrade to HTTP/3 and QUIC.</li>
          <li><strong>Optimized Images & Media:</strong> Serve WebP or AVIF formats.</li>
          <li><strong>Edge Caching & CDNs:</strong> Deploy static assets close to users.</li>
          <li><strong>Font Optimization:</strong> Use <code>font-display: swap</code>.</li>
          <li><strong>Monitoring & Continuous Improvement:</strong> Use tools like <a href="https://developers.google.com/speed/pagespeed/insights">Google PageSpeed Insights</a>.</li>
          <li><strong>PWA Principles:</strong> Implement service workers and caching strategies.</li>
        </ul>

        <h2>Advanced Techniques for 2025</h2>
        <ul>
          <li><strong>Preloading Critical Assets:</strong> Prioritize key CSS, JS, and hero images.</li>
          <li><strong>SSR & SSG:</strong> Improve SEO by pre-rendering pages.</li>
          <li><strong>Adaptive Loading:</strong> Serve lighter assets for slow connections.</li>
          <li><strong>Performance Budgets:</strong> Enforce speed standards during development.</li>
        </ul>

        <p>Web performance is an ongoing journey. By combining core practices and modern techniques, your projects in 2025 can deliver <strong>fast, reliable, and enjoyable user experiences</strong>.</p>
      </div>
    `,
    image: `${basePath}/articles/web-performance.webp`,
  },
];
