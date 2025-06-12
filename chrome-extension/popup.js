document.getElementById('scan').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const buttons = Array.from(document.querySelectorAll('button')).map(btn => ({
        label: btn.innerText,
        id: btn.id || undefined
      }))
      console.log('🧠 Scanned Buttons:', buttons)
      fetch('http://localhost:3000/manifest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buttons)
      })
    }
  })
})
