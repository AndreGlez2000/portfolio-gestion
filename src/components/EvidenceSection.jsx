import React from 'react'

export default function EvidenceSection({ group }) {
  return (
    <section id={group.id} style={{ padding: '96px 48px' }}>
      {/* Section Header */}
      <div style={{ marginBottom: '48px' }}>
        <div
          className="font-mono text-lime"
          style={{
            fontSize: '80px',
            fontWeight: '700',
            lineHeight: '1',
            opacity: '0.15',
            userSelect: 'none',
          }}
        >
          {group.number}
        </div>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: '600',
            marginTop: '-24px',
            color: 'var(--text-primary)',
          }}
        >
          {group.title}
        </h2>
        <div
          style={{
            width: '48px',
            height: '2px',
            backgroundColor: 'var(--lime)',
            marginTop: '16px',
          }}
        />
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {group.items.map((item) => (
          <div
            key={item.path}
            className="evidence-card"
            onClick={() => window.open(item.file, '_blank', 'noopener,noreferrer')}
          >
            {/* Tag */}
            <span
              className="font-mono"
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(57,211,83,0.1)',
                color: 'var(--lime)',
                border: '1px solid rgba(57,211,83,0.3)',
                borderRadius: '4px',
                padding: '2px 8px',
                fontSize: '11px',
                marginBottom: '12px',
              }}
            >
              {item.tag}
            </span>

            {/* Title */}
            <h3
              style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '8px',
                color: 'var(--text-primary)',
              }}
            >
              {item.title}
            </h3>

            {/* Path */}
            <p
              className="font-mono"
              style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                marginBottom: '12px',
              }}
            >
              {item.path}
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              {item.description}
            </p>

            {/* CTA */}
            <button
              className="font-mono text-lime"
              style={{
                background: 'none',
                border: '1px solid var(--lime)',
                borderRadius: '6px',
                padding: '6px 16px',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(57,211,83,0.1)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              ver en GitHub →
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
