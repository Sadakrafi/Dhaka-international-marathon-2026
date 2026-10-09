import React from 'react';
import { Link } from '@tanstack/react-router';
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
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61571669241155" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className={styles.colTitleAmber}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/refund-policy">Return and Refund Policy</Link></li>
              <li><Link to="/delivery-policy">Delivery Policy</Link></li>
              <li><Link to="/terms-conditions">Terms and condition</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className={styles.colTitleAmber}>Contact us</h3>
            <p className={styles.colText}>Army Sports Control Board.</p>
            <p className={styles.colText}>Registered Address: Bangladesh Army Headquarters, Dhaka Cantonment, Dhaka, Bangladesh</p>
            <p className={styles.colText}>Trade License No: 03-097531</p>
            <p className={styles.colText}>
              Mobile: <a href="tel:+8801329931605" className={styles.phoneLink}>01329931605</a>
            </p>
            <p className={styles.colText}>Email: info@dhakainternationalmarathon.org</p>
          </div>
        </div>

        {/* Payment Strip */}
        <div className={styles.paymentStrip}>
          <img src={paymentStrip} alt="Payment Methods" className={styles.paymentImg} />
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          © 2026 DHAKA INTERNATIONAL MARATHON.
        </div>

      </div>
    </footer>
  );
}
