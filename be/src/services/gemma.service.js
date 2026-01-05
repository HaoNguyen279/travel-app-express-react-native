
async function chatWithGemma(prompt) {
    const res = await fetch("http://localhost:1234/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer lm-studio"
        },
        body: JSON.stringify({
            model: "google/gemma-3-4b",
            messages: [
                {
                    role: "system",
                    content: "Luôn trả lời bằng tiếng Việt, ngắn gọn, văn bản thuần."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7
        })
    })
    const data = await res.json();
    return data;
}

module.exports = {
    chatWithGemma
}