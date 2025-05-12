import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";


export default function PriorityTask() {
    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <CardTitle className="text-sm">Tareas Prioritarias</CardTitle>
                            <CardDescription>
                                <span className="text-xs">
                                    Tareas ordenadas por prioridad
                                </span>
                            </CardDescription>
                        </div>

                        <Button variant="secondary" className="text-primary">
                            <Plus></Plus>
                            <span>Tarea</span>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="min-h-[300px] flex flex-col items-center content-center justify-center">
                    <span className="text-lg font-semibold">No se encontraron tareas</span>
                    <span className="text-sm font-light">Click para agregar una <Button variant="link" className="p-0 text-sm font-light text-primary">nueva tarea</Button></span>
                </CardContent>
            </Card>
        </>
    )
}