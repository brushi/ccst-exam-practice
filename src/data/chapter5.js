export default [
  {
    id: "ch5_q1",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 5: Secure Access Technology",
    question: "Which of the following statements is false when a packet is being compared to an access list?",
    options: [
      { label: "A", text: "It's always compared with each line of the access list in sequential order" },
      { label: "B", text: "Once the packet matches the condition on a line of the access list, the packet is acted on and no further comparisons take place" },
      { label: "C", text: "There is an implicit \"deny\" at the end of each access list" },
      { label: "D", text: "Until all lines have been analyzed, the comparison is not over" }
    ],
    correctAnswers: ["D"],
    explanation: "It's compared with lines of the access list only until a match is made. Once the packet matches the condition, the packet is acted upon and no further comparisons take place. Statement D is false because comparisons stop once a match is found."
  },
  {
    id: "ch5_q2",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 5: Secure Access Technology",
    question: "You need to create an access list that will prevent hosts in the network range of 192.168.160.0 to 192.168.191.0. Which of the following lists will you use?",
    options: [
      { label: "A", text: "access-list 10 deny 192.168.160.0 255.255.224.0" },
      { label: "B", text: "access-list 10 deny 192.168.160.0 0.0.191.255" },
      { label: "C", text: "access-list 10 deny 192.168.160.0 0.0.31.255" },
      { label: "D", text: "access-list 10 deny 192.168.0.0 0.0.31.255" }
    ],
    correctAnswers: ["C"],
    explanation: "The range 192.168.160.0 to 192.168.191.0 is a block size of 32. The wildcard mask is 0.0.31.255. The wildcard is always one less than the block size."
  },
  {
    id: "ch5_q3",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 5: Secure Access Technology",
    question: "You have created a named access list called BlockSales. Which of the following is a valid command for applying this to packets trying to enter interface Fa0/0 of your router?",
    options: [
      { label: "A", text: "(config)#ip access-group 110 in" },
      { label: "B", text: "(config-if)#ip access-group 110 in" },
      { label: "C", text: "(config-if)#ip access-group Blocksales in" },
      { label: "D", text: "(config-if)#BlockSales ip access-list in" }
    ],
    correctAnswers: ["C"],
    explanation: "Using a named access list just replaces the number used when applying the list to the router's interface. ip access-group Blocksales in is correct."
  },
  {
    id: "ch5_q4",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 5: Secure Access Technology",
    question: "Which access-list statement will permit all HTTP sessions to network 192.168.144.0/24 containing web servers?",
    options: [
      { label: "A", text: "access-list 110 permit tcp 192.168.144.0 0.0.0.255 any eq 80" },
      { label: "B", text: "access-list 110 permit tcp any 192.168.144.0 0.0.0.255 eq 80" },
      { label: "C", text: "access-list 110 permit tcp 192.168.144.0 0.0.0.255 192.168.144.0 0.0.0.255 any eq 80" },
      { label: "D", text: "access-list 110 permit udp any 192.168.144.0 eq 80" }
    ],
    correctAnswers: ["B"],
    explanation: "The list must specify TCP as the Transport layer protocol, use a correct wildcard mask (0.0.0.255), specify the destination port (80), and specify any as the set of computers allowed to have this access."
  },
  {
    id: "ch5_q5",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 5: Secure Access Technology",
    question: "Which of the following is an industry-wide standard suite of protocols and algorithms that allows for secure data transmission over an IP-based network that functions at layer 3, or the network layer of the OSI model?",
    options: [
      { label: "A", text: "HDLC" },
      { label: "B", text: "Cable" },
      { label: "C", text: "VPN" },
      { label: "D", text: "IPsec" },
      { label: "E", text: "xDSL" }
    ],
    correctAnswers: ["D"],
    explanation: "IPsec is an industry-wide standard suite of protocols and algorithms that allows for secure data transmission over an IP-based network that functions at the layer 3 Network layer of the OSI model."
  },
  {
    id: "ch5_q6",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 5: Secure Access Technology",
    question: "Which of the following describes the creation of private networks across the Internet, enabling privacy and tunneling of non-TCP/IP protocols?",
    options: [
      { label: "A", text: "HDLC" },
      { label: "B", text: "Cable" },
      { label: "C", text: "VPN" },
      { label: "D", text: "IPsec" },
      { label: "E", text: "xDSL" }
    ],
    correctAnswers: ["C"],
    explanation: "A VPN allows or describes the creation of private networks across the Internet, enabling privacy and tunneling of TCP/IP protocols. A VPN can be set up across any type of link."
  },
  {
    id: "ch5_q7",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 5: Secure Access Technology",
    question: "Which of the following older encryption algorithms should never be used?",
    options: [
      { label: "A", text: "DES" },
      { label: "B", text: "3DES" },
      { label: "C", text: "AES" },
      { label: "D", text: "SHA" },
      { label: "E", text: "MD5" }
    ],
    correctAnswers: ["A"],
    explanation: "DES was compromised a long time ago and should never be used in production."
  },
  {
    id: "ch5_q8",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 5: Secure Access Technology",
    question: "Which hash algorithm is preferred?",
    options: [
      { label: "A", text: "DES" },
      { label: "B", text: "3DES" },
      { label: "C", text: "AES" },
      { label: "D", text: "SHA" },
      { label: "E", text: "MD5" }
    ],
    correctAnswers: ["D"],
    explanation: "SHA is the preferred hash algorithm these days."
  },
  {
    id: "ch5_q9",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 5: Secure Access Technology",
    question: "What issues certificates in a PKI model?",
    options: [
      { label: "A", text: "Certificate Issuer" },
      { label: "B", text: "Certificate Authority" },
      { label: "C", text: "Certificate Provider" },
      { label: "D", text: "Certificate Master" },
      { label: "E", text: "Certificate Server" }
    ],
    correctAnswers: ["B"],
    explanation: "A Certificate Authority issues certificates."
  },
  {
    id: "ch5_q10",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 5: Secure Access Technology",
    question: "Which is the name of a secondary Certificate Authority?",
    options: [
      { label: "A", text: "Secondary Certificate Authority" },
      { label: "B", text: "Backup Certificate Authority" },
      { label: "C", text: "Intermediate Certificate Authority" },
      { label: "D", text: "Failover Certificate Authority" },
      { label: "E", text: "xCertificate Authority" }
    ],
    correctAnswers: ["C"],
    explanation: "Intermediate Certificate Authority is what we call CAs after the Root."
  }
];
