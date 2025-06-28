# psst-js 🕵️‍♂️

**A lightweight JavaScript fingerprinting utility** — works in both modern apps and vanilla browser environments.  
Collects non-invasive browser/device data and returns a unique hash.

---

## ✨ Features

- 📦 ESM + UMD builds (use as `import` or `<script src>`)
- 🔒 Zero dependencies for collection
- 🌐 CDN ready via [jsDelivr](https://www.jsdelivr.com)
- 🔍 Collects non-invasive fingerprint data:
  - User agent
  - Screen size
  - Timezone
  - Canvas fingerprint
  - Language

---

## 🚀 Quick Start

### ✅ Use in the Browser (via CDN)

```html
<script src="https://cdn.jsdelivr.net/npm/psst-js@1.0.5/dist/psst-collector.min.js"></script>
<script>
  window.psst.collect().then(console.log).catch(console.error);
</script>
```

### 📦 Installation (for imports)

```bash
npm install psst-js
```
