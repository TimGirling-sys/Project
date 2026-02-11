interface TestimonialProps {
  text: string;
  author: string;
  role: string;
}

export function Testimonial({ text, author, role }: TestimonialProps) {
  return (
    <div className="border border-navy-700 p-8 mb-6 bg-navy-900">
      <p className="text-sm text-gold mb-4 tracking-widest">
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </p>
      <p className="text-lg leading-relaxed text-slate-200 mb-6 italic">
        &ldquo;{text}&rdquo;
      </p>
      <p className="text-sm font-semibold text-white">{author}</p>
      <p className="text-sm text-navy-400">{role}</p>
    </div>
  );
}
