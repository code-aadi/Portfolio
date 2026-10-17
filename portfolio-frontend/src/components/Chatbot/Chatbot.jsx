import { useEffect, useRef, useState } from "react";
import { getReply } from "../../services/chatService";
import "./Chatbot.css";
import ReactMarkdown from "react-markdown"
const WELCOME =
  "Hi! I'm Aadi AI 👋\n\n I'm Aditya's personal AI assistant. Ask me about Aditya's skills, projects, journey, or how we can work together.";
const chips = [
  "What technologies does Aditya use?",
  "Show me his best projects",
  "How can I contact Aditya?",
  "Tell me about Aditya",
];
const now = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const init = () => [{ role: "ai", text: WELCOME, time: now() }];

export default function Chatbot() {
  const [open, setOpen] = useState(false),
    [msgs, setMsgs] = useState(init),
    [text, setText] = useState(""),
    [typing, setTyping] = useState(false),
    end = useRef();
  useEffect(() => {
    end.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing, open]);
  useEffect(() => {
    
    const vv = window.visualViewport,
      mobile = () => innerWidth <= 640;
    const fit = () =>
      document.documentElement.style.setProperty(
        "--vvh",
        (vv ? vv.height : innerHeight) + "px",
      );
    if (!open) return;
    fit();
    vv?.addEventListener("resize", fit);
    const prev = document.body.style.overflow;
    if (mobile()) document.body.style.overflow = "hidden";
    return () => {
      vv?.removeEventListener("resize", fit);
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const k = (e) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);

 const send = async (q) => {
  try {
    const trimmedQuery = q.trim();
    
    if (!trimmedQuery || typing) return;

    
    setMsgs((m) => [...m, { role: "user", text: trimmedQuery, time: now() }]);
    setText("");
    setTyping(true);

    
    const r = await getReply(trimmedQuery);

  
    setMsgs((m) => [...m, { role: "ai", text: r, time: now() }]);
  } catch (error) {
     setMsgs((m) => [
      ...m, 
      { 
        role: "ai", 
        text: error.message || "Sorry, something went wrong. Please try again.", 
        time: now(), 
        isError: true 
      }
    ]);
  } finally {
    
    setTyping(false);
  }
};

  return (
    <>
      <button
        className="chat-fab"
        onClick={() => setOpen(true)}
        aria-label="Open chat: Chat with Aadi"
        hidden={open}
      >
        <span>✦</span> Chat with Aadi
      </button>
      <section
        className={`chat ${open ? "open" : ""}`}
        role="dialog"
        aria-label="Aadi AI chat"
        aria-hidden={!open}
      >
        <header>
          <div>
            <b>Aadi AI</b>
            <small>
              <i /> Online · Aditya's Personal AI Assistant
            </small>
          </div>
          <button
            onClick={() => setMsgs(init())}
            aria-label="Clear conversation"
            title="Clear"
          >
            ↺
          </button>
          <button onClick={() => setOpen(false)} aria-label="Close chat">
            ✕
          </button>
        </header>
        <div className="log" aria-live="polite">
          {msgs.map((m, i) => (
            <div key={i} className={`msg ${m.role}`}>
             <ReactMarkdown
  components={{
    a: ({ node, ...props }) => (
      <a {...props} target="_blank" rel="noopener noreferrer" />
    ),
  }}
>
  {m.text}
</ReactMarkdown>
              <time>{m.time}</time>
            </div>
          ))}
          {typing && (
            <div className="msg ai typing" aria-label="Aadi AI is typing">
              <span />
              <span />
              <span />
            </div>
          )}
          {msgs.length === 1 && (
            <div className="chips">
              {chips.map((c) => (
                <button key={c} onClick={() => send(c)}>
                  {c}
                </button>
              ))}
            </div>
          )}
          <div ref={end} />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(text);
          }}
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ask something..."
            aria-label="Message"
          />
          <button type="submit" aria-label="Send">
            ➤
          </button>
        </form>
      </section>
    </>
  );
}
