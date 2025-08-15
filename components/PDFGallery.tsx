'use client';

import React, { useState, useEffect } from 'react';
import { Download, FileText, Calendar, Link } from 'lucide-react';

interface PDFItem {
    name: string;
    url: string;
    description: string;
    dateCreated: string;
    source: string;
    thumbnailUrl?: string;
}

interface PDFGalleryProps {
    pdfFolder?: string;
    pdfs?: PDFItem[];
}

const PDFGallery: React.FC<PDFGalleryProps> = ({
    pdfFolder = '/pdfs',
    pdfs: propPdfs
}) => {
    const [pdfs, setPdfs] = useState<PDFItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Sample data structure - replace with your actual data source
    const samplePdfs: PDFItem[] = [
        {
            name: "Chelan County Police Report",
            url: "/pdfs/Chelan_2410025304_PoliceReport.pdf",
            description: "Chelan County Sherrifs Deputies, friends of Jeremiah Johnson the Rivercom 911 dispatcher; whom he spent a considerable amount of time on the phone pleading for him to come murder me before I got away. The deputy was videod also by body or dash cam I am not sure , but the video clearly showed some exchange with the tow operator who stole my truck drove it to Jeremiahs house and then demanded 1000 cash; tow driver was B&T Towing of Cashmere and he was VERY clear in the video that he was owed NOTHING. He also said there was no tow, and there was no tow after all. HE stole my truck. The deputy then asked what about the repairs? The tow driver said I never did any repairs. I put a junk wheel on but he didnt want it so i took it back off. This same deputy reports I became upset over a tow bill though....",
            dateCreated: "2024-July-4",
            source: "Chelan County Sheriffs"
        },
        {
            name: "User Manual v2.1",
            url: "/pdfs/user-manual-v2.1.pdf",
            description: "Updated user manual with new features and troubleshooting guide.",
            dateCreated: "2024-03-22",
            source: "Technical Documentation"
        },
        {
            name: "Marketing Strategy Q2",
            url: "/pdfs/marketing-strategy-q2.pdf",
            description: "Strategic marketing plan and campaign overview for second quarter.",
            dateCreated: "2024-04-10",
            source: "Marketing Team"
        }
    ];

    useEffect(() => {
        const loadPdfs = async () => {
            try {
                setLoading(true);

                if (propPdfs) {
                    // Use provided PDFs
                    const pdfsWithThumbnails = await Promise.all(
                        propPdfs.map(async (pdf) => ({
                            ...pdf,
                            thumbnailUrl: await generateThumbnail(pdf.url)
                        }))
                    );
                    setPdfs(pdfsWithThumbnails);
                } else {
                    // Try to fetch from API route, fallback to sample data
                    try {
                        const response = await fetch('/api/pdfs');
                        if (response.ok) {
                            const data = await response.json();
                            const pdfsWithThumbnails = await Promise.all(
                                data.map(async (pdf: PDFItem) => ({
                                    ...pdf,
                                    thumbnailUrl: await generateThumbnail(pdf.url)
                                }))
                            );
                            setPdfs(pdfsWithThumbnails);
                        } else {
                            throw new Error('API not available');
                        }
                    } catch {
                        // Use sample data as fallback
                        const pdfsWithThumbnails = await Promise.all(
                            samplePdfs.map(async (pdf) => ({
                                ...pdf,
                                thumbnailUrl: await generateThumbnail(pdf.url)
                            }))
                        );
                        setPdfs(pdfsWithThumbnails);
                    }
                }
            } catch (err) {
                setError('Failed to load PDFs');
                console.error('Error loading PDFs:', err);
            } finally {
                setLoading(false);
            }
        };

        loadPdfs();
    }, [propPdfs]);

    // Generate PDF thumbnail using PDF.js (you'll need to install pdf-dist)
    const generateThumbnail = async (pdfUrl: string): Promise<string> => {
        try {
            // For now, return a placeholder. In production, you'd use PDF.js to generate actual thumbnails
            return `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="260" viewBox="0 0 200 260">
          <rect width="200" height="260" fill="#f3f4f6" stroke="#d1d5db" stroke-width="2"/>
          <rect x="20" y="30" width="160" height="4" fill="#e5e7eb"/>
          <rect x="20" y="50" width="120" height="4" fill="#e5e7eb"/>
          <rect x="20" y="70" width="140" height="4" fill="#e5e7eb"/>
          <rect x="20" y="90" width="100" height="4" fill="#e5e7eb"/>
          <rect x="20" y="110" width="160" height="4" fill="#e5e7eb"/>
          <rect x="20" y="130" width="80" height="4" fill="#e5e7eb"/>
          <circle cx="100" cy="180" r="20" fill="#ef4444"/>
          <text x="100" y="185" text-anchor="middle" fill="white" font-size="12" font-family="Arial">PDF</text>
        </svg>
      `)}`;
        } catch (error) {
            console.error('Error generating thumbnail:', error);
            return '';
        }
    };

    const handleDownload = async (pdf: PDFItem) => {
        try {
            const response = await fetch(pdf.url);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = pdf.name + '.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Download failed:', error);
            // Fallback: open in new tab
            window.open(pdf.url, '_blank');
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <FileText className="mx-auto h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-lg font-medium text-red-800 mb-2">Error Loading PDFs</h3>
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    if (pdfs.length === 0) {
        return (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                <FileText className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No PDFs Found</h3>
                <p className="text-gray-600">No PDF files were found in the specified folder.</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">PDF Gallery</h2>
                <p className="text-gray-600">{pdfs.length} document{pdfs.length !== 1 ? 's' : ''} available</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {pdfs.map((pdf, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
                    >
                        {/* Thumbnail */}
                        <div className="relative aspect-[4/5] bg-gray-100 flex items-center justify-center">
                            {pdf.thumbnailUrl ? (
                                <img
                                    src={pdf.thumbnailUrl}
                                    alt={`${pdf.name} thumbnail`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="text-center">
                                    <FileText className="mx-auto h-16 w-16 text-gray-400 mb-2" />
                                    <span className="text-sm text-gray-500">PDF Preview</span>
                                </div>
                            )}

                            {/* Download button overlay */}
                            <button
                                onClick={() => handleDownload(pdf)}
                                className="absolute top-2 right-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-105"
                                title="Download PDF"
                            >
                                <Download className="h-4 w-4 text-gray-700" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2" title={pdf.name}>
                                {pdf.name}
                            </h3>

                            <p className="text-gray-600 text-sm mb-3 line-clamp-3" title={pdf.description}>
                                {pdf.description}
                            </p>

                            {/* Metadata */}
                            <div className="space-y-2 text-xs text-gray-500">
                                <div className="flex items-center">
                                    <Calendar className="h-3 w-3 mr-2 flex-shrink-0" />
                                    <span>{formatDate(pdf.dateCreated)}</span>
                                </div>

                                <div className="flex items-center">
                                    <Link className="h-3 w-3 mr-2 flex-shrink-0" />
                                    <span className="truncate" title={pdf.source}>{pdf.source}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-4 pt-3 border-t border-gray-100">
                                <button
                                    onClick={() => handleDownload(pdf)}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
                                >
                                    <Download className="h-4 w-4" />
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PDFGallery;