interface TestimonialProps {
  text: string;
  author: string;
  role: string;
}

export function Testimonial({ text, author, role }: TestimonialProps) {
  return (
    <div className="border border-gray-200 p-8 mb-6">
      <p className="text-sm text-gray-900 mb-4 tracking-widest">
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </p>
      <p className="text-lg leading-relaxed text-gray-900 mb-6 italic">
        &ldquo;{text}&rdquo;
      </p>
      <p className="text-sm font-semibold text-gray-900">{author}</p>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}
