import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PriorityTask from "@/modules/home/components/priority-task";
import UserHeaderAnalytics from "@/modules/home/components/user-header-analytics";


export default function Home() {
  return (
    <div className="w-full">
      <div className="max-auto">

        {/* <div className="grid grid-cols-2 gap-4 items-center justify-items-center min-h-screen p-5 pb-20 gap-2 sm:p-5"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4 items-center justify-items-center p-5 pb-20 gap-2 sm:p-5">
          <div className="lg:col-span-2 sm:col-span-1 w-full">
            <UserHeaderAnalytics></UserHeaderAnalytics>
          </div>
          <div className=" w-full">
            <PriorityTask></PriorityTask>
          </div>
          <div className=" w-full">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <CardTitle className="text-sm">Comentarios</CardTitle>
                    <CardDescription>
                      <span className="text-xs">
                        De los equipos del proyecto
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="min-h-[300px] flex flex-col items-center content-center justify-center">
                {/* <div className="">

                </div> */}
                <span className="text-lg font-semibold">No se encontraron comentarios</span>
                {/* <span className="text-sm font-light">Click to add new task</span> */}

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
