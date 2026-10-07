import React from 'react';
import styles from './Footer.module.css';

import logo from '../../assets/footer-logo.png';
import paymentStrip from '../../assets/payment-strip.png';

export function Footer() {
  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        
        {/* Top Row */}
        <div className={styles.topRow}>
          <img src={logo} alt="Dhaka International Marathon" className={styles.logo} />
          <div className={styles.newsletter}>
            <h4 className={styles.newsTitle}>Subscribe to Newsletter</h4>
            <div className={styles.newsForm}>
              <input type="email" placeholder="Enter email address" className={styles.newsInput} />
              <button className={styles.newsBtn}>Join</button>
            </div>
          </div>
        </div>

        {/* Middle Row */}
        <div className={styles.middleRow}>
          {/* Col 1 */}
          <div>
            <h3 className={styles.colTitleWhite}>Transparent</h3>
            <p className={styles.colText}>
              The purpose of a FAQ is generally to provide information on frequent questions or concerns.
            </p>
            <div className={styles.socialRow}>
              {/* Twitter */}
              <div className={styles.socialCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              {/* Facebook */}
              <div className={styles.socialCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </div>
              {/* Instagram */}
              <div className={styles.socialCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
              {/* GitHub */}
              <div className={styles.socialCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className={styles.colTitleAmber}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li><a href="#">About us</a></li>
              <li><a href="#">Return and Refund Policy</a></li>
              <li><a href="#">Delivery Policy</a></li>
              <li><a href="#">Terms and condition</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className={styles.colTitleAmber}>Contact us</h3>
            <p className={styles.colText}>Army Sports Control Board.</p>
            <p className={styles.colText}>Registered Address: Bangladesh Army Headquarters, Dhaka Cantonment, Dhaka, Bangladesh</p>
            <p className={styles.colText}>Trade License No: 03-097531</p>
            <p className={styles.colText}>Mobile: 01329931605</p>
            <p className={styles.colText}>Email: info@dhakainternationalmarathon.org</p>
          </div>
        </div>

        {/* Payment Strip */}
        <div className={styles.paymentStrip}>
          <img src={paymentStrip} alt="Payment Methods" className={styles.paymentImg} />
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          © 2025 DHAKA INTERNATIONAL MARATHON.
        </div>

      </div>
    </footer>
  );
}
