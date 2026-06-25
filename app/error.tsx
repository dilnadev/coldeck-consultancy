'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Page error:', error)
  }, [error])

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace', background: '#1a1a2e', color: 'white', minHeight: '100vh' }}>
      <h2 style={{ color: '#CC00BE' }}>Runtime Error</h2>
      <pre style={{ color: '#9BC74A', whiteSpace: 'pre-wrap', fontSize: '14px' }}>{error.message}</pre>
      <pre style={{ color: '#888', whiteSpace: 'pre-wrap', fontSize: '12px', marginTop: '1rem' }}>{error.stack}</pre>
      <button onClick={reset} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#4D59B7', color: 'white', border: 'none', cursor: 'pointer' }}>
        Try Again
      </button>
    </div>
  )
}

