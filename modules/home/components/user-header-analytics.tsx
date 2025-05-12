import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AtSign, CalendarClock, File, FileStack } from "lucide-react";


export default function UserHeaderAnalytics() {
    return (
        <>
            <Card className="w-full lg:gap-5 sm:gap-3 gap-1">
                <CardHeader>
                    <CardTitle className="text-sm">Resumen de actividad</CardTitle>
                    <CardDescription className="text-xs">Visualiza los tickets completados, asignados, programados y el numero de proyectos activos.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                        <div className="flex items-center lg:mt-0 md:mt-2 sm:mt-3 mt-5">
                            <div className="rounded-full border border-primary p-3">
                                <File className="text-primary"></File>
                            </div>
                            <div className="flex flex-col ml-3">
                                <span className="font-normal text-sm">Tickets Completados</span>
                                <span className="font-bold">10.3 K</span>
                            </div>
                        </div>
                        <div className="flex items-center lg:mt-0 md:mt-5 sm:mt-3 mt-5">
                            <div className="rounded-full border border border-primary p-3">
                                <AtSign className="text-primary"></AtSign>
                            </div>
                            <div className="flex flex-col ml-3">
                                <span className="font-normal text-sm">Ticket Asignados</span>
                                <span className="font-bold">3 K</span>
                            </div>
                        </div>
                        <div className="flex items-center lg:mt-0 md:mt-5 sm:mt-3 mt-5">
                            <div className="rounded-full border border border-primary p-3">
                                <FileStack className="text-primary"></FileStack>
                            </div>
                            <div className="flex flex-col ml-3">
                                <span className="font-normal text-sm">Proyectos</span>
                                <span className="font-bold">23</span>
                            </div>
                        </div>
                        <div className="flex items-center lg:mt-0 md:mt-5 sm:mt-3 mt-5">
                            <div className="rounded-full border border border-primary p-3">
                                <CalendarClock className="text-primary"></CalendarClock>
                            </div>
                            <div className="flex flex-col ml-3">
                                <span className="font-normal text-sm">Tickets Programados</span>
                                <span className="font-bold">10.3 K</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}