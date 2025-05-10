import { loginUseCase } from "@/application/use-cases/auth/login";
import { useMutation } from "@tanstack/react-query";


export function useLogin() {
    
    return useMutation({
        mutationFn: loginUseCase,
        onSuccess: async (data) => {
            await fetch('/api/session', {
                method: 'POST',
                body: JSON.stringify({ token: data.token }),
                headers: { 'Content-Type': 'application/json' }
            })
        }
    });
}