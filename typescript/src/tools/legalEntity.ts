// typescript/src/tools/legalEntity.ts
import { z } from "zod";
import { Client, LegalEntityManagement } from "@adyen/api-library";
import { Tool } from "./types";

export const listPciQuestionnairesTool: Tool = {
  name: "listPCIQuestionnaires",
  description: "List signed PCI questionnaires for a given legal entity ID",
  arguments: z.object({ id: z.string() }).strict(),
  invoke: async (adyenClient: Client, { id }) => {
    const lem = new LegalEntityManagement(adyenClient);
    // v2 list endpoint
    const response = await lem.listPCIQuestionnaires({ id });
    return response;
  },
};

export const getPciQuestionnaireTool: Tool = {
  name: "getPCIQuestionnaire",
  description: "Retrieve a signed PCI questionnaire by its ID for a given legal entity",
  arguments: z
    .object({ id: z.string(), pciQuestionnaireId: z.string() })
    .strict(),
  invoke: async (adyenClient: Client, { id, pciQuestionnaireId }) => {
    const lem = new LegalEntityManagement(adyenClient);
    // v3 get single endpoint
    const response = await lem.getPCIQuestionnaire({
      id,
      pciQuestionnaireId,
    });
    return response;
  },
};
