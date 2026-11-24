"use client";

import React from "react";

import Promotions from "./Promotions";

import Card from "@/components/structure/card/Card";
import TextInput from "@/components/input/TextInput";
import Button from "@/components/input/Button";

export default function EtykietyPromocyjnePage() {
    const [openedTab, setOpenedTab] = React.useState(0);

    return (
        <Card
            className="h-full w-full"
            tabs={[
                { label: "Promocje", isActive: openedTab === 0 },
                { label: "Szablony", isActive: openedTab === 1 },
                { label: "Etykieta", isActive: openedTab === 2 },
            ]}
            onTabClick={(index) => setOpenedTab(index)}
        >
            {openedTab === 0 && <Promotions/>}
            {openedTab === 1 && <Templates/>}
            {openedTab === 2 && <Label/>}
        </Card>
    );
}

function Templates() {
    return (
        <></>
    );
}

function Label() {
    return (
        <></>
    );}
