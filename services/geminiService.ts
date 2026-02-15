
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

/**
 * Sends a prompt to the AI tutor with conversation history.
 */
// Use the ChatMessage interface defined in types.ts for type safety and consistency
export async function askTutor(prompt: string, history: ChatMessage[]) {
  // Always initialize with process.env.API_KEY directly as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are "VizBot", a world-class R Data Visualization tutor. 
    You specialize in ggplot2, ggpubr, and tidyplots. 
    Your goal is to help students learn how to visualize data in R. 
    Always provide concise, readable code examples. 
    Use the tidyverse style guide. 
    If asked about other languages, politely redirect the student back to R and ggplot2.
    Format your responses using Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ 
          role: h.role === 'assistant' ? 'model' : 'user', 
          parts: [{ text: h.content }] 
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Access the text property directly (not a method call) as per Google GenAI SDK guidelines
    return response.text || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having some trouble connecting to my brain. Let me try again in a moment.";
  }
}
