// src/App.js
import './App.css';
import ChatColumn from './components/ChatColumn';
import { postRagChat, postGenerateCommand } from './services/apiService';

function App() {
  console.log("ChatColumn:", "ChatColumn");
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🚀 DevOpsGPT Assistant</h1>
        <p>Your AI-powered partner for DevOps and Cloud tasks. Backed by Spring Boot & React.</p>
      </header>

      <main className="main-content">
        <ChatColumn
          title="RAG Chat Assistant"
          description="Ask questions about AWS, Docker, or Kubernetes. The assistant will answer using its knowledge base."
          inputPlaceholder="e.g., What is a Kubernetes Pod?"
          buttonText="Ask Assistant"
          onButtonClick={postRagChat}
        />
        <ChatColumn
          title="Command Generator"
          description="Describe a task in plain English, and the assistant will generate the corresponding shell command."
          inputPlaceholder="e.g., Build a docker image from the current directory and tag it as my-app"
          buttonText="Generate Command"
          onButtonClick={postGenerateCommand}
        />
      </main>
    </div>
  );
}

export default App;