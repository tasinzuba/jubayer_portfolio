// ASCII art and boot sequence text

export const ASCII_LOGO = `
     ██╗██╗   ██╗██████╗  █████╗ ██╗   ██╗███████╗██████╗
     ██║██║   ██║██╔══██╗██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗
     ██║██║   ██║██████╔╝███████║ ╚████╔╝ █████╗  ██████╔╝
██   ██║██║   ██║██╔══██╗██╔══██║  ╚██╔╝  ██╔══╝  ██╔══██╗
╚█████╔╝╚██████╔╝██████╔╝██║  ██║   ██║   ███████╗██║  ██║
 ╚════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
`;

export const WELCOME_TEXT = `Welcome to JubayerOS v2.0.26 — Interactive Terminal Portfolio
Type 'help' to see available commands.
`;

export const BOOT_LINES = [
  "[    0.000000] JubayerOS kernel v2.0.26 loading...",
  "[    0.012345] CPU: Intel Core i7 Developer Edition",
  "[    0.034567] Memory: 16384MB available",
  "[    0.056789] Mounting /dev/portfolio...",
  "[    0.078901] Loading modules: react, nextjs, typescript...",
  "[    0.101234] Initializing network interfaces...",
  "[    0.123456] Starting creativity-daemon...",
  "[    0.145678] Loading skill-tree from /usr/local/skills...",
  "[    0.167890] Scanning project repository...",
  "[    0.190123] Found 6 deployable projects",
  "[    0.212345] Starting web-server on port 3000...",
  "[    0.234567] All systems operational.",
  "[    0.256789] ╔═══════════════════════════════════════════╗",
  "[    0.278901] ║    System ready. Welcome, visitor.        ║",
  "[    0.301234] ╚═══════════════════════════════════════════╝",
  "",
];

export const HIRE_ME_ASCII = `
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   🚀  ACCESS GRANTED  🚀                                 ║
║                                                          ║
║   You've unlocked the secret hiring protocol!            ║
║                                                          ║
║   Initiating hire-sequence...                            ║
║   > Loading negotiation module... ██████████ 100%        ║
║   > Compiling enthusiasm... ██████████ 100%              ║
║   > Deploying dedication... ██████████ 100%              ║
║                                                          ║
║   Ready to build something amazing together.             ║
║                                                          ║
║   📧 tasinahmed423@gmail.com                             ║
║   📱 +880 1732134482                                     ║
║   💬 wa.me/8801732134482                                 ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`;

export const NOT_FOUND_RESPONSES = [
  "bash: {cmd}: command not found. Try 'help' for available commands.",
  "Error: '{cmd}' is not recognized. Did you mean something else? Type 'help'.",
  "zsh: command not found: {cmd}. Run 'help' to see what I can do.",
];
