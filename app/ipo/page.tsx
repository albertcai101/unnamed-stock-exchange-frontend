"use client";

import { useRouter } from 'next/navigation'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    ticker: z.string().min(3).max(6),
    organization: z.string().min(3).max(100),
    raiseGoal: z.coerce.number().min(0).max(1000000000),
    description: z.string().min(3).max(280),
});

function IPOForm() {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ticker: "",
            organization: "",
            raiseGoal: 0,
            description: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        router.push('/badstockview');
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="ticker"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ticker</FormLabel>
                            <FormControl>
                                <Input placeholder="AAPL" {...field} />
                            </FormControl>
                            <FormDescription>
                                Short ticker symbol for your organization, e.g., "AAPL".
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Organization</FormLabel>
                            <FormControl>
                                <Input placeholder="Your organization name" {...field} />
                            </FormControl>
                            <FormDescription>
                                The full name of your organization.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="raiseGoal"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Raise Goal</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="100" {...field}/>
                            </FormControl>
                            <FormDescription>
                                Enter the target capital raise goal in USD.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Brief description" {...field} />
                            </FormControl>
                            <FormDescription>
                                Provide a brief description of the IPO.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default function Page() {

    const component_header = () => {
        return (
            <div className="relative flex w-full flex-col items-start">
                <section className="mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg::pb-10 w-full">
                    <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] hidden md:block">
                        IPO a New Stock
                    </h1>
                    <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] md:hidden">
                        IPO a New Stock
                    </h1>
                </section>
            </div>
        );
    }

    return (
        <main className="flex-1 font-[family-name:var(--font-geist-sans)]">
            <div id='container' className="px-8 max-w-[1400px] mx-auto">
                { component_header() }
                <div className="grid grid-cols-[1fr_300px]  gap-4">
                    <div className="flex flex-col gap-8 col-start-1 max-w-[750px]">
                        <Card>
                            <CardHeader>
                                <CardTitle>IPO Form</CardTitle>
                                <CardDescription>
                                    Enter the details for your new stock.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <IPOForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}
