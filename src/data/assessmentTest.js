const assessmentTest = [
  {
    id: "at_1",
    domain: "1.0 Essential Security Principles",
    chapter: "Assessment Test",
    question: "Which form of social engineering is nothing more than looking over someone's shoulder while they enter or view sensitive information?",
    options: [
      { label: "A", text: "Shoulder surfing" },
      { label: "B", text: "Phishing" },
      { label: "C", text: "Tailgating" },
      { label: "D", text: "Whaling" }
    ],
    correctAnswers: ["A"],
    explanation: "Shoulder surfing involves looking over someone's shoulder as they enter information. Phishing is the act of attempting to steal credentials by sending an email that takes you to a fraudulent login. Tailgating is the act of following a person through an access control point and using their credentials. Whaling is a form of phishing that targets high-profile individuals."
  },
  {
    id: "at_2",
    domain: "1.0 Essential Security Principles",
    chapter: "Assessment Test",
    question: "What is a method for stopping tailgating?",
    options: [
      { label: "A", text: "User authentication" },
      { label: "B", text: "Access control vestibules" },
      { label: "C", text: "Strong passwords" },
      { label: "D", text: "Change SSIDs" }
    ],
    correctAnswers: ["B"],
    explanation: "Using access control vestibules, also known as mantraps (small rooms that limit access to one or a few individuals), is a great way to stop tailgating. User authentication, strong passwords, and changing SSIDs will not prevent tailgating because tailgating is a physical security problem."
  },
  {
    id: "at_3",
    domain: "1.0 Essential Security Principles",
    chapter: "Assessment Test",
    question: "Susan is interested in securing her SOHO wireless network. What should she do to be assured that only her devices can join her wireless network?",
    options: [
      { label: "A", text: "Enable WPA2" },
      { label: "B", text: "Enable MAC filtering" },
      { label: "C", text: "Enable port security" },
      { label: "D", text: "Disable SSID broadcasts" }
    ],
    correctAnswers: ["B"],
    explanation: "Enabling MAC filtering on the access point will allow only the devices that she specifies. WPA2 encryption will not prevent unauthorized access to the SOHO network. Port Security is enabled on wired network switches. Disabling the SSID from broadcasting will not prevent unauthorized access."
  },
  {
    id: "at_4",
    domain: "1.0 Essential Security Principles",
    chapter: "Assessment Test",
    question: "Which statement is correct about WPA?",
    options: [
      { label: "A", text: "WPA was released at the same time as WEP" },
      { label: "B", text: "WPA was released as a fix for poor coverage" },
      { label: "C", text: "WPA was released as a fix for poor encryption" },
      { label: "D", text: "The Wi-Fi Alliance wanted to rebrand WEP with WPA" }
    ],
    correctAnswers: ["C"],
    explanation: "After the weaknesses in WEP encryption were discovered, the Wi-Fi Alliance rushed the release of the WPA security protocol. WPA incorporated the 802.11i standard of TKIP, which allowed for better integrity of 802.11 transmissions."
  },
  {
    id: "at_5",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Assessment Test",
    question: "How does TCP guarantee delivery of segments to the receiver?",
    options: [
      { label: "A", text: "Via the destination port" },
      { label: "B", text: "TCP checksums" },
      { label: "C", text: "Window size" },
      { label: "D", text: "Sequence and acknowledgment numbers" }
    ],
    correctAnswers: ["D"],
    explanation: "TCP guarantees delivery of segments with sequence and acknowledgment numbers. At the transport layer, each segment is given a sequence number that is acknowledged by the receiver. Source and destination ports are used for delivery but do not guarantee it. TCP checksums detect errors but don't guarantee delivery. Window size adjusts buffer size."
  },
  {
    id: "at_6",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Assessment Test",
    question: "What is required before TCP can begin sending segments?",
    options: [
      { label: "A", text: "Three-way handshake" },
      { label: "B", text: "Port agreement" },
      { label: "C", text: "Sequencing of segments" },
      { label: "D", text: "Acknowledgment of segments" }
    ],
    correctAnswers: ["A"],
    explanation: "A three-way handshake is required between sender and receiver before TCP can begin sending traffic. During this three-way handshake, the sender's window buffer size is synchronized with the receiver's window buffer size."
  },
  {
    id: "at_7",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Assessment Test",
    question: "Which method is used to direct communications to a group of computers that subscribe to the transmission?",
    options: [
      { label: "A", text: "Unicast" },
      { label: "B", text: "Broadcast" },
      { label: "C", text: "Multicast" },
      { label: "D", text: "Anycast" }
    ],
    correctAnswers: ["C"],
    explanation: "Multicast is used to allow computers to opt into a transmission. Examples include video, routing protocols, and imaging of computers. Unicast is direct communication between two hosts. Broadcast forwards to all computers in the same subnet. Anycast allows the same IP address on multiple machines in different geographical areas."
  },
  {
    id: "at_8",
    domain: "1.0 Essential Security Principles",
    chapter: "Assessment Test",
    question: "Which factor of authentication requires you to present something that is unique to you and can't be copied?",
    options: [
      { label: "A", text: "Password" },
      { label: "B", text: "Signature" },
      { label: "C", text: "Fingerprint" },
      { label: "D", text: "Location" }
    ],
    correctAnswers: ["C"],
    explanation: "Your fingerprint is an example of something that you are, because it is unique to you and can't be copied. A password is something that you know. A signature is something that you do, as it can be forged. A location is somewhere you are, according to your GPS location."
  },
  {
    id: "at_9",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Assessment Test",
    question: "What is the end device that sends credentials for 802.1X called?",
    options: [
      { label: "A", text: "Authenticator" },
      { label: "B", text: "Supplicant" },
      { label: "C", text: "AAA server" },
      { label: "D", text: "RADIUS server" }
    ],
    correctAnswers: ["B"],
    explanation: "The end device that sends credentials is called the supplicant. The supplicant is a piece of software in the operating system that supplies the credentials for AAA authentication. The authenticator is the WAP or switch configured for 802.1X. The AAA server is normally a RADIUS or TACACS+ server."
  },
  {
    id: "at_10",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Assessment Test",
    question: "What can you use to protect against spoofing of internal IP addresses on the perimeter of your network?",
    options: [
      { label: "A", text: "ACLs" },
      { label: "B", text: "Intrusion detection systems" },
      { label: "C", text: "SSL" },
      { label: "D", text: "Host intrusion detection systems" }
    ],
    correctAnswers: ["A"],
    explanation: "Access control lists (ACLs) are an effective way to mitigate spoofing of internal IPs from outside the trusted network. ACLs control traffic by allowing, denying, or logging depending on specific conditions. An IDS notifies of attacks but does not prevent them. SSL offers encryption and authentication but not spoofing prevention. HIDS detects intrusions on a host."
  },
  {
    id: "at_11",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Assessment Test",
    question: "Which benefit of using a secure VPN allows verification that a packet was not tampered with in transit?",
    options: [
      { label: "A", text: "Authentication" },
      { label: "B", text: "Data integrity" },
      { label: "C", text: "Anti-replay" },
      { label: "D", text: "Confidentiality" }
    ],
    correctAnswers: ["B"],
    explanation: "Data integrity is one of the benefits of using a secure VPN protocol. A packet is sealed with a hash that must calculate to the same hash on the other side when received and decrypted. Authentication ensures both parties are authenticated before transmission. Anti-replay is a byproduct of authentication and data integrity. Confidentiality is created with end-to-end encryption."
  },
  {
    id: "at_12",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Assessment Test",
    question: "What is an advantage of using a standard ACL?",
    options: [
      { label: "A", text: "More secure" },
      { label: "B", text: "Less processing overhead" },
      { label: "C", text: "More specific rules" },
      { label: "D", text: "Blocking of applications" }
    ],
    correctAnswers: ["B"],
    explanation: "An advantage of a standard ACL is that they require less processing overhead from the ASIC or CPU. Since they only inspect layer 3 headers, no further decapsulation is required for layer 4. Extended ACLs should be used for higher specificity. Blocking of specific applications can only be achieved with extended ACLs."
  },
  {
    id: "at_13",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Assessment Test",
    question: "Which extension is used with the Windows batch scripting language?",
    options: [
      { label: "A", text: ".vbs" },
      { label: "B", text: ".js" },
      { label: "C", text: ".bat" },
      { label: "D", text: ".py" }
    ],
    correctAnswers: ["C"],
    explanation: "The .bat extension is used with the Windows batch scripting language. The .vbs extension is used with VBScript. The .js extension is used with JavaScript. The .py extension is used with Python."
  },
  {
    id: "at_14",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Assessment Test",
    question: "Chelsea is worried about the threat of malware on the network. She wants every workstation to have installed software that will detect worms and Trojan horses. What type of software should she install?",
    options: [
      { label: "A", text: "Malware" },
      { label: "B", text: "Antivirus" },
      { label: "C", text: "Software firewalls" },
      { label: "D", text: "Spyware" }
    ],
    correctAnswers: ["B"],
    explanation: "Antivirus software is an application installed on a system to protect it and to scan for viruses as well as worms and Trojan horses. Malware is malicious software that causes malicious activity. Software firewalls will not detect Trojan horses and worms. Spyware monitors user activity and offers unsolicited pop-up advertisements."
  },
  {
    id: "at_15",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Assessment Test",
    question: "Which of the following is not an NTFS permission?",
    options: [
      { label: "A", text: "Full Control" },
      { label: "B", text: "Write" },
      { label: "C", text: "Read & Execute" },
      { label: "D", text: "Change" }
    ],
    correctAnswers: ["D"],
    explanation: "Change is a share permission; the similar permission in NTFS is Modify. Full Control, Write, and Read & Execute are all valid NTFS permissions."
  },
  {
    id: "at_16",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Assessment Test",
    question: "You manage the IT department for an organization and want to enforce restrictions so that company-owned devices do not record via the camera and microphone. What can you implement?",
    options: [
      { label: "A", text: "Antivirus software" },
      { label: "B", text: "MDM software" },
      { label: "C", text: "Firewall software" },
      { label: "D", text: "BYOD policy" }
    ],
    correctAnswers: ["B"],
    explanation: "Implementing mobile device management (MDM) software can help you enforce restrictions of mobile device recordings. Antivirus software and firewall software do not restrict camera and microphone usage. A BYOD policy will not enforce restrictions of camera and microphone usage."
  },
  {
    id: "at_17",
    domain: "1.0 Essential Security Principles",
    chapter: "Assessment Test",
    question: "You are an employee of an organization that works with information identifying citizens in the United States and Europe. Which regulations should you adhere to?",
    options: [
      { label: "A", text: "PCI DSS" },
      { label: "B", text: "HIPAA" },
      { label: "C", text: "GDPR" },
      { label: "D", text: "PHI" }
    ],
    correctAnswers: ["C"],
    explanation: "You should adhere to regulation based on General Data Protection Regulation (GDPR) for EU citizens. HIPAA applies to health care. PCI DSS is for handling payment card transaction data. PHI refers to health care information."
  },
  {
    id: "at_18",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Assessment Test",
    question: "Which information is not commonly found in the initial form for a change request?",
    options: [
      { label: "A", text: "Reason" },
      { label: "B", text: "Priority" },
      { label: "C", text: "Risk analysis" },
      { label: "D", text: "Change rollback plan" }
    ],
    correctAnswers: ["C"],
    explanation: "The risk analysis is typically not included in the initial request form for change submitted to the change advisory board. Any risk included in this initial form will be a narrow view from the requestor. The function of the change advisory board is to perform the risk analysis organization-wide."
  },
  {
    id: "at_19",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Assessment Test",
    question: "You just found out that your internal core router has a remote-control vulnerability. What is the risk level that you would associate with this?",
    options: [
      { label: "A", text: "Low" },
      { label: "B", text: "Medium" },
      { label: "C", text: "High" },
      { label: "D", text: "No risk" }
    ],
    correctAnswers: ["C"],
    explanation: "Since this is your core router the impact is high and the remote-control vulnerability is also high risk. Therefore, this should be taken care of immediately."
  },
  {
    id: "at_20",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Assessment Test",
    question: "Which threat intelligence plans are long-term and high level?",
    options: [
      { label: "A", text: "Strategic" },
      { label: "B", text: "Tactical" },
      { label: "C", text: "Operational" },
      { label: "D", text: "Technical" }
    ],
    correctAnswers: ["A"],
    explanation: "Strategic threat intelligence is aimed at less technical people, and more toward decision makers and C-suite level people. Tactical threat intelligence is technically focused for security analysts. Operational is aimed at managers with working knowledge of TTPs. Technical is very low-level."
  },
  {
    id: "at_21",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Assessment Test",
    question: "Which of the following is an active reconnaissance tactic?",
    options: [
      { label: "A", text: "Vulnerability scanning" },
      { label: "B", text: "DNS enumeration" },
      { label: "C", text: "Network traffic analysis" },
      { label: "D", text: "OSINT" }
    ],
    correctAnswers: ["A"],
    explanation: "Vulnerability scanning is an active reconnaissance tactic because it interacts with the network. DNS enumeration, network traffic analysis, and OSINT are all passive tactics because they can be done without anyone knowing or use publicly available information."
  },
  {
    id: "at_22",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Assessment Test",
    question: "Which backup media is the slowest from which to recover?",
    options: [
      { label: "A", text: "Disk-to-tape" },
      { label: "B", text: "Disk-to-disk" },
      { label: "C", text: "Disk-to-flash" },
      { label: "D", text: "Disk-to-cloud" }
    ],
    correctAnswers: ["D"],
    explanation: "Disk-to-cloud is the slowest recovery method because you must recover from the cloud over a network connection. Disk-to-tape requires re-tensioning and locating data. Disk-to-disk is the fastest recovery and backup method. Disk-to-flash is not a backup method due to flash pricing."
  },
  {
    id: "at_23",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Assessment Test",
    question: "What is the definition of the recovery point objective?",
    options: [
      { label: "A", text: "How long it will take to back up a data set" },
      { label: "B", text: "How current the data is on backup media" },
      { label: "C", text: "How long it will take to restore a data set" },
      { label: "D", text: "How large the current data set is" }
    ],
    correctAnswers: ["B"],
    explanation: "The recovery point objective (RPO) is how current the data is on the backup media and to what point you can recover to. How long it takes to back up is the backup window. How long to restore is the recovery time objective (RTO)."
  },
  {
    id: "at_24",
    domain: "1.0 Essential Security Principles",
    chapter: "Assessment Test",
    question: "Which regulations are enforced on education providers?",
    options: [
      { label: "A", text: "GLBA" },
      { label: "B", text: "FERPA" },
      { label: "C", text: "SOX" },
      { label: "D", text: "HIPAA" }
    ],
    correctAnswers: ["B"],
    explanation: "Family Educational Rights and Privacy Act (FERPA) affects education providers and organizations that process student records. GLBA affects financial services. SOX is enforced by the SEC and regulates financial records. HIPAA affects health care providers."
  },
  {
    id: "at_25",
    domain: "5.0 Incident Handling",
    chapter: "Assessment Test",
    question: "Which model was developed by Lockheed Martin, to provide a framework used to identify and prevent cyber intrusions?",
    options: [
      { label: "A", text: "Cyber Kill Chain" },
      { label: "B", text: "Diamond Model" },
      { label: "C", text: "MITRE ATT&CK Matrix" },
      { label: "D", text: "TTPs" }
    ],
    correctAnswers: ["A"],
    explanation: "The Cyber Kill Chain model was developed by Lockheed Martin. It is a common framework used to identify and prevent cyber intrusion. The Diamond Model is used for incident analysis. The MITRE ATT&CK Matrix was developed by the MITRE corporation. TTPs are used to carry out each stage of an attack."
  },
  {
    id: "at_26",
    domain: "5.0 Incident Handling",
    chapter: "Assessment Test",
    question: "A disgruntled employee is found to have leaked the parts used for a new product for your organization. What type of threat is this an example of?",
    options: [
      { label: "A", text: "Supply chain" },
      { label: "B", text: "Insider threat" },
      { label: "C", text: "DDoS attack" },
      { label: "D", text: "Phishing" }
    ],
    correctAnswers: ["B"],
    explanation: "This is a classic example of an insider threat, typically stemming from disgruntled employees or corporate espionage. A supply chain threat involves injecting malware into a product's supply chain. DDoS is an attack where several hosts attack a single host. Phishing manipulates recipients into sharing sensitive information."
  }
];

export default assessmentTest;
