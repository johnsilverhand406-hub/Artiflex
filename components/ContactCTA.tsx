import React from 'react';
import { Link } from 'react-router-dom';

/** Reusable "get in touch" call-to-action block linking to the Contacts page. */
const ContactCTA: React.FC<{ title: string; description: string; className?: string }> = ({
  title,
  description,
  className = '',
}) => (
  <div className={`border border-border bg-surface rounded-2xl p-6 text-center ${className}`}>
    <h3 className="text-text text-xl font-bold">{title}</h3>
    <p className="text-muted text-sm mt-2">{description}</p>
    <Link
      to="/contacts"
      className="inline-flex items-center justify-center mt-4 bg-cta hover:bg-cta-hover text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
    >
      Связаться
    </Link>
  </div>
);

export default ContactCTA;
