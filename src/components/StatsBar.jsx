import React from 'react'

const stats = [
  { number: '09', label: 'prácticas' },
  { number: '03', label: 'unidades' },
  { number: '04', label: 'ensayos' },
  { number: '2026', label: 'semestre' },
]

export default function StatsBar() {
  return (
    <div style={{
      backgroundColor: 'var(--card)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'center',
      gap: '80px',
      padding: '32px 48px',
      flexWrap: 'wrap',
    }}>
      {stats.map(s => (
        <div key={s.label} style={{ textAlign: 'center' }}>
          <div className="font-mono text-lime" style={{ fontSize: '32px', fontWeight: '700' }}>
            {s.number}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px' }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
