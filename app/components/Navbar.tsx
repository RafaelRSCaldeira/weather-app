'use client'

import { DropdownButton, DropdownItem } from "@/components/ui/button";

import { Settings, ChevronDown } from "lucide-react";
import Image from "next/image";

const dropdownItems = [
    <DropdownItem key={1}>Switch to Imperial</DropdownItem>,
    <DropdownItem key={2}>Celsius (°C)</DropdownItem>,
    <DropdownItem key={3}>Fahrenheit (°F)</DropdownItem>,
    <DropdownItem key={4}>km/h</DropdownItem>,
    <DropdownItem key={5}>mph</DropdownItem>,
    <DropdownItem key={6}>Millimeters (mm)</DropdownItem>,
    <DropdownItem key={7}>Inches (in)</DropdownItem>,
];

export default function Navbar() {
    return (
        <div className="flex w-full justify-between p-4 mb-8 relative z-10">
            <Image
                src={"logo.svg"}
                alt="logo"
                width={197}
                height={40}
                className="w-[140px]"
            />
            <DropdownButton 
            button={<>
                <Settings />
                <p>Units</p>
                <ChevronDown />
            </>}
            sections={dropdownItems}
            />
        </div>
    );
}