import Image from "next/image";

import { Upload } from 'lucide-react';
import { LaptopIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Home() {

    const component_header = () => {
        return (
            <div className="relative flex w-full flex-col items-start">
                <section className="mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg::pb-10 w-full">
                    <a className="group inline-flex items-center px-0.5 text-sm font-medium" href="https://editor.rive.app/" target="_blank" rel="noopener noreferrer">
                        <LaptopIcon className="h-4 w-4" />
                        <Separator orientation="vertical" className="mx-2 h-4" />
                        <span className="underline-offset-4 group-hover:underline">open rive editor</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                    <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] hidden md:block">
                        Rive Web Runtime, Upgraded.
                    </h1>
                    <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] md:hidden">
                        Rive Runtime.
                    </h1>
                    <p className="max-w-2xl text-lg font-light text-foreground"> Test interactions through animations and the state machine.</p>
                    <div className="fex w-full items-center justify-start gap-2 py-2">
                        <div className="flex items-center gap-2">
                            <a href="https://github.com/albertcai101/rive-rip" target="_blank" rel="noopener noreferrer">
                                <Button size="xs">
                                    Star on GitHub
                                </Button>
                            </a>
                            <a href="https://rive.app/preview/" target="_blank" rel="noopener noreferrer">
                                <Button size="xs" variant="ghost">
                                    Use Old Rive Preview
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <>
            <main className="flex-1 font-[family-name:var(--font-geist-sans)]">
                <div id='container' className="px-8 max-w-[1400px] mx-auto">
                    { component_header() }
                </div>
            </main>
        </>
    );
}
