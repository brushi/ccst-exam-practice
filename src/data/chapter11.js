export default [
  {
    id: "ch11_q1",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 11: Incident Handling",
    question: "Which system is cloud-based and can create alerts based on security logs?",
    options: [
      { label: "A", text: "Vulnerability management" },
      { label: "B", text: "Compliance monitoring" },
      { label: "C", text: "SIEMaaS" },
      { label: "D", text: "IDPS" }
    ],
    correctAnswers: ["C"],
    explanation: "Security Information and Event Management as a Service (SIEMaaS) is cloud-based and creates alerts based on security logs. Vulnerability management scans for vulnerabilities. Compliance monitoring checks regulatory adherence. IDPS detects and prevents intrusions."
  },
  {
    id: "ch11_q2",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 11: Incident Handling",
    question: "Which action often requires security personnel intervention?",
    options: [
      { label: "A", text: "Automation" },
      { label: "B", text: "Creation of cases" },
      { label: "C", text: "Orchestration" },
      { label: "D", text: "Alert generation" }
    ],
    correctAnswers: ["C"],
    explanation: "Remediation is often orchestrated with the intervention of security personnel. Automation requires no intervention. Case creation is automatic with SOAR. Alert generation is automatic with SIEM."
  },
  {
    id: "ch11_q3",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 11: Incident Handling",
    question: "What is the first action that happens after a SOAR system receives an alert?",
    options: [
      { label: "A", text: "Response" },
      { label: "B", text: "Logging" },
      { label: "C", text: "Email alerting" },
      { label: "D", text: "Case creation" }
    ],
    correctAnswers: ["D"],
    explanation: "Case creation is the first action after a SOAR receives an alert. The SOAR then collects logs, generates an alert to security personnel, and finally responds/remediates."
  },
  {
    id: "ch11_q4",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 11: Incident Handling",
    question: "Which type of SIEM analytics is used with UEBA to aid in the training of machine learning?",
    options: [
      { label: "A", text: "Anomaly detection" },
      { label: "B", text: "Baseline detection" },
      { label: "C", text: "AI" },
      { label: "D", text: "IoC" }
    ],
    correctAnswers: ["B"],
    explanation: "Baseline detection is used to aid in training machine learning for user and entity behavior analytics (UEBA). Anomaly detection detects erratic behavior. AI is a product of machine learning. IoC is known malicious indicators."
  },
  {
    id: "ch11_q5",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 11: Incident Handling",
    question: "Which detection method alerts on known malicious URLs or IP addresses?",
    options: [
      { label: "A", text: "IoC" },
      { label: "B", text: "AI" },
      { label: "C", text: "UEBA" },
      { label: "D", text: "EDR" }
    ],
    correctAnswers: ["A"],
    explanation: "Indicators of compromise (IoC) alert on known malicious URLs, IP addresses, signatures, and other known indicators. AI analyzes behavior patterns. UEBA identifies abnormal behavior. EDR uses signature and behavior-based detection."
  },
  {
    id: "ch11_q6",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 11: Incident Handling",
    question: "Which system is responsible for remediation of security events?",
    options: [
      { label: "A", text: "SIEM" },
      { label: "B", text: "SOAR" },
      { label: "C", text: "IDS" },
      { label: "D", text: "AI" }
    ],
    correctAnswers: ["B"],
    explanation: "Security orchestration, automation, and response (SOAR) systems handle response and remediation. SIEM creates alerts. IDS detects intrusions. AI is a detection method."
  },
  {
    id: "ch11_q7",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 11: Incident Handling",
    question: "If you are a merchant and process credit cards, which regulation do you need to comply with?",
    options: [
      { label: "A", text: "FISMA" },
      { label: "B", text: "FERPA" },
      { label: "C", text: "PCI-DSS" },
      { label: "D", text: "GDPR" }
    ],
    correctAnswers: ["C"],
    explanation: "If you process credit card payments, you must comply with Payment Card Industry Data Security Standard (PCI-DSS). FISMA is for government agencies. FERPA protects student records. GDPR governs EU consumer data."
  },
  {
    id: "ch11_q8",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 11: Incident Handling",
    question: "Which is not a main element of HIPAA compliance?",
    options: [
      { label: "A", text: "Privacy" },
      { label: "B", text: "Breach notification" },
      { label: "C", text: "Security" },
      { label: "D", text: "Portability" }
    ],
    correctAnswers: ["D"],
    explanation: "Portability is NOT a main element of HIPAA compliance. Privacy keeps patient info private. Security keeps it secure. Breach notification requires notifying patients if their information is breached."
  },
  {
    id: "ch11_q9",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 11: Incident Handling",
    question: "Which regulation must you comply with if you are a government contractor?",
    options: [
      { label: "A", text: "FISMA" },
      { label: "B", text: "FERPA" },
      { label: "C", text: "PCI-DSS" },
      { label: "D", text: "GDPR" }
    ],
    correctAnswers: ["A"],
    explanation: "The Federal Information Security Modernization Act (FISMA) requires government agencies and organizations that work with the government to be compliant. FERPA is for education. PCI-DSS is for credit cards. GDPR is EU law."
  },
  {
    id: "ch11_q10",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 11: Incident Handling",
    question: "If you work for a hospital and have a breach of patient information, which entity must you notify?",
    options: [
      { label: "A", text: "HHS" },
      { label: "B", text: "EU" },
      { label: "C", text: "QSA" },
      { label: "D", text: "DPO" }
    ],
    correctAnswers: ["A"],
    explanation: "If you work for a hospital and have a breach of patient information, you must notify the U.S. Department of Health and Human Services (HHS). EU is for Europe. QSA is for PCI-DSS. DPO is for GDPR compliance."
  }
]
