
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";


  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro-exp-03-25",
  });
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    responseMimeType: "text/plain",
  };
  
  function downloadBase64File(base64Data, mimeType, filename) {
    const byteCharacters = atob(base64Data);
    const byteNumbers = Array.from(byteCharacters, c => c.charCodeAt(0));
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  
    URL.revokeObjectURL(url);
  }
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    const result = await chatSession.sendMessage(prompt);
  
    const candidates = result.response.candidates || [];
    for (let i = 0; i < candidates.length; i++) {
      const parts = candidates[i].content?.parts || [];
      for (let j = 0; j < parts.length; j++) {
        const part = parts[j];
        if (part.inlineData) {
          const { data, mimeType } = part.inlineData;
          const extension = mimeType.split("/")[1] || "bin";
          const filename = `output_${i}_${j}.${extension}`;
          downloadBase64File(data, mimeType, filename);
          console.log(`📥 Download triggered: ${filename}`);
        }
      }
    }
  
    console.log("💬 Result:", result.response.text());
    return result.response.text();
  }
  
  export default run;