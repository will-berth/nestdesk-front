import { LoginInput } from "@/domain/auth";
import { auth } from "@/infrastructure/api/auth-api";

export async function loginUseCase(input: LoginInput) {
    try{
        const response = await auth.login.loginApi(input);
        return response.data;
    } catch(error: any){
        const message = error.response?.data?.code || "UNKNOWN_ERROR";
        throw new Error(message);
    }
}