"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckpointHeader } from "@/components/ui/CheckpointHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BodyCopy } from "@/components/ui/BodyCopy";
import { PatternBlock } from "@/components/ui/PatternBlock";
import { Requirement } from "@/components/ui/Requirement";
import { useState, FormEvent } from "react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Free website audit" />
            <SectionHeading as="h1" size="section">
              Let's see where you're losing customers online.
            </SectionHeading>
            <BodyCopy secondary>
              Fill in the form below and we'll take a proper look at your
              online presence. We'll tell you what's working, what's not,
              and exactly what to fix first. Free. No strings attached.
            </BodyCopy>
            <PatternBlock
              label="What happens next"
              text="You submit the form. We review your website and online presence within 24 hours. Then we'll book a quick 15-minute call to walk you through what we found and give you a clear action plan."
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          <RevealOnScroll>
            <h2 className="font-display text-2xl font-bold text-white mb-8">
              Tell us about your business
            </h2>

            {submitted ? (
              <div className="p-8 bg-navy-900 border-l-[3px] border-accent">
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Got it. We're on it.
                </h3>
                <p className="text-base leading-relaxed text-navy-300">
                  We'll review your online presence and get back to you
                  within 24 hours with your free audit and a time to chat.
                  Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide">
                    Your name
                  </label>
                  <input type="text" id="name" name="name" required placeholder="Full name"
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors placeholder:text-navy-500" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide">
                    Email address
                  </label>
                  <input type="email" id="email" name="email" required placeholder="you@company.com"
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors placeholder:text-navy-500" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide">
                    Phone number
                  </label>
                  <input type="tel" id="phone" name="phone" placeholder="Your best contact number"
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors placeholder:text-navy-500" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide">
                    Business name
                  </label>
                  <input type="text" id="company" name="company" required placeholder="Your company name"
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors placeholder:text-navy-500" />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide">
                    Current website (if you have one)
                  </label>
                  <input type="url" id="website" name="website" placeholder="https://yourbusiness.com"
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors placeholder:text-navy-500" />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide">
                    What industry are you in?
                  </label>
                  <select id="industry" name="industry" required defaultValue=""
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors appearance-none">
                    <option value="" disabled>Pick the closest match</option>
                    <option value="professional-services">Professional services (accounting, legal, consulting)</option>
                    <option value="home-services">Home services (plumbing, electrical, HVAC, landscaping)</option>
                    <option value="healthcare">Healthcare (dental, physio, medical)</option>
                    <option value="retail-hospitality">Retail or hospitality</option>
                    <option value="b2b-services">B2B services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="team-size" className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide">
                    How many people on your team?
                  </label>
                  <select id="team-size" name="team-size" defaultValue=""
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors appearance-none">
                    <option value="" disabled>Select team size</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="help" className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide">
                    What do you need the most help with?
                  </label>
                  <select id="help" name="help" defaultValue=""
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors appearance-none">
                    <option value="" disabled>Pick the biggest priority</option>
                    <option value="website">I need a website (or a better one)</option>
                    <option value="marketing">I need more customers finding me online</option>
                    <option value="leads">I need to stop losing leads</option>
                    <option value="automation">I need to automate repetitive work</option>
                    <option value="everything">All of the above</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide">
                    Anything else you want us to know?
                  </label>
                  <textarea id="challenge" name="challenge" rows={4}
                    placeholder="Tell us about your biggest challenge right now. What's frustrating you? What have you already tried?"
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors resize-y min-h-[120px] placeholder:text-navy-500" />
                </div>

                <div className="pt-4">
                  <button type="submit"
                    className="inline-block px-8 py-4 text-base font-semibold text-navy-950 bg-accent hover:bg-accent-hover transition-colors cursor-pointer">
                    Get my free audit
                  </button>
                </div>

                <p className="text-sm text-navy-400">
                  No spam. No hard sell. We'll review your online presence
                  and get back to you within 24 hours.
                </p>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 border-t border-navy-800 bg-navy-900">
        <div className="container-narrow">
          <RevealOnScroll>
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              What you'll get in your free audit
            </h3>
            <BodyCopy secondary>
              This isn't a generic report. We actually look at your business.
            </BodyCopy>

            <div className="grid gap-8 mt-8">
              <Requirement number="01" title="Website review" value=""
                reason="How your site looks, how fast it loads, how it works on mobile, and whether it's set up to convert visitors into customers." missing="" />
              <Requirement number="02" title="Search visibility check" value=""
                reason="Whether people can find you on Google, what your competitors are doing, and where the biggest opportunities are." missing="" />
              <Requirement number="03" title="Lead response audit" value=""
                reason="How quickly you respond to enquiries, what happens after someone contacts you, and where leads are falling through the cracks." missing="" />
              <Requirement number="04" title="Clear action plan" value=""
                reason="A prioritised list of exactly what to fix first, what it will cost, and what kind of results you can expect." missing="" />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
