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
            <CheckpointHeader label="Application" />
            <SectionHeading as="h1" size="section">
              Start with diagnosis.
            </SectionHeading>
            <BodyCopy secondary>
              Every engagement begins with a strategy call. We map your current
              Conversion Curve, identify the failure point, and determine if we
              can help. No pitch. No pressure. Just clarity.
            </BodyCopy>
            <PatternBlock
              label="What happens next"
              text="Submit your application → We review within 48 hours → If qualified, we schedule a diagnosis call → You receive a system proposal within 5 business days."
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 border-t border-gray-200">
        <div className="container-narrow">
          <RevealOnScroll>
            <h2 className="font-display text-2xl font-bold mb-8">
              Your details
            </h2>

            {submitted ? (
              <div className="p-8 bg-gray-50 border-l-[3px] border-gray-900">
                <h3 className="font-display text-xl font-bold mb-3">
                  Application received.
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  We review every application within 48 hours. If
                  qualified, you&rsquo;ll receive a calendar link for your
                  diagnosis call. Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 outline-none focus:border-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 outline-none focus:border-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company"
                    className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 outline-none focus:border-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide"
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    placeholder="https://yourcompany.com"
                    className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 outline-none focus:border-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="revenue"
                    className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide"
                  >
                    Current Monthly Revenue
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 outline-none focus:border-gray-400 transition-colors appearance-none"
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
                    className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide"
                  >
                    Business Type
                  </label>
                  <select
                    id="business-type"
                    name="business-type"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 outline-none focus:border-gray-400 transition-colors appearance-none"
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
                    className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide"
                  >
                    Which deployment route interests you?
                  </label>
                  <select
                    id="route"
                    name="route"
                    defaultValue=""
                    className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 outline-none focus:border-gray-400 transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select a route (optional)
                    </option>
                    <option value="basecamp">
                      Basecamp — Foundation Installation
                    </option>
                    <option value="summit">
                      Summit — Scaling Infrastructure
                    </option>
                    <option value="compass">Compass — Market Expansion</option>
                    <option value="expedition">
                      Expedition — Full System Overhaul
                    </option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="challenge"
                    className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide"
                  >
                    What is your biggest acquisition challenge right now?
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    required
                    rows={5}
                    placeholder="Describe your current situation. What's working? What's broken? What have you tried?"
                    className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 outline-none focus:border-gray-400 transition-colors resize-y min-h-[140px]"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Be specific. The more detail you provide, the more useful our
                    diagnosis call will be.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-semibold text-gray-900 mb-2 tracking-wide"
                  >
                    When are you looking to start?
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    defaultValue=""
                    className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 outline-none focus:border-gray-400 transition-colors appearance-none"
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
                    className="inline-block px-8 py-4 text-base font-semibold text-white bg-black hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>

                <p className="text-sm text-gray-500">
                  We review every application within 48 hours. If qualified,
                  you&rsquo;ll receive a calendar link for your diagnosis call.
                </p>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* Requirements Reminder */}
      <section className="py-20 border-t border-gray-200 bg-gray-50">
        <div className="container-narrow">
          <RevealOnScroll>
            <h3 className="font-display text-2xl font-bold mb-6">
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
                reason="Your service works. You just need more clients finding it."
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
                reason="This is not a quick fix. It's a system build."
                missing=""
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
