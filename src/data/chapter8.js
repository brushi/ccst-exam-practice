export default [
  {
    id: "ch8_q1",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 8: Risk Management",
    question: "Which is a vulnerability that no patch or workaround is available for at the time of its disclosure?",
    options: [
      { label: "A", text: "Exploit" },
      { label: "B", text: "Asset" },
      { label: "C", text: "Zero-day" },
      { label: "D", text: "Training" }
    ],
    correctAnswers: ["C"],
    explanation: "A zero-day is a vulnerability in which there is no known patch or workaround available at the time of disclosure. An exploit is a method of using a vulnerability. An asset holds value. Lack of training is a vulnerability where threat actors exploit the end-user."
  },
  {
    id: "ch8_q2",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 8: Risk Management",
    question: "You have found that a number of devices on your network have default credentials still configured. Which type of vulnerability is this?",
    options: [
      { label: "A", text: "Training" },
      { label: "B", text: "Physical" },
      { label: "C", text: "Zero-day" },
      { label: "D", text: "Configuration" }
    ],
    correctAnswers: ["D"],
    explanation: "Default credentials on network devices is a configuration vulnerability, since these defaults should have been changed. Training vulnerabilities allow for phishing. Physical vulnerabilities involve physical mechanisms like locks. Zero-day has no known patch."
  },
  {
    id: "ch8_q3",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 8: Risk Management",
    question: "Which is not an element of risk?",
    options: [
      { label: "A", text: "Network" },
      { label: "B", text: "Vulnerability" },
      { label: "C", text: "Threat" },
      { label: "D", text: "Asset" }
    ],
    correctAnswers: ["A"],
    explanation: "The elements of risk are vulnerabilities, threats, and assets. The network itself is not a component of risk."
  },
  {
    id: "ch8_q4",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 8: Risk Management",
    question: "You have a large proprietary database of users. Which would these be considered in relation to risk?",
    options: [
      { label: "A", text: "Vulnerable" },
      { label: "B", text: "Asset" },
      { label: "C", text: "Exploitable" },
      { label: "D", text: "Configuration" }
    ],
    correctAnswers: ["B"],
    explanation: "The database of users should be considered the asset as a component of risk. The question didn't give information on security posture, so it wouldn't be vulnerable or exploitable."
  },
  {
    id: "ch8_q5",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 8: Risk Management",
    question: "Which is not a component of the risk analysis calculation to derive an outcome?",
    options: [
      { label: "A", text: "Likelihood" },
      { label: "B", text: "Availability" },
      { label: "C", text: "Level" },
      { label: "D", text: "Impact" }
    ],
    correctAnswers: ["C"],
    explanation: "The level of risk is the OUTCOME of the risk analysis calculation, not a component. The likelihood and impact on confidentiality, integrity, or availability are the main components."
  },
  {
    id: "ch8_q6",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 8: Risk Management",
    question: "With a three-tier risk rating, if the impact of a risk is significant but the likelihood is low, what is the expected risk level?",
    options: [
      { label: "A", text: "Extreme" },
      { label: "B", text: "High" },
      { label: "C", text: "Moderate" },
      { label: "D", text: "Low" }
    ],
    correctAnswers: ["B"],
    explanation: "If the impact is significant or higher, then the risk will be high, regardless of what the likelihood is perceived to be. If the likelihood is very likely, the risk will be moderate or high depending on impact."
  },
  {
    id: "ch8_q7",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 8: Risk Management",
    question: "Which risk prioritization approach uses objective data to prioritize risk?",
    options: [
      { label: "A", text: "Qualitative" },
      { label: "B", text: "Confidential" },
      { label: "C", text: "Subjective" },
      { label: "D", text: "Quantitative" }
    ],
    correctAnswers: ["D"],
    explanation: "A quantitative approach uses objective data, evaluating the loss as a calculation of a single instance of realized risk multiplied by the number of expected occurrences yearly. A qualitative approach is used when the value of loss is unknown."
  },
  {
    id: "ch8_q8",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 8: Risk Management",
    question: "Your organization uses a third party to vet employees. Which risk mitigation strategy is this an example of?",
    options: [
      { label: "A", text: "Transference" },
      { label: "B", text: "Elimination" },
      { label: "C", text: "Acceptance" },
      { label: "D", text: "Contingency plan" }
    ],
    correctAnswers: ["A"],
    explanation: "Using a third-party to vet employees is transference of risk, since your organization is contractually transferring risk to the third party. Elimination removes risk entirely. Acceptance acknowledges the risk. A contingency plan allows continuation if risk is realized."
  },
  {
    id: "ch8_q9",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 8: Risk Management",
    question: "Which element of the risk mitigation plan is the urgency of the mitigation?",
    options: [
      { label: "A", text: "Impact" },
      { label: "B", text: "Proximity" },
      { label: "C", text: "Resources" },
      { label: "D", text: "Budget" }
    ],
    correctAnswers: ["B"],
    explanation: "Proximity is the urgency of completion for the mitigation of the risk, directly linked to impact and likelihood. Impact is how the risk will affect the organization. Resources refer to outside tools or third-party help. Budget refers to money allocated."
  },
  {
    id: "ch8_q10",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 8: Risk Management",
    question: "Which section of the change management documentation contains whom the change will affect?",
    options: [
      { label: "A", text: "Business processes" },
      { label: "B", text: "Scope of change" },
      { label: "C", text: "User acceptance" },
      { label: "D", text: "Plan for change" }
    ],
    correctAnswers: ["B"],
    explanation: "The scope of change section details whom the change will affect. Business processes details current processes affected. User acceptance details how changes were tested and accepted. Plan for change contains primary and alternate plans."
  }
]
