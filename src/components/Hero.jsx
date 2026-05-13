import React from 'react'

export default function Hero() {
  return (
    <section style={{
      height: 'calc(100vh - 60px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
    }}>
      {/* Terminal Window */}
      <div style={{
        width: '100%',
        maxWidth: '760px',
        backgroundColor: '#161B22',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        {/* Terminal Chrome */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          borderBottom: '1px solid var(--border)',
          backgroundColor: '#1C2128',
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28C840' }} />
          <span className="font-mono" style={{ marginLeft: '8px', color: 'var(--text-muted)', fontSize: '12px' }}>
            bash — zsh
          </span>
        </div>

        {/* Terminal Content */}
        <div className="font-mono" style={{
          padding: '24px',
          fontSize: '13px',
          lineHeight: '1.8',
          color: 'var(--text-primary)',
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 180px)',
        }}>
          <Line prompt="$" cmd="whoami" />
          <Line output="andre.gonzalez" />
          <Spacer />

          <Line prompt="$" cmd="cat ~/.student-info.json" />
          <div style={{ color: '#79C0FF' }}>{`{`}</div>
          <JsonLine k="nombre" v='"André González"' />
          <JsonLine k="carrera" v='"Ingeniería en Software"' />
          <JsonLine k="materia" v='"Gestión e Innovación"' />
          <JsonLine k="profesor" v='"Rosas Murillo Jorge Abdon"' />
          <JsonLine k="institucion" v='"UABC — FCQI"' />
          <JsonLine k="semestre" v='"2026-1"' last />
          <div style={{ color: '#79C0FF' }}>{`}`}</div>
          <Spacer />

          <Line prompt="$" cmd="ls ~/portafolio/ --all" />
          <Comment text="# === UNIDAD 1: Propiedad Intelectual ===" />
          <LsItem name="practica1_borrador.pdf" />
          <LsItem name="practica1_formal.pdf" />
          <LsItem name="cuestionario_impi.pdf" />
          <LsItem name="neoAutor.pdf" />
          <LsItem name="practica2_transferencia.pdf" />
          <LsItem name="ensayo_transferencia.pdf" />
          <Spacer />
          <Comment text="# === UNIDAD 2: Estrategia e Impacto ===" />
          <LsItem name="practica3_portafolio.pdf" />
          <LsItem name="practica4_cimabites.pdf" />
          <LsItem name="practica5_impacto.pdf" />
          <LsItem name="ensayo_ia_nearshoring.pdf" />
          <Spacer />
          <Comment text="# === FINALES: IA Generativa e Industria ===" />
          <LsItem name="ensayo_deepseek_claude.pdf" />
          <LsItem name="practica8_industria.pdf" />
          <LsItem name="practica9_tabla_comparativa.pdf" />
          <Spacer />

          <Line prompt="$" cmd='echo "13 evidencias · 3 unidades · 4 ensayos"' />
          <span style={{ color: 'var(--lime)' }}>13 evidencias · 3 unidades · 4 ensayos</span>
          <br />
          <Spacer />

          <span style={{ color: 'var(--text-muted)' }}>$ </span>
          <span className="cursor" />
        </div>
      </div>
    </section>
  )
}

function Line({ prompt, cmd, output }) {
  if (output) return <div style={{ color: 'var(--text-muted)' }}>{output}</div>
  return (
    <div>
      <span style={{ color: 'var(--text-muted)' }}>{prompt} </span>
      <span style={{ color: 'var(--text-primary)' }}>{cmd}</span>
    </div>
  )
}

function JsonLine({ k, v, last }) {
  return (
    <div style={{ paddingLeft: '16px' }}>
      <span style={{ color: '#79C0FF' }}>  &quot;{k}&quot;</span>
      <span style={{ color: 'var(--text-muted)' }}>: </span>
      <span style={{ color: '#A5D6FF' }}>{v}</span>
      {!last && <span style={{ color: 'var(--text-muted)' }}>,</span>}
    </div>
  )
}

function Comment({ text }) {
  return <div style={{ color: '#6E7681' }}>{text}</div>
}

function LsItem({ name }) {
  return <div style={{ color: '#A5D6FF' }}>{name}</div>
}

function Spacer() {
  return <div style={{ height: '4px' }} />
}
