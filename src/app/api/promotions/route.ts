import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const promotions = await prisma.promotion.findMany();

        return NextResponse.json(promotions, {
            status: 200,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to fetch promotions" },
            { status: 500 }
        );
    }
}