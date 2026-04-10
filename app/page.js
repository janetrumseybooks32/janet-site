export default function JanetAuthorLandingPage() {
  const books = [
    {
      title: "In... Out... Bounce!",
      subtitle: "A gentle picture book about breath, movement, and coming back to yourself.",
      badge: "Available now",
      note: "A playful, calming story for little ones and the grownups who love them.",
      buyLink: "https://www.amazon.com/Out-Bounce-Janet-Rumsey/dp/B0FBK1R42L",
      image: "/bounce.jpg",
    },
    {
      title: "Made of Color",
      subtitle: "A sensory, artful storytime world in progress.",
      badge: "Coming soon",
      note: "A bright, creative invitation into color, feeling, and discovery.",
    },
  ];

  const highlights = [
    "Watercolor-inspired visual storytelling",
    "Mindful books for toddlers and families",
    "Nature, breath, movement, and gentle wonder",
  ];

  const events = [
    {
      name: "Storytime & Messy Play",
      place: "Local bookstore or school",
      detail: "A warm, interactive reading with sensory play and simple art.",
    },
    {
      name: "School Visit",
      place: "Bay Area schools",
      detail: "Read-aloud, movement, drawing, and a gentle creative activity.",
    },
    {
      name: "Garden Story Gathering",
      place: "Outdoor community space",
      detail: "Books, nature, and quiet discovery for young children and caregivers.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#f6efe6] text-stone-800">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(234, 179, 8, 0.08), transparent 22%), radial-gradient(circle at 80% 10%, rgba(244, 114, 182, 0.08), transparent 18%), radial-gradient(circle at 70% 55%, rgba(16, 185, 129, 0.08), transparent 22%), radial-gradient(circle at 10% 85%, rgba(251, 191, 36, 0.08), transparent 18%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-50 mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(rgba(120, 113, 108, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 113, 108, 0.035) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8efe3] via-[#f7f2ea] to-[#f7f2ea]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-6 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-amber-200/80 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm">
            <div>
              <p className="text-base font-semibold tracking-[0.08em] text-stone-700">Janet Rumsey</p>
              <p className="text-sm text-amber-800/70">Author • Artist • Gentle books for little ones</p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <a href="#books" className="rounded-full px-4 py-2 text-amber-900/80 transition hover:bg-stone-100">
                Books
              </a>
              <a href="#about" className="rounded-full px-4 py-2 text-amber-900/80 transition hover:bg-stone-100">
                About
              </a>
              <a href="#invite" className="rounded-full px-4 py-2 text-amber-900/80 transition hover:bg-stone-100">
                Invite Janet
              </a>
              <a href="#newsletter" className="rounded-full bg-stone-900 px-4 py-2 text-white shadow-sm transition hover:-translate-y-0.5">
                Join newsletter
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-2 md:items-center md:px-10 lg:py-20">
          <div className="space-y-7">
            <div className="inline-flex rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-amber-800/70 shadow-sm">
              Watercolor worlds • books • storytime
            </div>
            <div className="space-y-5">
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
                Gentle books for little ones and the grownups who love them.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-amber-900/80">
                Picture books rooted in breath, movement, nature, and presence. Created with warmth,
                watercolor softness, and a deep love for the small details of childhood.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#books"
                className="rounded-[1.35rem] bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Explore the books
              </a>
              <a
                href="#invite"
                className="rounded-[1.35rem] border border-stone-300 bg-white/85 px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5"
              >
                Invite Janet
              </a>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-amber-200/80 bg-white/80 p-4 text-sm leading-6 shadow-sm backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[2.25rem] border border-amber-200 bg-white/85 p-5 shadow-xl shadow-stone-300/30 backdrop-blur-sm">
              <div className="rounded-[1.8rem] bg-gradient-to-br from-amber-200 via-rose-100 to-yellow-100 p-6">
                <div
                  className="aspect-[4/5] rounded-[1.75rem] border border-white/80 p-6 shadow-inner"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(249,246,241,0.94))",
                  }}
                >
                  <div
                    className="flex h-full flex-col justify-between rounded-[1.4rem] border border-amber-200/80 p-6 text-center"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.08), transparent 18%), radial-gradient(circle at 80% 20%, rgba(244, 114, 182, 0.08), transparent 18%), radial-gradient(circle at 50% 78%, rgba(16, 185, 129, 0.08), transparent 24%)",
                    }}
                  >
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-amber-800/70">Featured Book</p>
                      <h2 className="text-3xl font-semibold text-stone-800">In... Out... Bounce!</h2>
                      <p className="text-sm leading-6 text-amber-900/80">
                        A playful, calming story about breath, feeling, and returning to center.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-stone-300 bg-white/85 shadow-sm">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-100 via-rose-100 to-emerald-100" />
                      </div>
                    <div className="rounded-[1.25rem] bg-white/70 p-3 shadow-sm">
  <img src="/bounce.jpg" alt="In Out Bounce book cover" className="mx-auto h-40 object-contain" />
  <div className="mt-4 flex justify-center">
    <a
      href="https://www.amazon.com/Out-Bounce-Janet-Rumsey/dp/B0FBK1R42L"
      target="_blank"
      rel="noreferrer"
      className="rounded-xl bg-stone-900 px-5 py-2 text-sm text-white shadow-sm hover:-translate-y-0.5 transition"
    >
      Buy the Book
    </a>
  </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="relative mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-800/70">Books</p>
            <h2 className="text-3xl font-semibold md:text-4xl">A growing body of gentle work</h2>
          </div>
          <p className="max-w-2xl text-amber-900/80">
            Each book is designed to feel soft, spacious, and memorable—something a child can return to again and again.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {books.map((book) => (
            <div
              key={book.title}
              className="rounded-[2rem] border border-amber-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-900/80">
                {book.badge}
              </div>
              <h3 className="text-2xl font-semibold">{book.title}</h3>
              <p className="mt-3 max-w-lg leading-7 text-amber-900/80">{book.subtitle}</p>
              <p className="mt-3 text-sm leading-6 text-amber-800/70">{book.note}</p>
              <div className="mt-6 flex gap-3">
                <a
                  href={book.buyLink || "#"}
                  target="_blank"
                  className="rounded-[1.3rem] bg-stone-900 px-4 py-3 text-sm font-medium text-white shadow-sm"
                >
                  Buy book
                </a>
                <button className="rounded-[1.3rem] border border-stone-300 bg-white px-4 py-3 text-sm font-medium shadow-sm">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-amber-200/80 bg-white/85 p-8 shadow-sm backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-800/70">About Janet</p>
            <h2 className="mt-3 text-3xl font-semibold">Created from slowness, nature, and care</h2>
            <p className="mt-5 max-w-2xl leading-8 text-amber-900/80">
              Janet creates children’s books that invite little readers into breath, movement, curiosity, and wonder.
              Her stories are shaped by motherhood, gardens, quiet observation, and the belief that small moments matter.
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-amber-900/80">
              Her work brings together watercolor softness, mindful storytelling, and a tactile, child-centered sense of beauty.
            </p>
            <div className="mt-6 rounded-[1.6rem] border border-amber-200 bg-[#f9f6f1] p-5 text-sm leading-7 text-amber-900/80">
              Hi! Thank you for being a part of my community. My goal is to inspire and grow with every connection, creation and experience. Thank you for being a part of my journey. 
            </div>
          </div>

          <div id="invite" className="rounded-[2rem] border border-amber-200/80 bg-gradient-to-br from-emerald-50/90 via-white/90 to-amber-50/90 p-8 shadow-sm backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-800/70">Invite Janet</p>
            <h2 className="mt-3 text-3xl font-semibold">For bookstores, schools, and community spaces</h2>
            <p className="mt-4 leading-7 text-amber-900/80">
              Invite Janet for a storytime, school visit, gentle art activity, or a nature-centered gathering for families.
            </p>
            <div className="mt-6 space-y-4">
              {events.map((event) => (
                <div key={event.name} className="rounded-[1.5rem] border border-amber-200 bg-white/85 p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium">{event.name}</h3>
                      <p className="text-sm text-amber-800/70">{event.place}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-amber-900/80">{event.detail}</p>
                </div>
              ))}
            </div>

            <form
              action="https://formspree.io/f/mnjoregl"
              method="POST"
              className="mt-6 space-y-3 rounded-[1.6rem] border border-amber-200 bg-white/85 p-5 shadow-sm"
            >
              <input type="hidden" name="form_type" value="invite" />
              <input type="hidden" name="_subject" value="New Invite Janet inquiry" />
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="rounded-[1.15rem] border border-stone-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-stone-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="rounded-[1.15rem] border border-stone-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-stone-400"
                />
              </div>
              <input
                type="text"
                name="organization"
                placeholder="Organization or venue"
                className="w-full rounded-[1.15rem] border border-stone-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-stone-400"
              />
              <input
                type="text"
                name="event_type"
                placeholder="Type of event"
                className="w-full rounded-[1.15rem] border border-stone-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-stone-400"
              />
              <textarea
                rows={4}
                name="message"
                placeholder="Tell Janet about your event, age group, or what you’re dreaming up"
                required
                className="w-full rounded-[1.15rem] border border-stone-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-stone-400"
              />
              <p className="text-xs text-amber-800/70">We’ll get back to you soon. Thank you for reaching out.</p>
              <button
                type="submit"
                className="rounded-[1.25rem] bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="newsletter" className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="rounded-[2rem] border border-amber-200 bg-stone-900 px-8 py-10 text-white shadow-xl shadow-stone-300/30">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-stone-300">Newsletter</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Stay close to the next book</h2>
              <p className="mt-4 max-w-2xl leading-8 text-stone-300">
                Join for release news, storytime dates, behind-the-scenes sketches, and gentle notes from the studio.
              </p>
            </div>
            <form
              action="https://formspree.io/f/mnjoregl"
              method="POST"
              className="grid w-full max-w-md gap-3 sm:grid-cols-[1fr_auto]"
            >
              <input type="hidden" name="form_type" value="newsletter" />
              <input type="hidden" name="_subject" value="New newsletter signup" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="rounded-[1.2rem] border border-stone-700 bg-stone-900 px-4 py-3 text-white placeholder:text-stone-400 outline-none"
              />
              <button
                type="submit"
                className="rounded-[1.2rem] bg-white px-5 py-3 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-amber-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-lg font-semibold">What is next</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-amber-900/80">
              <li>• Painting wall</li>
              <li>• Handmade Books</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-amber-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-lg font-semibold">Simple site map</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-amber-900/80">
              <li>• Home</li>
              <li>• Books</li>
              <li>• About</li>
              <li>• Invite Janet</li>
              <li>• Newsletter</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-amber-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-lg font-semibold">Looking For</h3>
            <p className="mt-4 text-sm leading-6 text-amber-900/80">
              People to collaborate with!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
