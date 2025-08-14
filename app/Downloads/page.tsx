import React from "react";
import Image from 'next/image';
import JeremiahsList from "@/components/JeremiahsList";
import ColuckumJukly4_2024images from "@/components/ColuckumJukly4_2024images";

export default function page() {
    return (
        <div className="flex">
            <ColuckumJukly4_2024images />
        </div>
    );
}