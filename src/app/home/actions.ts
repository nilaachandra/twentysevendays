"use server";

import { generateObject } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { z } from "zod";

const groq = createOpenAI({
    apiKey: process.env.GROQ_API_KEY! ?? "",
    baseURL: "https://api.groq.com/openai/v1",
});

const systemPrompt = "You are an AI health coach helping people overcome addictions. Assign three manageable one-liner tasks at a time in JSON format. Once the user completes these tasks and marks 'done', generate the next set of three tasks, repeating this cycle 27 times. Each task should be concise, simple, and not too difficult. Don't do any spelling mistakes and use light sarcasm. Keep the language easy to understand.";

export async function generateStrategies(
    addiction: string,
) {
    "use server";

    const {
        object: data,
        warnings,
        finishReason,
        rawResponse,
    } = await generateObject({
        model: groq("mixtral-8x7b-32768"),
        system: systemPrompt,
        temperature: 2,
        maxTokens: 16000,
        prompt: addiction,
        
        schema: z.object({
            data: z.array(
                z.object({
                    strategy: z.string().describe(""),
                })
            ),
        }),
    });
    console.log(warnings, finishReason, rawResponse);

    return { data };
}