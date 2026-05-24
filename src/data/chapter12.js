export default [
  {
    id: "ch12_q1",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 12: Digital Forensics",
    question: "You are a digital forensics investigator working for a private company investigating a case of data theft. An employee has been accused of stealing confidential company data and selling it to a competitor. What is the first step in your investigation?",
    options: [
      { label: "A", text: "Obtain a search warrant and seize the employee's computer" },
      { label: "B", text: "Interview the employee" },
      { label: "C", text: "Contact the competitor" },
      { label: "D", text: "Contact the company's IT department and ask them to provide you with a list of employees who have access to the confidential data" },
      { label: "E", text: "None of the above" }
    ],
    correctAnswers: ["D"],
    explanation: "The first step is to contact the IT department to get a list of employees with access to the confidential data, narrowing down suspects. Seizing computers may be necessary but is not the first step. Interviewing the employee or contacting the competitor may compromise the investigation."
  },
  {
    id: "ch12_q2",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 12: Digital Forensics",
    question: "You are a cybersecurity analyst notified of a data breach on one of the institution's servers. What is the first step in your investigation?",
    options: [
      { label: "A", text: "Contact the affected customers" },
      { label: "B", text: "Collect data from the affected server and preserve the evidence" },
      { label: "C", text: "Analyze the data for signs of criminal activity" },
      { label: "D", text: "Compile a report explaining what happened during the breach" },
      { label: "E", text: "None of the above" }
    ],
    correctAnswers: ["B"],
    explanation: "The first step is to collect data from the affected server and preserve the evidence for forensic analysis. Contacting customers or compiling a report is not the first step and could compromise the investigation."
  },
  {
    id: "ch12_q3",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 12: Digital Forensics",
    question: "You are a cybersecurity analyst notified of a data breach at a health care organization. What is the final step in your investigation?",
    options: [
      { label: "A", text: "Contact the affected customers" },
      { label: "B", text: "Collect data and preserve evidence" },
      { label: "C", text: "Analyze data for criminal activity" },
      { label: "D", text: "Compile a report explaining what happened during the breach" },
      { label: "E", text: "None of the above" }
    ],
    correctAnswers: ["D"],
    explanation: "The final step is to compile a report explaining what happened, identifying suspects, and containing recommendations for preventing future attacks. This is the Reporting phase of the NIST Forensic Incident Response model."
  },
  {
    id: "ch12_q4",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 12: Digital Forensics",
    question: "Your cybersecurity team is performing attack attribution research. What part of this process covers intelligence sources such as human signals and geospatial intelligence?",
    options: [
      { label: "A", text: "Technical" },
      { label: "B", text: "Operational" },
      { label: "C", text: "Strategic" },
      { label: "D", text: "Tactical" },
      { label: "E", text: "All of the above" }
    ],
    correctAnswers: ["C"],
    explanation: "The Strategic attribution approach uses intelligence sources like human, signals, or geospatial intelligence to corroborate and validate findings. This helps confirm or disprove the identity of attackers."
  },
  {
    id: "ch12_q5",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 12: Digital Forensics",
    question: "What is the first stage of the Cyber Kill Chain model?",
    options: [
      { label: "A", text: "Collection" },
      { label: "B", text: "Preservation" },
      { label: "C", text: "Analysis" },
      { label: "D", text: "Reporting" },
      { label: "E", text: "None of the above" }
    ],
    correctAnswers: ["E"],
    explanation: "The first stage of the Cyber Kill Chain is Reconnaissance -- the research stage where attackers scope out their target. None of the listed options (Collection, Preservation, Analysis, Reporting) match this; those are steps from the NIST Forensic Incident Response model."
  },
  {
    id: "ch12_q6",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 12: Digital Forensics",
    question: "What is the purpose of the Mitre ATT&CK knowledge base?",
    options: [
      { label: "A", text: "To provide a framework used to identify and prevent cyber intrusions" },
      { label: "B", text: "To provide a systematic approach to network defense" },
      { label: "C", text: "To provide a taxonomy of adversarial actions across their life cycle" },
      { label: "D", text: "To provide a list of common TTPs that APTs use against Windows enterprise networks" },
      { label: "E", text: "None of the above" }
    ],
    correctAnswers: ["C"],
    explanation: "The MITRE ATT&CK knowledge base provides classification and documentation of adversarial actions across their lifecycle. This helps organizations understand TTPs and develop effective threat models."
  },
  {
    id: "ch12_q7",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 12: Digital Forensics",
    question: "What is the purpose of the Diamond Model?",
    options: [
      { label: "A", text: "To provide a framework to identify and prevent cyber intrusions" },
      { label: "B", text: "To provide a systematic approach to network defense" },
      { label: "C", text: "To provide a taxonomy of adversarial actions across their life cycle" },
      { label: "D", text: "To provide a list of common TTPs that APTs use against Windows enterprise networks" },
      { label: "E", text: "None of the above" }
    ],
    correctAnswers: ["C"],
    explanation: "The Diamond Model provides a taxonomy of adversarial actions across their lifecycle. It maps out the components of an intrusion (adversary, capability, infrastructure, victim)."
  },
  {
    id: "ch12_q8",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 12: Digital Forensics",
    question: "You have been tasked with developing a methodology for incident response. How can TTPs be used to support your work?",
    options: [
      { label: "A", text: "To provide a list of common TTPs used by APTs" },
      { label: "B", text: "To provide a taxonomy of adversarial actions" },
      { label: "C", text: "To provide a framework to identify and prevent cyber intrusions" },
      { label: "D", text: "To describe the behavior and strategies of your adversaries" },
      { label: "E", text: "None of the above" }
    ],
    correctAnswers: ["D"],
    explanation: "TTPs describe the behavior and strategies of adversaries, helping organizations understand attacker methodologies and develop more effective incident response plans."
  },
  {
    id: "ch12_q9",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 12: Digital Forensics",
    question: "What are artifacts in cybersecurity?",
    options: [
      { label: "A", text: "Digital traces left behind by activities on a system or network" },
      { label: "B", text: "A list of common TTPs that APTs use against Windows enterprise networks" },
      { label: "C", text: "A listing of adversarial actions across their life cycle" },
      { label: "D", text: "A framework used to identify and prevent cyber intrusions" }
    ],
    correctAnswers: ["A"],
    explanation: "Artifacts (sources of evidence) are digital traces left behind by activities on a system or network. This data helps understand actions taken by an attacker during a cyber intrusion."
  },
  {
    id: "ch12_q10",
    domain: "5.0 Incident Handling",
    chapter: "Chapter 12: Digital Forensics",
    question: "What is the process of chain of custody in cybersecurity?",
    options: [
      { label: "A", text: "The process of maintaining and documenting the handling of digital evidence from the moment it is collected until it is presented in a court of law" },
      { label: "B", text: "A list of common TTPs" },
      { label: "C", text: "A list of adversarial actions across their life cycle" },
      { label: "D", text: "A framework used to identify and prevent cyber intrusions" }
    ],
    correctAnswers: ["A"],
    explanation: "Chain of Custody is the process of maintaining and documenting the handling of digital evidence from collection to court presentation, ensuring the evidence remains in its original state and is admissible."
  }
]
