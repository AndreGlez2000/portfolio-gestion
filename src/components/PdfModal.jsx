import React, { useEffect } from 'react'

export default function PdfModal({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!item) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            {item.path}
          </span>
          <button
            onClick={onClose}
            className="font-mono text-lime"
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '4px 12px',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            ✕ cerrar
          </button>
        </div>
        <div className="modal-body">
          <iframe src={`${import.meta.env.BASE_URL}${item.file.replace(/^\//, '')}`} title={item.title} />
        </div>
      </div>
    </div>
  )
}
