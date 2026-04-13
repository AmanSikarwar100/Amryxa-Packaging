export const products = [
  {
    id: 1,
    name: 'Magnetic Closure Rigid Box',
    cat: 'Rigid Boxes',
    filter: 'rigid',
    badge: 'Best Seller',
    desc: 'Premium 2mm greyboard with full-wrap printing, matte or gloss lamination, and satisfying magnetic snap closure.',
    longDesc: 'Our flagship rigid box is made from premium greyboard wrapped in art paper with full-bleed printing. The magnetic closure and crisp structure create an unforgettable unboxing moment for luxury cosmetics, jewellery, and premium gifts.',
    tags: ['Magnetic Closure', 'Custom Insert', 'Foil Option', '2mm Greyboard'],
    moq: '500',
    svgType: 'rigid',
    specs: [
      { l: 'Board', v: '2mm Greyboard' },
      { l: 'Min. Order', v: '500 units' },
      { l: 'Printing', v: '4C + Pantone' },
      { l: 'Sample TAT', v: '48 hours' },
      { l: 'Finishes', v: 'Matte / Gloss / Soft-Touch' },
      { l: 'Closure', v: 'Magnetic / Ribbon' },
    ],
  },
  {
    id: 2,
    name: 'Sleeve + Tray Carton',
    cat: 'Folding Cartons',
    filter: 'carton',
    badge: 'Premium',
    desc: 'Outer sleeve slides over an inner tray to create a premium unboxing experience for cosmetics, teas, and gift sets.',
    longDesc: 'A premium two-piece carton system that carries your brand story on the sleeve and protects the product inside with a snug tray. Ideal for D2C launches and limited-edition collections where first impressions matter.',
    tags: ['Sleeve Design', 'Inner Tray', 'Premium Feel', 'D2C Friendly'],
    moq: '500',
    svgType: 'carton',
    specs: [
      { l: 'Board', v: 'FBB 350gsm' },
      { l: 'Min. Order', v: '500 units' },
      { l: 'Printing', v: '4C + Pantone' },
      { l: 'Sample TAT', v: '48 hours' },
      { l: 'Style', v: 'Sleeve + Tray' },
      { l: 'Finish', v: 'Soft Touch / Gloss' },
    ],
  },
  {
    id: 3,
    name: 'Art Paper Carry Bag',
    cat: 'Carry Bags',
    filter: 'bag',
    badge: 'Best Seller',
    desc: 'Premium 200gsm art paper bags with full-bleed printing, matte or gloss finish, and twisted cord or ribbon handles.',
    longDesc: 'A premium retail carry bag that elevates every purchase and reinforces your brand identity. Choose from several handle styles and finishes for a high-end look that customers remember.',
    tags: ['200gsm Art Paper', 'Full Bleed Print', 'Cord Handles', 'Retail Ready'],
    moq: '500',
    svgType: 'bag',
    specs: [
      { l: 'Paper', v: '200gsm Art' },
      { l: 'Min. Order', v: '500 units' },
      { l: 'Printing', v: '4C Offset' },
      { l: 'Sample TAT', v: '48 hours' },
      { l: 'Handle', v: 'Twisted Cord / Ribbon' },
      { l: 'Finish', v: 'Matte / Gloss / Soft-Touch' },
    ],
  },
]

export const portfolioItems = [
  { title: 'Lumara Skincare — Rebrand', industry: 'Beauty & Skincare', filter: 'beauty', year: '2024', col1: '#2A1A0A', col2: '#3A2A1A', metrics: [{ n: '340%', l: 'Unboxing shares' }, { n: '₹2.1Cr', l: 'New revenue' }, { n: '4wk', l: 'Delivery' }], desc: 'Complete packaging rebrand for a D2C skincare brand entering the premium tier. Rigid magnetic boxes, custom tissue, and coordinated labels.' },
  { title: 'Heritage Foods — Premium Line', industry: 'Food & Beverage', filter: 'food', year: '2024', col1: '#0A1A0A', col2: '#142A14', metrics: [{ n: '220%', l: 'Shelf pickup' }, { n: '18%', l: 'Price uplift' }, { n: '6wk', l: 'Launch-ready' }], desc: 'New premium product line packaging including folding cartons and gift hampers for a heritage Indian food brand.' },
  { title: 'Aurelia Gems — Collection Box', industry: 'Luxury Jewellery', filter: 'luxury', year: '2024', col1: '#1A1A0A', col2: '#2A2A14', metrics: [{ n: '98%', l: 'Repeat purchase' }, { n: '5★', l: 'Avg. review' }, { n: '1wk', l: 'Turnaround' }], desc: 'Bespoke rigid presentation boxes with velvet inserts, gold foil stamping, and branded ribbon pull for a luxury jewellery brand.' },
  { title: 'NovaBev — Seasonal Campaign', industry: 'Food & Beverage', filter: 'food', year: '2024', col1: '#0A0A1A', col2: '#14142A', metrics: [{ n: '10K', l: 'Units in 12 days' }, { n: '0%', l: 'Defect rate' }, { n: '₹0', l: 'Extra cost' }], desc: '10,000 seasonal gift boxes delivered in 12 days for a campaign launch — on spec, on time, on budget.' },
  { title: 'ZenTech — Product Launch Box', industry: 'Consumer Tech', filter: 'tech', year: '2024', col1: '#0A1A1A', col2: '#142A2A', metrics: [{ n: '1.2M', l: 'TikTok views' }, { n: '4.8★', l: 'Rating' }, { n: '3wk', l: 'From brief' }], desc: 'Unboxing-optimised product launch packaging for a consumer electronics brand. Drawer box with foam insert and branded tissue.' },
  { title: 'PureOrganic — Eco Range', industry: 'FMCG', filter: 'fmcg', year: '2024', col1: '#0A1A0A', col2: '#142814', metrics: [{ n: '100%', l: 'Recyclable' }, { n: 'FSC', l: 'Certified' }, { n: '50K', l: 'Units/month' }], desc: 'Full FSC-certified sustainable packaging range in kraft and recycled board with water-based inks for an organic FMCG brand.' },
  { title: 'Velour — Luxury Cosmetics', industry: 'Beauty & Skincare', filter: 'beauty', year: '2023', col1: '#1A0A1A', col2: '#2A142A', metrics: [{ n: '3.5×', l: 'Brand value' }, { n: 'Luxury', l: 'Tier upgrade' }, { n: '2wk', l: 'Sample approval' }], desc: 'Positioning packaging for a cosmetics brand moving from mass to luxury tier. Soft-touch foil boxes with embossed logo.' },
  { title: 'Roastery Co. — Coffee Bags', industry: 'Food & Beverage', filter: 'food', year: '2023', col1: '#1A0E0A', col2: '#2A1A10', metrics: [{ n: '40%', l: 'New stockists' }, { n: 'Award', l: 'Pack design' }, { n: '500K', l: 'Annual units' }], desc: 'Award-winning coffee bag design for a specialty roaster — custom kraft side-gusset bags with degassing valves and full-bleed branding.' },
  { title: 'AutoParts — Industrial Kit Box', industry: 'Tech & Industrial', filter: 'tech', year: '2023', col1: '#141414', col2: '#1C1C1C', metrics: [{ n: '60%', l: 'Less damage' }, { n: 'ISO', l: 'Certified pack' }, { n: '100K', l: 'Annual run' }], desc: 'Heavy-duty corrugated kit boxes with custom foam inserts for an automotive parts manufacturer. Reduced damage rate by 60%.' },
]

export const teamMembers = [
  { initials: 'AK', name: 'Arjun Kapoor', role: 'Founder & CEO', bio: '15 years in packaging manufacturing. Former VP at ITC Packaging, IIM Ahmedabad alumnus.' },
  { initials: 'SR', name: 'Shruti Rao', role: 'Head of Design', bio: 'Structural packaging designer with work featured in Packaging World and Brand Identity awards.' },
  { initials: 'VM', name: 'Vinay Mehta', role: 'Head of Operations', bio: 'Supply chain expert managing pan-India production network with 99.4% on-time delivery record.' },
  { initials: 'PJ', name: 'Priya Joshi', role: 'Head of Client Success', bio: 'Brand strategist ensuring every packaging decision aligns with client goals and shelf impact.' },
]

export const processSteps = [
  {
    num: '01', title: 'Discovery & Brief',
    desc: 'Your journey begins with a 30-minute discovery call with your dedicated packaging consultant. We deep-dive into your brand identity, product specs, target audience, budget, and timeline.',
    deliverables: ['Brand Brief', 'Spec Sheet', 'Budget Plan', 'Timeline'],
  },
  {
    num: '02', title: 'Design & Dieline',
    desc: 'Our in-house structural designers create custom dielines and artwork in 5–7 business days. Multiple concepts with 3D visualisations. Unlimited revisions until you love it.',
    deliverables: ['Structural Dieline', '3D Render', 'Artwork Mockup', 'Revision Rounds'],
  },
  {
    num: '03', title: 'Sample Production',
    desc: 'Physical samples dispatched within 48 hours. You receive 3–5 samples of the exact box, printed on final substrates with all finishing effects. Touch, feel, and approve before bulk production.',
    deliverables: ['Physical Samples', 'Material Swatches', 'Finish Proofs', '48hr Dispatch'],
  },
  {
    num: '04', title: 'Pre-Press & Plate Making',
    desc: 'Our pre-press team prepares colour-accurate printing plates using CTP technology. Pantone matching, screen calibration, and substrate testing ensure sample-to-bulk consistency.',
    deliverables: ['CTP Plates', 'Pantone Matching', 'Screen Calibration', 'Substrate Test'],
  },
  {
    num: '05', title: 'Bulk Production & QC',
    desc: 'Production on Heidelberg and Komori presses with inline quality cameras. 12-point inspection at start, mid, and end of each run. Every box passes before it reaches packaging.',
    deliverables: ['Press Run', '12-Point QC', 'Batch Reports', 'Defect < 0.01%'],
  },
  {
    num: '06', title: 'Packing & Delivery',
    desc: 'Orders shrink-wrapped, palletised, and dispatched with full insurance. Real-time tracking from facility to door. Pan-India delivery in 3–5 days; metro same-day for urgent requirements.',
    deliverables: ['Real-Time Tracking', 'Full Insurance', 'Pan India Delivery', '3–5 Day TAT'],
  },
]

export const stats = [
  { n: 1200, suffix: '+', label: 'Brands Served' },
  { n: 50, suffix: 'Cr+', label: 'Revenue Enabled' },
  { n: 48, suffix: 'hr', label: 'Sample Turnaround' },
  { n: 99, suffix: '%', label: 'Client Satisfaction' },
]

export const testimonials = [
  { body: '"Amryxa transformed how our product is perceived. The unboxing experience went viral on Instagram within a week — ROI was phenomenal."', author: 'Priya Mehta', company: 'Founder, Lumara Skincare' },
  { body: '"10,000 boxes needed in 15 days. Amryxa delivered in 12. Quality was impeccable — not a single defect. These guys are exceptional operators."', author: 'Rahul Sharma', company: 'VP Supply Chain, NovaBev' },
  { body: '"As a D2C jewellery brand, packaging is everything. Our custom velvet-insert rigid boxes are so gorgeous customers keep them forever."', author: 'Ananya Patel', company: 'Creative Director, Aurelia Gems' },
  { body: '"Attention to detail is unmatched. From structural integrity to print quality — everything is premium. Amryxa is now our exclusive packaging partner."', author: 'Vikram Nair', company: 'CEO, Heritage Foods India' },
  { body: '"We launched a new SKU with Amryxa\'s sleeve-tray boxes. The unboxing video got 1.2M views in a week. Game-changing for our brand."', author: 'Neha Gupta', company: 'Founder, ZenTech Consumer' },
]
