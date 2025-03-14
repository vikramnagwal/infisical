// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { zodBuffer } from "@app/lib/zod";

import { TImmutableDBKeys } from "./models";

export const SecretVersionsV2Schema = z.object({
  id: z.string().uuid(),
  version: z.number().default(1),
  type: z.string().default("shared"),
  key: z.string(),
  encryptedValue: zodBuffer.nullable().optional(),
  encryptedComment: zodBuffer.nullable().optional(),
  reminderNote: z.string().nullable().optional(),
  reminderRepeatDays: z.number().nullable().optional(),
  skipMultilineEncoding: z.boolean().default(false).nullable().optional(),
  metadata: z.unknown().nullable().optional(),
  envId: z.string().uuid().nullable().optional(),
  secretId: z.string().uuid(),
  folderId: z.string().uuid(),
  userId: z.string().uuid().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userActorId: z.string().uuid().nullable().optional(),
  identityActorId: z.string().uuid().nullable().optional(),
  actorType: z.string().nullable().optional()
});

export type TSecretVersionsV2 = z.infer<typeof SecretVersionsV2Schema>;
export type TSecretVersionsV2Insert = Omit<z.input<typeof SecretVersionsV2Schema>, TImmutableDBKeys>;
export type TSecretVersionsV2Update = Partial<Omit<z.input<typeof SecretVersionsV2Schema>, TImmutableDBKeys>>;
