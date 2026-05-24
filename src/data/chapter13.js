export default [
  {
    id: "ch13_q1",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 13: Incident Response",
    question: "Which of the following are security incidents? (Select three)",
    options: [
      { label: "A", text: "DDoS" },
      { label: "B", text: "Supply chain" },
      { label: "C", text: "Block encryption" },
      { label: "D", text: "PKI" },
      { label: "E", text: "Phishing" }
    ],
    correctAnswers: ["A", "B", "E"],
    explanation: "DDoS overwhelms systems with traffic. Supply chain attacks infiltrate via suppliers. Phishing sends fraudulent messages to trick recipients. Block Encryption and PKI are security technologies, not incidents."
  },
  {
    id: "ch13_q2",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 13: Incident Response",
    question: "Which document details how to quickly identify an attack, what are the steps to take to minimize the impact, contain the blast radius, and finally to remediate the cause to reduce exposure to future?",
    options: [
      { label: "A", text: "Network benchmark" },
      { label: "B", text: "Eradication and recovery plan" },
      { label: "C", text: "Containment plan" },
      { label: "D", text: "Incident response plan" }
    ],
    correctAnswers: ["D"],
    explanation: "The Incident Response Plan details how to quickly identify an attack, the steps to minimize impact, contain the blast radius, and remediate the cause. Eradication and Recovery focuses only on removing threats and restoring systems."
  },
  {
    id: "ch13_q3",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 13: Incident Response",
    question: "Which document details your business continuity plan?",
    options: [
      { label: "A", text: "Eradication and recovery plan" },
      { label: "B", text: "Incident response plan" },
      { label: "C", text: "Incident response policy" },
      { label: "D", text: "Incident handling plan" }
    ],
    correctAnswers: ["B"],
    explanation: "The incident response plan details your business continuity plan."
  },
  {
    id: "ch13_q4",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 13: Incident Response",
    question: "Which process is used to identify vulnerabilities and the various types of security incidents that pose a risk to your organization and prioritize each type by its potential impact?",
    options: [
      { label: "A", text: "Risk assessments" },
      { label: "B", text: "Detection and analysis" },
      { label: "C", text: "Incident handling" },
      { label: "D", text: "Identifying attack sources" }
    ],
    correctAnswers: ["A"],
    explanation: "Risk assessments identify vulnerabilities and types of security incidents that pose a risk, prioritizing each by potential impact."
  },
  {
    id: "ch13_q5",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 13: Incident Response",
    question: "Most incident response plans follow very similar frameworks based on incident response models developed by which organizations? (Choose three)",
    options: [
      { label: "A", text: "CISA" },
      { label: "B", text: "NIST" },
      { label: "C", text: "SANS" },
      { label: "D", text: "Cisco" },
      { label: "E", text: "Homeland Security" }
    ],
    correctAnswers: ["A", "B", "C"],
    explanation: "Most IR plans follow frameworks developed by CISA (Cybersecurity and Infrastructure Agency), NIST (National Institute of Standards and Technology), and the SANS Institute."
  },
  {
    id: "ch13_q6",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 13: Incident Response",
    question: "Which document reviews how effective your remediation methods and procedures were and identifies steps that can be improved?",
    options: [
      { label: "A", text: "Chain of custody" },
      { label: "B", text: "Lessons learned" },
      { label: "C", text: "CSIRT" },
      { label: "D", text: "Eradication and recovery" }
    ],
    correctAnswers: ["B"],
    explanation: "Lessons learned reviews how effective remediation methods were and identifies steps that can be improved for future incidents."
  },
  {
    id: "ch13_q7",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 13: Incident Response",
    question: "What is the process that takes place at the beginning of an incident to prevent further damage and give you time to develop and implement a remediation?",
    options: [
      { label: "A", text: "Containment strategy" },
      { label: "B", text: "Evidence gathering" },
      { label: "C", text: "Identify incident precursors" },
      { label: "D", text: "Incident preparation" }
    ],
    correctAnswers: ["A"],
    explanation: "The containment strategy takes place at the beginning of an incident to prevent further damage and give time to develop and implement remediation."
  },
  {
    id: "ch13_q8",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 13: Incident Response",
    question: "What are sources of precursors? (Choose three)",
    options: [
      { label: "A", text: "Intrusion detection and protection products (IDPSs)" },
      { label: "B", text: "GitHub" },
      { label: "C", text: "Security information and event management (SIEM) products" },
      { label: "D", text: "Antivirus and antispam software" },
      { label: "E", text: "Incident response team" }
    ],
    correctAnswers: ["A", "C", "D"],
    explanation: "IDPSs, SIEM products, and antivirus/antispam software are all sources of precursors. GitHub and the incident response team are not sources of precursors."
  },
  {
    id: "ch13_q9",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 13: Incident Response",
    question: "Which document details how well the staff performed in dealing with an incident, whether documented procedures were followed, whether they were adequate, and what information was needed sooner?",
    options: [
      { label: "A", text: "Eradication and recovery" },
      { label: "B", text: "Lessons learned" },
      { label: "C", text: "Incident handling" },
      { label: "D", text: "Precursors and indicators" }
    ],
    correctAnswers: ["B"],
    explanation: "Lessons learned details staff performance, whether procedures were followed and adequate, and what information was needed sooner."
  },
  {
    id: "ch13_q10",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 13: Incident Response",
    question: "Theft of a computing device, an attack executed from a website or web-based application, brute force, and impersonation are all examples of?",
    options: [
      { label: "A", text: "Social engineering" },
      { label: "B", text: "Ransomware" },
      { label: "C", text: "Attack vectors" },
      { label: "D", text: "Insider threats" },
      { label: "E", text: "Phishing" }
    ],
    correctAnswers: ["C"],
    explanation: "Theft of a computing device, web-based attacks, brute force, and impersonation are all examples of attack vectors -- the methods or pathways attackers use to gain unauthorized access."
  }
]
