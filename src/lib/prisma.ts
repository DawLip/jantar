import { PrismaClient } from "@/generated/prisma/client";
import { PrismaMssql } from "@prisma/adapter-mssql";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function createPrismaClient() {
    const adapter = new PrismaMssql({
        server: process.env.DB_HOST!,
        port: Number(process.env.DB_PORT ?? 1433),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,

        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000,
        },

        options: {
            encrypt: true,
            trustServerCertificate: true,
        },
    });

    return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}