const fs = require('fs')

const manifest = [
  {
    id: "submitForm",
    label: "Submit",
    action: "submitForm",
    data: {
      endpoint: "/api/form/submit",
      method: "POST"
    }
  }
]

const prompt = \`
You're a senior QA engineer. Generate unit tests in Jest for the following backend and frontend logic.

Manifest:
\${JSON.stringify(manifest, null, 2)}

Test Requirements:
- backend: test route handlers with mock data
- frontend: test SmartButton loading and success states

Return full test files only.
\`

fs.writeFileSync('./test/testgen-prompt.txt', prompt)
console.log('✅ Test prompt ready. Paste this into Claude.')
