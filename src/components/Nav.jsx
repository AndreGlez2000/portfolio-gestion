import React from 'react'

const sections = [
  { label: './unidad-1', href: '#unidad-1' },
  { label: './unidad-2', href: '#unidad-2' },
  { label: './finales', href: '#finales' },
]

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px',
    }}>
      <span className="font-mono text-lime" style={{ fontSize: '14px' }}>
        ~/andre/gestion-innovacion $
      </span>
      <div style={{ display: 'flex', gap: '32px' }}>
        {sections.map(s => (
          <a
            key={s.href}
            href={s.href}
            className="font-mono"
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '13px',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--lime)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
