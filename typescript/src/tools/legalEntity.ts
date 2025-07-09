// src/tools/legalEntity.ts
import { z } from "zod";
import { Client, LegalEntityManagementAPI } from "@adyen/api-library";
import { Tool } from "./types";

export const listPciQuestionnairesTool: Tool = {
  name: "listPCIQuestionnaires",
  description: "List PCI questionnaires for a given legal entity ID",
  arguments: z.object({ id: z.string() }).strict(),
  invoke: async (adyenClient: Client, { id }) => {
    const lem = new LegalEntityManagementAPI(adyenClient);
    return await lem.PCIQuestionnairesApi.getPciQuestionnaireDetails(id);
  },
};

export const getPciQuestionnaireTool: Tool = {
  name: "getPCIQuestionnaire",
  description: "Retrieve a signed PCI questionnaire by its ID for a given legal entity",
  arguments: z
    .object({ id: z.string(), pciid: z.string() })
    .strict(),
  invoke: async (adyenClient: Client, { id, pciid }) => {
    const lem = new LegalEntityManagementAPI(adyenClient);
    return await lem.PCIQuestionnairesApi.getPciQuestionnaire(id, pciid);
  },
};
