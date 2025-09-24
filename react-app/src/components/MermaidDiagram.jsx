import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

function MermaidDiagram({ chart, className = '' }) {
  const chartRef = useRef(null)

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      fontSize: 14,
    })
  }, [])

  useEffect(() => {
    if (chartRef.current && chart) {
      chartRef.current.innerHTML = ''
      mermaid.render(
        `mermaid-${Math.random().toString(36).substr(2, 9)}`,
        chart
      ).then(({ svg }) => {
        if (chartRef.current) {
          chartRef.current.innerHTML = svg
        }
      }).catch((error) => {
        console.error('Mermaid rendering error:', error)
        if (chartRef.current) {
          chartRef.current.innerHTML = `<div class="text-red-500 p-4">다이어그램 렌더링 오류: ${error.message}</div>`
        }
      })
    }
  }, [chart])

  return (
    <div className={`mermaid-diagram bg-white p-4 rounded-lg border ${className}`}>
      <div ref={chartRef} />
    </div>
  )
}

export default MermaidDiagram