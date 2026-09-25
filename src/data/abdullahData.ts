import { DeveloperProject, SkillDetail, ClientProposal } from '../types/abdullah';
import schoolWebDeveloperImg from '../assets/images/school_web_developer_1790335438923.jpg';
import schoolWebDevFullImg from '../assets/images/school_web_dev_full_1790335896031.jpg';
import ecommerceFullImg from '../assets/images/ecommerce_full_ui_1790335913109.jpg';

export { schoolWebDeveloperImg, schoolWebDevFullImg, ecommerceFullImg };

export const DEFAULT_PROJECTS: DeveloperProject[] = [
  {
    id: 'proj-1',
    title: 'School Web Developer - Digital Campus Portal',
    category: 'Frontend',
    image: schoolWebDevFullImg,
    websiteUrl: 'https://vercel.com',
    description: 'School Web Developer Platform: Modern Education For A Bright Future. A supportive and innovative school academy platform featuring online admissions, student portal, interactive classroom directory, and responsive campus architecture.',
    client: 'School Web Developer Academy',
    year: '2024',
    deliverables: [
      'School Web Developer Portal & Campus Architecture',
      'Online Student Admissions & Fee Systems',
      'Interactive Classroom & Faculty Directory',
      '100% High-Speed Mobile Responsive Design',
    ],
  },
  {
    id: 'proj-2',
    title: 'Zenith E-Commerce Marketplace',
    category: 'E-Commerce',
    image: ecommerceFullImg,
    websiteUrl: 'https://stripe.com',
    description: 'A full-featured digital storefront with real-time inventory synchronizer, dynamic multi-tier shopping cart, search filter widgets, and Stripe Payment gateway. Built for high conversion.',
    client: 'Zenith Apparel Group',
    year: '2024',
    deliverables: [
      'React Context State Controller',
      'Tailwind Fluid Layouts',
      'Stripe API Integration',
      'Client Admin Product Panel',
    ],
  },
  {
    id: 'proj-3',
    title: 'Vivid UI/UX Design System',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    websiteUrl: 'https://tailwindcss.com',
    description: 'A comprehensive designer component system configured with Figma, compiled with custom design tokens, and coded beautifully in React + Tailwind. Tailored for scalable multi-app setups.',
    client: 'Vivid Softworks',
    year: '2024',
    deliverables: [
      'Figma Design Token Export',
      'Tailwind Theme Extensions',
      'Accessible WAI-ARIA React Widgets',
      'Clean Storybook Documentation',
    ],
  },
  {
    id: 'proj-4',
    title: 'Aura Creative Portfolio Engine',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    websiteUrl: 'https://react.dev',
    description: 'A lightning-fast, sleek modular creative portfolio template showcasing fluid layouts, deep custom styling hooks, responsive grids, and clean visual storytelling rules.',
    client: 'Aura Studios',
    year: '2024',
    deliverables: [
      'Single Page Application Structure',
      'Lucide Icon Integration',
      'Custom Client Configurator Panel',
      'Optimized Web Vitals Scoring',
    ],
  },
  {
    id: 'proj-5',
    title: 'Secure RESTful Authentication Gateway',
    category: 'APIs',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    websiteUrl: 'https://supabase.com',
    description: 'An isolated enterprise grade authentication microservice proxy supporting OAuth logins, secure cookie sessions, request rate-limiting safeguards, and database credential encryption.',
    client: 'Shield Cybernetics',
    year: '2024',
    deliverables: [
      'Node.js API Microservice',
      'OAuth 2.0 Auth Flow Setup',
      'Redis Token Backing Layer',
      'Comprehensive Postman Documentation Suite',
    ],
  },
];

export const SKILLS_DATA: Record<string, SkillDetail> = {
  React: {
    full: 'React 19 & Modern Hooks',
    rating: '96%',
    projects: '140+ Projects',
    note: 'Expert in building complex dynamic client UIs, managing state using modern Hooks, Context API, and state stores with sub-millisecond render optimization.',
    color: 'bg-teal-900 border-teal-500 text-teal-300',
    tip: 'Pro Tip: Always leverage custom hook structures and useCallback/useMemo controllers to bypass duplicate rendering overhead.',
    codeSnippet: `// Custom React 19 State Hook with Optimistic Updates
export function useRealtimeState<T>(initial: T) {
  const [data, setData] = useState<T>(initial);
  const update = useCallback((next: T) => {
    startTransition(() => setData(next));
  }, []);
  return [data, update] as const;
}`,
    architectureFeatures: ['React 19 Server Actions', 'Custom Context Controllers', 'Sub-millisecond Virtual DOM', 'Zero-Jank 60fps Transitions'],
  },
  'Next.js': {
    full: 'Next.js SSR & App Router',
    rating: '94%',
    projects: '85+ Websites',
    note: 'Implementing lightning-fast Server-Side Rendering (SSR), Static Site Generation (SSG), search-engine friendly meta-tags, and edge runtime caching.',
    color: 'bg-slate-900 border-slate-500 text-slate-300',
    tip: 'Pro Tip: Combine Next.js App Router layouts with server-side pre-fetching to maximize both Lighthouse SEO and dynamic interaction response times.',
    codeSnippet: `// Next.js App Router Server Action with Edge Cache
export async function getCachedPortfolio(slug: string) {
  'use server';
  return await fetch(\`https://api.abdullah.dev/items/\${slug}\`, {
    next: { revalidate: 3600, tags: ['portfolio'] }
  }).then(res => res.json());
}`,
    architectureFeatures: ['Hybrid Static & Edge Rendering', 'Lighthouse 99+ SEO Audits', 'Streaming Server Components', 'Automated Image Optimization'],
  },
  TypeScript: {
    full: 'TypeScript Strict Architecture',
    rating: '95%',
    projects: '160+ App builds',
    note: 'Enforcing static type safety, custom interface declarations, enterprise design patterns, and robust API call parameter constraints for zero runtime bugs.',
    color: 'bg-blue-900 border-blue-500 text-blue-300',
    tip: 'Pro Tip: Leverage advanced union type guards and partial generic properties to establish flexible database-to-UI component mapping schemas.',
    codeSnippet: `// Type-Safe Entity Contract with Strict Discriminated Unions
export type AsyncState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T; timestamp: number }
  | { status: 'error'; error: Error };`,
    architectureFeatures: ['100% Strict Type Coverage', 'Discriminated Union Models', 'Generic Component Contracts', 'Automated Zod Schema Validation'],
  },
  'Tailwind CSS': {
    full: 'Tailwind CSS Utility Systems',
    rating: '98%',
    projects: '220+ Web pages',
    note: 'Architecting bespoke visual themes, utility-first clean responsive code, dark mode variants, fluid grids, custom CSS token extensions, and zero clutter UI layouts.',
    color: 'bg-sky-950 border-sky-500 text-sky-300',
    tip: 'Pro Tip: Rely on custom Tailwind spacing grids and component tokens to enforce aesthetic spacing rules without heavy inline style overrides.',
    codeSnippet: `/* Tailwind 4 Fluid Theme Token Definition */
@theme {
  --color-brand-emerald: #022c22;
  --color-brand-amber: #f59e0b;
  --font-serif: 'Playfair Display', serif;
  --shadow-glow: 0 0 25px rgba(245, 158, 11, 0.25);
}`,
    architectureFeatures: ['Sub-10kb Production CSS Bundle', 'Fluid Clamp Spacing Scales', 'Micro-Interactions & Transitions', 'Accessible WCAG Contrast Colors'],
  },
  'Node & APIs': {
    full: 'Node.js REST & Microservices',
    rating: '92%',
    projects: '95+ Microservices',
    note: 'Creating secure, rate-limited backend web APIs, proxy endpoints, database models, express routes, and custom authentication handlers.',
    color: 'bg-emerald-950 border-emerald-500 text-emerald-300',
    tip: 'Pro Tip: Implement standard CORS configurations and validate incoming requests using JSON schemas to block potential database security leaks.',
    codeSnippet: `// Express Secure Proxy Endpoint with Rate-Limiting
import rateLimit from 'express-rate-limit';

router.post('/api/checkout', rateLimit({ max: 20 }), async (req, res) => {
  const session = await createSecureSession(req.body);
  return res.status(200).json({ ok: true, session });
});`,
    architectureFeatures: ['JWT Token & Cookie Auth', 'Distributed Redis Rate Limiting', 'Low-Latency JSON Streaming', 'Automated Health Check Probes'],
  },
  PostgreSQL: {
    full: 'PostgreSQL Relational DB & Prisma',
    rating: '91%',
    projects: '60+ Database Schemas',
    note: 'Designing normalized database relational models, index optimization, migrations, foreign key constraints, and transactional consistency.',
    color: 'bg-indigo-950 border-indigo-500 text-indigo-300',
    tip: 'Pro Tip: Always create composite indexes on foreign keys and frequently queried status filters for sub-10ms query execution.',
    codeSnippet: `// Prisma Schema with Indexed Relational Tables
model Project {
  id        String   @id @default(cuid())
  title     String
  category  String
  views     Int      @default(0)
  createdAt DateTime @default(now())
  @@index([category, createdAt(sort: Desc)])
}`,
    architectureFeatures: ['ACID Transaction Guarantees', 'Composite B-Tree Indexes', 'Automated Prisma Migrations', 'Connection Pooling via PgBouncer'],
  },
  Stripe: {
    full: 'Stripe Payments & Webhooks',
    rating: '93%',
    projects: '45+ Storefronts',
    note: 'Integrating Stripe Checkout, subscriptions, webhook event listeners, customer portals, and PCI-compliant financial transaction handling.',
    color: 'bg-purple-950 border-purple-500 text-purple-300',
    tip: 'Pro Tip: Verify webhook cryptographic signatures with raw request buffers before fulfilling orders in your database.',
    codeSnippet: `// Idempotent Webhook Signature Verification
const event = stripe.webhooks.constructEvent(
  rawBody,
  signatureHeader,
  process.env.STRIPE_WEBHOOK_SECRET!
);
if (event.type === 'payment_intent.succeeded') {
  await fulfillCustomerOrder(event.data.object);
}`,
    architectureFeatures: ['Zero-Cardholder-Data Risk', 'Webhook Signature Verification', 'Dynamic Multi-Currency Support', 'Instant Refund & Dispute Hooks'],
  },
};

export const DEFAULT_ADDITIONAL_SKILLS: string[] = [
  'REST / GraphQL APIs',
  'Database Indexing',
  'OAuth Integrations',
  'CI/CD Deployment',
  'State Machine UIs',
  'Lighthouse SEO',
];

export const DEFAULT_PROPOSALS: ClientProposal[] = [
  {
    id: 'ABD-9812',
    clientName: 'Siddique Ahmad',
    clientEmail: 'siddique@ventures.co',
    serviceType: 'Full-Stack SaaS',
    budget: 1800,
    complexity: 'Next.js Platform Setup',
    message: 'Looking for an elegant SaaS client dashboard with real-time customer data tracking widgets.',
    status: 'In Progress',
    date: '2026-09-12',
  },
  {
    id: 'ABD-4432',
    clientName: 'Esha Malik',
    clientEmail: 'esha@malikdesigns.com',
    serviceType: 'E-Commerce Store',
    budget: 1400,
    complexity: 'Stripe Storefront Layout',
    message: 'Need a premium Shopify or custom React storefront to list luxury clothing articles.',
    status: 'Completed',
    date: '2026-09-20',
  },
];

export const DEFAULT_HERO_IMAGE = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
