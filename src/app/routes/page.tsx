import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckpointHeader } from "@/components/ui/CheckpointHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BodyCopy } from "@/components/ui/BodyCopy";
import { ResultItem } from "@/components/ui/ResultItem";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Scale.digital",
  description:
    "Website design, digital marketing, lead capture, and business automation for established businesses. See what each service includes and how they work together.",
};

const services = [
  {
    id: "website",
    number: "01",
    name: "Website Design",
    subtitle: "Look as professional online as you are in person",
    situation: "Your website is outdated, slow, or doesn't exist. When customers search for your business and land on your site, they leave. You're losing credibility and customers every day.",
    installs: [
      { label: "Design", title: "Professional, custom design", description: "Not a template. A website designed around your business, your customers, and what makes you different from competitors." },
      { label: "Mobile", title: "Works perfectly on every device", description: "Over 60% of your visitors are on their phones. Your site will look and work great on any screen size." },
      { label: "Speed", title: "Loads in under 3 seconds", description: "Slow sites lose customers. We build fast sites that keep people engaged instead of hitting the back button." },
      { label: "Conversion", title: "Built to turn visitors into customers", description: "Clear messaging, easy contact forms, online booking, click-to-call. Everything designed to make it simple for people to choose you." },
    ],
    bestFor: "Any established business that needs a professional website or has outgrown their current one. Typical build time: 2-4 weeks.",
  },
  {
    id: "marketing",
    number: "02",
    name: "Digital Marketing",
    subtitle: "Get the right customers finding you online",
    situation: "You're invisible on Google. Your competitors are showing up first. You've tried ads before but they brought clicks, not customers. You know people are searching for what you offer, but they're finding someone else.",
    installs: [
      { label: "Google Ads", title: "Ads that bring in real customers", description: "We set up and manage campaigns that target people actively searching for your services. You only pay when someone clicks." },
      { label: "SEO", title: "Show up when people search for you", description: "We optimise your website so it ranks higher in Google search results. More visibility means more customers, without paying per click." },
      { label: "Targeting", title: "Reach the right people in your area", description: "We target by location, demographics, and buying intent. Your ads reach people who actually need what you offer, right where you operate." },
      { label: "Tracking", title: "Know exactly what every dollar returns", description: "Full reporting on leads, costs, and ROI. No guesswork. You'll see exactly how much each new customer costs and what they're worth." },
    ],
    bestFor: "Businesses with a solid website that need more customers coming through the door. Results typically start within 2-4 weeks.",
  },
  {
    id: "lead-capture",
    number: "03",
    name: "Lead Capture",
    subtitle: "Stop losing customers to slow follow-up",
    situation: "Enquiries come in at all hours. You can't respond fast enough. Good leads go cold because there's no system. You're answering the same questions over and over and still losing prospects to competitors who responded first.",
    installs: [
      { label: "Instant response", title: "Every lead gets a reply in under 2 minutes", description: "Automated responses acknowledge every enquiry instantly, 24/7. Evenings, weekends, holidays. No lead ever waits." },
      { label: "Qualification", title: "Talk to serious buyers first", description: "Automated questions filter leads by budget, timeline, and fit. You spend your time on the ones most likely to buy." },
      { label: "Follow-up", title: "Automatic nurture sequences", description: "Leads who aren't ready to buy today get followed up with automatically via email and SMS. When they're ready, you're top of mind." },
      { label: "CRM", title: "One simple place for all your leads", description: "A CRM that actually makes sense. See every lead, where they came from, and what stage they're at. No complicated software." },
    ],
    bestFor: "Businesses already getting leads but losing too many to slow response times or inconsistent follow-up.",
  },
  {
    id: "automation",
    number: "04",
    name: "Automation",
    subtitle: "Get your time back and scale without more staff",
    situation: "Your team spends hours on repetitive tasks that could run themselves. Everything depends on you personally. You can't take a holiday without the business suffering. Growth means hiring more people for work that a computer could handle.",
    installs: [
      { label: "AI", title: "AI handles common customer questions", description: "Frequently asked questions, booking confirmations, status updates. AI responds instantly and accurately, freeing your team for real work." },
      { label: "Workflows", title: "Automate repetitive tasks", description: "Invoice reminders, appointment confirmations, review requests, internal notifications. Tasks that eat up hours every week now run on autopilot." },
      { label: "Consistency", title: "Same great service every time", description: "Automated processes deliver consistent service regardless of who's working or how busy you are. Quality doesn't dip when things get hectic." },
      { label: "Reporting", title: "Know what's happening without asking", description: "Automatic reports on leads, revenue, team activity, and customer satisfaction. The numbers you need, delivered to your inbox." },
    ],
    bestFor: "Businesses with 10+ employees looking to scale without proportionally increasing headcount.",
  },
];

export default function RoutesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Services" />
            <SectionHeading as="h1" size="hero">
              Everything your business needs to win online.
            </SectionHeading>
            <p className="text-xl leading-relaxed text-slate-300 font-medium mb-8">
              Most businesses need more than just a website. They need the
              whole system: the site, the marketing, the lead capture, and
              the automation to tie it all together.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="py-20 border-t border-navy-800">
          <div className="container-narrow">
            <RevealOnScroll>
              <CheckpointHeader label={`Service ${service.number}`} />
              <SectionHeading>{service.name}</SectionHeading>
              <p className="text-xl leading-relaxed text-navy-300 font-medium -mt-4 mb-8">
                {service.subtitle}
              </p>

              <div className="w-10 h-0.5 bg-navy-700 my-8" />

              <div className="grid gap-10 mt-8">
                <div>
                  <p className="block text-sm font-semibold text-accent mb-2 uppercase tracking-widest">
                    The problem
                  </p>
                  <BodyCopy>{service.situation}</BodyCopy>
                </div>

                <div>
                  <p className="block text-sm font-semibold text-accent mb-2 uppercase tracking-widest">
                    What you get
                  </p>
                  <div className="grid gap-8 mt-4">
                    {service.installs.map((item) => (
                      <ResultItem
                        key={item.label}
                        label={item.label}
                        title={item.title}
                        description={item.description}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="block text-sm font-semibold text-accent mb-2 uppercase tracking-widest">
                    Best for
                  </p>
                  <BodyCopy secondary>{service.bestFor}</BodyCopy>
                </div>
              </div>

              <div className="mt-10">
                <Button href="/apply">Get started with {service.name.toLowerCase()}</Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 border-t border-navy-800 bg-navy-900">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeading>Not sure what you need?</SectionHeading>
            <BodyCopy secondary>
              That's what the free audit is for. We'll look at your current
              online presence, tell you what's working, what's not, and give
              you a clear plan. No obligation. No tech jargon. Just straight
              answers.
            </BodyCopy>
            <div className="mt-8">
              <Button href="/apply">Get your free website audit</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
