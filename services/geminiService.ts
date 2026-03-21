
export async function askAssistant(prompt: string): Promise<string> {
  try {
    const response = await fetch('/.netlify/functions/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: prompt }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.details || errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.reply || "I'm sorry, I couldn't process that request.";
  } catch (error: any) {
    console.error("Chat Error:", error);
    return `Connection error: ${error.message}`;
  }
}
