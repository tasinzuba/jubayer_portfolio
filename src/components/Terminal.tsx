"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { executeCommand, COMMAND_NAMES } from "@/terminal/commands";
import { ASCII_LOGO, WELCOME_TEXT } from "@/terminal/ascii";

interface HistoryEntry {
  id: number;
  input: string;
  output: ReactNode;
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestion, setSuggestion] = useState("");
  const [nextId, setNextId] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory([
      {
        id: 0,
        input: "",
        output: (
          <div>
            <pre className="text-primary text-[8px] sm:text-xs leading-tight">
              {ASCII_LOGO}
            </pre>
            <p className="text-text-primary whitespace-pre-line mt-2 text-sm">
              {WELCOME_TEXT}
            </p>
          </div>
        ),
      },
    ]);
    setNextId(1);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, input]);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (input.length === 0) {
      setSuggestion("");
      return;
    }
    const match = COMMAND_NAMES.find(
      (cmd) => cmd.startsWith(input.toLowerCase()) && cmd !== input.toLowerCase()
    );
    setSuggestion(match ? match.slice(input.length) : "");
  }, [input]);

  const handleSubmit = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) {
      setHistory((h) => [...h, { id: nextId, input: "", output: null }]);
      setNextId((n) => n + 1);
      return;
    }

    const result = executeCommand(trimmed, commandLog);

    if (result.action === "clear") {
      setHistory([]);
      setInput("");
      setCommandLog((log) => [...log, trimmed]);
      setHistoryIndex(-1);
      setSuggestion("");
      return;
    }

    if (result.action === "open-url" && result.url) {
      window.open(result.url, "_blank");
    }

    if (result.action === "download" && result.url) {
      const a = document.createElement("a");
      a.href = result.url;
      a.download = "";
      a.click();
    }

    setHistory((h) => [
      ...h,
      { id: nextId, input: trimmed, output: result.output.content },
    ]);
    setNextId((n) => n + 1);
    setCommandLog((log) => [...log, trimmed]);
    setInput("");
    setHistoryIndex(-1);
    setSuggestion("");
  }, [input, commandLog, nextId]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        if (suggestion) {
          setInput((prev) => prev + suggestion);
          setSuggestion("");
        }
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandLog.length === 0) return;
        const newIndex =
          historyIndex === -1
            ? commandLog.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandLog[newIndex]);
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex === -1) return;
        const newIndex = historyIndex + 1;
        if (newIndex >= commandLog.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandLog[newIndex]);
        }
        return;
      }

      if (e.key === "l" && e.ctrlKey) {
        e.preventDefault();
        setHistory([]);
        return;
      }

      if (e.key === "c" && e.ctrlKey) {
        e.preventDefault();
        setHistory((h) => [
          ...h,
          { id: nextId, input: input + "^C", output: null },
        ]);
        setNextId((n) => n + 1);
        setInput("");
        return;
      }
    },
    [handleSubmit, suggestion, commandLog, historyIndex, input, nextId]
  );

  const promptPrefix = "visitor@jubayer:~$";

  return (
    <div
      className="terminal h-full flex flex-col scanlines overflow-hidden"
      onClick={focusInput}
    >
      {/* Title bar */}
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-auto text-text-dim text-xs font-mono">
          jubayer@portfolio — bash
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overflow-x-hidden text-sm leading-relaxed"
      >
        {history.map((entry) => (
          <div key={entry.id} className="mb-3">
            {entry.input !== "" && (
              <div className="flex items-center flex-wrap gap-x-2">
                <span className="text-primary font-bold text-sm">
                  {promptPrefix}
                </span>
                <span className="text-text-primary">{entry.input}</span>
              </div>
            )}
            {entry.output && <div className="mt-1 ml-0">{entry.output}</div>}
          </div>
        ))}

        {/* Current input line */}
        <div className="flex items-center gap-x-2 min-h-[1.5rem]">
          <span className="text-primary font-bold text-sm whitespace-nowrap">
            {promptPrefix}
          </span>
          <div className="relative flex-1 min-w-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              aria-label="Terminal command input"
            />
            {suggestion && (
              <span className="terminal-suggestion" aria-hidden="true">
                <span className="invisible">{input}</span>
                <span className="text-text-dim/40">{suggestion}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
