import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  id: number;
  name: string;
  text: string;
  emoji: string;
}

const emojis = ["🎉", "🔥", "👑", "❤️", "🥳", "⭐", "🎂", "💪"];

const defaultMessages: Message[] = [
  { id: 1, name: "Tutin", text: "Happy Birthday King! Swedish Papi forever! 👑", emoji: "🎉" },
  { id: 2, name: "A Fan", text: "Dino you're a legend, never change!", emoji: "🔥" },
  { id: 3, name: "Barcelona", text: "Come back soon, we miss Swedish Papi energy!", emoji: "❤️" },
];

const MessageWall = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const submit = () => {
    if (!name.trim() || !text.trim()) return;
    const newMsg: Message = {
      id: Date.now(),
      name: name.trim(),
      text: text.trim(),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    };
    setMessages((prev) => [newMsg, ...prev]);
    setName("");
    setText("");
  };

  return (
    <section id="message-wall" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-dark font-semibold tracking-widest uppercase text-sm">🎂 Birthday Wishes</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-2 text-foreground">
            Message <span className="text-royal">Wall</span>
          </h2>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="sm:col-span-1 rounded-xl font-body"
            />
            <Textarea
              placeholder="Write a birthday message for Dino..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="sm:col-span-2 rounded-xl font-body min-h-[44px] resize-none"
              rows={1}
            />
            <Button
              onClick={submit}
              className="royal-gradient text-primary-foreground font-display font-bold rounded-xl"
            >
              <Send className="mr-2 h-4 w-4" /> Send
            </Button>
          </div>
        </motion.div>

        {/* Messages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-5 hover-lift"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{msg.emoji}</span>
                  <span className="font-display font-bold text-foreground">{msg.name}</span>
                </div>
                <p className="text-muted-foreground font-body">{msg.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MessageWall;
