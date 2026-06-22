const services = [
  ['Haircuts & Styling', 'Layer cuts, face framing, volume styling and polished event-ready hair.'],
  ['Hair Colour & Treatments', 'Highlights, babylights, keratin, ash brown and rich colour refreshes.'],
  ['Makeup', 'Soft party makeup and styled looks for events, photos and special days.'],
  ['Facials & Glow Care', 'Facials, face polish, hand and feet polish highlighted in recent public posts.'],
  ['Nails & Manicure', 'French manicure, manicure, pedicure and refined finishing services.'],
  ['Academy', 'Beauty training content and behind-the-scenes academy work visible on Instagram.'],
]

const gallery = [
  {
    title: 'Hair transformations',
    text: 'Recent public reels highlight layers, face framing, keratin, ash brown colour and finished styles.',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Soft party looks',
    text: 'A polished page can turn Instagram work into a clear service journey for bridal and party clients.',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Hands, nails and care',
    text: 'Manicure, pedicure, facial and polish services are easier to scan when grouped by need.',
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function Page() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">DHA Phase 2 Islamabad beauty salon</p>
          <h1>Beauty Lounge by Shaista and Alishba</h1>
          <p className="lead">Hair, makeup, facials, nails and salon academy work presented in one polished destination for clients who discover the salon on Instagram.</p>
          <div className="actions">
            <a className="primary" href="https://wa.me/923315300112">WhatsApp 0331 5300112</a>
            <a className="secondary" href="https://www.instagram.com/beautybyshaista_alishba/">View Instagram</a>
          </div>
          <div className="proof">
            <span><strong>4.9</strong> Google rating</span>
            <span><strong>262</strong> public reviews</span>
            <span><strong>9,918</strong> Instagram followers</span>
          </div>
        </div>
        <div className="heroImage" aria-label="Salon styling visual">
          <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=80" alt="Elegant salon styling station" />
        </div>
      </section>

      <section className="intro band">
        <div>
          <p className="eyebrow">Why this site helps</p>
          <h2>Turn social proof into bookings</h2>
        </div>
        <p>Clients can see the salon's strongest categories, location, contact route and recent work without digging through reels or highlights. The site keeps the first action simple: WhatsApp or Instagram.</p>
      </section>

      <section className="services" id="services">
        <p className="eyebrow">Services</p>
        <h2>Clear categories for quick decisions</h2>
        <div className="serviceGrid">
          {services.map(([title, text]) => (
            <article className="service" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery" id="work">
        {gallery.map((item) => (
          <article className="feature" key={item.title}>
            <img src={item.img} alt={`${item.title} salon visual`} />
            <div>
              <p className="eyebrow">Recent work</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="visit band" id="visit">
        <div>
          <p className="eyebrow">Visit</p>
          <h2>Building #53, Sector D, near Askari Tower 1</h2>
          <p>DHA Phase 2, Islamabad. Public profiles also mention Birmingham; this demo focuses on the Islamabad salon location.</p>
        </div>
        <div className="contactBox">
          <h3>Book or ask a question</h3>
          <a href="https://wa.me/923315300112">WhatsApp: 0331 5300112</a>
          <a href="https://www.instagram.com/beautybyshaista_alishba/">@beautybyshaista_alishba</a>
          <p>No prices, hours or packages are listed here unless confirmed by the salon.</p>
        </div>
      </section>
    </main>
  )
}
