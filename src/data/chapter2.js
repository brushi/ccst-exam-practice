export default [
  {
    id: "ch2_q1",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "Which of the following is not an external threat?",
    options: [
      { label: "A", text: "Accidental file deletion by an employee" },
      { label: "B", text: "DoS attack" },
      { label: "C", text: "Fake contractor on site" },
      { label: "D", text: "Malware infection by email" }
    ],
    correctAnswers: ["A"],
    explanation: "An accidental file deletion by an employee is an example of an internal threat."
  },
  {
    id: "ch2_q2",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "Which concern do you have when you encrypt data before sending it?",
    options: [
      { label: "A", text: "Accounting" },
      { label: "B", text: "Availability" },
      { label: "C", text: "Integrity" },
      { label: "D", text: "Confidentiality" }
    ],
    correctAnswers: ["D"],
    explanation: "To ensure confidentiality, you must prevent the disclosure of data or information to unauthorized entities."
  },
  {
    id: "ch2_q3",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "You have decided that the default permission for all files will be no access. What principle are you following?",
    options: [
      { label: "A", text: "Defense in depth" },
      { label: "B", text: "Need to know" },
      { label: "C", text: "Separation of duties" },
      { label: "D", text: "Zero trust" }
    ],
    correctAnswers: ["D"],
    explanation: "The Zero Trust concept supports least privilege. It prescribes that when a resource is created, the default permission should be No Access."
  },
  {
    id: "ch2_q4",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "What are you following if you encrypt a file, apply access permissions to it, and lock the door to the room where the server on which the file resides is located?",
    options: [
      { label: "A", text: "Defense in depth" },
      { label: "B", text: "Need to know" },
      { label: "C", text: "Separation of duties" },
      { label: "D", text: "Zero trust" }
    ],
    correctAnswers: ["A"],
    explanation: "A defense-in-depth strategy refers to the practice of using multiple layers of security between data and possible attackers."
  },
  {
    id: "ch2_q5",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "Which of the following is a method of checking the security health of network hosts before they're allowed to access the network?",
    options: [
      { label: "A", text: "NAC" },
      { label: "B", text: "DAC" },
      { label: "C", text: "CVE" },
      { label: "D", text: "CVSS" }
    ],
    correctAnswers: ["A"],
    explanation: "Network Access Control (NAC) systems examine the state of a computer's operating system updates and antimalware updates before allowing access, and can even remediate devices prior to permitting access."
  },
  {
    id: "ch2_q6",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "Which encryption type does enterprise WPA3 use?",
    options: [
      { label: "A", text: "AES-CCMP" },
      { label: "B", text: "GCMP-256" },
      { label: "C", text: "PSK" },
      { label: "D", text: "TKIP/MIC" }
    ],
    correctAnswers: ["B"],
    explanation: "WPA3 Enterprise uses GCMP-256 for encryption; WPA2 uses AES-CCMP; and WPA uses TKIP."
  },
  {
    id: "ch2_q7",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "What is the frequency range of the IEEE 802.11b standard?",
    options: [
      { label: "A", text: "2.4 Gbps" },
      { label: "B", text: "5 Gbps" },
      { label: "C", text: "2.4 GHz" },
      { label: "D", text: "5 GHz" }
    ],
    correctAnswers: ["C"],
    explanation: "The IEEE 802.11b and IEEE 802.11g standards both run in the 2.4 GHz RF range."
  },
  {
    id: "ch2_q8",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "What is the frequency range of the IEEE 802.11a standard?",
    options: [
      { label: "A", text: "2.4 Gbps" },
      { label: "B", text: "5 Gbps" },
      { label: "C", text: "2.4 GHz" },
      { label: "D", text: "5 GHz" }
    ],
    correctAnswers: ["D"],
    explanation: "The IEEE 802.11a standard runs in the 5 GHz RF range."
  },
  {
    id: "ch2_q9",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "What is the frequency range of the IEEE 802.11g standard?",
    options: [
      { label: "A", text: "2.4 Gbps" },
      { label: "B", text: "5 Gbps" },
      { label: "C", text: "2.4 GHz" },
      { label: "D", text: "5 GHz" }
    ],
    correctAnswers: ["C"],
    explanation: "The IEEE 802.11b and IEEE 802.11g standards both run in the 2.4 GHz RF range."
  },
  {
    id: "ch2_q10",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "You've finished physically installing an access point on the ceiling of your office. At a minimum, which parameter must be configured on the access point in order to allow a wireless client to operate on it?",
    options: [
      { label: "A", text: "AES" },
      { label: "B", text: "PSK" },
      { label: "C", text: "SSID" },
      { label: "D", text: "TKIP" },
      { label: "E", text: "WEP" },
      { label: "F", text: "802.11i" }
    ],
    correctAnswers: ["C"],
    explanation: "The minimum parameter configured on an AP for a simple WLAN installation is the SSID, although you should set the channel and authentication method as well."
  },
  {
    id: "ch2_q11",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "Which encryption type does WPA2 use?",
    options: [
      { label: "A", text: "AES-CCMP" },
      { label: "B", text: "PPK via IV" },
      { label: "C", text: "PSK" },
      { label: "D", text: "TKIP/MIC" }
    ],
    correctAnswers: ["A"],
    explanation: "WPA3 Enterprise uses GCMP-256 for encryption; WPA2 uses AES-CCMP for encryption; and WPA uses TKIP."
  },
  {
    id: "ch2_q12",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "How many nonoverlapping channels are available with 802.11b?",
    options: [
      { label: "A", text: "3" },
      { label: "B", text: "12" },
      { label: "C", text: "23" },
      { label: "D", text: "40" }
    ],
    correctAnswers: ["A"],
    explanation: "The IEEE 802.11b standard provides three nonoverlapping channels."
  },
  {
    id: "ch2_q13",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "Which of the following has built-in resistance to dictionary attacks?",
    options: [
      { label: "A", text: "WPA" },
      { label: "B", text: "WPA2" },
      { label: "C", text: "WPA3" },
      { label: "D", text: "AES" },
      { label: "E", text: "TKIP" }
    ],
    correctAnswers: ["C"],
    explanation: "WPA3 is resistant to offline dictionary attacks where an attacker attempts to determine a network password by trying possible passwords without further network interaction."
  },
  {
    id: "ch2_q14",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "What is the maximum data rate for the 802.11a standard?",
    options: [
      { label: "A", text: "6 Mbps" },
      { label: "B", text: "11 Mbps" },
      { label: "C", text: "22 Mbps" },
      { label: "D", text: "54 Mbps" }
    ],
    correctAnswers: ["D"],
    explanation: "The IEEE 802.11a standard provides a maximum data rate of up to 54 Mbps."
  },
  {
    id: "ch2_q15",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 2: Network Security Devices",
    question: "What is the maximum data rate for the 802.11g standard?",
    options: [
      { label: "A", text: "6 Mbps" },
      { label: "B", text: "11 Mbps" },
      { label: "C", text: "22 Mbps" },
      { label: "D", text: "54 Mbps" }
    ],
    correctAnswers: ["D"],
    explanation: "The IEEE 802.11g standard provides a maximum data rate of up to 54 Mbps."
  }
];
