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
            <CheckpointHeader label="Get Started" />
            <SectionHeading as="h1" size="section">
              Start with a free diagnosis.
            </SectionHeading>
            <BodyCopy secondary>
              Every engagement begins with a strategy call. We map your Revenue
              Engine, identify the failure point, and determine if we can help.
              No pitch. No pressure. Just clarity on what&rsquo;s broken and
              what to build.
            </BodyCopy>
            <PatternBlock
              label="What happens next"
              text="Submit your application → We review within 48 hours → If qualified, we schedule your free diagnosis call → You receive a system proposal within 5 business days."
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          <RevealOnScroll>
            <h2 className="font-display text-2xl font-bold text-white mb-8">
              Your details
            </h2>

            {submitted ? (
              <div className="p-8 bg-navy-900 border-l-[3px] border-accent">
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Application received.
                </h3>
                <p className="text-base leading-relaxed text-navy-300">
                  We review every application within 48 hours. If
                  qualified, you&rsquo;ll receive a calendar link for your
                  free diagnosis call. Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors placeholder:text-navy-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors placeholder:text-navy-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
                  >
                    Company / Business Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company"
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors placeholder:text-navy-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    placeholder="https://yourcompany.com"
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors placeholder:text-navy-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="revenue"
                    className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
                  >
                    Current Monthly Revenue
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select your range
                    </option>
                    <option value="under-10k">Under $10K/month</option>
                    <option value="10k-25k">$10K – $25K/month</option>
                    <option value="25k-50k">$25K – $50K/month</option>
                    <option value="50k-100k">$50K – $100K/month</option>
                    <option value="100k-plus">$100K+/month</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="business-type"
                    className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
                  >
                    Business Type
                  </label>
                  <select
                    id="business-type"
                    name="business-type"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select your type
                    </option>
                    <option value="agency">Agency</option>
                    <option value="consultancy">Consultancy</option>
                    <option value="coaching">Coaching / Training</option>
                    <option value="saas">SaaS</option>
                    <option value="other">Other B2B Services</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="route"
                    className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
                  >
                    Which package interests you?
                  </label>
                  <select
                    id="route"
                    name="route"
                    defaultValue=""
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select a package (optional)
                    </option>
                    <option value="launchpad">
                      Launchpad — Foundation Build
                    </option>
                    <option value="accelerate">
                      Accelerate — Scale Infrastructure
                    </option>
                    <option value="expand">Expand — Market Expansion</option>
                    <option value="overhaul">
                      Overhaul — Full System Rebuild
                    </option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="challenge"
                    className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
                  >
                    What is your biggest growth challenge right now?
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    required
                    rows={5}
                    placeholder="Tell us about your current situation. Where are leads coming from? What's working? What's broken? What have you already tried?"
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors resize-y min-h-[140px] placeholder:text-navy-500"
                  />
                  <p className="text-sm text-navy-400 mt-2">
                    The more specific you are, the more useful your diagnosis
                    call will be.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
                  >
                    When are you looking to start?
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    defaultValue=""
                    className="w-full px-4 py-3 text-base text-slate-100 bg-navy-900 border border-navy-700 outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select timeline
                    </option>
                    <option value="immediately">Immediately</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="1-3-months">1–3 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-block px-8 py-4 text-base font-semibold text-navy-950 bg-accent hover:bg-accent-hover transition-colors cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>

                <p className="text-sm text-navy-400">
                  We review every application within 48 hours. If qualified,
                  you&rsquo;ll receive a calendar link for your free diagnosis
                  call.
                </p>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* Requirements Reminder */}
      <section className="py-20 border-t border-navy-800 bg-navy-900">
        <div className="container-narrow">
          <RevealOnScroll>
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Before you apply
            </h3>
            <BodyCopy secondary>
              This process works best for businesses that meet these conditions:
            </BodyCopy>

            <div className="grid gap-8 mt-8">
              <Requirement
                number="01"
                title="$10K+ monthly revenue"
                value=""
                reason="Cash flow stability to sustain the build phase."
                missing=""
              />
              <Requirement
                number="02"
                title="Proven delivery capability"
                value=""
                reason="Your service works. You just need more of the right clients finding it."
                missing=""
              />
              <Requirement
                number="03"
                title="Founder-level decision authority"
                value=""
                reason="System decisions require leadership involvement."
                missing=""
              />
              <Requirement
                number="04"
                title="Patience for infrastructure"
                value=""
                reason="This is not a quick fix. It's a system build that compounds over time."
                missing=""
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
