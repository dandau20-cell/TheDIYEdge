export interface CityData {
  name: string
  slug: string
  state: string
  stateSlug: string
  intro: string
  kitchenRemodel: { min: number; max: number; avg: number }
  bathroomReno: { min: number; max: number; avg: number }
  deckCostPerSqFt: { min: number; max: number; avg: number }
  laborCostIndex: string
  climate: string
  faq: { question: string; answer: string }[]
}

export const citiesData: Record<string, CityData> = {
  'houston-tx': {
    name: 'Houston',
    slug: 'houston-tx',
    state: 'Texas',
    stateSlug: 'texas',
    intro: 'Houston\'s massive, sprawling metro area means home improvement costs vary significantly by neighborhood — from affordable projects in Katy and Sugar Land to premium renovations in the Heights and River Oaks. The city\'s humid subtropical climate makes moisture-resistant materials and proper ventilation critical for any renovation project.',
    kitchenRemodel: { min: 16000, max: 72000, avg: 39000 },
    bathroomReno: { min: 6200, max: 29000, avg: 15500 },
    deckCostPerSqFt: { min: 14, max: 36, avg: 24 },
    laborCostIndex: 'Moderate — approximately 8% below national average',
    climate: 'Humid subtropical; hot summers, mild winters, hurricane risk',
    faq: [
      {
        question: 'Do I need permits for a kitchen remodel in Houston?',
        answer: 'In Houston, permits are required for structural changes, electrical work, plumbing alterations, and HVAC modifications. Cosmetic updates like cabinet refacing or countertop replacement typically do not require permits. Always check with the City of Houston Permits & Licensing division before starting any major project.',
      },
      {
        question: 'How long does a typical bathroom renovation take in Houston?',
        answer: 'A standard bathroom renovation in Houston takes 2–4 weeks for a full gut-and-replace project. Partial updates like fixture replacements or tile work can be completed in 3–7 days. Lead times for materials at local suppliers like HD Expo and Ferguson are generally 1–3 weeks.',
      },
      {
        question: 'What\'s the best time of year to build a deck in Houston?',
        answer: 'Fall and early spring (October–April) are ideal for Houston deck projects. Summer heat and humidity can slow exterior work and affect certain materials. Budget an extra 10–15% for moisture-resistant composite decking or pressure-treated lumber rated for Houston\'s climate zone.',
      },
    ],
  },
  'phoenix-az': {
    name: 'Phoenix',
    slug: 'phoenix-az',
    state: 'Arizona',
    stateSlug: 'arizona',
    intro: 'Phoenix\'s desert environment demands home improvements that combat extreme heat — energy-efficient windows, cool roofing, and covered shade structures are not luxuries but necessities. The metro\'s rapid population growth and booming real estate market mean well-executed renovations can add substantial equity in neighborhoods from Tempe to Scottsdale.',
    kitchenRemodel: { min: 17000, max: 74000, avg: 40000 },
    bathroomReno: { min: 6500, max: 30000, avg: 16000 },
    deckCostPerSqFt: { min: 15, max: 38, avg: 26 },
    laborCostIndex: 'Moderate — approximately 5% below national average',
    climate: 'Hot desert; extreme summers, mild winters, low humidity',
    faq: [
      {
        question: 'What materials work best for Phoenix kitchen remodels?',
        answer: 'In Phoenix\'s extreme heat, choose heat-resistant quartz or granite countertops over solid surfaces that can warp. Light-colored cabinets and reflective backsplash materials help keep the kitchen cooler. Energy Star-rated appliances are particularly impactful given Phoenix\'s high cooling costs.',
      },
      {
        question: 'Are covered patios worth the investment in Phoenix?',
        answer: 'Absolutely. A covered patio or pergola with misting systems is one of the highest-ROI improvements for Phoenix homes, typically adding 50–80% of its cost to resale value. Outdoor living is Phoenix\'s primary entertainment mode, and a shaded outdoor space dramatically expands usable square footage for 8+ months per year.',
      },
      {
        question: 'How much does it cost to add a pool versus updating my deck in Phoenix?',
        answer: 'A new pool in Phoenix runs $35,000–$75,000+, while a travertine or cool-deck patio surround adds $8–$18 per square foot. Deck refreshes with cool-coat sealers cost $2–$5 per square foot. Pools add significant value in Phoenix\'s market but require ongoing maintenance costs of $1,200–$2,400 per year.',
      },
    ],
  },
  'san-antonio-tx': {
    name: 'San Antonio',
    slug: 'san-antonio-tx',
    state: 'Texas',
    stateSlug: 'texas',
    intro: 'San Antonio\'s blend of historic charm and modern growth creates a unique home improvement market where preserving character while adding modern amenities commands premium prices. The city\'s military community, tourism economy, and rapidly growing tech sector are driving sustained demand for renovated homes across all price points.',
    kitchenRemodel: { min: 15000, max: 66000, avg: 36000 },
    bathroomReno: { min: 5800, max: 27000, avg: 14500 },
    deckCostPerSqFt: { min: 14, max: 35, avg: 23 },
    laborCostIndex: 'Below average — approximately 12% below national average',
    climate: 'Semi-arid subtropical; hot summers, mild winters, occasional drought',
    faq: [
      {
        question: 'What kitchen styles are most popular in San Antonio?',
        answer: 'San Antonio homeowners favor Spanish Colonial and Texas Hill Country-inspired kitchen designs with terracotta or saltillo tile, warm wood tones, and artisan-style hardware. Open-concept layouts with kitchen islands are in high demand, as are farmhouse sinks and quartz countertops that blend tradition with modern durability.',
      },
      {
        question: 'How do I find reliable contractors in San Antonio?',
        answer: 'The San Antonio Builders Association maintains a member directory of licensed contractors. Always verify that contractors hold a valid Texas contractor registration and carry general liability and workers\' compensation insurance. Get at least three bids and check references through the Better Business Bureau San Antonio chapter.',
      },
      {
        question: 'Does San Antonio\'s limestone soil affect foundation work during renovations?',
        answer: 'Yes, San Antonio\'s caliche and limestone subsurface can complicate any project requiring excavation or foundation work, including ground-level deck footings. A geotechnical assessment may be needed for major projects. Above-ground deck structures on helical piers are often recommended over traditional concrete footings in problem areas.',
      },
    ],
  },
  'dallas-tx': {
    name: 'Dallas',
    slug: 'dallas-tx',
    state: 'Texas',
    stateSlug: 'texas',
    intro: 'Dallas\'s thriving economy, fueled by corporate relocations and a booming financial sector, has created one of the most competitive real estate markets in Texas. Renovated homes in hot neighborhoods like Bishop Arts, East Dallas, and Lakewood command significant premiums, making strategic home improvement a smart play for Dallas homeowners.',
    kitchenRemodel: { min: 18000, max: 80000, avg: 43000 },
    bathroomReno: { min: 7000, max: 33000, avg: 17500 },
    deckCostPerSqFt: { min: 15, max: 40, avg: 27 },
    laborCostIndex: 'Moderate — approximately 3% below national average',
    climate: 'Humid subtropical; hot summers, mild winters, tornado risk',
    faq: [
      {
        question: 'What ROI can I expect from a kitchen remodel in Dallas?',
        answer: 'Mid-range kitchen remodels in Dallas typically return 62–72% of their cost at resale, according to recent Remodeling Magazine data. In high-demand zip codes like 75206, 75214, and 75219, premium kitchen renovations can return 80%+ as buyers compete aggressively for move-in-ready homes with modern kitchens.',
      },
      {
        question: 'Do Dallas city codes require permits for bathroom remodels?',
        answer: 'Dallas requires permits for plumbing, electrical, and structural work in bathroom remodels. Simple cosmetic updates — like replacing fixtures, tile, or vanities without moving supply lines — are generally permit-free. The City of Dallas Development Services handles permits, and processing takes 5–15 business days for residential projects.',
      },
      {
        question: 'What\'s the average timeline for a Dallas kitchen remodel?',
        answer: 'A complete Dallas kitchen remodel typically takes 6–12 weeks from demolition to completion. Supply chain improvements have reduced some delays, but custom cabinetry still requires 6–10 week lead times. Plan your project to avoid summer kitchen disruptions during the school year start in late August.',
      },
    ],
  },
  'jacksonville-fl': {
    name: 'Jacksonville',
    slug: 'jacksonville-fl',
    state: 'Florida',
    stateSlug: 'florida',
    intro: 'Jacksonville\'s sprawling geography — it\'s one of the largest cities by area in the contiguous US — means home improvement costs and market conditions vary significantly across its neighborhoods. From historic Riverside to the affluent Ponte Vedra beaches, the city\'s diverse real estate market rewards renovations that match neighborhood character and buyer expectations.',
    kitchenRemodel: { min: 16000, max: 70000, avg: 38000 },
    bathroomReno: { min: 6200, max: 28000, avg: 14800 },
    deckCostPerSqFt: { min: 14, max: 36, avg: 24 },
    laborCostIndex: 'Below average — approximately 8% below national average',
    climate: 'Humid subtropical; hot humid summers, mild winters, hurricane-prone',
    faq: [
      {
        question: 'What hurricane-resistant improvements make sense in Jacksonville?',
        answer: 'Jacksonville homeowners should prioritize impact-resistant windows and doors (adding $8,000–$15,000 for a typical home), reinforced garage doors, and metal roofing rated for 140+ mph winds. These improvements often qualify for Florida\'s Fortified Home program, which can reduce insurance premiums by 15–40%.',
      },
      {
        question: 'How does humidity affect deck materials in Jacksonville?',
        answer: 'Jacksonville\'s high humidity makes untreated wood decks susceptible to rot, mold, and termite damage. Composite decking from brands like Trex or TimberTech, or naturally rot-resistant ipe hardwood, performs significantly better than pressure-treated pine. Budget 20–35% more than the national average for materials that can handle Florida\'s humidity.',
      },
      {
        question: 'Are there any Jacksonville-specific incentives for energy-efficient renovations?',
        answer: 'Yes, JEA (Jacksonville Electric Authority) offers rebates for energy-efficient HVAC systems, insulation, and smart thermostats. Florida also has a sales tax exemption on energy-efficient appliances. Federal Inflation Reduction Act credits can cover up to 30% of costs for solar panels, heat pumps, and insulation upgrades through 2032.',
      },
    ],
  },
  'austin-tx': {
    name: 'Austin',
    slug: 'austin-tx',
    state: 'Texas',
    stateSlug: 'texas',
    intro: 'Austin\'s explosive tech-driven growth has transformed it into one of America\'s most competitive real estate markets, where a well-renovated kitchen or bathroom can be the deciding factor in a multiple-offer situation. The city\'s creative culture and sustainability-minded residents drive strong demand for eco-friendly materials and modern designs that stand out.',
    kitchenRemodel: { min: 20000, max: 90000, avg: 49000 },
    bathroomReno: { min: 7800, max: 36000, avg: 19500 },
    deckCostPerSqFt: { min: 17, max: 44, avg: 30 },
    laborCostIndex: 'Above average — approximately 12% above national average',
    climate: 'Subtropical with semi-arid influences; hot summers, mild winters',
    faq: [
      {
        question: 'How much has construction costs increased in Austin recently?',
        answer: 'Austin has seen labor costs rise 18–25% over the past three years due to surging demand and a tight contractor market. Book qualified contractors 6–12 weeks in advance for kitchen and bathroom projects. Material costs have moderated, but skilled labor remains at a premium due to the city\'s construction boom.',
      },
      {
        question: 'What style of kitchen renovation sells best in Austin?',
        answer: 'Austin buyers favor modern farmhouse, contemporary minimalist, and mid-century modern kitchen styles. White or off-white shaker cabinets with contrasting islands, quartz countertops, and black matte hardware are the dominant aesthetic. Sustainability-focused materials like bamboo flooring and low-VOC finishes are increasingly requested.',
      },
      {
        question: 'Do I need special permits for a deck in Austin\'s hilly terrain?',
        answer: 'Austin\'s topography often means hillside properties need engineered deck designs with deeper footings. The City of Austin requires building permits for decks over 200 sq ft or higher than 30 inches off the ground. In Barton Springs recharge zone properties, additional environmental review is required before any ground disturbance.',
      },
    ],
  },
  'charlotte-nc': {
    name: 'Charlotte',
    slug: 'charlotte-nc',
    state: 'North Carolina',
    stateSlug: 'north-carolina',
    intro: 'Charlotte\'s banking industry hub and rapid population growth have made it one of the South\'s most dynamic home improvement markets. Neighborhoods like NoDa, Plaza Midwood, and South End are hotbeds of renovation activity, with buyers consistently willing to pay premiums for move-in-ready homes with updated kitchens and bathrooms.',
    kitchenRemodel: { min: 16000, max: 70000, avg: 38000 },
    bathroomReno: { min: 6200, max: 28000, avg: 14800 },
    deckCostPerSqFt: { min: 15, max: 37, avg: 25 },
    laborCostIndex: 'Moderate — approximately 5% below national average',
    climate: 'Humid subtropical; warm summers, mild winters, moderate rainfall',
    faq: [
      {
        question: 'What neighborhoods in Charlotte have the best renovation ROI?',
        answer: 'Dilworth, Myers Park, Elizabeth, and NoDa consistently show the strongest renovation ROI in Charlotte. These walkable, character-rich neighborhoods attract buyers willing to pay premiums for well-maintained updated homes. South End\'s proximity to the light rail also makes it a strong market for condo and townhome renovations.',
      },
      {
        question: 'How long is the permit process for kitchen remodels in Charlotte?',
        answer: 'Charlotte\'s Mecklenburg County permitting typically takes 5–10 business days for residential kitchen remodels requiring electrical or plumbing permits. The county offers express review for an additional fee. Many contractors have established relationships with local inspectors that help streamline the process.',
      },
      {
        question: 'Are composite or wood decks more popular in Charlotte?',
        answer: 'Charlotte homeowners are increasingly choosing composite decking (60% of new deck builds) over pressure-treated wood due to lower maintenance requirements and durability in the humid Piedmont climate. Top-tier composites like Trex Transcend and Fiberon Horizon are popular choices, adding $3–$7 per square foot over basic composite pricing.',
      },
    ],
  },
  'denver-co': {
    name: 'Denver',
    slug: 'denver-co',
    state: 'Colorado',
    stateSlug: 'colorado',
    intro: 'Denver\'s mile-high elevation and 300 days of sunshine create a perfect storm for outdoor living projects, making deck renovations one of the highest-return investments in the metro area. The city\'s booming tech economy and highly educated population drive demand for sophisticated, design-forward kitchen and bathroom renovations that blend mountain aesthetics with urban polish.',
    kitchenRemodel: { min: 22000, max: 92000, avg: 50000 },
    bathroomReno: { min: 8500, max: 38000, avg: 20500 },
    deckCostPerSqFt: { min: 19, max: 48, avg: 33 },
    laborCostIndex: 'Above average — approximately 10% above national average',
    climate: 'Semi-arid; mild four seasons, 300+ sunny days, occasional heavy snow',
    faq: [
      {
        question: 'What decking materials handle Denver\'s altitude and UV exposure best?',
        answer: 'Denver\'s intense UV radiation at 5,280 feet accelerates fading in lower-grade composite decking. Choose UV-stabilized premium composites (Trex, TimberTech) or naturally weather-resistant hardwoods like ipe. For wood decks, plan to re-stain every 2 years vs. the 3–4 year cycle at lower altitudes. Concrete footings must be rated for Denver\'s frost depth of 36 inches.',
      },
      {
        question: 'How do I protect a kitchen remodel investment in Denver\'s market?',
        answer: 'Denver\'s real estate market, while moderating from its 2021–2022 peak, still rewards quality renovations. Focus on open-concept layouts, white or light-colored cabinetry, and durable surfaces like quartz that appeal to the city\'s active, outdoors-oriented buyers. Mid-range remodels ($40,000–$70,000) consistently outperform luxury renovations in ROI.',
      },
      {
        question: 'What\'s the best time of year to renovate in Denver?',
        answer: 'Spring (April–June) is ideal for exterior projects before summer contractor demand peaks. Interior kitchen and bath projects can proceed year-round. Avoid scheduling exterior painting or deck sealing from October–March when temperatures frequently drop below the recommended application minimums for most outdoor coatings.',
      },
    ],
  },
  'nashville-tn': {
    name: 'Nashville',
    slug: 'nashville-tn',
    state: 'Tennessee',
    stateSlug: 'tennessee',
    intro: 'Nashville\'s "it city" status has created one of the hottest real estate markets in the South, where move-in-ready homes with updated kitchens regularly receive multiple offers. The city\'s influx of out-of-state buyers from California and New York has elevated renovation expectations — and prices — across all Nashville neighborhoods.',
    kitchenRemodel: { min: 16000, max: 70000, avg: 38000 },
    bathroomReno: { min: 6200, max: 28000, avg: 15000 },
    deckCostPerSqFt: { min: 15, max: 37, avg: 25 },
    laborCostIndex: 'Moderate — approximately 4% below national average',
    climate: 'Humid subtropical; hot summers, mild winters, high annual rainfall',
    faq: [
      {
        question: 'What kitchen styles appeal to Nashville buyers?',
        answer: 'Nashville\'s music-industry influenced aesthetic runs toward upscale transitional designs: white or navy shaker cabinets, marble-look quartz, warm wood accents, and statement lighting. Open-concept layouts with large islands for entertaining are nearly expected in homes priced over $400,000. Avoid overly trendy choices — Nashville buyers expect designs with staying power.',
      },
      {
        question: 'How does Nashville\'s rapid growth affect contractor availability?',
        answer: 'Nashville\'s construction boom has created a tight labor market. Top kitchen and bath contractors often have 3–6 month waitlists. Start your search early, get multiple quotes, and be wary of contractors offering unrealistically fast start dates. The Nashville chapter of NARI (National Association of the Remodeling Industry) is a good starting point for vetted referrals.',
      },
      {
        question: 'What outdoor improvements add the most value in Nashville?',
        answer: 'In Nashville\'s competitive market, screened porches and covered back decks with outdoor kitchens are top performers. Budget $25,000–$55,000 for a quality screened porch addition, which consistently returns 70–80% at resale. Simple deck replacements ($12,000–$22,000) return 60–70% and dramatically improve the showing quality of listed homes.',
      },
    ],
  },
  'portland-or': {
    name: 'Portland',
    slug: 'portland-or',
    state: 'Oregon',
    stateSlug: 'oregon',
    intro: 'Portland\'s progressive culture and strong sustainability ethos make eco-friendly home improvements particularly valued in this Pacific Northwest city. From Craftsman bungalow restorations in Sellwood to contemporary kitchen renovations in the Pearl District, Portland homeowners take renovation quality seriously and reward craftsmanship with premium resale prices.',
    kitchenRemodel: { min: 22000, max: 90000, avg: 49000 },
    bathroomReno: { min: 8500, max: 37000, avg: 20000 },
    deckCostPerSqFt: { min: 18, max: 47, avg: 32 },
    laborCostIndex: 'Above average — approximately 8% above national average',
    climate: 'Oceanic; mild and rainy winters, warm dry summers',
    faq: [
      {
        question: 'What eco-friendly renovation options are most popular in Portland?',
        answer: 'Portland homeowners frequently choose FSC-certified wood cabinetry, low-VOC paints and finishes, cork or bamboo flooring, and recycled glass countertops. Energy Star appliances and induction cooktops (replacing gas) are increasingly popular. Portland\'s Energy Trust offers rebates up to $3,000 for qualifying energy-efficient improvements.',
      },
      {
        question: 'How do I deal with Portland\'s rainy season during exterior renovations?',
        answer: 'Plan exterior deck and patio projects for May through September when Portland averages fewer than 5 rain days per month. Request weather clauses in your contracts. For roofing projects, contractors often use temporary coverings to enable year-round work. Deck materials should be rated for Pacific Northwest moisture — composite or tropical hardwoods significantly outperform domestic pine.',
      },
      {
        question: 'What are Portland\'s permit requirements for kitchen remodels?',
        answer: 'Portland requires permits for any work affecting plumbing, electrical, structural, or mechanical systems. The Bureau of Development Services processes residential permits, with standard review taking 2–4 weeks. Portland\'s historic districts (Ladd\'s Addition, Irvington, etc.) require additional design review for exterior changes that can add 4–8 weeks to the timeline.',
      },
    ],
  },
  'las-vegas-nv': {
    name: 'Las Vegas',
    slug: 'las-vegas-nv',
    state: 'Nevada',
    stateSlug: 'nevada',
    intro: 'Las Vegas\'s unique real estate market, driven by transplants escaping high-tax states and a growing tech sector, has created strong demand for turnkey renovated homes. The desert climate demands specific materials and systems — proper cooling, desert-appropriate landscaping, and UV-resistant exterior finishes are non-negotiable for lasting value.',
    kitchenRemodel: { min: 17000, max: 74000, avg: 40000 },
    bathroomReno: { min: 6500, max: 30000, avg: 16000 },
    deckCostPerSqFt: { min: 15, max: 38, avg: 26 },
    laborCostIndex: 'Moderate — approximately 6% below national average',
    climate: 'Hot desert; extreme summers (115°F+), mild winters, very low humidity',
    faq: [
      {
        question: 'What\'s the best outdoor living setup for Las Vegas?',
        answer: 'Las Vegas outdoor living spaces need shade structures first — pergolas with adjustable shade sails, covered patios with motorized sun screens, or full aluminum patio covers. Misting systems ($800–$2,500) are highly valued. Travertine and concrete pavers perform well in the heat, as they stay cooler underfoot than standard concrete. Budget $20,000–$50,000 for a full outdoor entertainment setup.',
      },
      {
        question: 'How does the Las Vegas heat affect kitchen renovations?',
        answer: 'Las Vegas summers put extreme demands on kitchen cooling systems. When remodeling, budget to upgrade your HVAC at the same time — an undersized system working harder adds hundreds per month to utility bills. Choose light-colored cabinetry and countertops to minimize heat absorption. Under-cabinet LED lighting generates less heat than fluorescent alternatives.',
      },
      {
        question: 'Are there water-efficiency requirements for bathroom remodels in Las Vegas?',
        answer: 'Southern Nevada Water Authority (SNWA) mandates WaterSense-certified fixtures in new construction and major remodels. Low-flow toilets (1.28 gpf or less), water-efficient showerheads, and smart irrigation systems are required or incentivized. SNWA offers rebates up to $350 for qualifying water-efficient upgrades.',
      },
    ],
  },
  'memphis-tn': {
    name: 'Memphis',
    slug: 'memphis-tn',
    state: 'Tennessee',
    stateSlug: 'tennessee',
    intro: 'Memphis\'s rich blues heritage and diverse neighborhoods — from historic Midtown bungalows to East Memphis\'s traditional ranch homes — create a varied home improvement market where authenticity and character preservation often matter as much as modern amenities. The city\'s affordable housing stock makes renovation projects accessible to a wide range of budgets.',
    kitchenRemodel: { min: 13500, max: 57000, avg: 31000 },
    bathroomReno: { min: 5200, max: 23000, avg: 12000 },
    deckCostPerSqFt: { min: 13, max: 32, avg: 21 },
    laborCostIndex: 'Below average — approximately 15% below national average',
    climate: 'Humid subtropical; hot humid summers, mild winters, moderate tornado risk',
    faq: [
      {
        question: 'What are the most impactful upgrades for a Memphis home sale?',
        answer: 'In Memphis, kitchen and bathroom updates deliver the strongest sale price premiums. Focus on granite or quartz countertops (buyers expect them in $200K+ homes), stainless steel appliances, and updated bath fixtures. Fresh exterior paint and landscape improvements matter enormously — Memphis buyers are strongly influenced by curb appeal.',
      },
      {
        question: 'How do I find licensed contractors in Memphis?',
        answer: 'Tennessee requires licensing for contractors on projects over $25,000. Verify credentials through the Tennessee Department of Commerce & Insurance contractor lookup. The Memphis Area Home Builders Association (MAHBA) also maintains a member directory of reputable contractors. Always request proof of insurance before signing contracts.',
      },
      {
        question: 'What\'s the best deck material for Memphis\'s climate?',
        answer: 'Memphis\'s combination of summer heat, humidity, and occasional ice storms demands durable deck materials. Pressure-treated southern yellow pine is the most common budget choice, but composite decking requires significantly less maintenance in humid conditions. IPE and other tropical hardwoods perform exceptionally well but require annual oiling. Budget $15–$25 per square foot for a quality Memphis deck installation.',
      },
    ],
  },
  'louisville-ky': {
    name: 'Louisville',
    slug: 'louisville-ky',
    state: 'Kentucky',
    stateSlug: 'kentucky',
    intro: 'Louisville\'s distinctive Victorian, Colonial Revival, and Craftsman housing stock makes it a haven for renovation enthusiasts who appreciate character and craftsmanship. The city\'s growing food and bourbon tourism scene has elevated interest in high-quality kitchen renovations, while the revitalization of neighborhoods like NuLu and Portland has created exciting opportunities for strategic home improvements.',
    kitchenRemodel: { min: 13000, max: 56000, avg: 30000 },
    bathroomReno: { min: 5000, max: 22500, avg: 11800 },
    deckCostPerSqFt: { min: 13, max: 31, avg: 20 },
    laborCostIndex: 'Below average — approximately 13% below national average',
    climate: 'Humid continental transitional; hot humid summers, variable winters',
    faq: [
      {
        question: 'How do I preserve Louisville\'s historic character during renovations?',
        answer: 'Louisville\'s Old Louisville, Crescent Hill, and Cherokee Triangle neighborhoods have historic preservation guidelines that may restrict exterior changes. Contact the Louisville Metro Historic Preservation Office before altering any exterior features. Interior renovations typically have no restrictions, and preserving original wood floors, trim, and plaster ceilings adds significant value in historic neighborhoods.',
      },
      {
        question: 'What\'s the average cost to renovate a Louisville Victorian kitchen?',
        answer: 'Victorian home kitchen remodels in Louisville\'s historic neighborhoods average $35,000–$65,000 when properly restoring or respecting original architectural elements while adding modern functionality. Key investments include period-appropriate cabinetry designs, modern plumbing and electrical systems behind traditional facades, and high-quality flooring that complements original home features.',
      },
      {
        question: 'When should I budget for a deck rebuild in Louisville?',
        answer: 'Louisville\'s weather variability — from humid summers to ice storms — accelerates deck wear. Inspect deck boards, joists, and ledger connections annually. Plan to replace pressure-treated wood decks every 15–20 years. Spring and fall are ideal construction seasons. Composite decking, while pricier upfront, typically lasts 25+ years in Louisville\'s climate with minimal maintenance.',
      },
    ],
  },
  'baltimore-md': {
    name: 'Baltimore',
    slug: 'baltimore-md',
    state: 'Maryland',
    stateSlug: 'maryland',
    intro: 'Baltimore\'s legendary rowhomes and Federal Hill brownstones create a renovation culture unlike anywhere else in America — narrow footprints, party walls, and basement-to-rooftop renovations are the norm in this compact, historically rich city. The proximity to D.C. ensures a steady stream of professional buyers who expect contemporary kitchens and baths in otherwise historic structures.',
    kitchenRemodel: { min: 19000, max: 82000, avg: 45000 },
    bathroomReno: { min: 7400, max: 33000, avg: 17800 },
    deckCostPerSqFt: { min: 17, max: 43, avg: 29 },
    laborCostIndex: 'Above average — approximately 7% above national average',
    climate: 'Humid subtropical transitional; hot humid summers, cold winters',
    faq: [
      {
        question: 'What are the unique challenges of renovating a Baltimore rowhome?',
        answer: 'Baltimore rowhome renovations present unique challenges: shared party walls require careful structural work, narrow staircases limit material delivery options, and older homes (pre-1978) often contain lead paint and asbestos requiring licensed abatement contractors. Always budget 15–20% contingency for urban rowhome projects where surprises behind walls are common.',
      },
      {
        question: 'Does Baltimore City offer any renovation assistance programs?',
        answer: 'Baltimore City runs several homeowner assistance programs including Live Baltimore incentives for certain neighborhoods, the Vacants to Value initiative for distressed properties, and Healthy Homes grants for safety improvements. Maryland also offers the HomeOwnership Tax Credit and various energy efficiency rebates through EmPOWER Maryland for qualifying improvements.',
      },
      {
        question: 'Can I add a deck to a Baltimore rowhome?',
        answer: 'Most Baltimore rowhomes can accommodate rear decks or rooftop decks, though structural engineering is required for rooftop additions. Rear yard decks typically run 12\'×16\' given tight lot depths. Permits are processed through Baltimore City\'s DHCD. The median cost for a rear rowhome deck in Baltimore is $18,000–$32,000 including the required engineering.',
      },
    ],
  },
  'milwaukee-wi': {
    name: 'Milwaukee',
    slug: 'milwaukee-wi',
    state: 'Wisconsin',
    stateSlug: 'wisconsin',
    intro: 'Milwaukee\'s sturdy German and Polish-influenced housing stock — full of brick bungalows, foursquares, and duplexes — creates a renovation market that rewards durability and quality craftsmanship. The city\'s growing arts scene, brewery district revival, and Lake Michigan waterfront are drawing younger buyers who are renovating older homes with contemporary aesthetics.',
    kitchenRemodel: { min: 15500, max: 65000, avg: 35500 },
    bathroomReno: { min: 6000, max: 27000, avg: 14200 },
    deckCostPerSqFt: { min: 15, max: 37, avg: 25 },
    laborCostIndex: 'Moderate — approximately 5% below national average',
    climate: 'Humid continental; cold winters, warm summers, lake effect conditions',
    faq: [
      {
        question: 'How should I winterize a Milwaukee home renovation?',
        answer: 'Milwaukee\'s harsh winters demand insulation upgrades whenever walls are open during renovation. R-49 attic insulation, R-21 wall insulation, and triple-pane windows are high-ROI investments that reduce utility bills significantly. Radiant floor heating is increasingly popular in kitchen and bathroom renovations as Wisconsin homeowners prioritize winter comfort.',
      },
      {
        question: 'What kitchen updates make Milwaukee homes more marketable?',
        answer: 'Milwaukee buyers prioritize functional, durable kitchens over flashy designs. White or gray shaker cabinets, quartz countertops, undermount sinks, and stainless steel appliances are the winning formula. Open-concept conversions (removing the wall between kitchen and living room) consistently generate the most buyer interest in Milwaukee\'s bungalow-heavy market.',
      },
      {
        question: 'What\'s the best deck material for Milwaukee\'s freeze-thaw cycles?',
        answer: 'Milwaukee\'s 100+ freeze-thaw cycles per year are brutal on inferior deck materials. Composite decking from established brands (Trex, TimberTech, AZEK) significantly outperforms pressure-treated wood in Wisconsin\'s climate. All concrete footings must extend to Milwaukee County\'s 48-inch frost depth. Budget a 10–15% premium over national averages for cold-climate material upgrades.',
      },
    ],
  },
  'albuquerque-nm': {
    name: 'Albuquerque',
    slug: 'albuquerque-nm',
    state: 'New Mexico',
    stateSlug: 'new-mexico',
    intro: 'Albuquerque\'s Southwestern heritage and diverse architecture — from historic adobe homes in the North Valley to mid-century ranches on the east side — create a distinctive home improvement market where authenticity and regional character are highly prized. The city\'s high desert elevation (5,312 feet) and 310 sunny days per year make outdoor living spaces exceptional investments.',
    kitchenRemodel: { min: 14500, max: 62000, avg: 33500 },
    bathroomReno: { min: 5500, max: 25000, avg: 13000 },
    deckCostPerSqFt: { min: 13, max: 33, avg: 22 },
    laborCostIndex: 'Below average — approximately 10% below national average',
    climate: 'Semi-arid highland; warm dry summers, cold winters, intense UV year-round',
    faq: [
      {
        question: 'How do I renovate an Albuquerque adobe home without damaging its character?',
        answer: 'Adobe renovation requires specialized contractors familiar with traditional New Mexico construction. Avoid adding incompatible materials like vinyl siding that trap moisture against adobe. Restore original vigas (ceiling beams), latillas, and saltillo tile where possible. Territorial and Spanish Colonial Revival details — like portal columns and canales — are highly valued by Albuquerque buyers.',
      },
      {
        question: 'What outdoor improvements work best in Albuquerque\'s climate?',
        answer: 'Albuquerque\'s 310 sunny days and mild evenings make portal (covered porch) additions one of the highest-ROI outdoor improvements. Xeriscaped courtyards with drip irrigation, stucco garden walls, and decorative concrete patios all perform well in this low-water environment. Avoid high-maintenance landscaping that requires frequent irrigation given water scarcity concerns.',
      },
      {
        question: 'Are there permits required for kitchen remodels in Albuquerque?',
        answer: 'Albuquerque requires permits from the City\'s Planning Department for kitchen remodels involving electrical, plumbing, structural, or mechanical work. Permit processing for residential projects typically takes 5–15 business days. Old Town Albuquerque and other historic districts require additional Landmarks and Urban Conservation Commission review for exterior changes.',
      },
    ],
  },
  'tucson-az': {
    name: 'Tucson',
    slug: 'tucson-az',
    state: 'Arizona',
    stateSlug: 'arizona',
    intro: 'Tucson\'s university town character, retiree communities, and growing tech sector create a diverse home improvement market with opportunities across all price points. The Santa Catalina Mountains backdrop and Sonoran Desert setting make outdoor living and desert-adapted landscaping particularly valuable, while the city\'s affordable housing stock offers excellent renovation upside.',
    kitchenRemodel: { min: 14500, max: 62000, avg: 33000 },
    bathroomReno: { min: 5600, max: 25000, avg: 13000 },
    deckCostPerSqFt: { min: 13, max: 34, avg: 22 },
    laborCostIndex: 'Below average — approximately 14% below national average',
    climate: 'Hot semi-arid; very hot dry summers, mild winters, monsoon season July–September',
    faq: [
      {
        question: 'How do I plan renovations around Tucson\'s monsoon season?',
        answer: 'Tucson\'s July–September monsoon season brings intense but brief afternoon thunderstorms. Avoid scheduling exterior painting, deck sealing, or roofing during this period. Interior projects can proceed year-round. Post-monsoon (October–November) is ideal for exterior projects as temperatures moderate and dry conditions return. Ensure proper drainage and waterproofing before monsoon season begins.',
      },
      {
        question: 'What\'s the most cost-effective kitchen upgrade in Tucson?',
        answer: 'Cabinet refacing combined with new countertops and appliances delivers the best value in Tucson\'s moderately priced market. A complete cabinet refacing with new hardware runs $4,000–$9,000 vs. $15,000–$30,000 for new cabinets. Pair with quartz or granite countertops and updated fixtures to create a like-new kitchen at roughly 40% of a full remodel cost.',
      },
      {
        question: 'Are ramadas and covered patios worth the investment in Tucson?',
        answer: 'Absolutely. Covered ramadas and patios in Tucson add disproportionate value by extending usable outdoor space into Tucson\'s comfortable nine months of mild weather. Expect to spend $8,000–$25,000 for a quality ramada with concrete footings and a metal or solid roof. Return on investment in Tucson\'s outdoor-focused market typically exceeds 70–80% at resale.',
      },
    ],
  },
  'sacramento-ca': {
    name: 'Sacramento',
    slug: 'sacramento-ca',
    state: 'California',
    stateSlug: 'california',
    intro: 'Sacramento\'s role as California\'s capital city and its status as a major beneficiary of Bay Area migration have transformed it into one of the state\'s most active home improvement markets. The city\'s Craftsman bungalows in Midtown, ranch homes in East Sacramento, and newer construction in Elk Grove all present distinct renovation opportunities at prices well below the Bay Area.',
    kitchenRemodel: { min: 24000, max: 105000, avg: 57000 },
    bathroomReno: { min: 9200, max: 44000, avg: 23000 },
    deckCostPerSqFt: { min: 20, max: 54, avg: 37 },
    laborCostIndex: 'Above average — approximately 15% above national average',
    climate: 'Mediterranean; hot dry summers, cool mild winters, negligible rain June–September',
    faq: [
      {
        question: 'How does Sacramento\'s hot, dry climate affect outdoor deck materials?',
        answer: 'Sacramento\'s scorching summers (100°F+ common) and near-zero summer rainfall create unique deck conditions. Wood decks can crack and warp without regular sealing in Sacramento\'s dry heat. Composite decking performs well but should be from brands with proven heat resistance (check surface temperature ratings). Proper drainage is less critical than UV protection and thermal expansion accommodation.',
      },
      {
        question: 'What permits are required for Sacramento kitchen remodels?',
        answer: 'The City of Sacramento requires building permits for kitchen remodels involving structural changes, new or relocated electrical circuits, gas line modifications, and significant plumbing work. The permit portal allows online submission with typical processing of 5–10 business days. Sacramento County (for unincorporated areas) has separate permit requirements through the PRMD.',
      },
      {
        question: 'What\'s driving Sacramento\'s home renovation market?',
        answer: 'Sacramento has absorbed tens of thousands of Bay Area transplants seeking lower home prices. These buyers, accustomed to high-end finishes in Bay Area markets, are renovating Sacramento\'s older housing stock to Bay Area standards. This has elevated buyer expectations significantly — granite and quartz countertops are now baseline expectations in Sacramento listings priced above $400,000.',
      },
    ],
  },
  'kansas-city-mo': {
    name: 'Kansas City',
    slug: 'kansas-city-mo',
    state: 'Missouri',
    stateSlug: 'missouri',
    intro: 'Kansas City\'s world-famous barbecue culture and Midwest charm create a home improvement market that values functionality, durability, and genuine craftsmanship over trendy aesthetics. The metro\'s excellent quality of life, affordable cost of living, and growing tech and healthcare sectors are attracting talent who expect quality homes — making renovation investments particularly sound.',
    kitchenRemodel: { min: 15000, max: 63000, avg: 34000 },
    bathroomReno: { min: 5800, max: 26000, avg: 13800 },
    deckCostPerSqFt: { min: 14, max: 34, avg: 23 },
    laborCostIndex: 'Below average — approximately 8% below national average',
    climate: 'Humid continental; hot summers, cold winters, severe weather risk',
    faq: [
      {
        question: 'What Kansas City neighborhoods offer the best renovation ROI?',
        answer: 'The Crossroads Arts District, Brookside, Waldo, and Mission Hills in Kansas City offer the strongest renovation returns. Midtown neighborhoods with Craftsman and Prairie-style homes reward careful period-appropriate renovations. The Missouri side of the metro currently outperforms the Kansas side on renovation ROI due to stronger price appreciation trends.',
      },
      {
        question: 'What\'s the cost to build an outdoor kitchen in Kansas City?',
        answer: 'Outdoor kitchens in Kansas City average $8,000–$30,000 depending on complexity, integrating seamlessly with the city\'s renowned barbecue culture. A basic setup with a gas grill, counter space, and mini-fridge runs $8,000–$12,000. Full outdoor kitchens with pizza ovens, smokers, and weather-rated cabinetry run $20,000–$45,000+. Both add significant appeal to Kansas City listings.',
      },
      {
        question: 'How do tornado risks affect home improvement planning in Kansas City?',
        answer: 'Kansas City lies within Tornado Alley and sees its share of severe weather annually. Smart home improvements include reinforced safe rooms ($3,000–$10,000), impact-resistant windows in exterior-facing rooms, and proper anchor systems for decks and patio structures. FEMA offers safe room grants in some jurisdictions, and insurance discounts of 10–25% are available for documented storm-resistant improvements.',
      },
    ],
  },
  'atlanta-ga': {
    name: 'Atlanta',
    slug: 'atlanta-ga',
    state: 'Georgia',
    stateSlug: 'georgia',
    intro: 'Atlanta\'s explosive growth as the Southeast\'s dominant business hub has created one of the region\'s most dynamic home improvement markets. From the bungalows of Grant Park to the luxury high-rises of Buckhead, Atlanta offers renovation opportunities across every price point, and the city\'s appreciation trajectory has made home investment consistently rewarding.',
    kitchenRemodel: { min: 17000, max: 74000, avg: 40000 },
    bathroomReno: { min: 6500, max: 30000, avg: 16000 },
    deckCostPerSqFt: { min: 15, max: 38, avg: 26 },
    laborCostIndex: 'Moderate — approximately 2% below national average',
    climate: 'Humid subtropical; hot humid summers, mild winters, occasional ice storms',
    faq: [
      {
        question: 'What are the hottest Atlanta neighborhoods for renovation investments?',
        answer: 'East Atlanta Village, Reynoldstown, Edgewood, and West End offer some of the best renovation ROI in metro Atlanta. These in-town neighborhoods with bungalow and craftsman stock are attracting buyers priced out of Decatur and Inman Park. Suburbs like Smyrna, Chamblee, and Tucker also show strong renovation returns as buyers seek walkability outside the city core.',
      },
      {
        question: 'How much does a master bathroom remodel cost in Atlanta?',
        answer: 'Master bathroom remodels in Atlanta range from $15,000 for a budget refresh to $65,000+ for a luxury spa transformation. Mid-range projects ($25,000–$40,000) deliver the best ROI in Atlanta\'s market, featuring freestanding soaker tubs, frameless glass showers, double vanities with vessel sinks, and heated tile floors. These updates are now baseline expectations in $500,000+ Atlanta homes.',
      },
      {
        question: 'Do Atlanta\'s tree preservation laws affect renovation projects?',
        answer: 'Yes, Atlanta\'s Urban Tree Canopy Ordinance is one of the strictest in the Southeast. Any project disturbing tree protection zones (12 feet from trunk per inch of diameter) requires an arborist assessment. Removing trees over 6 inches in diameter requires permits and often mitigation fees or replacement plantings. Plan for 2–4 extra weeks in your project timeline if tree work is involved.',
      },
    ],
  },
}

export const allCitySlugs = Object.keys(citiesData)
