export function generateWelcomeEmail(name: string) {
  return {
    subject: "🎉 Welcome to AI Manifest Engine!",
    body: \`
Hi \${name},

Welcome to the future of AI-driven development.

You're now part of a platform where BuilderBot, QABot, UXBot, and more help you build, test, and deploy intelligent systems.

Get started here:
👉 https://yourdomain.com/get-started

Need help? Just reply to this email or visit the dashboard.

- AI Manifest Engine Team
\`
  }
}
