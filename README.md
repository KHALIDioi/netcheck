# NetCheck — Local Network Device Scanner

**Safe, zero-port-scanning local network discovery dashboard** built by [**KHALIDioi**](https://github.com/KHALIDioi).

> **Live Interactive Website:** [https://khalidioi.github.io/netcheck/](https://khalidioi.github.io/netcheck/)  
> **Download Desktop App (Windows):** [Latest Release](https://github.com/KHALIDioi/netcheck/releases/latest)

---

## Why NetCheck?

Most network scanners aggressively probe TCP/UDP ports. **NetCheck never tests a single port.** It discovers every active device on your Wi-Fi or Ethernet network using strictly safe reachability checks (ICMP ping + OS ARP cache) and local name resolution (mDNS / Bonjour, NetBIOS, UPnP / SSDP, Reverse DNS, and offline IEEE OUI MAC vendor matching).

---

## Key Features

- **Strictly Zero Port Scanning**: Safe Layer 3 host discovery only — zero TCP or UDP port probing.
- **4-Tab Dashboard**:
  - **Scanner**: Auto-detects active network adapters & subnets, live progress bar, **Watch Mode** (`Off` / `30s` / `60s`) with new-device alerts, single-device **Re-Ping**, inline device customization, and unified **Download Results** (`CSV` / `JSON`).
  - **My Devices**: Assign persistent custom nicknames, device icons, notes, and **Trusted** badges tied to each device's MAC address.
  - **Scan History**: Stores your last 30 scans and automatically highlights **New Devices Joined** and **Went Offline Since Last Scan**.
  - **Quick Tools**: **Live Ping Monitor** with a real-time SVG latency sparkline chart (compare your router vs `1.1.1.1` / `8.8.8.8`) + **Local Network Details**.
- **Bilingual (English + العربية RTL)**: Instant `EN` | `عربي` switch with full right-to-left support.
- **Purple Dark Mode & Crisp Light Mode**: With animated "How NetCheck Works" showcase cards.
- **Hardened Local Security**: Loopback-only (`127.0.0.1`) server, same-origin + CSRF token enforcement, strict CSP headers, and CSV formula-injection protection.

---

## Try It Online vs. Run Locally

1. **Interactive Web Demo**: Open **[https://khalidioi.github.io/netcheck/](https://khalidioi.github.io/netcheck/)** to try every feature right in your browser on a simulated home Wi-Fi network *(modern browsers block public websites from scanning private LANs for security)*.
2. **Scan Your Real Wi-Fi Offline**: Download `NetCheck.exe` from the [**Releases**](https://github.com/KHALIDioi/netcheck/releases/latest) tab and run it locally — it starts privately on `http://127.0.0.1:8080` and opens your browser automatically.

---

## License

**Proprietary / Closed Source** — Copyright © 2026 [KHALIDioi](https://github.com/KHALIDioi). All Rights Reserved. See [LICENSE](LICENSE) for details.
