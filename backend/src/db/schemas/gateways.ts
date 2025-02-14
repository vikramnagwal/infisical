// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { zodBuffer } from "@app/lib/zod";

import { TImmutableDBKeys } from "./models";

export const GatewaysSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  serialNumber: z.string(),
  keyAlgorithm: z.string(),
  issuedAt: z.date(),
  expiration: z.date(),
  relayAddress: zodBuffer,
  orgGatewayRootCaId: z.string().uuid(),
  identityId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TGateways = z.infer<typeof GatewaysSchema>;
export type TGatewaysInsert = Omit<z.input<typeof GatewaysSchema>, TImmutableDBKeys>;
export type TGatewaysUpdate = Partial<Omit<z.input<typeof GatewaysSchema>, TImmutableDBKeys>>;
