export default [
  {
    id: "ch7_q1",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 7: Endpoint Security",
    question: "Which software tool will allow you to check whether a web application running on a server is online?",
    options: [
      { label: "A", text: "ping" },
      { label: "B", text: "nslookup" },
      { label: "C", text: "tracert/traceroute" },
      { label: "D", text: "Port scanner" }
    ],
    correctAnswers: ["D"],
    explanation: "A port scanner will allow you to check if an application is accepting connections. The port will return an open status, and most port scanners will check for an HTTP response. ping only checks if the server is online. nslookup resolves domain names. tracert watches packet paths."
  },
  {
    id: "ch7_q2",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 7: Endpoint Security",
    question: "Which commands can be used to retrieve the A record for a domain? (Choose two)",
    options: [
      { label: "A", text: "tracert/traceroute" },
      { label: "B", text: "ipconfig" },
      { label: "C", text: "nslookup" },
      { label: "D", text: "dig" }
    ],
    correctAnswers: ["C", "D"],
    explanation: "The nslookup and dig commands can be used to retrieve the A record for a domain name. tracert finds routing problems. ipconfig views IP address information."
  },
  {
    id: "ch7_q3",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 7: Endpoint Security",
    question: "You need to check the port an application is listening on; which command should you use to view the information?",
    options: [
      { label: "A", text: "portqry" },
      { label: "B", text: "ifconfig" },
      { label: "C", text: "netstat" },
      { label: "D", text: "iptables" }
    ],
    correctAnswers: ["C"],
    explanation: "The netstat command allows you to see layer 4 binding between applications and TCP/UDP ports. On Windows use netstat -ab; on Linux/Unix use netstat -ap."
  },
  {
    id: "ch7_q4",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 7: Endpoint Security",
    question: "Which policy would you create to define the minimum specification if an employee wanted to use their own device for email?",
    options: [
      { label: "A", text: "MDM" },
      { label: "B", text: "AUP" },
      { label: "C", text: "BYOD" },
      { label: "D", text: "NDA" }
    ],
    correctAnswers: ["C"],
    explanation: "A bring your own device (BYOD) policy defines the minimum specifications for an employee's device used for work-related access. MDM polices these specifications. AUP is a code of conduct. NDA is for intellectual property."
  },
  {
    id: "ch7_q5",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 7: Endpoint Security",
    question: "You need to investigate how to protect credit card data on your network. Which information should you research?",
    options: [
      { label: "A", text: "PCI DSS" },
      { label: "B", text: "GDPR" },
      { label: "C", text: "PHI" },
      { label: "D", text: "PII" }
    ],
    correctAnswers: ["A"],
    explanation: "You should research the Payment Card Industry Data Security Standard (PCI DSS). GDPR is for protecting EU citizens. PHI is patient health data. PII is personally identifiable information."
  },
  {
    id: "ch7_q6",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 7: Endpoint Security",
    question: "You need to encrypt a single file on a Windows desktop. Which technology should you use?",
    options: [
      { label: "A", text: "EFS" },
      { label: "B", text: "BitLocker" },
      { label: "C", text: "NTFS" },
      { label: "D", text: "BitLocker to Go" }
    ],
    correctAnswers: ["A"],
    explanation: "The Encrypted File System (EFS) is a Windows NTFS functionality that can encrypt individual files and folders. BitLocker is full-device encryption. NTFS is the filesystem. BitLocker to Go is for removable drives."
  },
  {
    id: "ch7_q7",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 7: Endpoint Security",
    question: "Which of the following is not a benefit of implementing asset tags for inventory management?",
    options: [
      { label: "A", text: "Identifying vulnerabilities" },
      { label: "B", text: "Scheduling the depreciation of the equipment" },
      { label: "C", text: "Identifying assets" },
      { label: "D", text: "Providing ownership of the equipment" }
    ],
    correctAnswers: ["B"],
    explanation: "Scheduling depreciation is performed in accounting software, not through inventory management. Identifying vulnerabilities, identifying assets, and providing ownership are all benefits."
  },
  {
    id: "ch7_q8",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 7: Endpoint Security",
    question: "You need to enforce profile security requirements on mobile devices. Which should you use to achieve this goal?",
    options: [
      { label: "A", text: "AUP" },
      { label: "B", text: "NDA" },
      { label: "C", text: "BYOD" },
      { label: "D", text: "MDM" }
    ],
    correctAnswers: ["D"],
    explanation: "Mobile device management (MDM) software enables you to enforce profile security requirements on mobile devices. AUP is a code of ethics. NDA is for intellectual property. BYOD defines policy but provides no enforcement."
  },
  {
    id: "ch7_q9",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 7: Endpoint Security",
    question: "Which of the following programs could be considered antimalware?",
    options: [
      { label: "A", text: "Microsoft Defender Security" },
      { label: "B", text: "MDM" },
      { label: "C", text: "Windows Action Center" },
      { label: "D", text: "VirusTotal" }
    ],
    correctAnswers: ["A"],
    explanation: "Microsoft Defender Security is considered antimalware and antivirus protection for Windows. MDM manages mobile devices. Windows Action Center is a notification center. VirusTotal analyzes virus signatures but does not protect from them."
  },
  {
    id: "ch7_q10",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 7: Endpoint Security",
    question: "What is the first step in malware removal?",
    options: [
      { label: "A", text: "Quarantine the infected system" },
      { label: "B", text: "Identify and verify the malware symptoms" },
      { label: "C", text: "Remediate the infected system" },
      { label: "D", text: "Educate the end user" }
    ],
    correctAnswers: ["B"],
    explanation: "The most important first step is to identify and verify the malware symptoms. Quarantine comes after verification. Remediation happens after disabling System Restore. Education is the last step."
  }
];
