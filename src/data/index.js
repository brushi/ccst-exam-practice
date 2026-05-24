import assessmentTest from './assessmentTest'
import chapter1 from './chapter1'
import chapter2 from './chapter2'
import chapter3 from './chapter3'
import chapter4 from './chapter4'
import chapter5 from './chapter5'
import chapter6 from './chapter6'
import chapter7 from './chapter7'
import chapter8 from './chapter8'
import chapter9 from './chapter9'
import chapter10 from './chapter10'
import chapter11 from './chapter11'
import chapter12 from './chapter12'
import chapter13 from './chapter13'

export const allQuestions = [
  ...assessmentTest,
  ...chapter1, ...chapter2, ...chapter3,
  ...chapter4, ...chapter5, ...chapter6,
  ...chapter7, ...chapter8, ...chapter9,
  ...chapter10, ...chapter11, ...chapter12,
  ...chapter13,
]

export const domains = [
  { id: "1.0 Essential Security Principles", label: "1. Essential Security Principles" },
  { id: "2.0 Basic Network Security Concepts", label: "2. Basic Network Security Concepts" },
  { id: "3.0 Endpoint Security Concepts", label: "3. Endpoint Security Concepts" },
  { id: "4.0 Vulnerability Assessment and Risk Management", label: "4. Vulnerability Assessment & Risk Management" },
  { id: "5.0 Incident Handling", label: "5. Incident Handling" },
]

export const chapters = [
  { id: "Chapter 1: Security Concepts", label: "Ch1: Security Concepts", domain: "1.0 Essential Security Principles" },
  { id: "Chapter 2: Network Security Devices", label: "Ch2: Network Security Devices", domain: "1.0 Essential Security Principles" },
  { id: "Chapter 3: IP, IPv6, and NAT", label: "Ch3: IP, IPv6, and NAT", domain: "2.0 Basic Network Security Concepts" },
  { id: "Chapter 4: Network Device Access", label: "Ch4: Network Device Access", domain: "2.0 Basic Network Security Concepts" },
  { id: "Chapter 5: Secure Access Technology", label: "Ch5: Secure Access Technology", domain: "2.0 Basic Network Security Concepts" },
  { id: "Chapter 6: OS Basics and Security", label: "Ch6: OS Basics and Security", domain: "3.0 Endpoint Security Concepts" },
  { id: "Chapter 7: Endpoint Security", label: "Ch7: Endpoint Security", domain: "3.0 Endpoint Security Concepts" },
  { id: "Chapter 8: Risk Management", label: "Ch8: Risk Management", domain: "4.0 Vulnerability Assessment and Risk Management" },
  { id: "Chapter 9: Vulnerability Management", label: "Ch9: Vulnerability Management", domain: "4.0 Vulnerability Assessment and Risk Management" },
  { id: "Chapter 10: Disaster Recovery", label: "Ch10: Disaster Recovery", domain: "4.0 Vulnerability Assessment and Risk Management" },
  { id: "Chapter 11: Incident Handling", label: "Ch11: Incident Handling", domain: "5.0 Incident Handling" },
  { id: "Chapter 12: Digital Forensics", label: "Ch12: Digital Forensics", domain: "5.0 Incident Handling" },
  { id: "Chapter 13: Incident Response", label: "Ch13: Incident Response", domain: "5.0 Incident Handling" },
  { id: "Assessment Test", label: "Assessment Test", domain: "1.0 Essential Security Principles" },
]

export function getQuestionsByDomain(domainId) {
  return allQuestions.filter(q => q.domain === domainId)
}

export function getQuestionsByChapter(chapterId) {
  return allQuestions.filter(q => q.chapter === chapterId)
}

export function getRandomQuestions(count, domainIds = null) {
  let pool = domainIds
    ? allQuestions.filter(q => domainIds.includes(q.domain))
    : [...allQuestions]

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, Math.min(count, pool.length))
}
