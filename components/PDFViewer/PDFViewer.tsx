'use client'

import { useState, useRef } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

interface PDFViewerProps {
    pdfUrl: string
    fileName?: string
    showDownload?: boolean
    className?: string
}

export default function PDFViewer({
    pdfUrl,
    fileName = 'document.pdf',
    showDownload = true,
    className = ''
}: PDFViewerProps) {
    const [numPages, setNumPages] = useState<number>(0)
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [scale, setScale] = useState<number>(1.0)
    const containerRef = useRef<HTMLDivElement>(null)

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
        setLoading(false)
        setError(null)
    }

    function onDocumentLoadError(error: Error) {
        setError('Failed to load PDF document')
        setLoading(false)
        console.error('PDF load error:', error)
    }

    const handleDownload = async () => {
        try {
            const response = await fetch(pdfUrl)
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = fileName
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.error('Download failed:', error)
            // Fallback: open in new tab
            window.open(pdfUrl, '_blank')
        }
    }

    const goToPrevPage = () => {
        setPageNumber(prev => Math.max(prev - 1, 1))
    }

    const goToNextPage = () => {
        setPageNumber(prev => Math.min(prev + 1, numPages))
    }

    const handleZoomIn = () => {
        setScale(prev => Math.min(prev + 0.2, 3.0))
    }

    const handleZoomOut = () => {
        setScale(prev => Math.max(prev - 0.2, 0.5))
    }

    const resetZoom = () => {
        setScale(1.0)
    }

    if (error) {
        return (
            <div className={`pdf-viewer-error ${className}`}>
                <div className="error-content">
                    <p className="error-message">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="retry-button"
                    >
                        Retry
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className={`pdf-viewer ${className}`} ref={containerRef}>
            {/* Toolbar */}
            <div className="pdf-toolbar">
                <div className="toolbar-left">
                    <button
                        onClick={goToPrevPage}
                        disabled={pageNumber <= 1}
                        className="nav-button"
                    >
                        ←
                    </button>
                    <span className="page-info">
                        {loading ? '...' : `${pageNumber} / ${numPages}`}
                    </span>
                    <button
                        onClick={goToNextPage}
                        disabled={pageNumber >= numPages}
                        className="nav-button"
                    >
                        →
                    </button>
                </div>

                <div className="toolbar-center">
                    <button onClick={handleZoomOut} className="zoom-button">−</button>
                    <span className="zoom-level">{Math.round(scale * 100)}%</span>
                    <button onClick={handleZoomIn} className="zoom-button">+</button>
                    <button onClick={resetZoom} className="reset-zoom">Reset</button>
                </div>

                <div className="toolbar-right">
                    {showDownload && (
                        <button onClick={handleDownload} className="download-button">
                            Download PDF
                        </button>
                    )}
                </div>
            </div>

            {/* PDF Document */}
            <div className="pdf-container">
                {loading && (
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                        <p>Loading PDF...</p>
                    </div>
                )}

                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading=""
                >
                    <Page
                        pageNumber={pageNumber}
                        scale={scale}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                    />
                </Document>
            </div>
        </div>
    )
}