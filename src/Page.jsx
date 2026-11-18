// Markup of the invitation (updated with Balaji & Vinitha's wedding details).
export default function Page() {
  return (
    <>
      <section id="opening" className="opening" aria-label="Open invitation">
        <div className="opening-backdrop"></div>
        <div className="door door-left"></div>
        <div className="door door-right"></div>
        <div className="opening-shade"></div>
        <div className="opening-copy">
          <div className="tiny-kicker">A WEDDING INVITATION</div>
          <h1>Balaji</h1>
          <div className="with">weds</div>
          <h2>Vinitha</h2>
          <div className="ornament">✦</div>
          <button id="openBtn" className="gold-btn">Open the Invitation</button>
          <div className="touch-note">Touch to enter</div>
        </div>
      </section>

      <main id="invitation" className="locked">
        <button id="musicBtn" className="music-btn" aria-label="Toggle music">♫</button>

        {/* Hero Section */}
        <section className="hero section reveal">
          <div className="hero-overlay"></div>
          <div className="hero-content glass first-layout">
            <div className="ganesha-mark">ॐ</div>
            <h2 className="hero-script-name">Balaji</h2>
            <div className="hero-weds">weds</div>
            <h2 className="hero-script-name">Vinitha</h2>
            <div className="hero-divider"></div>
            
            <h3 className="hero-display-name">Balaji</h3>
            <p className="parent-line">{"Son of Sri. Doss & Smt. Bhuvaneswari"}</p>
            
            <h3 className="hero-display-name">Vinitha</h3>
            <p className="parent-line">{"Daughter of Sri. Palanimurugan & Smt. Lalitha"}</p>
            
            <p className="hero-quote">“Two hearts, two families,<br />one beautiful beginning.”</p>
            <p className="hero-invite">Together with their families, they invite you to<br />celebrate the beginning of their forever.</p>
            <div className="scroll-cue">{"SCROLL TO BEGIN "}<span>↓</span></div>
          </div>
        </section>

        {/* Date Reveal Section */}
        <section className="date-section section reveal" id="dateReveal">
          <div className="section-wash"></div>
          <div className="date-content">
            <h2 className="date-heading">Our Special Date</h2>
            <p className="date-subtitle">Gently reveal our special date</p>
            <div className="hearts">
              <div className="date-heart" data-value="20">
                <svg className="heart-svg" viewBox="0 0 100 90" aria-hidden="true">
                  <defs>
                    <linearGradient id="heartGold1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#f8df96"></stop>
                      <stop offset=".5" stopColor="#d9aa43"></stop>
                      <stop offset="1" stopColor="#a66c13"></stop>
                    </linearGradient>
                  </defs>
                  <path className="heart-base" d="M50 88 L11 50 C-2 37 2 17 14 9 C25 2 39 5 47 16 L50 21 L53 16 C61 5 75 2 86 9 C98 17 102 37 89 50 Z" fill="url(#heartGold1)"></path>
                </svg>
                <svg className="heart-cover-svg cover" viewBox="0 0 100 90" aria-hidden="true">
                  <path d="M50 88 L11 50 C-2 37 2 17 14 9 C25 2 39 5 47 16 L50 21 L53 16 C61 5 75 2 86 9 C98 17 102 37 89 50 Z" fill="#c8952f"></path>
                </svg>
                <div className="heart-inner">
                  <small>DATE</small>
                  <b>20</b>
                </div>
              </div>

              <div className="date-heart" data-value="JAN">
                <svg className="heart-svg" viewBox="0 0 100 90" aria-hidden="true">
                  <defs>
                    <linearGradient id="heartGold2" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#f8df96"></stop>
                      <stop offset=".5" stopColor="#d9aa43"></stop>
                      <stop offset="1" stopColor="#a66c13"></stop>
                    </linearGradient>
                  </defs>
                  <path className="heart-base" d="M50 88 L11 50 C-2 37 2 17 14 9 C25 2 39 5 47 16 L50 21 L53 16 C61 5 75 2 86 9 C98 17 102 37 89 50 Z" fill="url(#heartGold2)"></path>
                </svg>
                <svg className="heart-cover-svg cover" viewBox="0 0 100 90" aria-hidden="true">
                  <path d="M50 88 L11 50 C-2 37 2 17 14 9 C25 2 39 5 47 16 L50 21 L53 16 C61 5 75 2 86 9 C98 17 102 37 89 50 Z" fill="#c8952f"></path>
                </svg>
                <div className="heart-inner">
                  <small>MONTH</small>
                  <b>JAN</b>
                </div>
              </div>

              <div className="date-heart" data-value="2027">
                <svg className="heart-svg" viewBox="0 0 100 90" aria-hidden="true">
                  <defs>
                    <linearGradient id="heartGold3" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#f8df96"></stop>
                      <stop offset=".5" stopColor="#d9aa43"></stop>
                      <stop offset="1" stopColor="#a66c13"></stop>
                    </linearGradient>
                  </defs>
                  <path className="heart-base" d="M50 88 L11 50 C-2 37 2 17 14 9 C25 2 39 5 47 16 L50 21 L53 16 C61 5 75 2 86 9 C98 17 102 37 89 50 Z" fill="url(#heartGold3)"></path>
                </svg>
                <svg className="heart-cover-svg cover" viewBox="0 0 100 90" aria-hidden="true">
                  <path d="M50 88 L11 50 C-2 37 2 17 14 9 C25 2 39 5 47 16 L50 21 L53 16 C61 5 75 2 86 9 C98 17 102 37 89 50 Z" fill="#c8952f"></path>
                </svg>
                <div className="heart-inner">
                  <small>YEAR</small>
                  <b>2027</b>
                </div>
              </div>
            </div>

            <div className="muhurtham-card">
              <p className="muhurtham-label">MUHURTHAM</p>
              <strong>Wednesday, 20 January 2027 · 6:00 AM – 7:30 AM</strong>
              <div className="muhurtham-divider" aria-hidden="true"><span>✦</span></div>
              <p>Sri Valli Hall A/c</p>
              <span>No.45/40, Mettu Street, (Near West Gopuram Entrance), Vadapalani, Chennai - 600026</span>
            </div>
            <div id="riceField" className="rice-field" aria-hidden="true"></div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="countdown-section section reveal">
          <div className="countdown-top">
            <p className="eyebrow">COUNTING DOWN TO FOREVER</p>
            <h2 className="script-title">Our beautiful beginning</h2>
            <div id="countdown" className="countdown">
              <div><b id="days">00</b><span>Days</span></div>
              <div><b id="hours">00</b><span>Hours</span></div>
              <div><b id="minutes">00</b><span>Minutes</span></div>
              <div><b id="seconds">00</b><span>Seconds</span></div>
            </div>
          </div>
          <div className="photo-frame petal-photo">
            <img src="assets/couple-photo.jpeg" alt="Balaji & Vinitha" loading="lazy" decoding="async" />
            <div className="petal-layer" aria-hidden="true"></div>
          </div>
        </section>

        {/* Events Timeline Section */}
        <section className="timeline-section section reveal">
          <div className="timeline-bg"></div>
          <div className="section-heading">
            <p className="eyebrow light">SAVE THESE MOMENTS</p>
            <h2 className="script-title">Wedding Timeline</h2>
            <p className="subtle light">Two celebrations. One beautiful story.</p>
          </div>

          <div className="timeline">
            {/* Wedding Ceremony */}
            <article className="event reveal">
              <div className="event-card">
                <div className="event-image">
                  <img src="assets/event-wedding.webp" alt="Traditional wedding couple illustration" loading="lazy" decoding="async" />
                </div>
                <div className="event-copy">
                  <h3>Wedding</h3>
                  <p className="event-tamil">திருமணம்</p>
                  <p><b>Wednesday, 20 January 2027</b></p>
                  <p>6:00 AM – 7:30 AM</p>
                  <p className="venue"><b>Sri Valli Hall A/c</b></p>
                  <p className="venue-detail">No.45/40, Mettu Street, (Near West Gopuram Entrance), Vadapalani, Chennai - 600026.</p>
                  <div style={{ marginTop: '14px' }}>
                    <a className="map-btn" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Sri+Valli+Hall+A%2Fc+Mettu+Street+Vadapalani+Chennai">✦ View Venue Map</a>
                  </div>
                </div>
              </div>
            </article>

            {/* Reception */}
            <article className="event reveal">
              <div className="event-card reverse">
                <div className="event-image">
                  <img src="assets/event-reception.webp" alt="Reception couple illustration" loading="lazy" decoding="async" />
                </div>
                <div className="event-copy">
                  <h3>Reception</h3>
                  <p className="event-tamil">வரவேற்பு</p>
                  <p><b>Thursday, 21 January 2027</b></p>
                  <p>6:00 PM onwards</p>
                  <p className="venue"><b>Sri Ranga Hall</b></p>
                  <p className="venue-detail">No.47, Aarti Tower, Ambattur, Redhills Road, Vinayagapuram, Ambattur, Chennai - 600053.</p>
                  <div style={{ marginTop: '14px' }}>
                    <a className="map-btn" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Sri+Ranga+Hall+Aarti+Tower+Ambattur+Redhills+Road+Chennai">✦ View Venue Map</a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section section reveal">
          <div className="section-heading dark-heading">
            <p className="eyebrow">OUR MOMENTS</p>
            <h2 className="script-title">A few memories</h2>
          </div>
          <div className="gallery-track single-highlight">
            <figure>
              <img src="assets/couple-photo.jpeg" alt="Balaji and Vinitha" loading="lazy" decoding="async" />
              <figcaption>Balaji &amp; Vinitha</figcaption>
            </figure>
          </div>
        </section>

        {/* Guest Note Section */}
        <section className="guest-section section reveal">
          <div className="guest-overlay"></div>
          <div className="guest-card glass">
            <div className="quote-mark">“</div>
            <p className="eyebrow light">A NOTE FOR OUR DEAR GUESTS</p>
            <h2>Forever Together</h2>
            <div className="infinity">∞</div>
            <p className="guest-message">However near or far you travel, your blessings and presence will always be a cherished part of our wedding celebrations.</p>
            
            <div className="contact-box" style={{ margin: '22px auto', padding: '14px 20px', borderRadius: '16px', background: 'rgba(255, 245, 230, 0.12)', border: '1px solid rgba(246, 211, 142, 0.35)', maxWidth: '420px' }}>
              <p style={{ margin: '0 0 6px', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f6d58c' }}>Contact For Enquiries</p>
              <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>
                <a href="tel:7397317796" style={{ color: '#fff', textDecoration: 'none' }}>+91 73973 17796</a>
                <span style={{ margin: '0 10px', color: '#e8c66f' }}>|</span>
                <a href="tel:9566315544" style={{ color: '#fff', textDecoration: 'none' }}>+91 95663 15544</a>
              </p>
            </div>

            <p className="with-love">With love,</p>
            <p className="signature">{"Balaji "}<span>♥</span>{" Vinitha"}</p>
          </div>
        </section>

        {/* RSVP Section */}
        <section className="rsvp-section section reveal" id="rsvp">
          <div className="rsvp-shell">
            <div className="section-heading dark-heading">
              <p className="eyebrow">WE WOULD LOVE TO KNOW</p>
              <h2 className="script-title">RSVP</h2>
              <p className="subtle">Please confirm your presence.</p>
            </div>
            <form id="rsvpForm" className="rsvp-card">
              <label>
                {"YOUR NAME "}<span>*</span>
                <input id="rsvpName" type="text" placeholder="Enter your full name" required />
              </label>
              <label>
                {"NUMBER OF ATTENDEES "}<span>*</span>
                <select id="rsvpGuests" required>
                  <option value="" selected disabled>Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </label>
              <label>
                {"ARE YOU ATTENDING? "}<span>*</span>
              </label>
              <div className="attendance-options">
                <button type="button" className="attendance-btn" data-attending="yes">YES, ATTEND</button>
                <button type="button" className="attendance-btn" data-attending="no">SORRY, NO</button>
              </div>
              <input type="hidden" id="rsvpAttending" required />
              <button className="rsvp-submit" type="submit">SUBMIT RESPONSE</button>
              <p id="rsvpStatus" className="rsvp-status" aria-live="polite"></p>
            </form>
            <button id="adminOpenBtn" className="admin-link-btn" type="button">RSVP ADMIN</button>
          </div>
        </section>

        {/* RSVP Admin Panel */}
        <section id="adminPanel" className="admin-section" hidden>
          <div id="adminLogin" className="admin-card">
            <p className="eyebrow">PRIVATE ACCESS</p>
            <h2 className="script-title">RSVP Admin</h2>
            <input id="adminPassword" type="password" placeholder="Admin password" autoComplete="current-password" />
            <button id="adminLoginBtn" className="rsvp-submit" type="button">OPEN DASHBOARD</button>
            <button id="adminBackBtn" className="admin-text-btn" type="button">BACK TO INVITATION</button>
            <p id="adminError" className="admin-error" aria-live="polite"></p>
          </div>
          <div id="adminDashboard" className="admin-dashboard" hidden>
            <div className="admin-head">
              <div>
                <p className="eyebrow">RSVP</p>
                <h2 className="script-title">Dashboard</h2>
              </div>
              <div className="admin-actions">
                <button id="exportRsvpBtn" type="button">EXPORT CSV</button>
                <button id="clearRsvpBtn" type="button">CLEAR ALL</button>
                <button id="adminInvitationBtn" type="button">INVITATION</button>
              </div>
            </div>
            <div className="rsvp-stats">
              <div><strong id="statResponses">0</strong><span>RESPONSES</span></div>
              <div><strong id="statAttending">0</strong><span>ATTENDING</span></div>
              <div><strong id="statNotAttending">0</strong><span>NOT ATTENDING</span></div>
              <div><strong id="statGuests">0</strong><span>TOTAL GUESTS</span></div>
            </div>
            <div id="rsvpList" className="rsvp-list">
              <p className="empty-rsvp">No RSVP responses yet.</p>
            </div>
            <p className="admin-note">RSVP responses are stored in this browser on this device.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-ornament">✦ ✦ ✦</div>
          <h2>Thank you for being a part of our happiness</h2>
          <small>{"© 2027 · With love, Balaji & Vinitha"}</small>

          <div className="crafted-by">
            <a
              href="https://www.instagram.com/zetrontech"
              target="_blank"
              rel="noopener noreferrer"
              className="crafted-link"
              aria-label="Crafted by Zetron on Instagram"
            >
              <svg className="insta-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Crafted with love by <strong>Zetron</strong></span>
            </a>
          </div>
        </footer>
      </main>
    </>
  )
}
