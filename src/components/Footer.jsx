import React from 'react'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '32px 48px',
        textAlign: 'center',
      }}
    >
      <span className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
        andre.gonzalez @ UABC FCQI — 2026
      </span>
    </footer>
  )
}
