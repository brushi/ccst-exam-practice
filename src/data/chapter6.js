export default [
  {
    id: "ch6_q1",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 6: OS Basics and Security",
    question: "A user is in both the Sales group and the Marketing group. The Sales group has full permission at the share level, and the Marketing group has read-only permissions. The files on NTFS are secured with the Modify permission for the Sales group and the Read & Execute permission for the Marketing group. Which permissions will the user have?",
    options: [
      { label: "A", text: "Full" },
      { label: "B", text: "Modify" },
      { label: "C", text: "Read-only" },
      { label: "D", text: "Read & Execute" }
    ],
    correctAnswers: ["B"],
    explanation: "Because the user is in both groups and Sales has full share permissions and Modify NTFS permissions, the most restrictive of the two is Modify, so that will be the effective permission."
  },
  {
    id: "ch6_q2",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 6: OS Basics and Security",
    question: "James just moved a folder on the same partition. What will happen with the permissions for the folder?",
    options: [
      { label: "A", text: "The permissions will be the same as they were before the move" },
      { label: "B", text: "The permissions will be inherited from the new parent folder" },
      { label: "C", text: "The permissions will be configured as the root folder for the drive letter" },
      { label: "D", text: "The permissions will be blank until configured" }
    ],
    correctAnswers: ["A"],
    explanation: "The permissions will be the same as before the move, since you are just moving the files and not creating a new entity. Permissions are not inherited from the parent folder when moving on the same partition."
  },
  {
    id: "ch6_q3",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 6: OS Basics and Security",
    question: "A user is in the Sales group. The Sales group has no permissions at the share level. The files on NTFS are secured with the Modify permission for the Sales group. What permissions will the user have?",
    options: [
      { label: "A", text: "The user will have the Modify permission when connecting from the network" },
      { label: "B", text: "The user will have the Modify permission when logged in locally to the computer" },
      { label: "C", text: "The user will have no access when logged in locally to the computer" },
      { label: "D", text: "The user will have read-only permissions when connecting from the network" }
    ],
    correctAnswers: ["B"],
    explanation: "The user will have only the Modify permission when logged in locally since the filesystem has NTFS Modify permissions. The user will not have Modify permission when connecting from the network because share-level permissions are blocking access."
  },
  {
    id: "ch6_q4",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 6: OS Basics and Security",
    question: "Which statement about scripting languages is true?",
    options: [
      { label: "A", text: "Scripting languages require a compiler" },
      { label: "B", text: "Scripting languages are strongly typed" },
      { label: "C", text: "Scripting languages are interpreted" },
      { label: "D", text: "Scripting languages have good memory management" }
    ],
    correctAnswers: ["C"],
    explanation: "Scripting languages are interpreted languages that run on top of a runtime environment. Programming languages, not scripting languages, require a compiler. Scripting languages are not strongly typed and have poor memory management."
  },
  {
    id: "ch6_q5",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 6: OS Basics and Security",
    question: "Which statement will load a PowerShell variable xvar with a value of 2?",
    options: [
      { label: "A", text: "xvar = 2" },
      { label: "B", text: "$xvar = 2" },
      { label: "C", text: "xvar = 2;" },
      { label: "D", text: "set /a xvar=2" }
    ],
    correctAnswers: ["B"],
    explanation: "$xvar = 2 is PowerShell syntax. xvar = 2 is Bash syntax. xvar = 2; is JavaScript syntax. set /a xvar=2 is Windows batch script syntax."
  },
  {
    id: "ch6_q6",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 6: OS Basics and Security",
    question: "Which of the following utilities can be used in Linux to download patches for installation on a workstation?",
    options: [
      { label: "A", text: "update" },
      { label: "B", text: "Shell/terminal" },
      { label: "C", text: "apt" },
      { label: "D", text: "patch" }
    ],
    correctAnswers: ["C"],
    explanation: "The apt utility can be used to download and apply patches to a Linux installation. The update command is not a utility. Shell/terminal is an interface. The patch command is not a utility."
  },
  {
    id: "ch6_q7",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 6: OS Basics and Security",
    question: "Which of the following commands can be used to change the owner of a file to a new owner in Linux?",
    options: [
      { label: "A", text: "cd" },
      { label: "B", text: "chmod" },
      { label: "C", text: "chown" },
      { label: "D", text: "pwd" }
    ],
    correctAnswers: ["C"],
    explanation: "The chown command changes ownership of a file. cd changes the working directory. chmod changes permissions. pwd displays the current working directory."
  },
  {
    id: "ch6_q8",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 6: OS Basics and Security",
    question: "If the permissions for a file are rwxrw-r--, what permissions apply for a user who is a member of the group to which the owner belongs?",
    options: [
      { label: "A", text: "Read, write, and execute" },
      { label: "B", text: "Read and write" },
      { label: "C", text: "Read only" },
      { label: "D", text: "No access" }
    ],
    correctAnswers: ["B"],
    explanation: "From left to right: rwx for user, rw- for group, r-- for others. Since the user is a member of the group applied to the file, they will have read and write permissions."
  },
  {
    id: "ch6_q9",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 6: OS Basics and Security",
    question: "Which command will start the Event Viewer snap-in?",
    options: [
      { label: "A", text: "eventviewer.exe" },
      { label: "B", text: "eventvwr.msc" },
      { label: "C", text: "lusrmgr.msc" },
      { label: "D", text: "devmgmt.msc" }
    ],
    correctAnswers: ["B"],
    explanation: "eventvwr.msc starts Event Viewer. lusrmgr.msc starts Local Users and Groups. devmgmt.msc starts Device Manager. eventviewer.exe is not valid."
  },
  {
    id: "ch6_q10",
    domain: "3.0 Endpoint Security Concepts",
    chapter: "Chapter 6: OS Basics and Security",
    question: "Which event log should be checked if you suspect that the computer has rebooted unexpectedly?",
    options: [
      { label: "A", text: "Application" },
      { label: "B", text: "Boot" },
      { label: "C", text: "Security" },
      { label: "D", text: "System" }
    ],
    correctAnswers: ["D"],
    explanation: "The System event log contains entries when the operating system reboots. The Application log is for installed applications. The Boot log is not valid. The Security log contains security information."
  }
];
