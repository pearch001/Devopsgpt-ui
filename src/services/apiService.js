// src/services/apiService.js

// IMPORTANT: Make sure your Spring Boot backend is running!
const API_BASE_URL = 'http://localhost:8080/api';

// A single ID for our chat session for simplicity in this demo.
const SESSION_ID = `session_${Date.now()}`;

/**
 * Handles RAG chat requests
 * @param {string} message - The user's question.
 * @returns {Promise<string>} - The assistant's reply.
 */
export const postRagChat = async (message) => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat/advanced`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: SESSION_ID, message }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // The backend now returns an object with a 'reply' field
    return data.reply;
  } catch (error) {
    console.error("Error in RAG Chat API call:", error);
    return "❌ Whoops! Couldn't connect to the backend. Is it running?";
  }
};

/**
 * Handles command generation requests
 * @param {string} task - The user's task description.
 * @returns {Promise<string>} - The generated command and explanation.
 */
export const postGenerateCommand = async (task) => {
  try {
    const response = await fetch(`${API_BASE_URL}/command/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return `Command:\n\`\`\`sh\n${data.command}\n\`\`\`\n\nExplanation:\n${data.explanation}`;
  } catch (error) {
    console.error("Error in Command Generation API call:", error);
    return "❌ Yikes! Failed to generate the command. Check the backend server.";
  }
};