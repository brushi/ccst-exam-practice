export default [
  {
    id: "ch1_q1",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 1: Security Concepts",
    question: "Which of the following is not a technology-based attack?",
    options: [
      { label: "A", text: "DoS" },
      { label: "B", text: "Ping of death" },
      { label: "C", text: "Shoulder surfing" },
      { label: "D", text: "Malware" }
    ],
    correctAnswers: ["C"],
    explanation: "Shoulder surfing is NOT a technology-based attack. It is a social engineering attack."
  },
  {
    id: "ch1_q2",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 1: Security Concepts",
    question: "A command-and-control server is a part of which of the following attacks?",
    options: [
      { label: "A", text: "DDoS" },
      { label: "B", text: "Ping of death" },
      { label: "C", text: "Shoulder surfing" },
      { label: "D", text: "Malware" }
    ],
    correctAnswers: ["A"],
    explanation: "The command and control server is used to control the zombies in the Botnet, which is part of a DDoS attack."
  },
  {
    id: "ch1_q3",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 1: Security Concepts",
    question: "Which of the following is a DoS attack that floods its victim with spoofed broadcast ping messages?",
    options: [
      { label: "A", text: "SYN flood" },
      { label: "B", text: "Smurf attack" },
      { label: "C", text: "Land attack" },
      { label: "D", text: "Ping of death" }
    ],
    correctAnswers: ["B"],
    explanation: "In a smurf attack, the bad guy spoofs the intended victim's IP address and then sends a large number of pings (IP echo requests) to IP broadcast addresses. The receiving router delivers the broadcast to all hosts in the subnet, and all hosts respond with an IP echo reply simultaneously."
  },
  {
    id: "ch1_q4",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 1: Security Concepts",
    question: "Which of the following is an attack that inundates the receiving machine with lots of packets that cause the victim to waste resources by holding connections open?",
    options: [
      { label: "A", text: "Ping of death" },
      { label: "B", text: "Zero day" },
      { label: "C", text: "Smurf attack" },
      { label: "D", text: "SYN flood" }
    ],
    correctAnswers: ["D"],
    explanation: "In the SYN flood, the attacker sends a SYN, the victim sends back a SYN-ACK, and the attacker leaves the victim waiting for the final ACK. While the server is waiting, a small part of memory is reserved. As SYNs continue, memory is gradually consumed."
  },
  {
    id: "ch1_q5",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 1: Security Concepts",
    question: "In which of the following does the attacker (and their bots) send a small spoofed 8-byte UDP packet to vulnerable NTP servers that requests a large amount of data be sent to the DDoS's target IP address?",
    options: [
      { label: "A", text: "SYN flood" },
      { label: "B", text: "NTP amplification" },
      { label: "C", text: "Smurf attack" },
      { label: "D", text: "DNS amplification" }
    ],
    correctAnswers: ["B"],
    explanation: "The attackers use the monlist command, a remote command in older versions of NTP, that sends the requester a list of the last 600 hosts who have connected to that server. This can be prevented by using at least NTP version 4.2.7."
  },
  {
    id: "ch1_q6",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 1: Security Concepts",
    question: "Which of the following was previously known as a man-in-the-middle attack?",
    options: [
      { label: "A", text: "VLAN hopping" },
      { label: "B", text: "On-path attack" },
      { label: "C", text: "LAND attack" },
      { label: "D", text: "Smurf attack" }
    ],
    correctAnswers: ["B"],
    explanation: "A man-in-the-middle attack (also known as an on-path attack) happens when someone intercepts packets intended for one computer and reads the data."
  },
  {
    id: "ch1_q7",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 1: Security Concepts",
    question: "Double tagging is a part of which of the following attacks?",
    options: [
      { label: "A", text: "VLAN hopping" },
      { label: "B", text: "Smurf attack" },
      { label: "C", text: "DDoS" },
      { label: "D", text: "Malware" }
    ],
    correctAnswers: ["A"],
    explanation: "A VLAN hopping attack results in traffic from one VLAN being sent to the wrong VLAN. The attacker can circumvent the trunking protocol by a process called double tagging, which is placing a fake VLAN tag into the packet along with the real tag."
  },
  {
    id: "ch1_q8",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 1: Security Concepts",
    question: "Which of the following is the process of adopting another system's MAC address for the purpose of receiving data meant for that system?",
    options: [
      { label: "A", text: "Certificate spoofing" },
      { label: "B", text: "ARP spoofing" },
      { label: "C", text: "IP spoofing" },
      { label: "D", text: "URL spoofing" }
    ],
    correctAnswers: ["B"],
    explanation: "ARP spoofing is the process of adopting another system's MAC address for the purpose of receiving data meant for that system. It usually also entails ARP cache poisoning."
  },
  {
    id: "ch1_q9",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 1: Security Concepts",
    question: "Which of the following is connected to your wired infrastructure without your knowledge?",
    options: [
      { label: "A", text: "Rogue AP" },
      { label: "B", text: "Command-and-control server" },
      { label: "C", text: "Zombies" },
      { label: "D", text: "Botnet" }
    ],
    correctAnswers: ["A"],
    explanation: "These are APs that have been connected to your wired infrastructure without your knowledge. The rogue may have been placed by a hacker who snuck into your facility or by an employee who just wants wireless access."
  },
  {
    id: "ch1_q10",
    domain: "1.0 Essential Security Principles",
    chapter: "Chapter 1: Security Concepts",
    question: "Which of the following uses the same SSID as your AP?",
    options: [
      { label: "A", text: "Rogue AP" },
      { label: "B", text: "Rogue DHCP" },
      { label: "C", text: "Evil twin" },
      { label: "D", text: "Zombie" }
    ],
    correctAnswers: ["C"],
    explanation: "An evil twin is achieved by placing an AP on a different channel from your legitimate APs and then setting its SSID in accordance with your SSID."
  }
];
