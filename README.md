# NetCheck — Local Network Device Scanner

**Safe, zero-port-scanning local network discovery dashboard** built by [**KHALIDioi**](https://github.com/KHALIDioi).

> 🌐 **Live Interactive Website:** [https://khalidioi.github.io/netcheck/](https://khalidioi.github.io/netcheck/)  
> ⬇️ **Direct Download (Windows):** [Download NetCheck.exe](https://github.com/KHALIDioi/netcheck/releases/latest/download/NetCheck.exe)  
> 📦 **Version History & Checksums:** [All Releases](https://github.com/KHALIDioi/netcheck/releases)

---

## What Is NetCheck?

Most network scanners aggressively probe TCP/UDP ports. **NetCheck never tests a single port.**  
It safely discovers every active device connected to your Wi-Fi or Ethernet network using Layer 3 reachability checks (**ICMP ping + OS ARP cache**) and local device name discovery (**mDNS / Bonjour, NetBIOS, UPnP / SSDP, Reverse DNS, and offline IEEE MAC vendor lookup**).

---

## How to Use It (Step-by-Step)

### Option 1 — Try It Instantly in Your Browser (No Download)
Open **[https://khalidioi.github.io/netcheck/](https://khalidioi.github.io/netcheck/)** to test the full interface right away on a simulated home Wi-Fi network *(web browsers block public websites from scanning your private Wi-Fi for security)*.

### Option 2 — Scan Your Real Wi-Fi Offline (Windows App)

No Python, no installer, and no admin privileges required.

#### 1. Download
Click [**Download NetCheck.exe**](https://github.com/KHALIDioi/netcheck/releases/latest/download/NetCheck.exe) (or pick any version from [Releases](https://github.com/KHALIDioi/netcheck/releases)).

#### 2. Launch
1. Double-click **`NetCheck.exe`**.
2. **If Windows SmartScreen pops up** (*"Windows protected your PC"*):
   - This is normal for independent apps without a paid code-signing certificate.
   - Click **`More info`** → **`Run anyway`** *(you can also verify the file's SHA-256 hash on the [Releases](https://github.com/KHALIDioi/netcheck/releases) page)*.
3. A small **NetCheck terminal window** will open, and your browser will automatically launch **`http://127.0.0.1:8080`** and begin scanning your Wi-Fi!
   - *(If your browser doesn't open automatically, open Chrome/Edge and go to `http://127.0.0.1:8080`.)*

#### 3. How to Shut Down NetCheck
- **Closing the browser tab only closes the view** — NetCheck keeps running quietly in its terminal window so you can reopen `http://127.0.0.1:8080` anytime.
- **To shut down NetCheck completely:** simply **close the black `NetCheck.exe` terminal window** (click the **`X`** button, or press **`Ctrl + C`** inside it). It stops immediately and leaves **zero** background processes running.

#### 4. How to Uninstall
NetCheck does not install system services or modify the Windows Registry. To remove it completely:
1. Delete **`NetCheck.exe`**.
2. *(Optional)* Delete your saved nicknames & scan history folder at `%APPDATA%\NetCheck\`.

---

## Inside the Dashboard (4 Tabs)

| Tab | What You Can Do |
|---|---|
| **Scanner** | Auto-detects your Wi-Fi / Ethernet subnet, runs a live zero-port-scan check, lets you filter (`All`, `Named`, `Unnamed`, `Trusted`), turn on **Watch Mode** (`30s` / `60s` auto-scan with alerts when an unknown device joins), **Re-Ping** any single device, **Edit** its nickname/icon, and export results via **Download Results** (`CSV` / `JSON`). |
| **My Devices** | Give any device a friendly nickname (e.g., *"My iPhone"*, *"Living Room TV"*), icon, note, and **Trusted** badge. NetCheck remembers them automatically by MAC address across future scans. |
| **History** | Saves your last **30 scans** and automatically highlights **New Devices Joined** and **Went Offline Since Last Scan**. Click any past scan to inspect the devices from that session. |
| **Quick Tools** | **Live Ping Monitor** with a real-time latency sparkline chart (test your router vs `1.1.1.1` or `8.8.8.8` to spot Wi-Fi vs ISP lag) + **Local Network Details** with one-click copy. |

> **Language & Theme:** Use the top-right **`EN` | `عربي`** switch for full English / Arabic (RTL) support, and the sun/moon icon to switch between **Purple Dark Mode** and **Light Mode**.

---

## Frequently Asked Questions

**Does NetCheck scan ports or trigger router security alerts?**  
No. NetCheck strictly uses ICMP ping, your computer's own ARP table, and standard LAN name queries. Zero TCP or UDP ports are ever touched.

**Can other people on my Wi-Fi see my NetCheck dashboard?**  
No. NetCheck binds strictly to `127.0.0.1` (your computer only) and enforces same-origin & CSRF token security checks.

**Where are my custom device names and scan history stored?**  
100% locally on your own computer (`%APPDATA%\NetCheck\netcheck_data.json` on Windows). Nothing is ever uploaded to any server.

**Why do some phones show `Private MAC` instead of a name?**  
Modern iPhones and Android devices enable *Private Wi-Fi Address* by default, which hides their real hostname and MAC vendor on Wi-Fi. Click the pencil icon next to the device to give it your own custom nickname!

---

<details>
<summary><strong>دليل الاستخدام السريع بالعربية (اضغط للفتح)</strong></summary>

### كيف تستخدم NetCheck على جهازك؟

1. **التنزيل:** اضغط على [**تنزيل NetCheck.exe**](https://github.com/KHALIDioi/netcheck/releases/latest/download/NetCheck.exe) (لا يحتاج تثبيت أو Python).
2. **التشغيل:** اضغط مرتين على `NetCheck.exe`.
   - إذا ظهرت رسالة حماية Windows SmartScreen (طبيعية للتطبيقات المستقلة)، اضغط **معلومات إضافية (More info)** ثم **التشغيل على أي حال (Run anyway)**.
   - ستفتح نافذة سوداء صغيرة وسيفتح المتصفح تلقائياً على `http://127.0.0.1:8080`.
3. **إغلاق البرنامج نهائياً:**
   - إغلاق تبويب المتصفح فقط لا يوقف البرنامج.
   - **لإغلاق NetCheck تماماً:** أغلق **النافذة السوداء (Terminal)** بالضغط على زر **`X`** أو `Ctrl + C`، وسيتوقف فوراً بدون أي عمليات في الخلفية.
4. **الحذف:** فقط احذف ملف `NetCheck.exe` (واختيارياً مجلد `%APPDATA%\NetCheck`).

</details>

---

## License

**Proprietary / Closed Source** — Copyright © 2026 [KHALIDioi](https://github.com/KHALIDioi). All Rights Reserved. See [LICENSE](LICENSE) for details.
