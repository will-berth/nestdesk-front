import { LoginInput, Loginresponse } from "@/domain/auth";
import { api } from "@/lib/react-query";

export const auth = {
    login: {
        loginApi: async (data: LoginInput) => api.post<Loginresponse>("/auth/signin", data)
    },
};