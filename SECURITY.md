# Security Policy — NetCheck

## Built-In Security Guarantees

- **Strictly Zero Port Scanning**: NetCheck never probes or scans TCP or UDP ports. Discovery uses only Layer 3 ICMP echo requests, the OS ARP/neighbor cache, and passive/local LAN hostname resolution (mDNS, NetBIOS, UPnP/SSDP, Reverse DNS).
- **100% Static Public Website**: The live portfolio website hosted on GitHub Pages runs entirely in your browser with a strict Content Security Policy (`connect-src 'none'`), zero backend servers, zero cookies, and zero tracking.
- **Local-Only Desktop Server**: The compiled desktop application binds strictly to `127.0.0.1` (loopback only) so other devices on your Wi-Fi cannot access your dashboard, enforces same-origin & cryptographic CSRF tokens on all mutations, neutralizes CSV formula injection, and stores your device labels locally on your machine.
- **Offline Privacy**: No network scan data, IP addresses, MAC addresses, or custom device names ever leave your computer.

## Reporting a Vulnerability

If you discover a security issue in the public website or an official NetCheck release binary, please report it privately via GitHub Security Advisories on this repository rather than opening a public issue.
