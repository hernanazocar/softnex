'use client'

import { useEffect, useRef, useState } from 'react'

const SCAN_MS = 650

export default function ScanText({ text }: { text: string }) {
  const [scanning, setScanning] = useState(false)
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    setScanning(true)
    const id = setTimeout(() => setScanning(false), SCAN_MS)
    return () => clearTimeout(id)
  }, [text])

  return (
    <span className="relative inline-block">
      <span key={text} className={scanning ? 'scan-reveal' : undefined}>
        {text}
      </span>
      {scanning && <span aria-hidden="true" className="scan-bar" />}
    </span>
  )
}
