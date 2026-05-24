export default [
  {
    id: "ch10_q1",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 10: Disaster Recovery",
    question: "Which backup media is the fastest from which to recover?",
    options: [
      { label: "A", text: "Disk-to-tape" },
      { label: "B", text: "Disk-to-disk" },
      { label: "C", text: "Disk-to-flash" },
      { label: "D", text: "Disk-to-cloud" }
    ],
    correctAnswers: ["B"],
    explanation: "Disk-to-disk is the fastest recovery and backup method because you back up from a disk to another disk attached via the network. Disk-to-tape is slower. Disk-to-flash is not a backup method. Disk-to-cloud is the slowest."
  },
  {
    id: "ch10_q2",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 10: Disaster Recovery",
    question: "You need to upgrade a server and want to make a backup of the data before you begin. Which backup method should you choose so that your normal backups are not affected?",
    options: [
      { label: "A", text: "Full" },
      { label: "B", text: "Copy" },
      { label: "C", text: "Incremental" },
      { label: "D", text: "Differential" }
    ],
    correctAnswers: ["B"],
    explanation: "The copy backup method performs a full backup without resetting the archive bits. A full backup resets all archive bits affecting normal backups. Incremental copies only changed files. Differential backs up changed files and resets archive bits."
  },
  {
    id: "ch10_q3",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 10: Disaster Recovery",
    question: "Which type of power protection is used between the electricity coming into the premises and the power meter, to protect from surges in electricity?",
    options: [
      { label: "A", text: "Surge protector strip" },
      { label: "B", text: "Uninterruptible power supply" },
      { label: "C", text: "Service entrance surge protection" },
      { label: "D", text: "Generator" }
    ],
    correctAnswers: ["C"],
    explanation: "Service entrance surge protection is used between the power meter and main breakers. A surge protector strip is found under desks. A UPS is a backup power source. A generator sustains power during outages."
  },
  {
    id: "ch10_q4",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 10: Disaster Recovery",
    question: "Which of the following is a measure back in time to when your data was preserved in a usable format, usually to the most recent backup?",
    options: [
      { label: "A", text: "RTO" },
      { label: "B", text: "MTBF" },
      { label: "C", text: "RPO" },
      { label: "D", text: "MTTR" }
    ],
    correctAnswers: ["C"],
    explanation: "The recovery point objective (RPO) measures back in time to when data was preserved, usually to the most recent backup. RTO is how long to recover. MTBF is mean time between failures. MTTR is mean time to repair."
  },
  {
    id: "ch10_q5",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 10: Disaster Recovery",
    question: "Which of the following provides only fault tolerance?",
    options: [
      { label: "A", text: "Two servers in an active/active configuration" },
      { label: "B", text: "Three servers in an active/passive configuration with one on standby" },
      { label: "C", text: "Three servers in an active/passive configuration with two on standby" },
      { label: "D", text: "Three servers in an active/active configuration" }
    ],
    correctAnswers: ["C"],
    explanation: "With three servers in active/passive with two on standby, only one is doing work, providing fault tolerance but not load balancing. Active/active provides scale-out. Single standby doesn't provide fault tolerance."
  },
  {
    id: "ch10_q6",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 10: Disaster Recovery",
    question: "Which site type mimics your on-premises network yet is totally virtual?",
    options: [
      { label: "A", text: "Cold site" },
      { label: "B", text: "Cloud site" },
      { label: "C", text: "Warm site" },
      { label: "D", text: "Hot site" }
    ],
    correctAnswers: ["B"],
    explanation: "A cloud recovery site is an extension of cloud backup services that mimics on-premises network while being totally virtual. Cold sites require equipment. Warm sites require some intervention. Hot sites don't require intervention."
  },
  {
    id: "ch10_q7",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 10: Disaster Recovery",
    question: "Which of the following fire suppression systems is not a good choice where computing equipment will be located?",
    options: [
      { label: "A", text: "Deluge" },
      { label: "B", text: "CO2" },
      { label: "C", text: "Argon" },
      { label: "D", text: "NAF-S-III" }
    ],
    correctAnswers: ["A"],
    explanation: "Deluge systems allow large amounts of water to be released, making them unsuitable for computing equipment. CO2, argon, and NAF-S-III use heavy gases to extinguish fire."
  },
  {
    id: "ch10_q8",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 10: Disaster Recovery",
    question: "Which type of recovery is the least expensive to maintain over time?",
    options: [
      { label: "A", text: "Cold site recovery" },
      { label: "B", text: "Warm site recovery" },
      { label: "C", text: "Hot site recovery" },
      { label: "D", text: "Cloud site recovery" }
    ],
    correctAnswers: ["A"],
    explanation: "A cold site is the least expensive because very little or no hardware is at the site. If disaster occurs, it takes time to acquire and configure hardware. Warm, hot, and cloud sites are progressively more expensive."
  },
  {
    id: "ch10_q9",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 10: Disaster Recovery",
    question: "A recovery from tape will take 4 hours; what is this an example of?",
    options: [
      { label: "A", text: "The recovery point objective (RPO)" },
      { label: "B", text: "The recovery time objective (RTO)" },
      { label: "C", text: "GFS rotation" },
      { label: "D", text: "Backup window" }
    ],
    correctAnswers: ["B"],
    explanation: "The recovery time objective (RTO) is a measurement of how quickly you can recover from data loss. RPO is the point back in time to recover. GFS is a backup rotation scheme. Backup window is when backups can be performed."
  },
  {
    id: "ch10_q10",
    domain: "4.0 Vulnerability Assessment and Risk Management",
    chapter: "Chapter 10: Disaster Recovery",
    question: "You need to purchase a power backup system for a mission critical data center. Which combination of backup systems will ensure long-term power that has a flawless AC signal? (Choose two)",
    options: [
      { label: "A", text: "Standby UPS" },
      { label: "B", text: "Line interactive UPS" },
      { label: "C", text: "Online UPS" },
      { label: "D", text: "Generator" }
    ],
    correctAnswers: ["C", "D"],
    explanation: "An online UPS supplies flawless AC since the DC power feeds the rectifier and AC only charges batteries. However, batteries are finite, so a generator is needed for long-term AC power. Line interactive and standby UPS don't supply flawless power."
  }
]
