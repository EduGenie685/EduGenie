async function askGenie() {
    let inputField = document.getElementById("user-input");
    let userText = inputField.value;
    let chatBox = document.getElementById("chat-box");

    if (!userText) return;

    chatBox.innerHTML += `<div><b>You:</b> ${userText}</div>`;
    inputField.value = "";

    // Gemini API call integration block
    chatBox.innerHTML += `<div><b>EduGenie:</b> Thinking...</div>`;
    
    // API logic will go here
}