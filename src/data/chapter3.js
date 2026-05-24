export default [
  {
    id: "ch3_q1",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which of the following application layer protocols sets up a secure session that's similar to Telnet?",
    options: [
      { label: "A", text: "FTP" },
      { label: "B", text: "SSH" },
      { label: "C", text: "DNS" },
      { label: "D", text: "DHCP" }
    ],
    correctAnswers: ["B"],
    explanation: "Secure Shell (SSH) sets up a secure session similar to Telnet over a standard TCP/IP connection for logging into systems, running programs on remote systems, and moving files."
  },
  {
    id: "ch3_q2",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "What protocol is used to find the hardware address of a local device?",
    options: [
      { label: "A", text: "RARP" },
      { label: "B", text: "ARP" },
      { label: "C", text: "IP" },
      { label: "D", text: "ICMP" },
      { label: "E", text: "BootP" }
    ],
    correctAnswers: ["B"],
    explanation: "Address Resolution Protocol (ARP) is used to find the hardware address from a known IP address."
  },
  {
    id: "ch3_q3",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which of the following are layers in the TCP/IP model? (Choose three)",
    options: [
      { label: "A", text: "Application" },
      { label: "B", text: "Session" },
      { label: "C", text: "Transport" },
      { label: "D", text: "Internet" },
      { label: "E", text: "Data link" },
      { label: "F", text: "Physical" }
    ],
    correctAnswers: ["A", "C", "D"],
    explanation: "The Session, Data Link, and Physical layers are from the OSI model. In TCP/IP: Transport (Host-to-Host), Internet (Network), and Application (Application/Process)."
  },
  {
    id: "ch3_q4",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which class of IP address provides a maximum of only 254 host addresses per network ID?",
    options: [
      { label: "A", text: "Class A" },
      { label: "B", text: "Class B" },
      { label: "C", text: "Class C" },
      { label: "D", text: "Class D" }
    ],
    correctAnswers: ["C"],
    explanation: "A Class C network address has only 8 bits for defining hosts: 2^8 - 2 = 254."
  },
  {
    id: "ch3_q5",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which of the following describe the DHCP Discover message? (Choose two)",
    options: [
      { label: "A", text: "It uses ff:ff:ff:ff:ff:ff as a layer-2 broadcast" },
      { label: "B", text: "It uses UDP as the transport layer protocol" },
      { label: "C", text: "It uses TCP as the transport layer protocol" },
      { label: "D", text: "It does not use a layer-2 destination address" }
    ],
    correctAnswers: ["A", "B"],
    explanation: "DHCP Discover sends a broadcast at both layer 2 (FF:FF:FF:FF:FF:FF) and layer 3 (255.255.255.255). DHCP is connectionless and uses UDP."
  },
  {
    id: "ch3_q6",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which layer-4 protocol is used for a Telnet connection?",
    options: [
      { label: "A", text: "IP" },
      { label: "B", text: "TCP" },
      { label: "C", text: "TCP/IP" },
      { label: "D", text: "UDP" },
      { label: "E", text: "ICMP" }
    ],
    correctAnswers: ["B"],
    explanation: "Telnet uses TCP at layer 4. IP works at layer 3."
  },
  {
    id: "ch3_q7",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Private IP addressing was specified in RFC __________.",
    options: [
      { label: "A", text: "RFC 1918" },
      { label: "B", text: "RFC 1812" },
      { label: "C", text: "RFC 2131" },
      { label: "D", text: "RFC 1035" }
    ],
    correctAnswers: ["A"],
    explanation: "RFC 1918 specifies private IP addresses that can be used on private networks but are not routable through the Internet."
  },
  {
    id: "ch3_q8",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which of the following services use TCP? (Choose three)",
    options: [
      { label: "A", text: "DHCP" },
      { label: "B", text: "SMTP" },
      { label: "C", text: "SNMP" },
      { label: "D", text: "FTP" },
      { label: "E", text: "HTTP" },
      { label: "F", text: "TFTP" }
    ],
    correctAnswers: ["B", "D", "E"],
    explanation: "SMTP, FTP, and HTTP all use TCP at the transport layer."
  },
  {
    id: "ch3_q9",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which of the following is an example of a multicast address?",
    options: [
      { label: "A", text: "10.6.9.1" },
      { label: "B", text: "192.168.10.6" },
      { label: "C", text: "224.0.0.10" },
      { label: "D", text: "172.16.9.5" }
    ],
    correctAnswers: ["C"],
    explanation: "Multicast addresses start with 224.0.0.0 through 239.255.255.255."
  },
  {
    id: "ch3_q10",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "If you use either Telnet or FTP, what layer are you using to generate the data?",
    options: [
      { label: "A", text: "Application" },
      { label: "B", text: "Presentation" },
      { label: "C", text: "Session" },
      { label: "D", text: "Transport" }
    ],
    correctAnswers: ["A"],
    explanation: "Both FTP and Telnet are Application layer protocols."
  },
  {
    id: "ch3_q11",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "The DoD model has four layers. Which layer is equivalent to the network layer of the OSI model?",
    options: [
      { label: "A", text: "Application" },
      { label: "B", text: "Host-to-host" },
      { label: "C", text: "Internet" },
      { label: "D", text: "Network access" }
    ],
    correctAnswers: ["C"],
    explanation: "The Internet layer in the DoD model is equivalent to the Network layer of the OSI model."
  },
  {
    id: "ch3_q12",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which two of the following are private IP addresses?",
    options: [
      { label: "A", text: "12.0.0.1" },
      { label: "B", text: "168.172.19.39" },
      { label: "C", text: "172.20.14.36" },
      { label: "D", text: "172.33.194.30" },
      { label: "E", text: "192.168.24.43" }
    ],
    correctAnswers: ["C", "E"],
    explanation: "Class A private: 10.0.0.0-10.255.255.255, Class B private: 172.16.0.0-172.31.255.255, Class C private: 192.168.0.0-192.168.255.255."
  },
  {
    id: "ch3_q13",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "What layer in the TCP/IP stack is equivalent to the transport layer of the OSI model?",
    options: [
      { label: "A", text: "Application" },
      { label: "B", text: "Host-to-host" },
      { label: "C", text: "Internet" },
      { label: "D", text: "Network access" }
    ],
    correctAnswers: ["B"],
    explanation: "Host-to-Host layer in TCP/IP (DoD) is equivalent to the Transport layer of OSI."
  },
  {
    id: "ch3_q14",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which statements are true regarding ICMP packets? (Choose two)",
    options: [
      { label: "A", text: "ICMP guarantees datagram delivery" },
      { label: "B", text: "ICMP can provide hosts with information about network problems" },
      { label: "C", text: "ICMP is encapsulated within IP datagrams" },
      { label: "D", text: "ICMP is encapsulated within UDP datagrams" }
    ],
    correctAnswers: ["B", "C"],
    explanation: "ICMP is used for diagnostics and is encapsulated within IP datagrams. It provides information about network problems."
  },
  {
    id: "ch3_q15",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "What is the address range of a Class B network address in binary?",
    options: [
      { label: "A", text: "01xxxxxx" },
      { label: "B", text: "0xxxxxxx" },
      { label: "C", text: "10xxxxxx" },
      { label: "D", text: "110xxxxx" }
    ],
    correctAnswers: ["C"],
    explanation: "Class B addresses range from 128-191, which in binary starts with 10."
  },
  {
    id: "ch3_q16",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which option is a valid IPv6 address?",
    options: [
      { label: "A", text: "2001:0000:130F::099a::12a" },
      { label: "B", text: "2002:7654:A1AD:61:81AF:CCC1" },
      { label: "C", text: "FEC0:ABCD:WXYZ:0067::2A4" },
      { label: "D", text: "2004:1:25A4:886F::1" }
    ],
    correctAnswers: ["D"],
    explanation: "Option A has two double colons, B doesn't have 8 fields, C has invalid hex characters (WXYZ)."
  },
  {
    id: "ch3_q17",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which three statements about IPv6 prefixes are true? (Choose three)",
    options: [
      { label: "A", text: "FF00:/8 is used for IPv6 multicast" },
      { label: "B", text: "FE80::/10 is used for link-local unicast" },
      { label: "C", text: "FC00::/7 is used in private networks" },
      { label: "D", text: "2001::1/127 is used for loopback" },
      { label: "E", text: "FE80::/8 is used for link-local unicast" },
      { label: "F", text: "FEC0::/10 is used for IPv6 broadcast" }
    ],
    correctAnswers: ["A", "B", "C"],
    explanation: "Loopback is only ::1 (not /127). Link-local is FE80::/10 not /8. There are no broadcasts in IPv6."
  },
  {
    id: "ch3_q18",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which two statements about IPv6 router advertisement messages are true? (Choose two)",
    options: [
      { label: "A", text: "They use ICMPv6 type 134" },
      { label: "B", text: "The advertised prefix length must be 64 bits" },
      { label: "C", text: "The advertised prefix length must be 48 bits" },
      { label: "D", text: "They are sourced from the configured IPv6 interface address" },
      { label: "E", text: "Their destination is always the link-local address of the neighboring node" }
    ],
    correctAnswers: ["A", "B"],
    explanation: "ICMPv6 router advertisements use type 134 and must be at least 64 bits in length."
  },
  {
    id: "ch3_q19",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which of the following are advantages of using NAT? (Choose three)",
    options: [
      { label: "A", text: "Translation introduces switching path delays" },
      { label: "B", text: "NAT conserves legally registered addresses" },
      { label: "C", text: "NAT causes loss of end-to-end IP traceability" },
      { label: "D", text: "NAT increases flexibility when connecting to the Internet" },
      { label: "E", text: "Certain applications will not function with NAT enabled" },
      { label: "F", text: "NAT remedies address overlap occurrence" }
    ],
    correctAnswers: ["B", "D", "F"],
    explanation: "NAT conserves global addresses, provides flexibility, and allows using the same subnet more than once without overlapping networks."
  },
  {
    id: "ch3_q20",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Port address translation is also called what?",
    options: [
      { label: "A", text: "NAT fast" },
      { label: "B", text: "NAT static" },
      { label: "C", text: "NAT overload" },
      { label: "D", text: "Overloading static" }
    ],
    correctAnswers: ["C"],
    explanation: "Port Address Translation is also called NAT Overload because that is the keyword used to enable port address translation."
  },
  {
    id: "ch3_q21",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 3: IP, IPv6, and NAT",
    question: "Which of the following is considered to be the inside host's address before translation?",
    options: [
      { label: "A", text: "Inside local" },
      { label: "B", text: "Outside local" },
      { label: "C", text: "Inside global" },
      { label: "D", text: "Outside global" }
    ],
    correctAnswers: ["A"],
    explanation: "An inside local address is the IP address of the host on the private network before translation."
  }
];
