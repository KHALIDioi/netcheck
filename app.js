(() => {
  "use strict";

  const DEVICE_ICONS = {
    laptop:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
    router:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="14" width="20" height="6" rx="2"></rect><path d="M6 17h.01M10 17h.01"></path><path d="M12 14V8"></path><path d="M8.5 6.5a5 5 0 017 0"></path><path d="M6 4a8.5 8.5 0 0112 0"></path></svg>',
    tv:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="18" x2="12" y2="21"></line></svg>',
    console:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="4"></rect><line x1="6" y1="12.5" x2="10" y2="12.5"></line><line x1="8" y1="10.5" x2="8" y2="14.5"></line><circle cx="16.5" cy="11.5" r="0.9" fill="currentColor"></circle><circle cx="18.5" cy="13.5" r="0.9" fill="currentColor"></circle></svg>',
    printer:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>',
    iot:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"></path></svg>',
    server:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="7" rx="2"></rect><rect x="2" y="14" width="20" height="7" rx="2"></rect><line x1="6" y1="6.5" x2="6.01" y2="6.5"></line><line x1="6" y1="17.5" x2="6.01" y2="17.5"></line></svg>',
    device:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="3"></circle></svg>',
  };

  const ICON_ORDER = ["laptop", "phone", "router", "tv", "console", "printer", "iot", "device"];

  const I18N = {
    en: {
      pageTitle: "NetCheck — Local Network Device Scanner",
      brandSubtitle: "Local Network Device Scanner",
      noPortScanning: "No Port Scanning",
      noPortTitle: "Strictly uses ICMP ping, OS ARP cache, and hostname lookups. No TCP or UDP ports are ever tested.",
      byPrefix: "By",
      makerTitle: "Created by KHALIDioi on GitHub",
      detectingHost: "Detecting host...",
      serverOffline: "Server offline",
      navScanner: "Scanner",
      navMyDevices: "My Devices",
      navHistory: "History",
      navTools: "Quick Tools",
      networkInterface: "Network Interface",
      subnetOrRange: "Subnet or IP Range",
      targetPlaceholder: "e.g. 192.168.1.0/24 or 192.168.1.1-50",
      pingSpeed: "Ping Speed",
      speedFast: "Fast (500 ms)",
      speedBalanced: "Balanced (800 ms)",
      speedThorough: "Thorough (1500 ms)",
      watchMode: "Watch Mode",
      watchOff: "Off",
      watch30: "Every 30s",
      watch60: "Every 60s",
      watchNextIn: (s) => `Next auto-scan in ${s}s`,
      scanNetwork: "Scan Network",
      stopScan: "Stop Scan",
      refreshInterfacesTitle: "Re-detect network interfaces",
      themeToggleTitle: "Toggle light/dark theme",
      readyStatus: "Ready to check your local network",
      kpiDevices: "Devices Found",
      kpiDevicesSubIdle: "Active on subnet",
      kpiDevicesSubScanning: "Discovering...",
      kpiNamed: "Named Devices",
      kpiNamedSubIdle: "Resolved hostnames",
      kpiTarget: "Scanned Range",
      kpiTargetSubIdle: "IPv4 addresses",
      kpiDuration: "Check Duration",
      kpiDurationRunning: "Running",
      kpiModeNoPorts: "No ports tested",
      kpiModeIcmpArp: "ICMP Ping + ARP · No ports",
      kpiModeArpOnly: "ARP Cache + Local · No ports",
      discoveredDevices: "Discovered Devices",
      searchPlaceholder: "Filter IP, name, vendor, or MAC...",
      myDevicesSearchPlaceholder: "Search saved devices...",
      filterAll: "All",
      filterNamed: "Named",
      filterUnnamed: "Unnamed",
      filterTrusted: "Trusted",
      downloadResults: "Download Results",
      downloadCsv: "Spreadsheet (.csv)",
      downloadJson: "Structured Data (.json)",
      colIp: "IP Address",
      colName: "Device Name",
      colStatus: "Status",
      colDiscovery: "Discovery",
      colMac: "MAC Address",
      colActions: "Actions",
      emptyInitTitle: "Preparing initial network check...",
      emptyInitDesc: "NetCheck discovers devices via ICMP ping, OS ARP cache, and hostname lookups without scanning ports.",
      emptyNoneTitle: "No devices found yet",
      emptyNoneDesc: "Click Scan Network to run a safe host check on your selected subnet.",
      emptyFilterTitle: "No devices match your filter",
      emptyFilterDesc: 'Try clearing the search query or switching back to "All" devices.',
      info1Title: "Zero Port Scanning",
      info1Desc: "Politely knocks at the front door — never rattles your windows. Zero TCP or UDP ports are ever touched.",
      info2Title: "ICMP Ping + OS ARP Cache",
      info2Desc: "Sends a quick radar ping across your Wi-Fi, then peeks at your system's ARP table to catch even shy, firewalled devices.",
      info3Title: "Multi-Protocol Device Names",
      info3Desc: "Listens for friendly hello broadcasts via mDNS/Bonjour, NetBIOS, UPnP & DNS — plus remembers your own custom nicknames.",
      tagLocal: "This Device",
      tagGateway: "Gateway",
      tagTrusted: "Trusted",
      tagPrivate: "Private MAC",
      tagNew: "NEW",
      tagPrivateTitle: "Device uses a randomized Private Wi-Fi MAC (common on iPhone, Android & modern laptops)",
      copyIpTitle: "Copy IP address",
      repingTitle: "Quick ICMP ping this device",
      editDeviceTitle: "Rename / customize device",
      statusLocal: "Local",
      statusOnline: "Online",
      statusOffline: "Offline",
      statusArp: "ARP Reachable",
      privateMacHint: "Randomized Wi-Fi MAC (phone / tablet — hides hostname)",
      noHostnameHint: "No hostname broadcast on LAN",
      viaPrefix: "via",
      enterTargetError: "Enter a subnet (e.g. 192.168.1.0/24) or IP range (e.g. 192.168.1.1-50).",
      backendError: (msg) => `Unable to reach the NetCheck backend: ${msg}`,
      requestFailed: (msg) => `Request failed: ${msg}`,
      startScanError: "Unable to start scan.",
      toastCopied: (val) => `Copied ${val}`,
      toastCopyFail: "Copy unavailable in this browser",
      toastRefreshed: "Refreshed network interfaces",
      toastSavedDevice: "Device saved!",
      toastRemovedDevice: "Removed custom device",
      toastHistoryCleared: "Scan history cleared",
      toastPingOk: (ip, lat) => `${ip} is online${lat !== null && lat !== undefined ? ` (${lat} ms)` : ""}`,
      toastPingFail: (ip) => `${ip} did not reply to ping`,
      newUnknownAlert: (n) => `Alert: ${n} new device${n === 1 ? "" : "s"} joined your network since the previous scan!`,
      hostsProgress: (checked, total) => `${checked}/${total} hosts`,
      resolvedOf: (named, total) => `${named} of ${total} resolved`,
      hostsChecked: (n) => `${n.toLocaleString()} host${n === 1 ? "" : "s"} checked`,
      scanningTitle: (target) => `Scanning ${target || "network"}...`,
      cappedNotice: (fullCidr, scanCidr) =>
        `Your adapter's full subnet (${fullCidr}) is large, so NetCheck automatically scoped the default check to your local /24 (${scanCidr}). You can enter any custom range up to /20.`,
      icmpSandboxNote:
        "ICMP ping is restricted in this sandboxed environment (missing raw socket permission). Discovery used the OS ARP/neighbor table and local interfaces instead. When run directly on Windows, macOS, or Linux, full ICMP ping sweep runs automatically.",
      // My Devices
      myDevicesTitle: "My Saved & Trusted Devices",
      myDevicesSubtitle: "Custom nicknames, icons, and trusted badges follow each device's MAC address automatically across future scans.",
      myDevicesEmptyTitle: "No saved devices yet",
      myDevicesEmptyDesc: "Click the pencil icon next to any device in the Scanner tab to give it a custom nickname, icon, or Trusted badge.",
      btnTrust: "Trust",
      btnUntrust: "Untrust",
      btnEdit: "Edit",
      btnRemove: "Remove",
      // History
      historyTitle: "Scan History",
      historySubtitle: "Click any previous scan to inspect the devices discovered at that time.",
      clearHistory: "Clear History",
      historyEmptyTitle: "No scan history yet",
      historyEmptyDesc: "Completed network scans are saved here automatically so you can spot new or offline devices.",
      diffNewTitle: "New Devices Joined",
      diffOfflineTitle: "Went Offline Since Last Scan",
      diffNoneNew: "No new devices since previous scan.",
      diffNoneOffline: "All devices from the previous scan are still online.",
      devicesShort: (n) => `${n} device${n === 1 ? "" : "s"}`,
      // Quick Tools
      pingMonitorTitle: "Live Ping Monitor",
      pingMonitorSubtitle: "Test latency to your router vs the internet (ICMP only, zero port testing) to pinpoint Wi-Fi vs ISP lag.",
      pingPlaceholder: "e.g. 192.168.1.1 or 1.1.1.1",
      startPing: "Start Ping",
      stopPing: "Stop Ping",
      presetRouter: "My Router",
      pingLast: "Last",
      pingAvg: "Average",
      pingMinMax: "Min / Max",
      pingLoss: "Packet Loss",
      sparkEmpty: "Start a live ping to watch latency in real time",
      pingTimeoutLabel: "Timeout",
      netDetailsTitle: "Local Network Details",
      netDetailsSubtitle: "Active adapter, gateway, and host properties on this computer.",
      detailOs: "Operating System",
      detailHost: "Hostname",
      detailAdapter: "Primary Adapter",
      detailIp: "Local IP Address",
      detailSubnet: "Subnet CIDR",
      detailGateway: "Default Gateway",
      detailMac: "Local MAC Address",
      detailIcmp: "ICMP Ping Support",
      icmpReady: "Available (Full Ping + ARP)",
      icmpRestricted: "Restricted (ARP Fallback)",
      // Modal
      modalEditTitle: "Customize Device",
      modalNickname: "Custom Nickname",
      modalNicknamePlaceholder: "e.g. My iPhone, Living Room TV",
      modalIcon: "Device Icon",
      modalNote: "Note (optional)",
      modalNotePlaceholder: "e.g. Bedroom Wi-Fi, Dad's phone",
      modalTrustedLabel: "Mark as Trusted Device",
      modalTrustedDesc: "Trusted devices get a green badge and won't trigger unknown-device alerts.",
      modalReset: "Remove Custom",
      modalCancel: "Cancel",
      modalSave: "Save Device",
      iconLabels: {
        laptop: "Laptop/PC",
        phone: "Phone",
        router: "Router",
        tv: "TV",
        console: "Console",
        printer: "Printer",
        iot: "Smart/IoT",
        device: "Other",
      },
      methods: {
        "Local Interface": "Local Interface",
        "ICMP + ARP": "ICMP + ARP",
        "ICMP Ping": "ICMP Ping",
        "ARP Cache": "ARP Cache",
      },
      sources: {
        "Local Host": "Local Host",
        "Hosts File": "Hosts File",
        "mDNS / Bonjour": "mDNS / Bonjour",
        "mDNS / Avahi": "mDNS / Avahi",
        NetBIOS: "NetBIOS",
        "Reverse DNS": "Reverse DNS",
        "OS Resolver": "OS Resolver",
        "ARP / Resolver": "ARP / Resolver",
        "UPnP / SSDP": "UPnP / SSDP",
        "UPnP / Gateway": "UPnP / Gateway",
        Gateway: "Gateway",
        "Gateway · MAC Vendor": "Gateway · MAC Vendor",
        "MAC Vendor": "MAC Vendor",
        "Randomized Wi-Fi MAC": "Randomized Wi-Fi MAC",
      },
      fallbackNames: {
        "Default Gateway": "Default Gateway",
        "Private MAC Device": "Private MAC Device",
        "Unnamed Device": "Unnamed Device",
      },
      demoBadge: "Live Interactive Demo",
      demoDescription:
        "Browsers block websites from scanning your private Wi-Fi for security. Try every feature right here on a simulated home network, or download the local desktop app to scan your real Wi-Fi offline.",
      demoDownloadBtn: "Download NetCheck.exe",
      demoReleasesBtn: "All Releases",
      footerCreated: "Created by",
      footerRights: "All Rights Reserved · Strictly Zero Port Scanning",
      formatFoundPhase: (n) => `Found ${n} active device${n === 1 ? "" : "s"}`,
      translatePhase: (raw) => raw || "Ready",
    },

    ar: {
      pageTitle: "NetCheck — فاحص أجهزة الشبكة المحلية",
      brandSubtitle: "فاحص أجهزة الشبكة المحلية",
      noPortScanning: "بدون فحص منافذ",
      noPortTitle: "يعتمد فقط على فحص ICMP وجدول ARP واستخراج أسماء الأجهزة دون فحص أي منافذ TCP أو UDP.",
      byPrefix: "بواسطة",
      makerTitle: "حساب المطور KHALIDioi على GitHub",
      detectingHost: "جارٍ التعرف على الجهاز...",
      serverOffline: "الخادم غير متصل",
      navScanner: "الفاحص",
      navMyDevices: "أجهزتي",
      navHistory: "السجل",
      navTools: "أدوات سريعة",
      networkInterface: "واجهة الشبكة",
      subnetOrRange: "الشبكة الفرعية أو نطاق IP",
      targetPlaceholder: "مثال: 192.168.1.0/24 أو 192.168.1.1-50",
      pingSpeed: "سرعة الفحص",
      speedFast: "سريع (500 مللي ثانية)",
      speedBalanced: "متوازن (800 مللي ثانية)",
      speedThorough: "شامل (1500 مللي ثانية)",
      watchMode: "المراقبة التلقائية",
      watchOff: "متوقف",
      watch30: "كل 30 ثانية",
      watch60: "كل 60 ثانية",
      watchNextIn: (s) => `الفحص التلقائي التالي خلال ${s}ث`,
      scanNetwork: "فحص الشبكة",
      stopScan: "إيقاف الفحص",
      refreshInterfacesTitle: "إعادة اكتشاف واجهات الشبكة",
      themeToggleTitle: "تبديل الوضع الفاتح / الداكن",
      readyStatus: "جاهز لفحص شبكتك المحلية",
      kpiDevices: "الأجهزة المكتشفة",
      kpiDevicesSubIdle: "نشطة على الشبكة",
      kpiDevicesSubScanning: "جارٍ الاكتشاف...",
      kpiNamed: "الأجهزة ذات الأسماء",
      kpiNamedSubIdle: "أسماء الأجهزة المستخرجة",
      kpiTarget: "النطاق المفحوص",
      kpiTargetSubIdle: "عناوين IPv4",
      kpiDuration: "مدة الفحص",
      kpiDurationRunning: "قيد التشغيل",
      kpiModeNoPorts: "بدون فحص منافذ",
      kpiModeIcmpArp: "فحص ICMP + ARP · بدون منافذ",
      kpiModeArpOnly: "جدول ARP + محلي · بدون منافذ",
      discoveredDevices: "الأجهزة المكتشفة",
      searchPlaceholder: "ابحث بالـ IP أو الاسم أو الشركة أو MAC...",
      myDevicesSearchPlaceholder: "ابحث في الأجهزة المحفوظة...",
      filterAll: "الكل",
      filterNamed: "مسمّاة",
      filterUnnamed: "غير مسمّاة",
      filterTrusted: "موثوقة",
      downloadResults: "تنزيل النتائج",
      downloadCsv: "جدول بيانات (.csv)",
      downloadJson: "بيانات منظمة (.json)",
      colIp: "عنوان IP",
      colName: "اسم الجهاز",
      colStatus: "الحالة",
      colDiscovery: "طريقة الاكتشاف",
      colMac: "عنوان MAC",
      colActions: "إجراءات",
      emptyInitTitle: "جارٍ تجهيز الفحص الأول للشبكة...",
      emptyInitDesc: "يكتشف NetCheck الأجهزة عبر فحص ICMP وجدول ARP واستخراج الأسماء دون فحص أي منافذ.",
      emptyNoneTitle: "لم يتم العثور على أجهزة بعد",
      emptyNoneDesc: "اضغط على «فحص الشبكة» لإجراء فحص آمن للأجهزة المتصلة على شبكتك.",
      emptyFilterTitle: "لا توجد أجهزة تطابق البحث",
      emptyFilterDesc: "جرّب مسح نص البحث أو العودة إلى خيار «الكل».",
      info1Title: "بدون فحص منافذ نهائياً",
      info1Desc: "يطرق الباب بلطف دون أن يقترب من أي نافذة — فحص وجود آمن 100% بدون لمس أي منافذ TCP أو UDP.",
      info2Title: "فحص ICMP + جدول ARP",
      info2Desc: "يرسل نبضة رادار سريعة عبر شبكتك، ثم يقرأ جدول ARP في النظام لالتقاط حتى الأجهزة الخجولة المحمية بجدار ناري.",
      info3Title: "استخراج أسماء الأجهزة",
      info3Desc: "يستمع لنداءات التعريف عبر mDNS و NetBIOS و UPnP و DNS — ويتذكر الأسماء المخصصة التي تختارها لأجهزتك.",
      tagLocal: "هذا الجهاز",
      tagGateway: "الراوتر",
      tagTrusted: "موثوق",
      tagPrivate: "MAC خاص",
      tagNew: "جديد",
      tagPrivateTitle: "يستخدم الجهاز عنوان Wi-Fi عشوائي خاص (شائع في الجوالات والأجهزة اللوحية الحديثة)",
      copyIpTitle: "نسخ عنوان IP",
      repingTitle: "فحص سريع لهذا الجهاز فقط (ICMP)",
      editDeviceTitle: "تسمية وتخصيص الجهاز",
      statusLocal: "محلي",
      statusOnline: "متصل",
      statusOffline: "غير متصل",
      statusArp: "متصل (ARP)",
      privateMacHint: "عنوان Wi-Fi عشوائي (جوال / جهاز لوحي — يخفي اسم الجهاز)",
      noHostnameHint: "لا يبث اسماً على الشبكة المحلية",
      viaPrefix: "عبر",
      enterTargetError: "أدخل شبكة فرعية (مثل 192.168.1.0/24) أو نطاق عناوين (مثل 192.168.1.1-50).",
      backendError: (msg) => `تعذر الاتصال بخادم NetCheck: ${msg}`,
      requestFailed: (msg) => `فشل الطلب: ${msg}`,
      startScanError: "تعذر بدء الفحص.",
      toastCopied: (val) => `تم نسخ ${val}`,
      toastCopyFail: "النسخ غير متاح في هذا المتصفح",
      toastRefreshed: "تم تحديث واجهات الشبكة",
      toastSavedDevice: "تم حفظ الجهاز بنجاح!",
      toastRemovedDevice: "تمت إزالة التخصيص",
      toastHistoryCleared: "تم مسح سجل الفحوصات",
      toastPingOk: (ip, lat) => `الجهاز ${ip} متصل${lat !== null && lat !== undefined ? ` (${lat} ms)` : ""}`,
      toastPingFail: (ip) => `لم يستجب الجهاز ${ip} لفحص Ping`,
      newUnknownAlert: (n) =>
        n === 1
          ? "تنبيه: انضم جهاز جديد إلى شبكتك منذ آخر فحص!"
          : `تنبيه: انضم ${n} أجهزة جديدة إلى شبكتك منذ آخر فحص!`,
      hostsProgress: (checked, total) => `${checked}/${total} عنوان`,
      resolvedOf: (named, total) => `${named} من ${total} تم التعرف عليها`,
      hostsChecked: (n) => `تم فحص ${n.toLocaleString()} عنوان`,
      scanningTitle: (target) => `جارٍ فحص ${target || "الشبكة"}...`,
      cappedNotice: (fullCidr, scanCidr) =>
        `نطاق الشبكة الكامل (${fullCidr}) كبير جداً، لذا قام NetCheck تلقائياً بضبط الفحص الافتراضي على نطاق /24 المحلي (${scanCidr}). يمكنك إدخال أي نطاق مخصص حتى /20.`,
      icmpSandboxNote:
        "فحص ICMP مقيد في بيئة المعاينة السحابية هذه، لذلك تم الاعتماد على جدول ARP وواجهات النظام. عند تشغيل الأداة محلياً على Windows أو macOS أو Linux يعمل فحص ICMP الكامل تلقائياً.",
      // My Devices
      myDevicesTitle: "أجهزتي المحفوظة والموثوقة",
      myDevicesSubtitle: "الأسماء المخصصة والأيقونات وعلامة «موثوق» ترتبط بعنوان MAC الخاص بالجهاز وتظهر تلقائياً في كل فحص.",
      myDevicesEmptyTitle: "لا توجد أجهزة محفوظة بعد",
      myDevicesEmptyDesc: "اضغط على أيقونة القلم بجانب أي جهاز في تبويب «الفاحص» لإعطائه اسماً مخصصاً أو أيقونة أو علامة موثوق.",
      btnTrust: "توثيق",
      btnUntrust: "إلغاء التوثيق",
      btnEdit: "تعديل",
      btnRemove: "حذف",
      // History
      historyTitle: "سجل الفحوصات",
      historySubtitle: "اضغط على أي فحص سابق لاستعراض الأجهزة التي كانت متصلة في ذلك الوقت.",
      clearHistory: "مسح السجل",
      historyEmptyTitle: "لا يوجد سجل فحوصات بعد",
      historyEmptyDesc: "يتم حفظ كل فحص مكتمل تلقائياً هنا لمتابعة الأجهزة الجديدة أو التي انفصلت عن الشبكة.",
      diffNewTitle: "أجهزة جديدة انضمت للشبكة",
      diffOfflineTitle: "أجهزة انفصلت منذ آخر فحص",
      diffNoneNew: "لا توجد أجهزة جديدة منذ الفحص السابق.",
      diffNoneOffline: "جميع أجهزة الفحص السابق ما زالت متصلة.",
      devicesShort: (n) => (n === 1 ? "جهاز واحد" : n === 2 ? "جهازان" : `${n} أجهزة`),
      // Quick Tools
      pingMonitorTitle: "مراقب Ping المباشر",
      pingMonitorSubtitle: "اختبر سرعة الاستجابة مع الراوتر مقارنة بالإنترنت (ICMP فقط بدون فحص منافذ) لمعرفة مصدر البطء.",
      pingPlaceholder: "مثال: 192.168.1.1 أو 1.1.1.1",
      startPing: "بدء الفحص",
      stopPing: "إيقاف الفحص",
      presetRouter: "الراوتر الخاص بي",
      pingLast: "آخر قراءة",
      pingAvg: "المتوسط",
      pingMinMax: "الأقل / الأعلى",
      pingLoss: "فقدان الحزم",
      sparkEmpty: "ابدأ فحص Ping المباشر لمشاهدة الرسم البياني للسرعة لحظة بلحظة",
      pingTimeoutLabel: "انتهت المهلة",
      netDetailsTitle: "تفاصيل الشبكة المحلية",
      netDetailsSubtitle: "معلومات المحول النشط والبوابة الافتراضية وخصائص هذا الجهاز.",
      detailOs: "نظام التشغيل",
      detailHost: "اسم الجهاز",
      detailAdapter: "الواجهة الأساسية",
      detailIp: "عنوان IP المحلي",
      detailSubnet: "نطاق الشبكة الفرعية",
      detailGateway: "البوابة الافتراضية (الراوتر)",
      detailMac: "عنوان MAC المحلي",
      detailIcmp: "دعم فحص ICMP",
      icmpReady: "متاح (فحص Ping + ARP كامل)",
      icmpRestricted: "مقيّد (وضع ARP الاحتياطي)",
      // Modal
      modalEditTitle: "تخصيص الجهاز",
      modalNickname: "الاسم المخصص",
      modalNicknamePlaceholder: "مثال: جوال خالد، تلفاز الصالة",
      modalIcon: "أيقونة الجهاز",
      modalNote: "ملاحظة (اختياري)",
      modalNotePlaceholder: "مثال: شبكة الغرفة، جهاز العمل",
      modalTrustedLabel: "تمييز كجهاز موثوق",
      modalTrustedDesc: "تحصل الأجهزة الموثوقة على شارة خضراء ولا تفعّل تنبيهات الأجهزة الغريبة.",
      modalReset: "حذف التخصيص",
      modalCancel: "إلغاء",
      modalSave: "حفظ الجهاز",
      iconLabels: {
        laptop: "حاسوب",
        phone: "جوال",
        router: "راوتر",
        tv: "تلفاز",
        console: "ألعاب",
        printer: "طابعة",
        iot: "ذكي/IoT",
        device: "أخرى",
      },
      methods: {
        "Local Interface": "الواجهة المحلية",
        "ICMP + ARP": "ICMP + ARP",
        "ICMP Ping": "فحص ICMP",
        "ARP Cache": "جدول ARP",
      },
      sources: {
        "Local Host": "الجهاز المحلي",
        "Hosts File": "ملف Hosts",
        "mDNS / Bonjour": "mDNS / Bonjour",
        "mDNS / Avahi": "mDNS / Avahi",
        NetBIOS: "NetBIOS",
        "Reverse DNS": "DNS العكسي",
        "OS Resolver": "نظام التشغيل",
        "ARP / Resolver": "ARP / النظام",
        "UPnP / SSDP": "UPnP / SSDP",
        "UPnP / Gateway": "UPnP / الراوتر",
        Gateway: "البوابة الافتراضية",
        "Gateway · MAC Vendor": "البوابة · الشركة المصنعة",
        "MAC Vendor": "الشركة المصنعة لـ MAC",
        "Randomized Wi-Fi MAC": "عنوان Wi-Fi عشوائي",
      },
      fallbackNames: {
        "Default Gateway": "البوابة الافتراضية (الراوتر)",
        "Private MAC Device": "جهاز بعنوان MAC خاص",
        "Unnamed Device": "جهاز بدون اسم",
      },
      demoBadge: "معاينة تفاعلية مباشرة",
      demoDescription:
        "تمنع المتصفحات المواقع من فحص شبكة Wi-Fi الخاصة بك لحماية خصوصيتك. جرّب جميع ميزات NetCheck هنا على شبكة منزلية محاكاة، أو نزّل التطبيق المحلي لفحص شبكتك الحقيقية بدون إنترنت.",
      demoDownloadBtn: "تنزيل NetCheck.exe",
      demoReleasesBtn: "كل الإصدارات",
      footerCreated: "تطوير",
      footerRights: "جميع الحقوق محفوظة · بدون فحص منافذ نهائياً",
      formatFoundPhase: (n) => {
        if (n === 0) return "لم يتم العثور على أجهزة نشطة";
        if (n === 1) return "تم العثور على جهاز نشط واحد";
        if (n === 2) return "تم العثور على جهازين نشطين";
        if (n <= 10) return `تم العثور على ${n} أجهزة نشطة`;
        return `تم العثور على ${n} جهازاً نشطاً`;
      },
      translatePhase: (raw) => {
        const text = String(raw || "");
        if (!text || text === "Ready") return "جاهز لفحص شبكتك المحلية";
        if (text.startsWith("Preparing")) return "جارٍ تجهيز فحص الشبكة...";
        if (text.startsWith("Cancelling")) return "جارٍ إيقاف الفحص...";
        if (text === "Scan cancelled") return "تم إيقاف الفحص";
        if (text === "Scan failed") return "فشل الفحص";
        if (text.startsWith("Reading OS ARP")) return "جارٍ قراءة جدول ARP للأجهزة...";
        if (text.startsWith("Checking ARP")) return "جارٍ فحص جدول ARP للأجهزة...";
        if (text.startsWith("Looking up device names")) return "جارٍ استخراج أسماء الأجهزة عبر mDNS و NetBIOS و DNS...";
        if (text.startsWith("Finalizing")) return "جارٍ تجهيز قائمة الأجهزة...";

        const mPing = text.match(/Pinging\s+(\d+)\s+addresses/i);
        if (mPing) return `جارٍ فحص ${mPing[1]} عنواناً (بدون فحص منافذ)...`;

        const mCheck = text.match(/Checking hosts\s*\((\d+)\/(\d+)\)\s*·\s*(\d+)\s+found/i);
        if (mCheck) return `جارٍ فحص العناوين (${mCheck[1]}/${mCheck[2]}) · تم العثور على ${mCheck[3]}...`;

        const mFound = text.match(/Found\s+(\d+)\s+active device/i);
        if (mFound) return I18N.ar.formatFoundPhase(Number(mFound[1]));

        return text;
      },
    },
  };

  const state = {
    lang: "en",
    activeTab: "scanner",
    demoMode: document.documentElement.dataset.mode === "demo" || window.location.protocol === "file:",
    csrfToken: "",
    networkInfo: null,
    scan: null,
    lastCompletedScanId: null,
    myDevices: [],
    history: [],
    expandedHistoryId: null,
    pollTimer: null,
    watchSeconds: 0,
    watchRemaining: 0,
    watchTimer: null,
    searchQuery: "",
    myDevicesQuery: "",
    nameFilter: "all", // all | named | unnamed | trusted
    sortKey: "ip",
    sortDir: "asc",
    toastTimer: null,
    editingDevice: null,
    selectedIcon: "device",
    // Ping Monitor state
    pingRunning: false,
    pingTimer: null,
    pingSamples: [],
    pingSeq: 0,
  };

  const els = {
    demoBanner: document.getElementById("demoBanner"),
    trustPill: document.getElementById("trustPill"),
    hostChip: document.getElementById("hostChip"),
    makerBtn: document.getElementById("makerBtn"),
    langEnBtn: document.getElementById("langEnBtn"),
    langArBtn: document.getElementById("langArBtn"),
    themeToggle: document.getElementById("themeToggle"),
    themeIconSun: document.getElementById("themeIconSun"),
    themeIconMoon: document.getElementById("themeIconMoon"),
    // Nav
    navTabs: Array.from(document.querySelectorAll(".nav-tab")),
    tabPanels: {
      scanner: document.getElementById("tab-scanner"),
      devices: document.getElementById("tab-devices"),
      history: document.getElementById("tab-history"),
      tools: document.getElementById("tab-tools"),
    },
    navScannerBadge: document.getElementById("navScannerBadge"),
    navDevicesBadge: document.getElementById("navDevicesBadge"),
    navHistoryBadge: document.getElementById("navHistoryBadge"),
    // Scanner controls
    scanForm: document.getElementById("scanForm"),
    interfaceSelect: document.getElementById("interfaceSelect"),
    refreshInterfacesBtn: document.getElementById("refreshInterfacesBtn"),
    targetInput: document.getElementById("targetInput"),
    timeoutSelect: document.getElementById("timeoutSelect"),
    watchSelect: document.getElementById("watchSelect"),
    watchCountdown: document.getElementById("watchCountdown"),
    scanBtn: document.getElementById("scanBtn"),
    scanBtnText: document.getElementById("scanBtnText"),
    statusDot: document.getElementById("statusDot"),
    phaseText: document.getElementById("phaseText"),
    progressCount: document.getElementById("progressCount"),
    progressPercent: document.getElementById("progressPercent"),
    progressBar: document.getElementById("progressBar"),
    progressFill: document.getElementById("progressFill"),
    noticeBanner: document.getElementById("noticeBanner"),
    kpiDevices: document.getElementById("kpiDevices"),
    kpiDevicesSub: document.getElementById("kpiDevicesSub"),
    kpiNamed: document.getElementById("kpiNamed"),
    kpiNamedSub: document.getElementById("kpiNamedSub"),
    kpiTarget: document.getElementById("kpiTarget"),
    kpiTargetSub: document.getElementById("kpiTargetSub"),
    kpiDuration: document.getElementById("kpiDuration"),
    kpiModeSub: document.getElementById("kpiModeSub"),
    visibleCountBadge: document.getElementById("visibleCountBadge"),
    searchInput: document.getElementById("searchInput"),
    filterBtns: Array.from(document.querySelectorAll(".pill-btn")),
    downloadDropdown: document.getElementById("downloadDropdown"),
    downloadResultsBtn: document.getElementById("downloadResultsBtn"),
    downloadMenu: document.getElementById("downloadMenu"),
    exportCsvBtn: document.getElementById("exportCsvBtn"),
    exportJsonBtn: document.getElementById("exportJsonBtn"),
    sortHeaders: Array.from(document.querySelectorAll("th.sortable")),
    deviceTableBody: document.getElementById("deviceTableBody"),
    // My Devices
    myDevicesSearch: document.getElementById("myDevicesSearch"),
    myDevicesList: document.getElementById("myDevicesList"),
    // History
    historyDiffSection: document.getElementById("historyDiffSection"),
    diffNewCount: document.getElementById("diffNewCount"),
    diffNewList: document.getElementById("diffNewList"),
    diffOfflineCount: document.getElementById("diffOfflineCount"),
    diffOfflineList: document.getElementById("diffOfflineList"),
    historyList: document.getElementById("historyList"),
    clearHistoryBtn: document.getElementById("clearHistoryBtn"),
    // Tools
    pingMonitorForm: document.getElementById("pingMonitorForm"),
    pingTargetInput: document.getElementById("pingTargetInput"),
    pingStartBtn: document.getElementById("pingStartBtn"),
    presetRouterBtn: document.getElementById("presetRouterBtn"),
    pingPresetBtns: Array.from(document.querySelectorAll("[data-ping-preset]")),
    pingStatLast: document.getElementById("pingStatLast"),
    pingStatAvg: document.getElementById("pingStatAvg"),
    pingStatMinMax: document.getElementById("pingStatMinMax"),
    pingStatLoss: document.getElementById("pingStatLoss"),
    sparkArea: document.getElementById("sparkArea"),
    sparkLine: document.getElementById("sparkLine"),
    sparkDot: document.getElementById("sparkDot"),
    sparkEmptyMsg: document.getElementById("sparkEmptyMsg"),
    pingLog: document.getElementById("pingLog"),
    netDetailsGrid: document.getElementById("netDetailsGrid"),
    // Modal
    editModal: document.getElementById("editModal"),
    editModalMeta: document.getElementById("editModalMeta"),
    closeModalBtn: document.getElementById("closeModalBtn"),
    cancelModalBtn: document.getElementById("cancelModalBtn"),
    deleteCustomBtn: document.getElementById("deleteCustomBtn"),
    editDeviceForm: document.getElementById("editDeviceForm"),
    editNicknameInput: document.getElementById("editNicknameInput"),
    editNoteInput: document.getElementById("editNoteInput"),
    editTrustedCheck: document.getElementById("editTrustedCheck"),
    iconPickerGrid: document.getElementById("iconPickerGrid"),
    toast: document.getElementById("toast"),
  };

  function dict() {
    return I18N[state.lang] || I18N.en;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function ipToNumber(ip) {
    const parts = String(ip || "").split(".").map(Number);
    if (parts.length !== 4 || parts.some((n) => Number.isNaN(n))) return 0;
    return (((parts[0] << 24) >>> 0) + ((parts[1] << 16) >>> 0) + ((parts[2] << 8) >>> 0) + parts[3]) >>> 0;
  }

  function formatDuration(ms) {
    if (ms === null || ms === undefined) return "—";
    if (ms < 1000) return `${ms} ms`;
    return `${(ms / 1000).toFixed(2)} s`;
  }

  function formatTimestamp(isoStr) {
    if (!isoStr) return "—";
    try {
      const dt = new Date(isoStr);
      return dt.toLocaleString(state.lang === "ar" ? "ar-SA" : undefined, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    } catch (_) {
      return isoStr;
    }
  }

  function getDeviceIconSvg(iconKey) {
    return DEVICE_ICONS[iconKey] || DEVICE_ICONS.device;
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.remove("hidden");
    if (state.toastTimer) clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => {
      els.toast.classList.add("hidden");
    }, 2400);
  }

  // ==================== TABS ====================
  function switchTab(tabName) {
    if (!els.tabPanels[tabName]) return;
    state.activeTab = tabName;
    els.navTabs.forEach((btn) => {
      const active = btn.dataset.tab === tabName;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    Object.entries(els.tabPanels).forEach(([key, panel]) => {
      panel.classList.toggle("hidden", key !== tabName);
      panel.classList.toggle("active", key === tabName);
    });

    if (tabName === "devices") {
      loadMyDevices();
    } else if (tabName === "history") {
      loadHistory();
    } else if (tabName === "tools") {
      renderNetworkDetails();
    }
  }

  // ==================== LANGUAGE & THEME ====================
  function applyLanguage(lang) {
    state.lang = lang === "ar" ? "ar" : "en";
    const d = dict();

    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.title = d.pageTitle;

    els.langEnBtn.classList.toggle("active", state.lang === "en");
    els.langArBtn.classList.toggle("active", state.lang === "ar");

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (key && typeof d[key] === "string") {
        node.textContent = d[key];
      }
    });

    els.targetInput.placeholder = d.targetPlaceholder;
    els.searchInput.placeholder = d.searchPlaceholder;
    els.myDevicesSearch.placeholder = d.myDevicesSearchPlaceholder;
    els.pingTargetInput.placeholder = d.pingPlaceholder;
    els.editNicknameInput.placeholder = d.modalNicknamePlaceholder;
    els.editNoteInput.placeholder = d.modalNotePlaceholder;

    els.trustPill.title = d.noPortTitle;
    els.makerBtn.title = d.makerTitle;
    els.refreshInterfacesBtn.title = d.refreshInterfacesTitle;
    els.themeToggle.title = d.themeToggleTitle;
    els.pingStartBtn.textContent = state.pingRunning ? d.stopPing : d.startPing;

    if (!state.networkInfo) {
      els.hostChip.textContent = d.detectingHost;
    }

    try {
      localStorage.setItem("netcheck-lang", state.lang);
    } catch (_) {
      // Ignore storage errors inside restricted iframes
    }

    renderIconPicker();
    if (state.scan) {
      applyScanState(state.scan);
    } else {
      renderTable();
    }
    renderMyDevices();
    renderHistory();
    renderNetworkDetails();
    updateWatchChip();
  }

  function initLanguage() {
    let saved = null;
    try {
      saved = localStorage.getItem("netcheck-lang");
    } catch (_) {
      saved = null;
    }
    applyLanguage(saved === "ar" ? "ar" : "en");
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const isDark = theme === "dark";
    els.themeIconSun.classList.toggle("hidden", isDark);
    els.themeIconMoon.classList.toggle("hidden", !isDark);
    try {
      localStorage.setItem("netcheck-theme", theme);
    } catch (_) {
      // Ignore
    }
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem("netcheck-theme");
    } catch (_) {
      saved = null;
    }
    if (saved === "dark" || saved === "light") {
      applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }
  }

  function showBanner(message, type = "info") {
    if (!message) {
      els.noticeBanner.classList.add("hidden");
      els.noticeBanner.textContent = "";
      els.noticeBanner.className = "banner hidden";
      return;
    }
    els.noticeBanner.textContent = message;
    els.noticeBanner.className = `banner ${type}`;
  }

  function localizeNote(note) {
    if (state.lang !== "ar") return note;
    if (note.includes("ICMP ping is restricted in this sandboxed environment")) {
      return dict().icmpSandboxNote;
    }
    return note;
  }

  function localizeDetectedName(dev) {
    const raw = dev.name || "";
    if (state.lang !== "ar") return raw;
    const d = dict();
    if (d.fallbackNames[raw]) return d.fallbackNames[raw];
    if (!dev.name_resolved && raw.endsWith(" Gateway")) {
      const brand = raw.slice(0, -" Gateway".length).trim();
      return `بوابة ${brand}`;
    }
    if (!dev.name_resolved && raw.endsWith(" Device")) {
      const brand = raw.slice(0, -" Device".length).trim();
      return `جهاز ${brand}`;
    }
    return raw;
  }

  function getPrimaryDisplayName(dev) {
    if (dev.custom_name && dev.custom_name.trim()) {
      return dev.custom_name.trim();
    }
    return localizeDetectedName(dev);
  }

  // ==================== CSRF & INTERACTIVE DEMO TRANSPORT ====================
  const DEMO_STORAGE_KEY = "netcheck-demo-store-v2";

  const DemoEngine = (() => {
    let scanCounter = 0;
    let scanTimer = null;
    let currentScan = {
      scan_id: "",
      status: "idle",
      target: "192.168.1.0/24",
      phase: "Ready",
      checked: 0,
      total: 0,
      found_count: 0,
      percent: 0,
      duration_ms: null,
      icmp_available: true,
      notes: [],
      error: null,
      diff: { has_previous: false, new_count: 0, offline_count: 0, new_devices: [], offline_devices: [] },
      devices: [],
    };

    const BASE_DEVICES = [
      {
        ip: "192.168.1.1",
        name: "Huawei Gateway",
        name_resolved: false,
        name_source: "Gateway · MAC Vendor",
        discovery_method: "ICMP + ARP",
        latency_ms: 1.4,
        mac: "b8:8e:82:b1:ee:8f",
        vendor: "Huawei",
        icon: "router",
        is_local: false,
        is_gateway: true,
        is_private_mac: false,
      },
      {
        ip: "192.168.1.12",
        name: "DESKTOP-KHALID",
        name_resolved: true,
        name_source: "Local Host",
        discovery_method: "Local Interface",
        latency_ms: 0.0,
        mac: "00:1b:21:4a:9c:12",
        vendor: "Intel",
        icon: "laptop",
        is_local: true,
        is_gateway: false,
        is_private_mac: false,
      },
      {
        ip: "192.168.1.24",
        name: "Khalid-iPhone.local",
        name_resolved: true,
        name_source: "mDNS / Bonjour",
        discovery_method: "ICMP + ARP",
        latency_ms: 4.2,
        mac: "a4:83:e7:51:c2:09",
        vendor: "Apple",
        icon: "phone",
        is_local: false,
        is_gateway: false,
        is_private_mac: false,
      },
      {
        ip: "192.168.1.33",
        name: "Samsung-QLED-TV",
        name_resolved: true,
        name_source: "UPnP / SSDP",
        discovery_method: "ICMP + ARP",
        latency_ms: 6.8,
        mac: "00:21:19:88:1a:4f",
        vendor: "Samsung",
        icon: "tv",
        is_local: false,
        is_gateway: false,
        is_private_mac: false,
      },
      {
        ip: "192.168.1.41",
        name: "PS5-LivingRoom",
        name_resolved: true,
        name_source: "NetBIOS",
        discovery_method: "ICMP + ARP",
        latency_ms: 2.9,
        mac: "00:24:8d:2c:90:11",
        vendor: "Sony",
        icon: "console",
        is_local: false,
        is_gateway: false,
        is_private_mac: false,
      },
      {
        ip: "192.168.1.50",
        name: "Private MAC Device",
        name_resolved: false,
        name_source: "Randomized Wi-Fi MAC",
        discovery_method: "ARP Cache",
        latency_ms: 9.1,
        mac: "0a:e7:3e:1a:e5:3a",
        vendor: "",
        icon: "phone",
        is_local: false,
        is_gateway: false,
        is_private_mac: true,
      },
      {
        ip: "192.168.1.68",
        name: "SmartPlug-Desk",
        name_resolved: true,
        name_source: "mDNS / Bonjour",
        discovery_method: "ICMP + ARP",
        latency_ms: 14.3,
        mac: "5c:cf:7f:74:3e:21",
        vendor: "Espressif",
        icon: "iot",
        is_local: false,
        is_gateway: false,
        is_private_mac: false,
      },
    ];

    const GUEST_DEVICE = {
      ip: "192.168.1.77",
      name: "Guest-Pixel-8",
      name_resolved: true,
      name_source: "mDNS / Bonjour",
      discovery_method: "ICMP + ARP",
      latency_ms: 7.6,
      mac: "3c:5a:b4:19:44:e2",
      vendor: "Google",
      icon: "phone",
      is_local: false,
      is_gateway: false,
      is_private_mac: false,
    };

    function loadStore() {
      try {
        const raw = localStorage.getItem(DEMO_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          return {
            custom_devices: parsed.custom_devices || {},
            history: Array.isArray(parsed.history) ? parsed.history : [],
          };
        }
      } catch (_) {
        // Ignore storage errors
      }
      return {
        custom_devices: {
          "mac:b8:8e:82:b1:ee:8f": {
            key: "mac:b8:8e:82:b1:ee:8f",
            mac: "b8:8e:82:b1:ee:8f",
            last_ip: "192.168.1.1",
            nickname: "Home Fiber Router",
            icon: "router",
            trusted: true,
            note: "Main Wi-Fi 6 gateway",
            detected_name: "Huawei Gateway",
            vendor: "Huawei",
          },
          "mac:a4:83:e7:51:c2:09": {
            key: "mac:a4:83:e7:51:c2:09",
            mac: "a4:83:e7:51:c2:09",
            last_ip: "192.168.1.24",
            nickname: "My iPhone",
            icon: "phone",
            trusted: true,
            note: "Personal phone",
            detected_name: "Khalid-iPhone.local",
            vendor: "Apple",
          },
        },
        history: [],
      };
    }

    function saveStore(store) {
      try {
        localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(store));
      } catch (_) {
        // Ignore
      }
    }

    function makeKey(mac, ip) {
      return mac ? `mac:${mac.toLowerCase()}` : `ip:${ip}`;
    }

    function applyCustomToDevices(devices, store) {
      return devices.map((d) => {
        const key = makeKey(d.mac, d.ip);
        const custom = store.custom_devices[key] || store.custom_devices[`ip:${d.ip}`];
        return {
          ...d,
          device_key: key,
          custom_name: custom ? custom.nickname || "" : "",
          icon: (custom && custom.icon) || d.icon || "device",
          trusted: custom ? Boolean(custom.trusted) : false,
          note: custom ? custom.note || "" : "",
        };
      });
    }

    function listMyDevices() {
      const store = loadStore();
      const liveByKey = {};
      (currentScan.devices || []).forEach((d) => {
        liveByKey[d.device_key] = d;
      });
      return Object.values(store.custom_devices)
        .map((entry) => {
          const live = liveByKey[entry.key];
          return {
            ...entry,
            online: Boolean(live),
            live_ip: live ? live.ip : entry.last_ip || "",
            live_name: live ? live.name : entry.detected_name || "",
            latency_ms: live ? live.latency_ms : null,
          };
        })
        .sort((a, b) => Number(b.trusted) - Number(a.trusted) || (a.nickname || "").localeCompare(b.nickname || ""));
    }

    function buildDemoResponse(data, status = 200) {
      return Promise.resolve({
        ok: status >= 200 && status < 300,
        status,
        json: async () => JSON.parse(JSON.stringify(data)),
      });
    }

    function startDemoScan(target) {
      if (scanTimer) clearInterval(scanTimer);
      scanCounter += 1;
      const scanId = `demo-${Date.now()}-${scanCounter}`;
      const cleanTarget = (target || "192.168.1.0/24").trim();
      const startedMs = Date.now();
      let step = 0;

      currentScan = {
        scan_id: scanId,
        status: "scanning",
        target: cleanTarget,
        phase: "Pinging 254 addresses (ICMP only, no port scanning)...",
        checked: 0,
        total: 254,
        found_count: 0,
        percent: 5,
        duration_ms: null,
        icmp_available: true,
        notes: [],
        error: null,
        diff: { has_previous: false, new_count: 0, offline_count: 0, new_devices: [], offline_devices: [] },
        devices: [],
      };

      scanTimer = setInterval(() => {
        step += 1;
        if (step <= 4) {
          const checked = Math.min(254, step * 62);
          currentScan.checked = checked;
          currentScan.found_count = Math.min(BASE_DEVICES.length, step + 2);
          currentScan.percent = Math.round((checked / 254) * 84);
          currentScan.phase = `Checking hosts (${checked}/254) · ${currentScan.found_count} found`;
          return;
        }
        if (step === 5) {
          currentScan.checked = 254;
          currentScan.percent = 92;
          currentScan.phase = "Looking up device names via mDNS, NetBIOS & DNS...";
          return;
        }

        clearInterval(scanTimer);
        scanTimer = null;

        const store = loadStore();
        // Alternate guest arrival on scans #2+ so visitors can experience NEW/Offline diffing
        let rawList = BASE_DEVICES.map((d) => ({
          ...d,
          latency_ms: d.is_local ? 0.0 : Number(Math.max(0.6, d.latency_ms + (Math.random() - 0.5) * 1.4).toFixed(1)),
          is_new: false,
        }));
        if (scanCounter % 2 === 0) {
          rawList.push({ ...GUEST_DEVICE, is_new: false });
        }

        const decorated = applyCustomToDevices(rawList, store);
        const prevSnap = store.history[0] || null;
        let diff = { has_previous: false, new_count: 0, offline_count: 0, new_devices: [], offline_devices: [] };

        if (prevSnap) {
          const prevMap = {};
          (prevSnap.devices || []).forEach((d) => {
            prevMap[d.device_key || makeKey(d.mac, d.ip)] = d;
          });
          const currMap = {};
          decorated.forEach((d) => {
            currMap[d.device_key] = d;
          });
          const newKeys = Object.keys(currMap).filter((k) => !prevMap[k]);
          const offKeys = Object.keys(prevMap).filter((k) => !currMap[k]);
          decorated.forEach((d) => {
            d.is_new = newKeys.includes(d.device_key);
          });
          diff = {
            has_previous: true,
            new_count: newKeys.length,
            offline_count: offKeys.length,
            new_devices: newKeys.map((k) => ({
              key: k,
              ip: currMap[k].ip,
              name: currMap[k].custom_name || currMap[k].name,
              mac: currMap[k].mac,
            })),
            offline_devices: offKeys.map((k) => ({
              key: k,
              ip: prevMap[k].ip,
              name: prevMap[k].custom_name || prevMap[k].name,
              mac: prevMap[k].mac,
            })),
          };
        }

        const durationMs = Math.max(850, Date.now() - startedMs);
        currentScan = {
          ...currentScan,
          status: "completed",
          phase: `Found ${decorated.length} active devices`,
          checked: 254,
          total: 254,
          found_count: decorated.length,
          percent: 100,
          duration_ms: durationMs,
          diff,
          devices: decorated,
        };

        store.history.unshift({
          scan_id: scanId,
          target: cleanTarget,
          timestamp: new Date().toISOString(),
          duration_ms: durationMs,
          device_count: decorated.length,
          new_count: diff.new_count,
          offline_count: diff.offline_count,
          new_devices: diff.new_devices,
          offline_devices: diff.offline_devices,
          devices: decorated,
        });
        store.history = store.history.slice(0, 30);
        saveStore(store);
      }, 240);

      return buildDemoResponse(currentScan, 202);
    }

    function handle(url, options = {}) {
      const method = (options.method || "GET").toUpperCase();
      const parsed = new URL(url, "http://localhost");
      const path = parsed.pathname;
      const body = options.body ? JSON.parse(options.body) : {};
      const store = loadStore();

      if (path === "/api/network-info") {
        return buildDemoResponse({
          os: "Windows 11 (Demo)",
          hostname: "DESKTOP-KHALID",
          gateway: "192.168.1.1",
          icmp_available: true,
          icmp_note: "",
          interfaces: [
            {
              name: "Wi-Fi",
              ip: "192.168.1.12",
              prefix_len: 24,
              network_cidr: "192.168.1.0/24",
              scan_cidr: "192.168.1.0/24",
              host_count: 254,
              mac: "00:1b:21:4a:9c:12",
              is_primary: true,
              is_capped: false,
            },
          ],
          default_target: "192.168.1.0/24",
          custom_count: Object.keys(store.custom_devices).length,
          history_count: store.history.length,
          scan: currentScan,
        });
      }

      if (path === "/api/scan" && method === "GET") {
        return buildDemoResponse(currentScan);
      }
      if (path === "/api/scan" && method === "POST") {
        return startDemoScan(body.target);
      }
      if (path === "/api/scan/cancel" && method === "POST") {
        if (scanTimer) {
          clearInterval(scanTimer);
          scanTimer = null;
        }
        currentScan.status = "cancelled";
        currentScan.phase = "Scan cancelled";
        return buildDemoResponse(currentScan);
      }

      if (path === "/api/ping-one" && method === "POST") {
        const target = String(body.target || "").trim();
        if (!/^[a-zA-Z0-9][a-zA-Z0-9.\-]{0,252}$/.test(target) || target.includes("..")) {
          return buildDemoResponse({ error: "Invalid target. Enter a valid IPv4 address or hostname." }, 400);
        }
        const isPublic = target === "1.1.1.1" || target === "8.8.8.8" || !target.startsWith("192.168.");
        const base = target === "192.168.1.1" ? 1.5 : isPublic ? 22.0 : 5.2;
        const latency = Number(Math.max(0.5, base + (Math.random() - 0.42) * (isPublic ? 7.5 : 3.2)).toFixed(1));
        return buildDemoResponse({
          target,
          alive: true,
          latency_ms: latency,
          icmp_available: true,
          mode: "ICMP Ping (Demo)",
        });
      }

      if (path === "/api/devices" && method === "GET") {
        return buildDemoResponse({ devices: listMyDevices() });
      }
      if (path === "/api/devices" && method === "POST") {
        const key = body.key || makeKey(body.mac, body.ip);
        if (!key) return buildDemoResponse({ error: "Device MAC or IP required." }, 400);
        store.custom_devices[key] = {
          key,
          mac: (body.mac || "").toLowerCase(),
          last_ip: body.ip || "",
          nickname: (body.nickname || "").trim().slice(0, 80),
          icon: body.icon || "device",
          trusted: Boolean(body.trusted),
          note: (body.note || "").trim().slice(0, 200),
          detected_name: body.detected_name || "",
          vendor: body.vendor || "",
          updated_at: new Date().toISOString(),
        };
        saveStore(store);
        currentScan.devices = applyCustomToDevices(currentScan.devices || [], store);
        return buildDemoResponse({ device: store.custom_devices[key], devices: listMyDevices(), scan: currentScan });
      }
      if (path === "/api/devices" && method === "DELETE") {
        const key = parsed.searchParams.get("key") || "";
        delete store.custom_devices[key];
        saveStore(store);
        currentScan.devices = applyCustomToDevices(currentScan.devices || [], store);
        return buildDemoResponse({ removed: true, devices: listMyDevices(), scan: currentScan });
      }

      if (path === "/api/history" && method === "GET") {
        return buildDemoResponse({ history: store.history });
      }
      if (path === "/api/history" && method === "DELETE") {
        store.history = [];
        saveStore(store);
        return buildDemoResponse({ cleared: true, history: [] });
      }

      return buildDemoResponse({ error: "Not found" }, 404);
    }

    return { handle };
  })();

  function enableDemoModeUI() {
    state.demoMode = true;
    if (els.demoBanner) {
      els.demoBanner.classList.remove("hidden");
    }
  }

  async function apiRequest(url, options = {}) {
    if (state.demoMode) {
      return DemoEngine.handle(url, options);
    }
    const method = (options.method || "GET").toUpperCase();
    const headers = Object.assign({}, options.headers || {});
    if ((method === "POST" || method === "DELETE") && state.csrfToken) {
      headers["X-NetCheck-Token"] = state.csrfToken;
    }
    return fetch(url, Object.assign({}, options, { headers }));
  }

  // ==================== NETWORK INFO & SCANNING ====================
  async function loadNetworkInfo(autoScanIfIdle = false, forceRefresh = false) {
    const d = dict();
    try {
      const url = forceRefresh ? "/api/network-info?refresh=1" : "/api/network-info";
      let res;
      if (state.demoMode) {
        enableDemoModeUI();
        res = await apiRequest(url, { cache: "no-store" });
      } else {
        try {
          res = await fetch(url, { cache: "no-store" });
          const ct = (res.headers.get("content-type") || "").toLowerCase();
          if (!res.ok || !ct.includes("application/json")) {
            throw new Error("static-host");
          }
        } catch (_) {
          // Hosted statically (e.g. GitHub Pages) with no Python backend -> activate Interactive Demo Mode!
          enableDemoModeUI();
          res = await apiRequest(url, { cache: "no-store" });
        }
      }
      const info = await res.json();
      state.networkInfo = info;
      if (info.csrf_token) {
        state.csrfToken = info.csrf_token;
      }

      els.hostChip.textContent = `${info.os} · ${info.hostname}`;
      els.navDevicesBadge.textContent = String(info.custom_count || 0);
      els.navHistoryBadge.textContent = String(info.history_count || 0);
      renderInterfaceSelect(info.interfaces || [], info.default_target);
      renderNetworkDetails();

      if (info.gateway && !els.pingTargetInput.value.trim()) {
        els.pingTargetInput.value = info.gateway;
      }

      if (info.scan) {
        applyScanState(info.scan);
        if (info.scan.status === "scanning") {
          startPolling();
        } else if (autoScanIfIdle && info.scan.status === "idle") {
          await startScan();
        }
      } else if (autoScanIfIdle) {
        await startScan();
      }
    } catch (err) {
      els.hostChip.textContent = d.serverOffline;
      showBanner(d.backendError(err.message), "error");
    }
  }

  function renderInterfaceSelect(interfaces, defaultTarget) {
    els.interfaceSelect.innerHTML = "";
    if (!interfaces.length) {
      const opt = document.createElement("option");
      opt.value = defaultTarget || "192.168.1.0/24";
      opt.textContent = `Default (${opt.value})`;
      els.interfaceSelect.appendChild(opt);
      if (!els.targetInput.value.trim()) {
        els.targetInput.value = opt.value;
      }
      return;
    }

    interfaces.forEach((iface) => {
      const opt = document.createElement("option");
      opt.value = iface.scan_cidr;
      const capTag = iface.is_capped ? " [/24]" : "";
      opt.textContent = `${iface.name} · ${iface.scan_cidr}${capTag}`;
      opt.title = `${iface.name} — Local IP: ${iface.ip}, Subnet: ${iface.network_cidr}`;
      opt.dataset.capped = iface.is_capped ? "1" : "0";
      opt.dataset.networkCidr = iface.network_cidr;
      els.interfaceSelect.appendChild(opt);
    });

    if (!els.targetInput.value.trim()) {
      els.targetInput.value = interfaces[0].scan_cidr;
    }
  }

  async function startScan() {
    const d = dict();
    const target = els.targetInput.value.trim();
    if (!target) {
      showBanner(d.enterTargetError, "error");
      els.targetInput.focus();
      return;
    }

    const timeoutMs = Number(els.timeoutSelect.value) || 800;
    showBanner("");

    try {
      const res = await apiRequest("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          target,
          timeout_ms: timeoutMs,
          resolve_names: true,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        showBanner(data.error || d.startScanError, "error");
        return;
      }
      applyScanState(data);
      startPolling();
    } catch (err) {
      showBanner(d.requestFailed(err.message), "error");
    }
  }

  async function cancelScan() {
    try {
      const res = await apiRequest("/api/scan/cancel", { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        applyScanState(data);
      }
    } catch (_) {
      // Ignore
    }
  }

  function startPolling() {
    stopPolling();
    state.pollTimer = setInterval(async () => {
      try {
        const res = await apiRequest("/api/scan", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        applyScanState(data);
        if (data.status !== "scanning") {
          stopPolling();
          if (data.status === "completed") {
            onScanCompleted(data);
          }
        }
      } catch (_) {
        // Retry next tick
      }
    }, 350);
  }

  function stopPolling() {
    if (state.pollTimer) {
      clearInterval(state.pollTimer);
      state.pollTimer = null;
    }
  }

  function onScanCompleted(scan) {
    if (scan.scan_id && scan.scan_id === state.lastCompletedScanId) return;
    state.lastCompletedScanId = scan.scan_id;

    loadHistory();
    loadMyDevices();

    // Check for newly arrived untrusted devices
    const newUntrusted = (scan.devices || []).filter((d) => d.is_new && !d.trusted && !d.is_local);
    if (newUntrusted.length > 0) {
      const msg = dict().newUnknownAlert(newUntrusted.length);
      showToast(msg);
    }

    if (state.watchSeconds > 0) {
      state.watchRemaining = state.watchSeconds;
      updateWatchChip();
    }
  }

  // ==================== WATCH MODE (AUTO-SCAN) ====================
  function setWatchMode(seconds) {
    state.watchSeconds = Number(seconds) || 0;
    if (state.watchTimer) {
      clearInterval(state.watchTimer);
      state.watchTimer = null;
    }
    if (state.watchSeconds <= 0) {
      state.watchRemaining = 0;
      updateWatchChip();
      return;
    }
    state.watchRemaining = state.watchSeconds;
    updateWatchChip();
    state.watchTimer = setInterval(() => {
      if (state.scan && state.scan.status === "scanning") {
        return;
      }
      state.watchRemaining -= 1;
      if (state.watchRemaining <= 0) {
        state.watchRemaining = state.watchSeconds;
        startScan();
      }
      updateWatchChip();
    }, 1000);
  }

  function updateWatchChip() {
    if (state.watchSeconds <= 0) {
      els.watchCountdown.classList.add("hidden");
      return;
    }
    els.watchCountdown.classList.remove("hidden");
    els.watchCountdown.textContent = dict().watchNextIn(Math.max(1, state.watchRemaining));
  }

  // ==================== SCAN STATE RENDER ====================
  function applyScanState(scan) {
    state.scan = scan;
    const d = dict();
    const isScanning = scan.status === "scanning";

    if (isScanning) {
      els.scanBtn.classList.remove("btn-primary");
      els.scanBtn.classList.add("btn-danger");
      els.scanBtnText.textContent = d.stopScan;
    } else {
      els.scanBtn.classList.remove("btn-danger");
      els.scanBtn.classList.add("btn-primary");
      els.scanBtnText.textContent = d.scanNetwork;
    }

    els.statusDot.className = `status-dot ${scan.status || "idle"}`;
    els.phaseText.textContent =
      scan.status === "idle" ? d.readyStatus : d.translatePhase(scan.phase);

    const pct = Math.max(0, Math.min(100, Number(scan.percent || 0)));
    els.progressFill.style.width = `${pct}%`;
    els.progressFill.className = `progress-fill ${scan.status === "scanning" ? "" : scan.status}`;
    els.progressBar.setAttribute("aria-valuenow", String(pct));

    if (scan.total > 0) {
      els.progressCount.textContent = d.hostsProgress(scan.checked, scan.total);
      els.progressPercent.textContent = `${pct}%`;
    } else {
      els.progressCount.textContent = "";
      els.progressPercent.textContent = "";
    }

    // Banner priority: Error > New Untrusted Alert > Notes > Capped Subnet Info
    const newUntrusted = (scan.devices || []).filter((dev) => dev.is_new && !dev.trusted && !dev.is_local);
    if (scan.error) {
      showBanner(scan.error, "error");
    } else if (!isScanning && newUntrusted.length > 0) {
      showBanner(d.newUnknownAlert(newUntrusted.length), "alert");
    } else if (scan.notes && scan.notes.length > 0) {
      showBanner(scan.notes.map(localizeNote).join(" "), "info");
    } else {
      const selectedOpt = els.interfaceSelect.selectedOptions[0];
      if (selectedOpt && selectedOpt.dataset.capped === "1" && els.targetInput.value.trim() === selectedOpt.value) {
        showBanner(d.cappedNotice(selectedOpt.dataset.networkCidr, selectedOpt.value), "info");
      } else {
        showBanner("");
      }
    }

    const devices = Array.isArray(scan.devices) ? scan.devices : [];
    const namedCount = devices.filter((dev) => dev.name_resolved || (dev.custom_name && dev.custom_name.trim())).length;

    els.navScannerBadge.textContent = String(devices.length);

    if (scan.status === "idle") {
      els.kpiDevices.textContent = "—";
      els.kpiDevicesSub.textContent = d.kpiDevicesSubIdle;
      els.kpiNamed.textContent = "—";
      els.kpiNamedSub.textContent = d.kpiNamedSubIdle;
      els.kpiTarget.textContent = "—";
      els.kpiTargetSub.textContent = d.kpiTargetSubIdle;
      els.kpiDuration.textContent = "—";
      els.kpiModeSub.textContent = d.kpiModeNoPorts;
    } else {
      els.kpiDevices.textContent = isScanning ? `${scan.found_count || 0}…` : String(devices.length);
      els.kpiDevicesSub.textContent = isScanning ? d.kpiDevicesSubScanning : d.kpiDevicesSubIdle;

      els.kpiNamed.textContent = isScanning ? "…" : String(namedCount);
      els.kpiNamedSub.textContent =
        isScanning || devices.length === 0
          ? d.kpiNamedSubIdle
          : d.resolvedOf(namedCount, devices.length);

      els.kpiTarget.textContent = scan.target || "—";
      els.kpiTargetSub.textContent = scan.total ? d.hostsChecked(scan.total) : d.kpiTargetSubIdle;

      els.kpiDuration.textContent = isScanning ? d.kpiDurationRunning : formatDuration(scan.duration_ms);
      if (scan.icmp_available === true) {
        els.kpiModeSub.textContent = d.kpiModeIcmpArp;
      } else if (scan.icmp_available === false) {
        els.kpiModeSub.textContent = d.kpiModeArpOnly;
      } else {
        els.kpiModeSub.textContent = d.kpiModeNoPorts;
      }
    }

    const hasDevices = devices.length > 0 && !isScanning;
    els.downloadResultsBtn.disabled = !hasDevices;
    if (!hasDevices) {
      closeDownloadMenu();
    }

    renderTable();
  }

  function getFilteredAndSortedDevices() {
    const devices = (state.scan && Array.isArray(state.scan.devices)) ? state.scan.devices : [];
    const q = state.searchQuery.trim().toLowerCase();

    const filtered = devices.filter((dev) => {
      const hasName = Boolean(dev.name_resolved || (dev.custom_name && dev.custom_name.trim()));
      if (state.nameFilter === "named" && !hasName) return false;
      if (state.nameFilter === "unnamed" && hasName) return false;
      if (state.nameFilter === "trusted" && !dev.trusted) return false;
      if (!q) return true;
      const privateTerm = dev.is_private_mac ? "private randomized mac خاص" : "";
      const trustedTerm = dev.trusted ? "trusted موثوق" : "";
      const localizedName = localizeDetectedName(dev);
      const haystack = `${dev.ip} ${dev.name} ${dev.custom_name || ""} ${localizedName} ${dev.mac} ${dev.vendor || ""} ${dev.note || ""} ${privateTerm} ${trustedTerm} ${dev.discovery_method} ${dev.name_source}`.toLowerCase();
      return haystack.includes(q);
    });

    const dir = state.sortDir === "asc" ? 1 : -1;
    filtered.sort((a, b) => {
      switch (state.sortKey) {
        case "ip":
          return (ipToNumber(a.ip) - ipToNumber(b.ip)) * dir;
        case "name":
          return getPrimaryDisplayName(a).localeCompare(getPrimaryDisplayName(b), undefined, { sensitivity: "base" }) * dir;
        case "latency": {
          const la = a.latency_ms === null || a.latency_ms === undefined ? Number.MAX_SAFE_INTEGER : Number(a.latency_ms);
          const lb = b.latency_ms === null || b.latency_ms === undefined ? Number.MAX_SAFE_INTEGER : Number(b.latency_ms);
          return (la - lb) * dir;
        }
        case "discovery":
          return String(a.discovery_method || "").localeCompare(String(b.discovery_method || "")) * dir;
        case "mac":
          return String(a.mac || "zzz").localeCompare(String(b.mac || "zzz")) * dir;
        default:
          return 0;
      }
    });
    return filtered;
  }

  function updateSortIndicators() {
    els.sortHeaders.forEach((th) => {
      const indicator = th.querySelector(".sort-indicator");
      if (!indicator) return;
      if (th.dataset.sort === state.sortKey) {
        indicator.textContent = state.sortDir === "asc" ? "▲" : "▼";
      } else {
        indicator.textContent = "";
      }
    });
  }

  function renderTable(flashIp = "") {
    updateSortIndicators();
    const d = dict();
    const scan = state.scan;
    const allDevices = (scan && Array.isArray(scan.devices)) ? scan.devices : [];
    const rows = getFilteredAndSortedDevices();

    els.visibleCountBadge.textContent =
      rows.length === allDevices.length ? String(allDevices.length) : `${rows.length}/${allDevices.length}`;

    if (scan && scan.status === "scanning" && allDevices.length === 0) {
      els.deviceTableBody.innerHTML = `
        <tr class="empty-row">
          <td colspan="6">
            <div class="empty-state">
              <p class="empty-title">${escapeHtml(d.scanningTitle(scan.target))}</p>
              <p class="empty-desc">${escapeHtml(d.translatePhase(scan.phase))}</p>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    if (allDevices.length === 0) {
      els.deviceTableBody.innerHTML = `
        <tr class="empty-row">
          <td colspan="6">
            <div class="empty-state">
              <p class="empty-title">${escapeHtml(d.emptyNoneTitle)}</p>
              <p class="empty-desc">${escapeHtml(d.emptyNoneDesc)}</p>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    if (rows.length === 0) {
      els.deviceTableBody.innerHTML = `
        <tr class="empty-row">
          <td colspan="6">
            <div class="empty-state">
              <p class="empty-title">${escapeHtml(d.emptyFilterTitle)}</p>
              <p class="empty-desc">${escapeHtml(d.emptyFilterDesc)}</p>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    const html = rows
      .map((dev) => {
        const roleTags = [];
        if (dev.is_local) roleTags.push(`<span class="tag tag-local">${escapeHtml(d.tagLocal)}</span>`);
        if (dev.is_gateway) roleTags.push(`<span class="tag tag-gateway">${escapeHtml(d.tagGateway)}</span>`);
        if (dev.trusted) roleTags.push(`<span class="tag tag-trusted">${escapeHtml(d.tagTrusted)}</span>`);
        if (dev.is_new && !dev.is_local) roleTags.push(`<span class="tag tag-new">${escapeHtml(d.tagNew)}</span>`);
        if (dev.is_private_mac && !dev.is_local && !dev.custom_name) {
          roleTags.push(
            `<span class="tag tag-private" title="${escapeHtml(d.tagPrivateTitle)}">${escapeHtml(d.tagPrivate)}</span>`
          );
        }

        const primaryName = getPrimaryDisplayName(dev);
        const detectedName = localizeDetectedName(dev);
        const hasCustom = Boolean(dev.custom_name && dev.custom_name.trim());
        const nameClass = hasCustom || dev.name_resolved || dev.is_gateway ? "device-name" : "device-name unnamed";
        const localizedSource = d.sources[dev.name_source] || dev.name_source;

        let sourceNote = "";
        if (hasCustom) {
          const extra = dev.note ? ` · ${escapeHtml(dev.note)}` : ` · ${escapeHtml(detectedName)}`;
          sourceNote = `<span class="name-source">${extra.slice(3)}</span>`;
        } else if (dev.name_resolved && dev.name_source && dev.name_source !== "None") {
          const vendorExtra = dev.vendor ? ` · ${escapeHtml(dev.vendor)}` : "";
          sourceNote = `<span class="name-source">${escapeHtml(d.viaPrefix)} ${escapeHtml(localizedSource)}${vendorExtra}</span>`;
        } else if (dev.is_private_mac && !dev.is_local) {
          sourceNote = `<span class="name-source">${escapeHtml(d.privateMacHint)}</span>`;
        } else if (dev.name_source && dev.name_source !== "None") {
          sourceNote = `<span class="name-source">${escapeHtml(d.viaPrefix)} ${escapeHtml(localizedSource)}</span>`;
        } else {
          sourceNote = `<span class="name-source">${escapeHtml(d.noHostnameHint)}</span>`;
        }

        let statusMetric = d.statusOnline;
        let latencyDir = "";
        if (dev.is_local) {
          statusMetric = d.statusLocal;
        } else if (dev.latency_ms !== null && dev.latency_ms !== undefined) {
          statusMetric = dev.latency_ms < 1 ? "<1 ms" : `${dev.latency_ms} ms`;
          latencyDir = ' dir="ltr"';
        } else if (dev.discovery_method === "ARP Cache") {
          statusMetric = d.statusArp;
        }

        const localizedMethod = d.methods[dev.discovery_method] || dev.discovery_method;
        const iconBoxClass = dev.trusted ? "dev-icon-box trusted" : dev.is_local ? "dev-icon-box local" : "dev-icon-box";
        const flashClass = flashIp && flashIp === dev.ip ? ' class="row-flash"' : "";

        return `
          <tr${flashClass} data-ip="${escapeHtml(dev.ip)}">
            <td>
              <div class="ip-cell">
                <span class="ip-value" dir="ltr">${escapeHtml(dev.ip)}</span>
                <button
                  type="button"
                  class="copy-btn"
                  data-copy="${escapeHtml(dev.ip)}"
                  title="${escapeHtml(d.copyIpTitle)}"
                  aria-label="${escapeHtml(d.copyIpTitle)} ${escapeHtml(dev.ip)}"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                  </svg>
                </button>
              </div>
            </td>
            <td>
              <div class="name-wrap">
                <div class="${iconBoxClass}" aria-hidden="true">${getDeviceIconSvg(dev.icon)}</div>
                <div class="name-cell">
                  <div class="name-primary">
                    <span class="${nameClass}">${escapeHtml(primaryName)}</span>
                    ${roleTags.join("")}
                  </div>
                  ${sourceNote}
                </div>
              </div>
            </td>
            <td>
              <div class="status-cell">
                <span class="online-dot" aria-hidden="true"></span>
                <span class="latency-text"${latencyDir}>${escapeHtml(statusMetric)}</span>
              </div>
            </td>
            <td>
              <span class="method-badge">${escapeHtml(localizedMethod)}</span>
            </td>
            <td>
              <div class="mac-stack">
                <span class="mac-value" dir="ltr">${dev.mac ? escapeHtml(dev.mac) : "—"}</span>
                ${dev.vendor ? `<span class="mac-vendor">${escapeHtml(dev.vendor)}</span>` : ""}
              </div>
            </td>
            <td>
              <div class="row-actions">
                <button
                  type="button"
                  class="row-action-btn reping-btn"
                  data-reping="${escapeHtml(dev.ip)}"
                  title="${escapeHtml(d.repingTitle)}"
                  aria-label="${escapeHtml(d.repingTitle)}"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </button>
                <button
                  type="button"
                  class="row-action-btn edit-btn"
                  data-edit-ip="${escapeHtml(dev.ip)}"
                  title="${escapeHtml(d.editDeviceTitle)}"
                  aria-label="${escapeHtml(d.editDeviceTitle)}"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `;
      })
      .join("");

    els.deviceTableBody.innerHTML = html;
  }

  // ==================== SINGLE-DEVICE RE-PING ====================
  async function handleSingleReping(ip, btnEl) {
    const d = dict();
    if (btnEl) {
      btnEl.classList.add("spinning");
      btnEl.disabled = true;
    }
    try {
      const res = await apiRequest("/api/ping-one", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target: ip, timeout_ms: 1000 }),
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || d.toastPingFail(ip));
        return;
      }
      if (data.alive) {
        if (state.scan && Array.isArray(state.scan.devices)) {
          const match = state.scan.devices.find((item) => item.ip === ip);
          if (match && !match.is_local && data.latency_ms !== null && data.latency_ms !== undefined) {
            match.latency_ms = data.latency_ms;
          }
        }
        renderTable(ip);
        showToast(d.toastPingOk(ip, data.latency_ms));
      } else {
        showToast(d.toastPingFail(ip));
      }
    } catch (err) {
      showToast(d.requestFailed(err.message));
    } finally {
      if (btnEl) {
        btnEl.classList.remove("spinning");
        btnEl.disabled = false;
      }
    }
  }

  // ==================== MY DEVICES & EDIT MODAL ====================
  async function loadMyDevices() {
    try {
      const res = await apiRequest("/api/devices", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      state.myDevices = Array.isArray(data.devices) ? data.devices : [];
      els.navDevicesBadge.textContent = String(state.myDevices.length);
      renderMyDevices();
    } catch (_) {
      // Ignore
    }
  }

  function renderMyDevices() {
    const d = dict();
    const q = state.myDevicesQuery.trim().toLowerCase();
    const items = state.myDevices.filter((dev) => {
      if (!q) return true;
      const hay = `${dev.nickname} ${dev.live_ip} ${dev.last_ip} ${dev.mac} ${dev.vendor} ${dev.note} ${dev.live_name}`.toLowerCase();
      return hay.includes(q);
    });

    if (items.length === 0) {
      els.myDevicesList.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <p class="empty-title">${escapeHtml(d.myDevicesEmptyTitle)}</p>
          <p class="empty-desc">${escapeHtml(d.myDevicesEmptyDesc)}</p>
        </div>
      `;
      return;
    }

    els.myDevicesList.innerHTML = items
      .map((dev) => {
        const displayName = dev.nickname || dev.live_name || dev.last_ip || dev.mac;
        const statusDot = dev.online ? '<span class="online-dot"></span>' : '<span class="offline-dot"></span>';
        const statusText = dev.online ? d.statusOnline : d.statusOffline;
        const iconClass = dev.trusted ? "dev-icon-box trusted" : "dev-icon-box";

        return `
          <article class="saved-card">
            <div class="saved-card-top">
              <div class="name-wrap">
                <div class="${iconClass}">${getDeviceIconSvg(dev.icon)}</div>
                <div class="name-cell">
                  <div class="name-primary">
                    <span class="device-name">${escapeHtml(displayName)}</span>
                    ${dev.trusted ? `<span class="tag tag-trusted">${escapeHtml(d.tagTrusted)}</span>` : ""}
                  </div>
                  <div class="status-cell">
                    ${statusDot}
                    <span class="name-source">${escapeHtml(statusText)}${dev.online && dev.latency_ms !== null && dev.latency_ms !== undefined ? ` · ${dev.latency_ms} ms` : ""}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="saved-card-meta">
              <div><span class="strong">IP:</span> <span class="mono" dir="ltr">${escapeHtml(dev.live_ip || dev.last_ip || "—")}</span></div>
              <div><span class="strong">MAC:</span> <span class="mono" dir="ltr">${escapeHtml(dev.mac || "—")}</span>${dev.vendor ? ` · ${escapeHtml(dev.vendor)}` : ""}</div>
              ${dev.note ? `<div>${escapeHtml(dev.note)}</div>` : ""}
            </div>

            <div class="saved-card-actions">
              <button type="button" class="btn btn-secondary" data-toggle-trust="${escapeHtml(dev.key)}">
                ${escapeHtml(dev.trusted ? d.btnUntrust : d.btnTrust)}
              </button>
              <div class="saved-card-btns">
                <button type="button" class="btn btn-secondary" data-edit-saved="${escapeHtml(dev.key)}">${escapeHtml(d.btnEdit)}</button>
                <button type="button" class="btn btn-ghost-danger" data-delete-saved="${escapeHtml(dev.key)}">${escapeHtml(d.btnRemove)}</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderIconPicker() {
    const d = dict();
    els.iconPickerGrid.innerHTML = ICON_ORDER.map((iconKey) => {
      const selected = state.selectedIcon === iconKey ? " selected" : "";
      const label = (d.iconLabels && d.iconLabels[iconKey]) || iconKey;
      return `
        <button type="button" class="icon-choice${selected}" data-icon-choice="${iconKey}">
          ${getDeviceIconSvg(iconKey)}
          <span>${escapeHtml(label)}</span>
        </button>
      `;
    }).join("");
  }

  function openEditModal(dev) {
    state.editingDevice = {
      key: dev.device_key || dev.key || "",
      ip: dev.ip || dev.live_ip || dev.last_ip || "",
      mac: dev.mac || "",
      detected_name: dev.name || dev.detected_name || dev.live_name || "",
      vendor: dev.vendor || "",
      hasSaved: Boolean(dev.custom_name || dev.nickname || dev.trusted || dev.note || dev.key),
    };
    state.selectedIcon = dev.icon || "device";

    const metaParts = [];
    if (state.editingDevice.ip) metaParts.push(state.editingDevice.ip);
    if (state.editingDevice.mac) metaParts.push(state.editingDevice.mac);
    els.editModalMeta.textContent = metaParts.join(" · ");

    els.editNicknameInput.value = dev.custom_name || dev.nickname || "";
    els.editNoteInput.value = dev.note || "";
    els.editTrustedCheck.checked = Boolean(dev.trusted);

    // Show Remove button only if already stored in My Devices
    const existsInSaved = state.myDevices.some((item) => item.key === state.editingDevice.key);
    els.deleteCustomBtn.classList.toggle("hidden", !existsInSaved);

    renderIconPicker();
    els.editModal.classList.remove("hidden");
    els.editNicknameInput.focus();
  }

  function closeEditModal() {
    els.editModal.classList.add("hidden");
    state.editingDevice = null;
  }

  async function saveEditedDevice(e) {
    e.preventDefault();
    if (!state.editingDevice) return;
    const payload = {
      key: state.editingDevice.key,
      ip: state.editingDevice.ip,
      mac: state.editingDevice.mac,
      detected_name: state.editingDevice.detected_name,
      vendor: state.editingDevice.vendor,
      nickname: els.editNicknameInput.value.trim(),
      icon: state.selectedIcon,
      trusted: els.editTrustedCheck.checked,
      note: els.editNoteInput.value.trim(),
    };
    try {
      const res = await apiRequest("/api/devices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Unable to save");
        return;
      }
      state.myDevices = data.devices || [];
      els.navDevicesBadge.textContent = String(state.myDevices.length);
      if (data.scan) applyScanState(data.scan);
      renderMyDevices();
      closeEditModal();
      showToast(dict().toastSavedDevice);
    } catch (err) {
      showToast(dict().requestFailed(err.message));
    }
  }

  async function deleteSavedDevice(key) {
    if (!key) return;
    try {
      const res = await apiRequest(`/api/devices?key=${encodeURIComponent(key)}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) return;
      state.myDevices = data.devices || [];
      els.navDevicesBadge.textContent = String(state.myDevices.length);
      if (data.scan) applyScanState(data.scan);
      renderMyDevices();
      closeEditModal();
      showToast(dict().toastRemovedDevice);
    } catch (err) {
      showToast(dict().requestFailed(err.message));
    }
  }

  // ==================== HISTORY TAB ====================
  async function loadHistory() {
    try {
      const res = await apiRequest("/api/history", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      state.history = Array.isArray(data.history) ? data.history : [];
      els.navHistoryBadge.textContent = String(state.history.length);
      renderHistory();
    } catch (_) {
      // Ignore
    }
  }

  function renderHistory() {
    const d = dict();
    if (state.history.length === 0) {
      els.historyDiffSection.classList.add("hidden");
      els.historyList.innerHTML = `
        <div class="empty-state">
          <p class="empty-title">${escapeHtml(d.historyEmptyTitle)}</p>
          <p class="empty-desc">${escapeHtml(d.historyEmptyDesc)}</p>
        </div>
      `;
      return;
    }

    // Latest scan diff summary
    const latest = state.history[0];
    const newList = latest.new_devices || [];
    const offList = latest.offline_devices || [];
    if (state.history.length >= 2) {
      els.historyDiffSection.classList.remove("hidden");
      els.diffNewCount.textContent = String(newList.length);
      els.diffOfflineCount.textContent = String(offList.length);

      els.diffNewList.innerHTML =
        newList.length === 0
          ? `<span class="muted" style="font-size:12.5px;">${escapeHtml(d.diffNoneNew)}</span>`
          : newList
              .map(
                (item) => `
              <div class="diff-item">
                <span class="strong">${escapeHtml(item.name || item.ip)}</span>
                <span class="mono muted" dir="ltr">${escapeHtml(item.ip)}</span>
              </div>`
              )
              .join("");

      els.diffOfflineList.innerHTML =
        offList.length === 0
          ? `<span class="muted" style="font-size:12.5px;">${escapeHtml(d.diffNoneOffline)}</span>`
          : offList
              .map(
                (item) => `
              <div class="diff-item">
                <span class="strong">${escapeHtml(item.name || item.ip)}</span>
                <span class="mono muted" dir="ltr">${escapeHtml(item.ip)}</span>
              </div>`
              )
              .join("");
    } else {
      els.historyDiffSection.classList.add("hidden");
    }

    els.historyList.innerHTML = state.history
      .map((snap) => {
        const expanded = state.expandedHistoryId === snap.scan_id;
        const diffBadges = [];
        if (snap.new_count > 0) diffBadges.push(`<span class="tag tag-new">+${snap.new_count}</span>`);
        if (snap.offline_count > 0) diffBadges.push(`<span class="tag tag-private">-${snap.offline_count}</span>`);

        const detailHtml = expanded
          ? `<div class="history-detail">${(snap.devices || [])
              .map(
                (dev) => `
                <div class="history-dev-pill">
                  <span class="strong">${escapeHtml(dev.custom_name || dev.name || dev.ip)}</span>
                  <span class="mono muted" dir="ltr">${escapeHtml(dev.ip)}${dev.mac ? ` · ${escapeHtml(dev.mac)}` : ""}</span>
                </div>`
              )
              .join("")}</div>`
          : "";

        return `
          <div class="history-entry">
            <button type="button" class="history-summary" data-history-id="${escapeHtml(snap.scan_id)}">
              <div class="history-main">
                <span class="mono strong" dir="ltr">${escapeHtml(snap.target)}</span>
                <span class="count-badge">${escapeHtml(d.devicesShort(snap.device_count))}</span>
                ${diffBadges.join("")}
              </div>
              <div class="history-stats">
                <span>${escapeHtml(formatDuration(snap.duration_ms))}</span>
                <span>·</span>
                <span>${escapeHtml(formatTimestamp(snap.timestamp))}</span>
              </div>
            </button>
            ${detailHtml}
          </div>
        `;
      })
      .join("");
  }

  async function clearHistory() {
    try {
      const res = await apiRequest("/api/history", { method: "DELETE" });
      if (!res.ok) return;
      state.history = [];
      state.expandedHistoryId = null;
      els.navHistoryBadge.textContent = "0";
      renderHistory();
      showToast(dict().toastHistoryCleared);
    } catch (_) {
      // Ignore
    }
  }

  // ==================== QUICK TOOLS: LIVE PING MONITOR ====================
  function updatePingStatsAndChart() {
    const samples = state.pingSamples;
    const total = samples.length;
    if (total === 0) {
      els.pingStatLast.textContent = "—";
      els.pingStatAvg.textContent = "—";
      els.pingStatMinMax.textContent = "—";
      els.pingStatLoss.textContent = "—";
      els.sparkLine.setAttribute("d", "");
      els.sparkArea.setAttribute("d", "");
      els.sparkDot.setAttribute("cx", "-10");
      els.sparkDot.setAttribute("cy", "-10");
      els.sparkEmptyMsg.classList.remove("hidden");
      return;
    }

    els.sparkEmptyMsg.classList.add("hidden");
    const okLatencies = samples.filter((s) => s.alive && s.latency_ms !== null).map((s) => Number(s.latency_ms));
    const lost = samples.filter((s) => !s.alive).length;
    const lossPct = Math.round((lost / total) * 100);
    const latest = samples[samples.length - 1];

    els.pingStatLast.textContent = latest.alive
      ? latest.latency_ms !== null
        ? `${latest.latency_ms} ms`
        : "OK"
      : dict().pingTimeoutLabel;

    if (okLatencies.length > 0) {
      const avg = okLatencies.reduce((a, b) => a + b, 0) / okLatencies.length;
      const minVal = Math.min(...okLatencies);
      const maxVal = Math.max(...okLatencies);
      els.pingStatAvg.textContent = `${avg.toFixed(1)} ms`;
      els.pingStatMinMax.textContent = `${minVal} / ${maxVal} ms`;
    } else {
      els.pingStatAvg.textContent = "—";
      els.pingStatMinMax.textContent = "—";
    }
    els.pingStatLoss.textContent = `${lossPct}%`;

    // Render SVG sparkline (last 30 points)
    const chartPoints = samples.slice(-30).map((s) => (s.alive && s.latency_ms !== null ? Number(s.latency_ms) : null));
    const validVals = chartPoints.filter((v) => v !== null);
    if (validVals.length === 0) {
      els.sparkLine.setAttribute("d", "");
      els.sparkArea.setAttribute("d", "");
      els.sparkDot.setAttribute("cx", "-10");
      els.sparkDot.setAttribute("cy", "-10");
      return;
    }

    const W = 460;
    const H = 120;
    const padY = 14;
    const maxY = Math.max(10, Math.max(...validVals) * 1.2);
    const stepX = chartPoints.length > 1 ? W / (chartPoints.length - 1) : W;

    const coords = [];
    chartPoints.forEach((v, idx) => {
      if (v === null) return;
      const x = chartPoints.length === 1 ? W / 2 : idx * stepX;
      const y = H - padY - (v / maxY) * (H - padY * 2);
      coords.push([x, Math.max(padY, Math.min(H - padY, y))]);
    });

    if (coords.length === 1) {
      const [x, y] = coords[0];
      els.sparkLine.setAttribute("d", `M 0 ${y.toFixed(1)} L ${W} ${y.toFixed(1)}`);
      els.sparkArea.setAttribute("d", `M 0 ${y.toFixed(1)} L ${W} ${y.toFixed(1)} L ${W} ${H} L 0 ${H} Z`);
      els.sparkDot.setAttribute("cx", x.toFixed(1));
      els.sparkDot.setAttribute("cy", y.toFixed(1));
      return;
    }

    const lineD = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
    const firstX = coords[0][0].toFixed(1);
    const last = coords[coords.length - 1];
    const areaD = `${lineD} L ${last[0].toFixed(1)} ${H} L ${firstX} ${H} Z`;
    els.sparkLine.setAttribute("d", lineD);
    els.sparkArea.setAttribute("d", areaD);
    els.sparkDot.setAttribute("cx", last[0].toFixed(1));
    els.sparkDot.setAttribute("cy", last[1].toFixed(1));
  }

  function renderPingLog() {
    const d = dict();
    const recent = state.pingSamples.slice(-18).reverse();
    els.pingLog.innerHTML = recent
      .map((s) => {
        const statusHtml = s.alive
          ? `<span class="ping-ok" dir="ltr">${s.latency_ms !== null ? `${s.latency_ms} ms` : escapeHtml(s.mode || "OK")}</span>`
          : `<span class="ping-fail">${escapeHtml(d.pingTimeoutLabel)}</span>`;
        return `
          <div class="ping-log-row">
            <span class="muted" dir="ltr">#${s.seq} · ${escapeHtml(s.target)}</span>
            ${statusHtml}
          </div>
        `;
      })
      .join("");
  }

  async function runOneMonitorPing() {
    if (!state.pingRunning) return;
    const target = els.pingTargetInput.value.trim();
    if (!target) {
      stopPingMonitor();
      return;
    }
    try {
      const res = await apiRequest("/api/ping-one", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target, timeout_ms: 1000 }),
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Invalid ping target");
        stopPingMonitor();
        return;
      }
      state.pingSeq += 1;
      state.pingSamples.push({
        seq: state.pingSeq,
        target: data.target,
        alive: Boolean(data.alive),
        latency_ms: data.latency_ms,
        mode: data.mode,
      });
      if (state.pingSamples.length > 60) state.pingSamples.shift();
      updatePingStatsAndChart();
      renderPingLog();
    } catch (_) {
      // Skip transient network error
    }

    if (state.pingRunning) {
      state.pingTimer = setTimeout(runOneMonitorPing, 1000);
    }
  }

  function startPingMonitor() {
    const target = els.pingTargetInput.value.trim();
    if (!target) {
      els.pingTargetInput.focus();
      return;
    }
    state.pingRunning = true;
    state.pingSamples = [];
    state.pingSeq = 0;
    els.pingStartBtn.classList.remove("btn-primary");
    els.pingStartBtn.classList.add("btn-danger");
    els.pingStartBtn.textContent = dict().stopPing;
    updatePingStatsAndChart();
    renderPingLog();
    runOneMonitorPing();
  }

  function stopPingMonitor() {
    state.pingRunning = false;
    if (state.pingTimer) {
      clearTimeout(state.pingTimer);
      state.pingTimer = null;
    }
    els.pingStartBtn.classList.remove("btn-danger");
    els.pingStartBtn.classList.add("btn-primary");
    els.pingStartBtn.textContent = dict().startPing;
  }

  // ==================== QUICK TOOLS: NETWORK DETAILS ====================
  function renderNetworkDetails() {
    const d = dict();
    const info = state.networkInfo;
    if (!info) return;
    const primary = (info.interfaces && info.interfaces[0]) || {};

    const rows = [
      { label: d.detailOs, val: info.os || "—", mono: false, copy: false },
      { label: d.detailHost, val: info.hostname || "—", mono: true, copy: true },
      { label: d.detailAdapter, val: primary.name || "—", mono: false, copy: false },
      { label: d.detailIp, val: primary.ip || "—", mono: true, copy: Boolean(primary.ip) },
      { label: d.detailSubnet, val: primary.network_cidr || "—", mono: true, copy: Boolean(primary.network_cidr) },
      { label: d.detailGateway, val: info.gateway || "—", mono: true, copy: Boolean(info.gateway) },
      { label: d.detailMac, val: primary.mac || "—", mono: true, copy: Boolean(primary.mac) },
      { label: d.detailIcmp, val: info.icmp_available ? d.icmpReady : d.icmpRestricted, mono: false, copy: false },
    ];

    els.netDetailsGrid.innerHTML = rows
      .map(
        (r) => `
      <div class="detail-row">
        <span class="detail-label">${escapeHtml(r.label)}</span>
        <div class="detail-val-wrap">
          <span class="detail-val${r.mono ? " mono" : ""}"${r.mono ? ' dir="ltr"' : ""}>${escapeHtml(r.val)}</span>
          ${
            r.copy
              ? `<button type="button" class="copy-btn" data-copy="${escapeHtml(r.val)}" style="opacity:0.8;" title="${escapeHtml(d.copyIpTitle)}">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                  </svg>
                </button>`
              : ""
          }
        </div>
      </div>`
      )
      .join("");
  }

  // ==================== DOWNLOAD MENU & CLIPBOARD ====================
  function toggleDownloadMenu() {
    const isHidden = els.downloadMenu.classList.contains("hidden");
    els.downloadMenu.classList.toggle("hidden", !isHidden);
    els.downloadResultsBtn.setAttribute("aria-expanded", isHidden ? "true" : "false");
  }

  function closeDownloadMenu() {
    els.downloadMenu.classList.add("hidden");
    els.downloadResultsBtn.setAttribute("aria-expanded", "false");
  }

  function sanitizeCsvCell(val) {
    const str = val === null || val === undefined ? "" : String(val);
    const safe = /^[=+\-@\t\r]/.test(str) ? `'${str}` : str;
    return `"${safe.replace(/"/g, '""')}"`;
  }

  function triggerExport(format) {
    closeDownloadMenu();
    if (state.demoMode) {
      const scan = state.scan || { target: "192.168.1.0/24", devices: [] };
      const devices = Array.isArray(scan.devices) ? scan.devices : [];
      const safeTarget = String(scan.target || "network").replace(/[^A-Za-z0-9._-]+/g, "_");
      let blob;
      let filename;

      if (format === "json") {
        const payload = {
          scanner: "NetCheck (Interactive Demo · No Port Scanning)",
          target: scan.target,
          status: scan.status,
          duration_ms: scan.duration_ms,
          device_count: devices.length,
          devices,
        };
        blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
        filename = `netcheck-${safeTarget}.json`;
      } else {
        const header = [
          "IP Address",
          "Device Name",
          "Custom Nickname",
          "Trusted",
          "Status",
          "Latency (ms)",
          "Discovery Method",
          "Name Source",
          "MAC Address",
          "Vendor / MAC Note",
          "Role",
        ];
        const lines = [header.map(sanitizeCsvCell).join(",")];
        devices.forEach((dev) => {
          const role = dev.is_local ? "This Device" : dev.is_gateway ? "Gateway" : "Device";
          const macNote = dev.vendor || (dev.is_private_mac ? "Private Wi-Fi MAC" : "");
          const row = [
            dev.ip || "",
            dev.name || "",
            dev.custom_name || "",
            dev.trusted ? "Yes" : "No",
            dev.status || "Online",
            dev.latency_ms === null || dev.latency_ms === undefined ? "" : dev.latency_ms,
            dev.discovery_method || "",
            dev.name_source || "",
            dev.mac || "",
            macNote,
            role,
          ];
          lines.push(row.map(sanitizeCsvCell).join(","));
        });
        blob = new Blob(["\uFEFF" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
        filename = `netcheck-${safeTarget}.csv`;
      }

      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1500);
      return;
    }

    const link = document.createElement("a");
    link.href = `/api/export?format=${encodeURIComponent(format)}`;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async function copyToClipboard(text) {
    const d = dict();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        showToast(d.toastCopied(text));
        return;
      }
    } catch (_) {
      // Fallback below
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showToast(d.toastCopied(text));
    } catch (_) {
      showToast(d.toastCopyFail);
    }
    document.body.removeChild(ta);
  }

  // ==================== EVENT BINDINGS ====================
  function bindEvents() {
    els.langEnBtn.addEventListener("click", () => applyLanguage("en"));
    els.langArBtn.addEventListener("click", () => applyLanguage("ar"));

    els.themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });

    els.navTabs.forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    els.interfaceSelect.addEventListener("change", () => {
      const val = els.interfaceSelect.value;
      if (val) els.targetInput.value = val;
    });

    els.refreshInterfacesBtn.addEventListener("click", async () => {
      await loadNetworkInfo(false, true);
      showToast(dict().toastRefreshed);
    });

    els.watchSelect.addEventListener("change", () => {
      setWatchMode(Number(els.watchSelect.value) || 0);
    });

    els.scanForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (state.scan && state.scan.status === "scanning") {
        await cancelScan();
      } else {
        await startScan();
      }
    });

    els.searchInput.addEventListener("input", () => {
      state.searchQuery = els.searchInput.value;
      renderTable();
    });

    els.filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        els.filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.nameFilter = btn.dataset.filter || "all";
        renderTable();
      });
    });

    els.sortHeaders.forEach((th) => {
      th.addEventListener("click", () => {
        const key = th.dataset.sort;
        if (!key) return;
        if (state.sortKey === key) {
          state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
        } else {
          state.sortKey = key;
          state.sortDir = "asc";
        }
        renderTable();
      });
    });

    // Download Results dropdown
    els.downloadResultsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleDownloadMenu();
    });
    els.exportCsvBtn.addEventListener("click", () => triggerExport("csv"));
    els.exportJsonBtn.addEventListener("click", () => triggerExport("json"));
    document.addEventListener("click", (e) => {
      if (!els.downloadDropdown.contains(e.target)) {
        closeDownloadMenu();
      }
    });

    // Scanner table delegated clicks (Copy, Re-Ping, Edit)
    els.deviceTableBody.addEventListener("click", (e) => {
      const copyBtn = e.target.closest("[data-copy]");
      if (copyBtn) {
        copyToClipboard(copyBtn.dataset.copy);
        return;
      }
      const repingBtn = e.target.closest("[data-reping]");
      if (repingBtn) {
        handleSingleReping(repingBtn.dataset.reping, repingBtn);
        return;
      }
      const editBtn = e.target.closest("[data-edit-ip]");
      if (editBtn && state.scan && Array.isArray(state.scan.devices)) {
        const dev = state.scan.devices.find((item) => item.ip === editBtn.dataset.editIp);
        if (dev) openEditModal(dev);
      }
    });

    // My Devices tab events
    els.myDevicesSearch.addEventListener("input", () => {
      state.myDevicesQuery = els.myDevicesSearch.value;
      renderMyDevices();
    });

    els.myDevicesList.addEventListener("click", async (e) => {
      const editBtn = e.target.closest("[data-edit-saved]");
      if (editBtn) {
        const item = state.myDevices.find((d) => d.key === editBtn.dataset.editSaved);
        if (item) openEditModal(item);
        return;
      }
      const delBtn = e.target.closest("[data-delete-saved]");
      if (delBtn) {
        await deleteSavedDevice(delBtn.dataset.deleteSaved);
        return;
      }
      const trustBtn = e.target.closest("[data-toggle-trust]");
      if (trustBtn) {
        const item = state.myDevices.find((d) => d.key === trustBtn.dataset.toggleTrust);
        if (!item) return;
        const res = await apiRequest("/api/devices", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            key: item.key,
            ip: item.live_ip || item.last_ip,
            mac: item.mac,
            nickname: item.nickname,
            icon: item.icon,
            trusted: !item.trusted,
            note: item.note,
            detected_name: item.detected_name,
            vendor: item.vendor,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          state.myDevices = data.devices || [];
          if (data.scan) applyScanState(data.scan);
          renderMyDevices();
        }
      }
    });

    // History tab events
    els.historyList.addEventListener("click", (e) => {
      const sumBtn = e.target.closest("[data-history-id]");
      if (!sumBtn) return;
      const id = sumBtn.dataset.historyId;
      state.expandedHistoryId = state.expandedHistoryId === id ? null : id;
      renderHistory();
    });

    els.clearHistoryBtn.addEventListener("click", clearHistory);

    // Quick Tools events
    els.pingMonitorForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (state.pingRunning) {
        stopPingMonitor();
      } else {
        startPingMonitor();
      }
    });

    els.presetRouterBtn.addEventListener("click", () => {
      const gw = (state.networkInfo && state.networkInfo.gateway) || "192.168.1.1";
      els.pingTargetInput.value = gw;
      if (state.pingRunning) stopPingMonitor();
      startPingMonitor();
    });

    els.pingPresetBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        els.pingTargetInput.value = btn.dataset.pingPreset;
        if (state.pingRunning) stopPingMonitor();
        startPingMonitor();
      });
    });

    els.netDetailsGrid.addEventListener("click", (e) => {
      const copyBtn = e.target.closest("[data-copy]");
      if (copyBtn) copyToClipboard(copyBtn.dataset.copy);
    });

    // Modal events
    els.iconPickerGrid.addEventListener("click", (e) => {
      const choice = e.target.closest("[data-icon-choice]");
      if (!choice) return;
      state.selectedIcon = choice.dataset.iconChoice;
      renderIconPicker();
    });

    els.editDeviceForm.addEventListener("submit", saveEditedDevice);
    els.closeModalBtn.addEventListener("click", closeEditModal);
    els.cancelModalBtn.addEventListener("click", closeEditModal);
    els.deleteCustomBtn.addEventListener("click", () => {
      if (state.editingDevice) deleteSavedDevice(state.editingDevice.key);
    });
    els.editModal.addEventListener("click", (e) => {
      if (e.target === els.editModal) closeEditModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeEditModal();
        closeDownloadMenu();
      }
    });
  }

  // ==================== INIT ====================
  initTheme();
  initLanguage();
  bindEvents();
  (async () => {
    await loadNetworkInfo(true);
    await Promise.all([loadMyDevices(), loadHistory()]);
  })();
})();
