"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CircleX, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SpokeSpinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { authErrorMessages } from "../i18n/errors";
import { redirect } from "next/navigation";

const loginFormSchema = z.object({
    email: z.string({
        required_error: "Correo electronico requerido",
    }).email({
        message: "Correo electronico invalido",
    }),
    password: z.string().min(6, {
        message: "La contraseña debe tener al menos 6 caracteres",
    }),
});

export function SignInForm() {
    const [showPassword, setShowPassword] = useState(false);
    const { mutate: login, data, isPending, error } = useLogin()

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
        login(values);
    };

    useEffect(() => {
        if (data) {
            if(data?.public_id) redirect('/dashboard/projects')
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            const code = error.message;
            const message = authErrorMessages[code as keyof typeof authErrorMessages];
            toast.error(message);
        }
    }, [error]);

    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <div className="grid grid-cols-1 w-full items-center justify-center gap-4">
                        <div className="flex justify-center mt-2 mb-2">
                            <span className="font-bold text-4xl">Nest<AuroraText>Desk</AuroraText></span>
                        </div>
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold tracking-tight">Iniciar sesión en NestDesk</h2>
                                <p className="text-muted-foreground text-sm">
                                    ¿No tienes una cuenta?{' '}
                                    <Button
                                        variant="link"
                                        className="p-0 text-primary font-medium hover:text-primary/80 h-auto"
                                    >
                                        Regístrate ahora
                                    </Button>
                                </p>
                            </div>
                        </div>
                        <Button className="w-full font-normal" variant="outline">

                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            <span>
                                Iniciar sesion con Google
                            </span>
                        </Button>
                        <Button className="w-full font-normal" variant="outline">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                            </svg>
                            Iniciar sesion con Facebook
                        </Button>
                        <div className="flex items-center justify-center gap-2 w-full">
                            <Separator className="flex-1" />
                            <p>o</p>
                            <Separator className="flex-1" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-normal">Correo electrónico</FormLabel>
                                        <FormControl>
                                            <Input placeholder="name@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="mt-3">
                                        <FormLabel className="font-normal">Contraseña</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    placeholder="contraseña"
                                                    type={showPassword ? "text" : "password"}
                                                    className="pr-10"
                                                    {...field}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                    onClick={togglePasswordVisibility}
                                                    tabIndex={-1}
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                                                    ) : (
                                                        <Eye className="h-4 w-4 text-muted-foreground" />
                                                    )}
                                                    <span className="sr-only">
                                                        {showPassword ? "Hide password" : "Show password"}
                                                    </span>
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full font-medium mt-4" disabled={isPending}>{isPending ? <SpokeSpinner color="black" /> : 'Iniciar Sesion'} </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
}
