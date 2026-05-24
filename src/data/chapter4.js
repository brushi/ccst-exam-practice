export default [
  {
    id: "ch4_q1",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 4: Network Device Access",
    question: "The Cisco ISE system is an example of?",
    options: [
      { label: "A", text: "NAC" },
      { label: "B", text: "802.1X" },
      { label: "C", text: "Authenticator" },
      { label: "D", text: "IAM" }
    ],
    correctAnswers: ["A"],
    explanation: "The Cisco Identity Services Engine (ISE) is a complete Network Access Control (NAC) system. Cisco ISE will use 802.1X to control access, but ISE is the authentication server in the 802.1X model."
  },
  {
    id: "ch4_q2",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 4: Network Device Access",
    question: "You are implementing a public guest wireless network and require that users accept an acceptable use policy (AUP). What should you implement to accomplish the goal?",
    options: [
      { label: "A", text: "ACLs" },
      { label: "B", text: "MAC filtering" },
      { label: "C", text: "Captive portal" },
      { label: "D", text: "802.1X" }
    ],
    correctAnswers: ["C"],
    explanation: "A captive portal will capture the users' first web page request and redirect them to either a login page or an AUP. ACLs and MAC filtering restrict specific traffic. 802.1X is used to authenticate users and devices to control a layer 2 switchport."
  },
  {
    id: "ch4_q3",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 4: Network Device Access",
    question: "Which security concept dictates that a user be given only the permission to perform their job?",
    options: [
      { label: "A", text: "Zero trust" },
      { label: "B", text: "Role-based access" },
      { label: "C", text: "Least privilege" },
      { label: "D", text: "Defense in depth" }
    ],
    correctAnswers: ["C"],
    explanation: "The principle of least privilege dictates that a user be given the least permission to perform their job. Zero trust requires the user to authenticate for each resource. Role-based access grants permissions based on a role. Defense in depth is a layered security approach."
  },
  {
    id: "ch4_q4",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 4: Network Device Access",
    question: "Which authentication system is an open standard originally proposed by the Internet Engineering Task Force (IETF)?",
    options: [
      { label: "A", text: "RADIUS" },
      { label: "B", text: "TACACS+" },
      { label: "C", text: "ISE" },
      { label: "D", text: "IAM" }
    ],
    correctAnswers: ["A"],
    explanation: "Remote Authentication Dial-In User Service (RADIUS) was originally proposed by the IETF and became an open standard for authentication, often used with wireless. TACACS+ is a Cisco technology. ISE is a NAC system. IAM is a security framework."
  },
  {
    id: "ch4_q5",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 4: Network Device Access",
    question: "Which protocol and port number does RADIUS use for accounting?",
    options: [
      { label: "A", text: "TCP/1812" },
      { label: "B", text: "TCP/1813" },
      { label: "C", text: "UDP/1812" },
      { label: "D", text: "UDP/1813" }
    ],
    correctAnswers: ["D"],
    explanation: "RADIUS uses UDP for both authentication and accounting. Port 1813/UDP is for accounting, and 1812/UDP is for authentication."
  },
  {
    id: "ch4_q6",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 4: Network Device Access",
    question: "Which factor of authentication requires you to present something that is unique to you and can't be copied?",
    options: [
      { label: "A", text: "Password" },
      { label: "B", text: "Signature" },
      { label: "C", text: "Fingerprint" },
      { label: "D", text: "Location" }
    ],
    correctAnswers: ["C"],
    explanation: "Your fingerprint is an example of something that you are, because it is unique to you and can't be copied. A password is something you know. A signature is something you do. A location is somewhere you are."
  },
  {
    id: "ch4_q7",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 4: Network Device Access",
    question: "You are designing a security strategy for a cloud-based application. You want to make it simple for other administrators to grant permissions without complexity. Which security strategy should you implement?",
    options: [
      { label: "A", text: "TACACS+" },
      { label: "B", text: "PKI" },
      { label: "C", text: "RBAC" },
      { label: "D", text: "RADIUS" }
    ],
    correctAnswers: ["C"],
    explanation: "Role-based access control (RBAC) is a strategy where you grant roles to users that contain various permissions. Another admin simply needs to place the user into the role to grant permissions."
  },
  {
    id: "ch4_q8",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 4: Network Device Access",
    question: "Why should you always provide a second method of local authentication when setting up AAA remote authentication with a router or switch?",
    options: [
      { label: "A", text: "To allow for a backdoor" },
      { label: "B", text: "To provide a backup if the RADIUS server is down or unreachable" },
      { label: "C", text: "The local second method is required" },
      { label: "D", text: "All of the above" }
    ],
    correctAnswers: ["B"],
    explanation: "The local second method ensures that if the router's connection to the AAA server is down, you can still gain access to diagnose or repair. It does not create a backdoor; it creates a backup."
  },
  {
    id: "ch4_q9",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 4: Network Device Access",
    question: "You want all guests to register for wireless Internet access before granting them access. What should you implement?",
    options: [
      { label: "A", text: "Captive portal" },
      { label: "B", text: "AAA server" },
      { label: "C", text: "801.X" },
      { label: "D", text: "RBAC" }
    ],
    correctAnswers: ["A"],
    explanation: "A captive portal will allow you to require all guests to register for wireless Internet access before granting them access. An AAA server is for already established users. 802.1X is a control protocol. RBAC helps with role-based permissions."
  },
  {
    id: "ch4_q10",
    domain: "2.0 Basic Network Security Concepts",
    chapter: "Chapter 4: Network Device Access",
    question: "Which port must be open to the RADIUS or AAA server for authentication from the authenticator?",
    options: [
      { label: "A", text: "UDP/49" },
      { label: "B", text: "UDP/1821" },
      { label: "C", text: "UDP/1812" },
      { label: "D", text: "UDP/1813" }
    ],
    correctAnswers: ["C"],
    explanation: "The AAA server listens on UDP port 1812 for authentication of credentials. UDP/1813 is for accounting information. UDP/49 is not correct."
  }
];
