import React from "react";
import Image from 'next/image';
import JeremiahsList from "@/components/JeremiahsList";
import ColockumGallery from "@/components/ColockumGallery";

export default function page() {
    return (
        <div className="flex">
            <ColockumGallery />
        </div>
    );
}