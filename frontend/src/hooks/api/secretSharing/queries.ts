import { useQuery } from "@tanstack/react-query";

import { apiRequest } from "@app/config/request";

import { TSharedSecret, TViewSharedSecretResponse } from "./types";

export const useGetSharedSecrets = () => {
  return useQuery({
    queryKey: ["sharedSecrets"],
    queryFn: async () => {
      const { data } = await apiRequest.get<TSharedSecret[]>("/api/v1/secret-sharing/");
      return data;
    }
  });
};

export const useGetActiveSharedSecretByIdAndHashedHex = (id: string, hashedHex: string) => {
  return useQuery<TViewSharedSecretResponse, [string]>({
    queryFn: async () => {
      const { data } = await apiRequest.get<TViewSharedSecretResponse>(
        `/api/v1/secret-sharing/public/${id}?hashedHex=${hashedHex}`
      );
      return {
        encryptedValue: data.encryptedValue,
        iv: data.iv,
        tag: data.tag,
        expiresAt: data.expiresAt,
        expiresAfterViews: data.expiresAfterViews
      };
    }
  });
};
