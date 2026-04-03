"use client";

const BASE = "/pix";

interface Testimonial {
  name: string;
  avatar: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Andre Esteves Perrone",
    avatar: `${BASE}/images (10).jpeg`,
    text: "I was having many issues with malware, but it ultimately led me to this static solution for WordPress sites, and I'm enjoying this new approach to developing WordPress projects quickly and securely.",
  },
  {
    name: "Dan Holloran",
    avatar: `${BASE}/images (1).jpeg`,
    text: "I ended up converting one WordPress site to static, and it was super simple. I had one question about GitHub access, which was answered quickly.",
  },
  {
    name: "Kevin Withnall",
    avatar: `${BASE}/images (9).jpeg`,
    text: "This is a great addition, as it allows a site to be hosted in S3/Cloudfront and prevents WordPress attacks.",
  },
  {
    name: "Maarten Emmerink",
    avatar: `${BASE}/images (8).jpeg`,
    text: "Simply Static is a comprehensive solution for anyone looking to improve their WordPress site's performance, security, and cost-effectiveness. With the bonus of outstanding support from Patrick, it's a must-have for any WordPress user. Highly recommended!",
  },
  {
    name: "Douglas Stein",
    avatar: `${BASE}/images (7).jpeg`,
    text: "Publishing a Jamstack site from WordPress gives the best of both worlds—flexible content creation with a serverless website (we publish to S3).",
  },
  {
    name: "Jocelyn Earl",
    avatar: `${BASE}/images (6).jpeg`,
    text: "WordPress is very useful but too insecure, unreliable, and slow to be used by critical sites without a solution like this. This way, we get the benefits of WordPress without the downsides.",
  },
  {
    name: "Jim Hankins",
    avatar: `${BASE}/images (11).jpeg`,
    text: "As an agency, we work with many customers who come to us with either existing WordPress sites or new sites that are perfect candidates for static sites. Supporting static sites is a lighter lift on the agency side, and the customer wins on better security and typically better performance.",
  },
  {
    name: "Scott Green",
    avatar: `${BASE}/images (13).jpeg`,
    text: "Static sites have many benefits. The pro version has a good feature for a solid implementation. I've encountered a few edge cases, and their support has been prompt and professional.",
  },
  {
    name: "Herbert Hoekstra",
    avatar: `${BASE}/images (15).jpeg`,
    text: "The plugin setup was easy and works great out of the box. The documentation is good, and support is great if needed, too!",
  },
];

function Stars() {
  return (
    <div className=" flex gap-0.5 text-amber-400 text-sm mb-3">
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Hear from our happy Simply Static users
          </h2>
          <p className="text-white text-2xl max-w-lg mx-auto">
            We helped thousands of people switch to Static WordPress. Read about
            their experience with us:
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="break-inside-avoid bg-white rounded-2xl p-6 border border-brand-border shadow-sm hover:shadow-md hover:border-brand-teal transition-all duration-300"
            >
              <Stars />
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-border"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      t.name,
                    )}&background=00b894&color=fff&size=80`;
                  }}
                />
                <div>
                  <p className="text-sm font-semibold text-brand-navy">
                    {t.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}