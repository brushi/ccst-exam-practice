export default [
  {
    id: "ch9_q1",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 9: Vulnerability Management",
    question: "What system is used for the classification of vulnerabilities?",
    options: [
      { label: "A", text: "OSINT" },
      { label: "B", text: "CVE" },
      { label: "C", text: "DNS" },
      { label: "D", text: "NMAP" }
    ],
    correctAnswers: ["B"],
    explanation: "Common Vulnerabilities and Exposures (CVE) provides a reference method for publicly known vulnerabilities and exposures. OSINT is reconnaissance using public information."
  },
  {
    id: "ch9_q2",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 9: Vulnerability Management",
    question: "Which step of the vulnerability lifecycle is responsible for detecting if a vulnerability has resurfaced?",
    options: [
      { label: "A", text: "Discovery" },
      { label: "B", text: "Prioritization" },
      { label: "C", text: "Reporting" },
      { label: "D", text: "Verification and Monitoring" }
    ],
    correctAnswers: ["D"],
    explanation: "The verification and monitoring stage verifies that a vulnerability has been patched and not resurfaced. Discovery is the initial phase. Prioritization defines criticality. Reporting reports on remediation steps."
  },
  {
    id: "ch9_q3",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 9: Vulnerability Management",
    question: "You recently found out that there is a critical vulnerability in a line-of-business application that is no longer supported. What is an acceptable remediation?",
    options: [
      { label: "A", text: "Uninstalling the application" },
      { label: "B", text: "Training the end-users" },
      { label: "C", text: "Requiring strong encryption" },
      { label: "D", text: "Adding a firewall" }
    ],
    correctAnswers: ["D"],
    explanation: "Adding a firewall around the application is the most acceptable remediation for a critical vulnerability in an unsupported application. Uninstalling could severely impact business. Training and encryption would not address the vulnerability."
  },
  {
    id: "ch9_q4",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 9: Vulnerability Management",
    question: "Which is an example of active reconnaissance?",
    options: [
      { label: "A", text: "Traffic analysis" },
      { label: "B", text: "Port scanning" },
      { label: "C", text: "OSINT" },
      { label: "D", text: "DNS enumeration" }
    ],
    correctAnswers: ["B"],
    explanation: "Port scanning is active reconnaissance because it interacts with the target network. Traffic analysis, OSINT, and DNS enumeration are passive reconnaissance tactics."
  },
  {
    id: "ch9_q5",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 9: Vulnerability Management",
    question: "You found a vulnerability referenced to a CVE of CVE-2018-8033. What can't be derived from looking up the CVE in the CVE vulnerability database?",
    options: [
      { label: "A", text: "The scoring of the vulnerability" },
      { label: "B", text: "Affected software versions" },
      { label: "C", text: "How to remediate the vulnerability" },
      { label: "D", text: "A description of the vulnerability" }
    ],
    correctAnswers: ["C"],
    explanation: "How to remediate is NOT typically found in the CVE database. You can find the scoring, affected software versions, and a description of the vulnerability."
  },
  {
    id: "ch9_q6",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 9: Vulnerability Management",
    question: "Which testing technique can help you verify that proper firewalling of services has been performed?",
    options: [
      { label: "A", text: "Port scanning" },
      { label: "B", text: "Vulnerability scanning" },
      { label: "C", text: "OSINT" },
      { label: "D", text: "Brute force attack" }
    ],
    correctAnswers: ["A"],
    explanation: "Port scanning can help verify proper firewalling by checking which ports are open and accessible."
  },
  {
    id: "ch9_q7",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 9: Vulnerability Management",
    question: "How is the CVE score derived for a particular CVE?",
    options: [
      { label: "A", text: "It is assigned based on the impact of a vulnerability" },
      { label: "B", text: "It is assigned by the CVE vulnerability database" },
      { label: "C", text: "It is based on the probability or likelihood it can be exploited" },
      { label: "D", text: "It is calculated from the attack vector associated with the CVE" }
    ],
    correctAnswers: ["D"],
    explanation: "The CVE score is calculated from the attack vector (CVSS scoring) associated with the CVE."
  },
  {
    id: "ch9_q8",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 9: Vulnerability Management",
    question: "Which assessment tool can be used to find vulnerabilities in applications and services?",
    options: [
      { label: "A", text: "Nessus" },
      { label: "B", text: "A Protocol Analyzer" },
      { label: "C", text: "Burp Suite" },
      { label: "D", text: "Nmap" }
    ],
    correctAnswers: ["A"],
    explanation: "Nessus is a vulnerability scanner that can find vulnerabilities in applications and services."
  },
  {
    id: "ch9_q9",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 9: Vulnerability Management",
    question: "Which typically contains URL, IP addresses and malware signatures to keep your EDR up to date?",
    options: [
      { label: "A", text: "Cybersecurity news" },
      { label: "B", text: "Security reports" },
      { label: "C", text: "Subscription-based reports" },
      { label: "D", text: "RSS feeds" }
    ],
    correctAnswers: ["C"],
    explanation: "Subscription-based reports contain URLs, IP addresses, and malware signatures to keep your EDR updated."
  },
  {
    id: "ch9_q10",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 9: Vulnerability Management",
    question: "Which documentation type allows you to track the entire evidence process?",
    options: [
      { label: "A", text: "Chain of custody" },
      { label: "B", text: "Incident document" },
      { label: "C", text: "Order of volatility" },
      { label: "D", text: "Root cause document" }
    ],
    correctAnswers: ["A"],
    explanation: "Chain of custody allows you to track the entire evidence process, documenting who handled the evidence and when."
  }
]
