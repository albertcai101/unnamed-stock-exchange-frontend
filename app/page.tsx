"use client";

import { useEffect, useState } from "react";
import { LaptopIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { TrendingUp, TrendingDown } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

// Helper function to generate random stock data and determine if trending up or down
function generateRandomStockData() {
    const data = [];
    let prevPrice = Math.random() * 500 + 100; // Random starting price between 100 and 600
    for (let i = 0; i < 6; i++) {
        const price = prevPrice + Math.random() * 200 - 100; // Random price change
        data.push({ month: ["January", "February", "March", "April", "May", "June"][i], price: Math.round(price) });
        prevPrice = price;
    }
    // Determine trend by comparing the first and last data points
    const trendingUp = data[5].price > data[0].price;
    return { data, trendingUp };
}

// Reusable chart component for each stock
const StockChart = ({ title, data, trendingUp }: { title: string; data: any; trendingUp: boolean }) => {
    const strokeColor = trendingUp ? "rgb(101, 165, 68)" : "rgb(219, 68, 55)"; // Green for up, red for down

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={{ price: { color: "hsl(var(--chart-1))" } }}>
                    <AreaChart
                        accessibilityLayer
                        data={data}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" hideLabel />}
                        />
                        <Area
                            dataKey="price"
                            type="monotone"
                            fill="rgba(119, 219, 137, 0)" // Keep fill transparent
                            stroke={strokeColor} // Dynamic stroke color based on trending
                            strokeWidth={3}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className={`flex items-center gap-2 font-medium leading-none ${trendingUp ? "text-green-400" : "text-red-400"}`}>
                            {trendingUp ? (
                                <>
                                    Trending up by {Math.round(Math.random() * 20 + 10)}% this month <TrendingUp className="h-4 w-4" />
                                </>
                            ) : (
                                    <>
                                        Trending down by {Math.round(Math.random() * 20 + 10)}% this month <TrendingDown className="h-4 w-4" />
                                    </>
                                )}
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            January - June 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default function Home() {
    const [stocks, setStocks] = useState<any[]>([]);

    useEffect(() => {
        // Generate stock data only on the client side
        const stockData = [
            { title: "CATG (Catriana Gray)", ...generateRandomStockData() },
            { title: "LBJ (Lebron James)", ...generateRandomStockData() },
            { title: "JEN (Jennie Duan)", ...generateRandomStockData() },
            { title: "WOOD (Tiger Woods)", ...generateRandomStockData() },
            { title: "TRUMP (Donald Trump)", ...generateRandomStockData() },
            { title: "OBAMA (Barack Obama)", ...generateRandomStockData() },
        ];
        setStocks(stockData);
    }, []);

    return (
        <>
            <main className="flex-1 font-[family-name:var(--font-geist-sans)]">
                <div id='container' className="px-8 max-w-[1400px] mx-auto">
                    <div className="relative flex w-full flex-col items-start">
                        <section className="mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10 w-full">
                            <a className="group inline-flex items-center px-0.5 text-sm font-medium" href="/ipo" target="_blank" rel="noopener noreferrer">
                                <LaptopIcon className="h-4 w-4" />
                                <Separator orientation="vertical" className="mx-2 h-4" />
                                <span className="underline-offset-4 group-hover:underline">IPO your own stock</span>
                                <ArrowRight className="h-4 w-4 ml-1" />
                            </a>
                            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
                                Welcome to pteroDaQ
                            </h1>
                            <p className="max-w-2xl text-lg font-light text-foreground"> Unlock capital. </p>
                            <div className="fex w-full items-center justify-start gap-2 py-2">
                                <div className="flex items-center gap-2">
                                    <a href="/auth" target="_blank" rel="noopener noreferrer">
                                        <Button size="xl">
                                            Finish Signing Up
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Grid of charts */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {stocks.map((stock, index) => (
                            <StockChart key={index} title={stock.title} data={stock.data} trendingUp={stock.trendingUp} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

