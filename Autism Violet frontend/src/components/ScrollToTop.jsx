import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

if (typeof document !== "undefined") {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport && !viewport.content.includes("maximum-scale")) {
    viewport.content = "width=device-width, initial-scale=1, maximum-scale=1";
  }
}

const T = {
  bg:      "#F7F4FF",
  surface: "#EDE8FA",
  primary: "#6B3FA0",
  accent:  "#A56FD8",
  dark:    "#2E1A5B",
  text:    "#1A1028",
  muted:   "#7A6A95",
  border:  "#D4C8F0",
  white:   "#FFFFFF",
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

const ChatIcon = ({ size = 16, color = T.accent }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
);

const PhoneIcon = ({ size = 14, color = T.white }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

const SendIcon = ({ size = 15, color = T.white }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const CloseIcon = ({ size = 11, color = "rgba(255,255,255,0.7)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.8" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ArrowIcon = ({ size = 11, color = T.white }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const REPLIES = {
  services: {
    text: `At Autism Violet, we offer personalized ABA therapy programs designed around your child's unique strengths and goals:\n\n• Early Intervention (Ages 2–5)\n• School Readiness (Ages 4–7)\n• In-Home ABA Therapy (All ages)\n\nEvery program is evidence-based, family-centered, and built to help your child build communication, independence, and confidence — at their own pace.`,
    showContactBtn: false,
  },
  about: {
    text: `Autism Violet was founded on a simple belief: every child deserves compassionate, individualized care.\n\nWith 12+ years of experience and 500+ families supported, our team of dedicated therapists provides ABA therapy that goes beyond sessions — we partner with your entire family.\n\nOur Core Values\n• Compassion — We lead with empathy in every interaction.\n• Excellence — We uphold the highest clinical standards.\n• Growth — We celebrate every milestone, big and small.`,
    showContactBtn: false,
  },
  call: {
    text: `We would love to connect with you. Use the "Schedule a free call" button below to speak directly with one of our care coordinators.\n\nThey will listen, answer your questions, and help you figure out the best next step for your child — with no pressure, no commitment.`,
    showContactBtn: false,
  },
  book: {
    text: `Getting started is simple and stress-free.\n\nYou can schedule a free consultation call using the button below — it takes just a few minutes. Our team will walk you through everything and make sure you feel confident before moving forward.\n\nYou can also visit our contact page: /contact-us`,
    showContactBtn: true,
  },
  contact: {
    text: `We are always happy to hear from families. You can reach our team through our contact page:\n\n/contact-us\n\nOr schedule a free call using the button below — our care coordinators respond quickly and are here to help.`,
    showContactBtn: true,
  },
  confidential: {
    text: `Your privacy is completely protected. All sessions and communications are fully confidential and HIPAA-compliant.\n\nYou can share openly with our team, knowing everything stays private. Your family's trust means everything to us.`,
    showContactBtn: false,
  },
  insurance: {
    text: `We work with most major insurance providers and will verify your coverage before your first appointment — at no cost to you.\n\nOur team handles the details so you can focus on what matters most: your child. Reach out and we will walk you through everything.`,
    showContactBtn: true,
  },
  cost: {
    text: `We believe quality ABA therapy should be accessible to every family. Costs vary depending on the program and your insurance coverage.\n\nWe always provide a clear, honest breakdown before you commit to anything. Reach out and we will find a plan that works for your family.`,
    showContactBtn: true,
  },
  location: {
    text: `We offer both in-home ABA therapy and telehealth sessions, so your child can receive care in the environment where they feel most comfortable and safe.\n\nWherever you are, we are here for you.`,
    showContactBtn: false,
  },
  default: {
    text: `Thank you for reaching out. I am here to help you learn about our ABA therapy programs, understand how we support families, or help you take the first step toward care.\n\nWhat questions can I answer for you today?`,
    showContactBtn: false,
  },
};

function getBotReply(msg) {
  const t = msg.toLowerCase();
  if (/service|offer|treat|therapy|program|aba|autism|intervention|school|in-home/.test(t)) return REPLIES.services;
  if (/about|mission|vision|who are|company|experience|values/.test(t))                     return REPLIES.about;
  if (/number|phone|call me|contact number/.test(t))                                         return REPLIES.call;
  if (/book|appointment|schedule|get started|begin|consult/.test(t))                         return REPLIES.book;
  if (/contact|reach|location|address/.test(t))                                              return REPLIES.contact;
  if (/confiden|private|hipaa|secure/.test(t))                                               return REPLIES.confidential;
  if (/insur|cover|plan|pay/.test(t))                                                        return REPLIES.insurance;
  if (/cost|price|fee|rate/.test(t))                                                         return REPLIES.cost;
  if (/virtual|telehealth|online|office|where|home/.test(t))                                 return REPLIES.location;
  return REPLIES.default;
}

const QUICK_CHIPS = [
  "What services do you offer?",
  "How do I get started?",
  "Do you accept insurance?",
];

const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
  exit: {
    opacity: 0, y: 16, scale: 0.97,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const fabVariants = {
  hidden:  { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 22 },
  },
  exit: { opacity: 0, scale: 0.4, transition: { duration: 0.15 } },
};

const bubbleVariants = {
  hidden:  { opacity: 0, y: 8, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 360, damping: 24 },
  },
};

const TypingIndicator = ({ isMobile }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 4 }}
    transition={{ duration: 0.18 }}
    style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
  >
    <div style={makeStyles(isMobile).botAvatar}>
      <ChatIcon size={11} color={T.primary} />
    </div>
    <div style={{
      ...makeStyles(isMobile).bubble.bot,
      display: "flex", gap: "0.3125rem", padding: "0.625rem 0.8125rem",
    }}>
      {[0, 150, 300].map((delay) => (
        <motion.div
          key={delay}
          style={{ width: 5, height: 5, borderRadius: "50%", background: T.muted }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.85, repeat: Infinity, delay: delay / 1000, ease: "easeInOut" }}
        />
      ))}
    </div>
  </motion.div>
);

const ContactButton = () => (
  <motion.button
    whileHover={{ scale: 1.03, boxShadow: "0 0.375rem 1.125rem rgba(46,26,91,0.30)" }}
    whileTap={{ scale: 0.97 }}
    onClick={() => { window.location.href = "/contact-us"; }}
    style={makeStyles(false).contactBtn}
    aria-label="Visit contact page"
  >
    Contact Us
    <ArrowIcon size={10} color={T.white} />
  </motion.button>
);

const Message = ({ msg, isMobile }) => {
  const s = makeStyles(isMobile);
  return (
    <motion.div
      variants={bubbleVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
        alignItems: "flex-end",
        gap: "0.5rem",
      }}
    >
      {msg.sender === "bot" && (
        <div style={s.botAvatar}>
          <ChatIcon size={12} color={T.primary} />
        </div>
      )}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        maxWidth: "85%",
        overflowWrap: "break-word",
      }}>
        <div style={msg.sender === "user" ? s.bubble.user : s.bubble.bot}>
          {msg.text}
        </div>
        {msg.sender === "bot" && msg.showContactBtn && (
          <ContactButton />
        )}
      </div>
    </motion.div>
  );
};

export default function FloatingAIChat() {
  const isMobile = useIsMobile();

  const [open, setOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return true;
  });
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there, and welcome to Autism Violet. 💜\n\nI know navigating ABA therapy for your child can feel overwhelming — we are here to make it easier. Whether you have questions about our programs, want to understand how ABA therapy works, or are ready to take that first step, I am here to help.\n\nWhat can I assist you with today?",
      showContactBtn: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [chipsVisible, setChipsVisible] = useState(true);
  const messagesEndRef = useRef(null);
  const s = makeStyles(isMobile);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typing]);

  const handleSend = (text) => {
    const trimmed = (typeof text === "string" ? text : input).trim();
    if (!trimmed) return;
    setInput("");
    setChipsVisible(false);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: trimmed, showContactBtn: false },
    ]);
    setTyping(true);
    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: reply.text, showContactBtn: reply.showContactBtn },
      ]);
    }, 850 + Math.random() * 400);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Autism Violet Assistant chat"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={s.card}
          >
            <div style={s.header}>
              <div style={s.headerAvatar}>
                <ChatIcon size={16} color={T.accent} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={s.headerName}>Autism Violet Assistant</div>
                <div style={s.headerStatus}>
                  <motion.div
                    style={s.statusDot}
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  />
                  <span style={s.headerStatusText}>Online — here to help</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={s.closeBtn}
                aria-label="Close chat"
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              >
                <CloseIcon size={11} />
              </button>
            </div>

            <AnimatePresence>
              {chipsVisible && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22 }}
                  style={s.chipsWrap}
                >
                  {QUICK_CHIPS.map((chip) => (
                    <motion.button
                      key={chip}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleSend(chip)}
                      style={s.chip}
                    >
                      {chip}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div style={s.divider} />

            <div style={s.messages} role="log" aria-live="polite">
              {messages.map((msg, i) => (
                <Message key={i} msg={msg} isMobile={isMobile} />
              ))}
              <AnimatePresence>
                {typing && <TypingIndicator isMobile={isMobile} />}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <div style={s.inputRow}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                style={s.input}
                aria-label="Chat message input"
                inputMode="text"
                autoComplete="off"
              />
              <motion.button
                whileHover={{ scale: 1.08, opacity: 0.9 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => handleSend()}
                style={s.sendBtn}
                aria-label="Send message"
              >
                <SendIcon size={15} />
              </motion.button>
            </div>

            <div style={s.ctaWrap}>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0.625rem 1.625rem rgba(46,26,91,0.42)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => { window.location.href = "tel:+15083734511"; }}
                style={s.ctaBtn}
                aria-label="Schedule a free call"
              >
                <PhoneIcon size={14} />
                Schedule a free call
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            variants={fabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.1, boxShadow: "0 0.625rem 1.875rem rgba(46,26,91,0.45)" }}
            whileTap={{ scale: 0.92 }}
            style={s.fab}
            aria-label="Open chat assistant"
          >
            <ChatIcon size={20} color={T.white} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

function makeStyles(isMobile) {
  const touchTarget = "2.75rem";

  return {
    card: {
      position: "fixed",
      right: isMobile ? "0.75rem" : "1.5rem",
      top: isMobile ? "auto" : "20%",
      bottom: isMobile ? "5.5rem" : "auto",
      transform: isMobile ? "none" : "translateY(-50%)",
      width: "min(92vw, 22rem)",
      maxHeight: isMobile ? "85vh" : "80vh",
      zIndex: 9999,
      background: T.white,
      borderRadius: isMobile ? "1.125rem" : "1.375rem",
      border: `1px solid ${T.border}`,
      boxShadow: "0 0.75rem 2.5rem rgba(107,63,160,0.13), 0 0.125rem 0.625rem rgba(107,63,160,0.07)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      fontFamily: "'Rajdhani', sans-serif",
    },

    header: {
      background: T.dark,
      padding: isMobile ? "0.625rem 0.75rem" : "0.875rem 1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.625rem",
      flexShrink: 0,
    },

    headerAvatar: {
      width: "2.25rem",
      height: "2.25rem",
      borderRadius: "50%",
      background: "#3d1f6e",
      border: "1.5px solid rgba(165,111,216,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },

    headerName: {
      fontSize: isMobile ? "0.8125rem" : "0.875rem",
      fontWeight: 700,
      color: T.white,
      lineHeight: 1.2,
      letterSpacing: "0.01em",
    },

    headerStatus: {
      display: "flex",
      alignItems: "center",
      gap: "0.3125rem",
      marginTop: "0.125rem",
    },

    statusDot: {
      width: "0.375rem",
      height: "0.375rem",
      borderRadius: "50%",
      background: "#22c55e",
      flexShrink: 0,
    },

    headerStatusText: {
      fontSize: "0.6875rem",
      color: "rgba(255,255,255,0.6)",
      letterSpacing: "0.01em",
    },

    closeBtn: {
      width: touchTarget,
      height: touchTarget,
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.15)",
      background: "rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "background 0.15s",
      outline: "none",
      flexShrink: 0,
      WebkitTapHighlightColor: "transparent",
    },

    chipsWrap: {
      padding: isMobile ? "0.5rem 0.625rem 0" : "0.625rem 0.75rem 0",
      display: "flex",
      gap: "0.375rem",
      flexWrap: "wrap",
      overflow: "hidden",
    },

    chip: {
      fontSize: isMobile ? "0.6875rem" : "0.75rem",
      fontWeight: 600,
      color: T.primary,
      background: T.surface,
      border: `1px solid ${T.border}`,
      borderRadius: "999px",
      padding: isMobile ? "0.4375rem 0.625rem" : "0.5rem 0.75rem",
      cursor: "pointer",
      outline: "none",
      whiteSpace: "nowrap",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      transition: "background 0.15s",
      WebkitTapHighlightColor: "transparent",
    },

    divider: {
      height: "1px",
      background: T.border,
      margin: isMobile ? "0.5rem 0 0" : "0.625rem 0 0",
      opacity: 0.6,
      flexShrink: 0,
    },

    messages: {
      padding: isMobile ? "0.625rem" : "0.875rem",
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "0.625rem" : "0.75rem",
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      scrollBehavior: "smooth",
      scrollbarWidth: "thin",
      scrollbarColor: `${T.border} transparent`,
      WebkitOverflowScrolling: "touch",
    },

    botAvatar: {
      width: "1.625rem",
      height: "1.625rem",
      borderRadius: "50%",
      background: T.surface,
      border: `1px solid ${T.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginBottom: "0.125rem",
    },

    bubble: {
      bot: {
        padding: isMobile ? "0.625rem 0.75rem" : "0.75rem 0.875rem",
        borderRadius: "1rem 1rem 1rem 0.25rem",
        background: T.surface,
        color: T.text,
        fontSize: isMobile ? "0.875rem" : "0.9375rem",
        lineHeight: 1.6,
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        wordBreak: "break-word",
        border: "1px solid rgba(212,200,240,0.6)",
      },
      user: {
        padding: isMobile ? "0.625rem 0.75rem" : "0.75rem 0.875rem",
        borderRadius: "1rem 1rem 0.25rem 1rem",
        background: T.dark,
        color: T.white,
        fontSize: isMobile ? "0.875rem" : "0.9375rem",
        lineHeight: 1.6,
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        wordBreak: "break-word",
      },
    },

    contactBtn: {
      alignSelf: "flex-start",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.3125rem",
      padding: "0.5rem 0.875rem",
      borderRadius: "999px",
      background: T.dark,
      color: T.white,
      fontSize: "0.8125rem",
      fontWeight: 700,
      fontFamily: "'DM Sans', system-ui, sans-serif",
      border: "none",
      cursor: "pointer",
      letterSpacing: "0.02em",
      boxShadow: "0 0.25rem 0.75rem rgba(46,26,91,0.22)",
      outline: "none",
      WebkitTapHighlightColor: "transparent",
    },

    inputRow: {
      padding: isMobile ? "0.5rem 0.625rem" : "0.625rem 0.75rem",
      borderTop: `1px solid ${T.border}`,
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      flexShrink: 0,
    },

    input: {
      flex: 1,
      height: touchTarget,
      padding: "0 1rem",
      borderRadius: "999px",
      border: `1.5px solid ${T.border}`,
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontSize: "1rem",
      color: T.text,
      background: T.bg,
      outline: "none",
      transition: "border-color 0.18s",
      WebkitTextSizeAdjust: "100%",
    },

    sendBtn: {
      width: touchTarget,
      height: touchTarget,
      borderRadius: "50%",
      background: T.dark,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      outline: "none",
      boxShadow: "0 0.1875rem 0.625rem rgba(46,26,91,0.22)",
      WebkitTapHighlightColor: "transparent",
    },

    ctaWrap: {
      padding: isMobile ? "0.5rem 0.625rem 0.75rem" : "0.625rem 0.75rem 0.875rem",
      borderTop: `1px solid ${T.border}`,
      flexShrink: 0,
    },

    ctaBtn: {
      width: "100%",
      padding: "0.875rem 0",
      borderRadius: "999px",
      border: "none",
      background: "linear-gradient(135deg, #2E1A5B 0%, #6B3FA0 100%)",
      color: T.white,
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontSize: "0.875rem",
      fontWeight: 700,
      letterSpacing: "0.025em",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      boxShadow: "0 0.3125rem 1.125rem rgba(46,26,91,0.30)",
      outline: "none",
      WebkitTapHighlightColor: "transparent",
    },

    fab: {
      position: "fixed",
      bottom: isMobile ? "1.25rem" : "1.5rem",
      right: isMobile ? "0.75rem" : "1.5rem",
      zIndex: 9999,
      width: "3.5rem",
      height: "3.5rem",
      borderRadius: "50%",
      background: T.dark,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0.375rem 1.5rem rgba(46,26,91,0.38)",
      outline: "none",
      WebkitTapHighlightColor: "transparent",
    },
  };
}