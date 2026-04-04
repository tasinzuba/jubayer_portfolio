// ============================================================
// Command Registry — All terminal commands defined here
// ============================================================

import React from "react";
import {
  personalInfo,
  projects,
  skillCategories,
  experiences,
} from "./data";
import { ASCII_LOGO, HIRE_ME_ASCII } from "./ascii";

export interface CommandOutput {
  content: React.ReactNode;
  isHtml?: boolean;
}

function progressBar(level: number, width = 20): string {
  const filled = Math.round((level / 100) * width);
  const empty = width - filled;
  return `${"█".repeat(filled)}${"░".repeat(empty)} ${level}%`;
}

// ── Individual command handlers ──────────────────────────────

function helpCommand(): CommandOutput {
  return {
    content: (
      <div className="space-y-1">
        <p className="text-primary font-bold mb-2">
          ╔══ Available Commands ══════════════════════════════╗
        </p>
        {[
          ["help", "Show this help menu"],
          ["about", "Who am I — my story"],
          ["projects", "Browse my project portfolio"],
          ["skills", "Technical skills with proficiency"],
          ["experience", "Work experience timeline"],
          ["contact", "Get in touch with me"],
          ["resume", "Download my CV"],
          ["whoami", "Quick identity check"],
          ["github", "Open my GitHub profile"],
          ["social", "All social links"],
          ["clear", "Clear the terminal"],
          ["history", "Show command history"],
          ["date", "Current date & time"],
          ["banner", "Show the ASCII banner"],
          ["???", "There might be hidden commands..."],
        ].map(([cmd, desc], i) => (
          <p key={i}>
            <span className="text-primary ml-2">
              {(cmd ?? "").padEnd(32)}
            </span>
            <span className="text-text-dim">{desc}</span>
          </p>
        ))}
        <p className="text-primary font-bold mt-2">
          ╚══════════════════════════════════════════════════════╝
        </p>
        <p className="text-text-dim mt-2 text-sm">
          Tip: Use ↑/↓ for history, Tab for autocomplete
        </p>
      </div>
    ),
  };
}

function aboutCommand(): CommandOutput {
  return {
    content: (
      <div className="space-y-2">
        <pre className="text-primary text-xs leading-tight">
          {ASCII_LOGO}
        </pre>
        <p className="text-primary font-bold text-lg">
          {personalInfo.name}
        </p>
        <p className="text-primary/80">{personalInfo.title}</p>
        <p className="text-text-dim">{personalInfo.location}</p>
        <div className="border-t border-border-green mt-3 pt-3">
          {personalInfo.bio.map((line, i) => (
            <p key={i} className={line === "" ? "h-3" : "text-text-primary"}>
              {line}
            </p>
          ))}
        </div>
        <div className="border-t border-border-green mt-3 pt-3 space-y-1">
          <p className="text-primary font-bold">Key Highlights:</p>
          <p className="text-text-primary">→ 15+ websites delivered with 100% client satisfaction</p>
          <p className="text-text-primary">→ 150% organic traffic increase through SEO strategies</p>
          <p className="text-text-primary">→ Lighthouse scores 90+ across all projects</p>
          <p className="text-text-primary">→ Expert in both development AND marketing — a rare combo</p>
        </div>
      </div>
    ),
  };
}

function projectsCommand(): CommandOutput {
  return {
    content: (
      <div className="space-y-4">
        <p className="text-primary font-bold">
          ╔══ Project Portfolio ══════════════════════════════════╗
        </p>
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="border border-border-green rounded p-3 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-text-dim">[{i + 1}]</span>
              <span className="text-primary font-bold">{p.title}</span>
              {p.featured && (
                <span className="text-xs px-1.5 py-0.5 bg-primary/20 text-primary rounded">
                  FEATURED
                </span>
              )}
            </div>
            <p className="text-text-primary mt-1 ml-4">{p.description}</p>
            <p className="text-text-dim mt-1 ml-4 text-sm">
              Tech: {p.tech.join(" · ")}
            </p>
            <div className="flex gap-4 mt-1 ml-4 text-sm">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  [Live Demo]
                </a>
              )}
              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  [Source Code]
                </a>
              )}
            </div>
          </div>
        ))}
        <p className="text-primary font-bold">
          ╚══════════════════════════════════════════════════════════╝
        </p>
      </div>
    ),
  };
}

function skillsCommand(): CommandOutput {
  return {
    content: (
      <div className="space-y-4">
        <p className="text-primary font-bold">
          ╔══ Technical Skills ════════════════════════════════════╗
        </p>
        {skillCategories.map((cat) => (
          <div key={cat.name}>
            <p className="text-primary font-bold mb-1">
              ── {cat.name} ──
            </p>
            {cat.skills.map((s) => (
              <p key={s.name} className="ml-2">
                <span className="text-text-primary inline-block w-28 sm:w-40">
                  {s.name}
                </span>
                <span className="text-primary font-mono text-sm">
                  {progressBar(s.level)}
                </span>
              </p>
            ))}
          </div>
        ))}
        <p className="text-primary font-bold">
          ╚══════════════════════════════════════════════════════════╝
        </p>
      </div>
    ),
  };
}

function experienceCommand(): CommandOutput {
  return {
    content: (
      <div className="space-y-4">
        <p className="text-primary font-bold">
          ╔══ Experience Timeline ═════════════════════════════════╗
        </p>
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-2 border-primary/40 pl-4 ml-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-primary font-bold">{exp.role}</span>
              <span className="text-text-dim">@</span>
              <span className="text-primary/80">{exp.company}</span>
              {exp.current && (
                <span className="text-xs px-1.5 py-0.5 bg-primary/20 text-primary rounded">
                  ACTIVE
                </span>
              )}
            </div>
            <p className="text-text-dim text-sm">
              {exp.period} · {exp.location}
            </p>
            <div className="mt-1">
              {exp.achievements.map((a, j) => (
                <p key={j} className="text-text-primary text-sm">→ {a}</p>
              ))}
            </div>
          </div>
        ))}
        <p className="text-primary font-bold">
          ╚══════════════════════════════════════════════════════════╝
        </p>
      </div>
    ),
  };
}

function contactCommand(): CommandOutput {
  return {
    content: (
      <div className="space-y-2">
        <p className="text-primary font-bold">
          ╔══ Contact Information ═════════════════════════════════╗
        </p>
        <p className="ml-2">
          <span className="text-primary">Email: </span>
          <a href={`mailto:${personalInfo.email}`} className="text-text-primary hover:underline">
            {personalInfo.email}
          </a>
        </p>
        <p className="ml-2">
          <span className="text-primary">Phone: </span>
          <a href={`tel:${personalInfo.phone}`} className="text-text-primary hover:underline">
            {personalInfo.phone}
          </a>
        </p>
        <p className="ml-2">
          <span className="text-primary">Location: </span>
          <span className="text-text-primary">{personalInfo.location}</span>
        </p>
        <p className="ml-2">
          <span className="text-primary">WhatsApp: </span>
          <a
            href={personalInfo.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:underline"
          >
            Chat on WhatsApp
          </a>
        </p>
        <p className="text-primary font-bold">
          ╚══════════════════════════════════════════════════════════╝
        </p>
        <p className="text-text-dim text-sm mt-2">
          Tip: Run &apos;sudo hire-me&apos; for a special surprise
        </p>
      </div>
    ),
  };
}

function whoamiCommand(): CommandOutput {
  return {
    content: (
      <div>
        <p className="text-primary font-bold">{personalInfo.name}</p>
        <p className="text-text-primary">{personalInfo.title}</p>
        <p className="text-text-dim">{personalInfo.location}</p>
      </div>
    ),
  };
}

function socialCommand(): CommandOutput {
  const links = [
    ["GitHub", personalInfo.social.github],
    ["LinkedIn", personalInfo.social.linkedin],
    ["Facebook", personalInfo.social.facebook],
    ["WhatsApp", personalInfo.social.whatsapp],
  ];
  return {
    content: (
      <div className="space-y-1">
        <p className="text-primary font-bold mb-2">Social Links:</p>
        {links.map(([name, url]) => (
          <p key={name} className="ml-2">
            <span className="text-primary inline-block w-20">{name}:</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:underline"
            >
              {url}
            </a>
          </p>
        ))}
      </div>
    ),
  };
}

function resumeCommand(): CommandOutput {
  return {
    content: (
      <div>
        <p className="text-primary">Downloading resume...</p>
        <p className="text-text-primary mt-1">
          If download doesn&apos;t start automatically:{" "}
          <a
            href={personalInfo.resume}
            download
            className="text-primary hover:underline"
          >
            Click here to download CV
          </a>
        </p>
      </div>
    ),
  };
}

function bannerCommand(): CommandOutput {
  return {
    content: (
      <pre className="text-primary text-xs leading-tight">{ASCII_LOGO}</pre>
    ),
  };
}

function dateCommand(): CommandOutput {
  return {
    content: <p className="text-text-primary">{new Date().toString()}</p>,
  };
}

function sudoHireMeCommand(): CommandOutput {
  return {
    content: (
      <pre className="text-primary text-xs sm:text-sm leading-tight whitespace-pre-wrap">
        {HIRE_ME_ASCII}
      </pre>
    ),
  };
}

function neofetchCommand(): CommandOutput {
  return {
    content: (
      <div className="flex flex-col sm:flex-row gap-4">
        <pre className="text-primary text-xs leading-tight">
          {`    .--.
   |o_o |
   |:_/ |
  //   \\ \\
 (|     | )
/'\\_   _/\`\\
\\___)=(___/`}
        </pre>
        <div className="space-y-0.5 text-sm">
          <p>
            <span className="text-primary font-bold">jubayer</span>
            <span className="text-text-dim">@</span>
            <span className="text-primary font-bold">portfolio</span>
          </p>
          <p className="text-text-dim">──────────────────</p>
          <p><span className="text-primary">OS:</span> <span className="text-text-primary">JubayerOS v2.0.26</span></p>
          <p><span className="text-primary">Host:</span> <span className="text-text-primary">Next.js 16 / Vercel</span></p>
          <p><span className="text-primary">Kernel:</span> <span className="text-text-primary">React 19</span></p>
          <p><span className="text-primary">Shell:</span> <span className="text-text-primary">jubayer-terminal 1.0</span></p>
          <p><span className="text-primary">Languages:</span> <span className="text-text-primary">Go, TS, JS, PHP, SQL</span></p>
          <p><span className="text-primary">Frameworks:</span> <span className="text-text-primary">Next.js, React, Gin, Laravel</span></p>
          <p><span className="text-primary">Uptime:</span> <span className="text-text-primary">Coding since 2023</span></p>
          <p><span className="text-primary">Location:</span> <span className="text-text-primary">Dhaka, BD</span></p>
          <div className="flex gap-1 mt-1">
            {["bg-red-500", "bg-green-500", "bg-yellow-500", "bg-blue-500", "bg-purple-500", "bg-cyan-500"].map(
              (c) => (
                <span key={c} className={`inline-block w-4 h-4 rounded-sm ${c}`} />
              )
            )}
          </div>
        </div>
      </div>
    ),
  };
}

function matrixCommand(): CommandOutput {
  return {
    content: (
      <div>
        <p className="text-primary font-bold">
          Wake up, Neo... The Matrix has you...
        </p>
        <p className="text-primary/80 mt-1">Follow the white rabbit.</p>
        <p className="text-text-dim text-sm mt-2">
          (Just kidding. But you found an easter egg!)
        </p>
      </div>
    ),
  };
}

function lsCommand(): CommandOutput {
  return {
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1">
        <span className="text-blue-400">about/</span>
        <span className="text-blue-400">projects/</span>
        <span className="text-blue-400">skills/</span>
        <span className="text-blue-400">experience/</span>
        <span className="text-text-primary">README.md</span>
        <span className="text-text-primary">resume.pdf</span>
        <span className="text-primary">.secret</span>
        <span className="text-text-primary">contact.json</span>
      </div>
    ),
  };
}

function catReadmeCommand(): CommandOutput {
  return {
    content: (
      <div className="space-y-2">
        <p className="text-primary font-bold text-lg"># {personalInfo.name}</p>
        <p className="text-text-primary">{personalInfo.title}</p>
        <p className="text-text-dim mt-2">
          This terminal portfolio is an interactive way to learn about me.
        </p>
        <p className="text-text-dim">
          Type `help` to get started, or just explore!
        </p>
      </div>
    ),
  };
}

function secretCommand(): CommandOutput {
  return {
    content: (
      <div className="space-y-1">
        <p className="text-yellow-400 font-bold">You found the secret file!</p>
        <p className="text-text-primary mt-2">Fun facts about me:</p>
        <p className="text-text-primary">→ I can build you a website AND market it</p>
        <p className="text-text-primary">→ I drink mass amounts of coffee while coding</p>
        <p className="text-text-primary">→ I believe great code is poetry with semicolons</p>
        <p className="text-text-primary">→ My debugging strategy: console.log until it works</p>
        <p className="text-text-dim mt-2 text-sm">
          Secret commands: neofetch, matrix, cat README.md, cat .secret, rm -rf /
        </p>
      </div>
    ),
  };
}

function rmrfCommand(): CommandOutput {
  return {
    content: (
      <div>
        <p className="text-red-500 font-bold">Permission denied: Nice try!</p>
        <p className="text-red-400">
          You don&apos;t have sudo access to destroy my portfolio.
        </p>
        <p className="text-text-dim text-sm mt-1">
          But you CAN sudo hire-me...
        </p>
      </div>
    ),
  };
}

// ── Command Map ─────────────────────────────────────────────

export const COMMAND_NAMES = [
  "help",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
  "resume",
  "whoami",
  "github",
  "social",
  "clear",
  "history",
  "date",
  "banner",
  "neofetch",
  "matrix",
  "ls",
  "cat README.md",
  "cat .secret",
  "sudo hire-me",
  "rm -rf /",
];

export interface CommandResult {
  output: CommandOutput;
  action?: "clear" | "open-url" | "download";
  url?: string;
}

export function executeCommand(
  input: string,
  commandHistory: string[]
): CommandResult {
  const trimmed = input.trim().toLowerCase();

  if (trimmed === "help" || trimmed === "?")
    return { output: helpCommand() };

  if (trimmed === "about" || trimmed === "about me")
    return { output: aboutCommand() };

  if (trimmed === "projects" || trimmed === "project" || trimmed === "work")
    return { output: projectsCommand() };

  if (trimmed === "skills" || trimmed === "skill")
    return { output: skillsCommand() };

  if (trimmed === "experience" || trimmed === "exp" || trimmed === "work history")
    return { output: experienceCommand() };

  if (trimmed === "contact" || trimmed === "email")
    return { output: contactCommand() };

  if (trimmed === "whoami" || trimmed === "who")
    return { output: whoamiCommand() };

  if (trimmed === "social" || trimmed === "links")
    return { output: socialCommand() };

  if (trimmed === "resume" || trimmed === "cv" || trimmed === "download cv")
    return {
      output: resumeCommand(),
      action: "download",
      url: personalInfo.resume,
    };

  if (trimmed === "github" || trimmed === "gh")
    return {
      output: {
        content: <p className="text-primary">Opening GitHub profile...</p>,
      },
      action: "open-url",
      url: personalInfo.social.github,
    };

  if (trimmed === "clear" || trimmed === "cls")
    return { output: { content: null }, action: "clear" };

  if (trimmed === "history") {
    return {
      output: {
        content: (
          <div className="space-y-0.5">
            {commandHistory.length === 0 ? (
              <p className="text-text-dim">No command history yet.</p>
            ) : (
              commandHistory.map((cmd, i) => (
                <p key={i} className="text-text-primary">
                  <span className="text-text-dim mr-2">
                    {String(i + 1).padStart(3)}
                  </span>
                  {cmd}
                </p>
              ))
            )}
          </div>
        ),
      },
    };
  }

  if (trimmed === "date" || trimmed === "time")
    return { output: dateCommand() };

  if (trimmed === "banner" || trimmed === "logo")
    return { output: bannerCommand() };

  if (trimmed === "neofetch" || trimmed === "fetch")
    return { output: neofetchCommand() };

  if (trimmed === "matrix")
    return { output: matrixCommand() };

  if (trimmed === "ls" || trimmed === "dir")
    return { output: lsCommand() };

  if (trimmed === "cat readme.md" || trimmed === "readme")
    return { output: catReadmeCommand() };

  if (trimmed === "cat .secret" || trimmed === "secret")
    return { output: secretCommand() };

  if (trimmed === "sudo hire-me" || trimmed === "hire" || trimmed === "hire me")
    return { output: sudoHireMeCommand() };

  if (trimmed === "rm -rf /" || trimmed === "rm -rf")
    return { output: rmrfCommand() };

  if (trimmed === "sudo" || trimmed === "su")
    return {
      output: {
        content: (
          <p className="text-yellow-400">
            sudo: what would you like to do? Try &apos;sudo hire-me&apos;
          </p>
        ),
      },
    };

  if (trimmed === "exit" || trimmed === "quit")
    return {
      output: {
        content: (
          <p className="text-text-dim">
            There is no escape. You&apos;re stuck here... just kidding! But why leave?
          </p>
        ),
      },
    };

  if (trimmed === "pwd")
    return {
      output: {
        content: <p className="text-text-primary">/home/jubayer/portfolio</p>,
      },
    };

  if (trimmed === "echo hello" || trimmed.startsWith("echo "))
    return {
      output: {
        content: <p className="text-text-primary">{input.trim().slice(5)}</p>,
      },
    };

  return {
    output: {
      content: (
        <p className="text-red-400">
          bash: {input.trim()}: command not found. Type &apos;help&apos; for available commands.
        </p>
      ),
    },
  };
}
