import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckpointHeader } from "@/components/ui/CheckpointHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BodyCopy } from "@/components/ui/BodyCopy";
import { PatternBlock } from "@/components/ui/PatternBlock";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Scale.digital",
  description:
    "Our simple 4-stage process takes your business from invisible online to getting qualified customers automatically. Websites, marketing, lead capture, and automation.",
};

const stages = [
  {
    number: "01",
    title: "Build Your Online Foundation",
    body: "Everything starts with your website. Not a template. Not a DIY page builder. A proper website that makes you look as professional online as you are in person.",
    detail: "We make sure your site loads fast, works perfectly on phones, and clearly tells visitors what you do and why they should choose you. Easy contact forms. Online booking if you need it. Set up in weeks, not months.",
    warning: "Without a solid website, every dollar you spend on marketing is wasted. People click your ad, land on a bad site, and leave. Your website is the foundation everything else sits on.",
  },
  {
    number: "02",
    title: "Get Customers Finding You",
    body: "A beautiful website is useless if nobody sees it. We make sure the right people find you when they search for what you offer.",
    detail: "We run ads on Google and social media that bring in actual customers, not just clicks. We optimise your site so it shows up in search results. And we track every dollar so you always know what's working and what's not.",
    warning: "Your competitors are already showing up when customers search online. Every day you're not visible is a day they're getting customers that should be yours.",
  },
  {
    number: "03",
    title: "Never Miss a Lead Again",
    body: "Getting leads is only half the battle. If you can't respond fast enough, follow up consistently, and track who's who, you're leaving money on the table.",
    detail: "We set up instant automatic responses so every enquiry gets acknowledged within minutes, even at midnight. Leads are qualified automatically so you spend your time talking to serious buyers. Follow-up sequences run in the background. Nothing falls through the cracks.",
    warning: "Research shows that responding within 5 minutes makes you 21x more likely to convert a lead. Most businesses take hours or days. That's where all the money is leaking.",
  },
  {
    number: "04",
    title: "Run Your Business on Autopilot",
    body: "Once your website is converting, your marketing is working, and your leads are being captured, it's time to get your time back.",
    detail: "We automate the repetitive tasks your team does every day. AI handles common customer questions. Workflows run in the background. Reporting happens automatically. You focus on the work that actually needs a human touch.",
    warning: "Most business owners are stuck working IN the business because so much depends on them personally. Automation is how you start working ON the business instead.",
  },
];

export default function MethodPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="How it works" />
            <SectionHeading as="h1" size="hero">
              Simple process. Serious results.
            </SectionHeading>
            <p className="text-xl leading-relaxed text-slate-300 font-medium mb-8">
              We take you from invisible online to having a complete system
              that brings in qualified customers automatically. Here is
              exactly how we do it.
            </p>
            <BodyCopy secondary>
              No jargon. No complicated tech talk. Just a clear process that
              gets your business in front of the right people and turns them
              into paying customers.
            </BodyCopy>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stages */}
      <section className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          {stages.map((stage) => (
            <RevealOnScroll key={stage.number} className="mb-20 last:mb-12">
              <CheckpointHeader label={`Stage ${stage.number}`} />
              <h2 className="font-display text-2xl font-bold leading-tight text-white mb-6">
                {stage.title}
              </h2>
              <BodyCopy>{stage.body}</BodyCopy>
              <BodyCopy secondary>{stage.detail}</BodyCopy>
              <PatternBlock label="Why this matters" text={stage.warning} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeading>
              Why businesses choose us over doing it themselves.
            </SectionHeading>
            <BodyCopy>
              You could hire a web designer, an ads person, a CRM consultant,
              and an automation specialist separately. Or you could get one
              team that builds the whole thing to work together from day one.
            </BodyCopy>
            <BodyCopy secondary>
              We understand business, not just technology. Both founders have
              backgrounds in sales, marketing, and operations. We speak your
              language and focus on what actually makes you money.
            </BodyCopy>
            <div className="mt-10">
              <Button href="/apply">Get your free website audit</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
