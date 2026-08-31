// Official Shortlisted Candidates Data — Vardha Links Hiring 2026

export const maskEmail = (email) => {
  if (!email || email === "Not Available") return "Not Available";
  const parts = email.split('@');
  if (parts.length !== 2) return email;
  const username = parts[0];
  const domain = parts[1];
  if (username.length <= 2) return `${username[0]}*@${domain}`;
  return `${username[0]}***${username[username.length - 1]}@${domain}`;
};

export const maskPhone = (phone) => {
  if (!phone || phone === "Not Available") return "Not Available";
  const trimmed = phone.trim();
  const numOnly = trimmed.replace(/\D/g, '');
  if (numOnly.length >= 10) {
    const mainNum = numOnly.slice(-10);
    return `+91 ${mainNum.slice(0, 2)}****${mainNum.slice(6)}`;
  }
  return trimmed;
};

export const CANDIDATES_DATA = [
  {
    id: "cand_04",
    name: "Abhay Raj Gaur",
    phone: "+91 9956442746",
    email: "abhayrajgaur211@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-04",
    driveFolderName: "Vardha_Task_AbhayRajGaur"
  },
  {
    id: "cand_11",
    name: "Abhishek Sharma",
    phone: "+91 9336366859",
    email: "shaileshsharma9130@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-11",
    driveFolderName: "Vardha_Task_AbhishekSharma"
  },
  {
    id: "cand_13",
    name: "Akshat Srivastava",
    phone: "+91 9170174913",
    email: "akshhatsri7843@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-13",
    driveFolderName: "Vardha_Task_AkshatSrivastava"
  },
  {
    id: "cand_02",
    name: "Anupam Tiwari",
    phone: "+91 8127033409",
    email: "anupamt763@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-02",
    driveFolderName: "Vardha_Task_AnupamTiwari"
  },
  {
    id: "cand_05",
    name: "Archana Sharma",
    phone: "+91 7992170835",
    email: "archanasharma97649@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-05",
    driveFolderName: "Vardha_Task_ArchanaSharma"
  },
  {
    id: "cand_01",
    name: "Harshit Maurya",
    phone: "+91 6387276254",
    email: "harshit9005944963@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-01",
    driveFolderName: "Vardha_Task_HarshitMaurya"
  },
  {
    id: "cand_12",
    name: "Khalik Khan",
    phone: "+91 7880410213",
    email: "khalikkhan4983@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-12",
    driveFolderName: "Vardha_Task_KhalikKhan"
  },
  {
    id: "cand_08",
    name: "Mohd Umar",
    phone: "+91 8400819946",
    email: "mdumar84002021@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-08",
    driveFolderName: "Vardha_Task_MohdUmar"
  },
  {
    id: "cand_03",
    name: "Palak",
    phone: "+91 6394150329",
    email: "palakg7848@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-03",
    driveFolderName: "Vardha_Task_Palak"
  },
  {
    id: "cand_14",
    name: "Prashant Mishra",
    phone: "+91 7570019388",
    email: "pmishrajiup53@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-14",
    driveFolderName: "Vardha_Task_PrashantMishra"
  },
  {
    id: "cand_10",
    name: "Priya Prajapati",
    phone: "+91 6392270722",
    email: "priprajapati122@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-10",
    driveFolderName: "Vardha_Task_PriyaPrajapati"
  },
  {
    id: "cand_07",
    name: "Shabahat Riyaz",
    phone: "+91 7007987639",
    email: "shabsriyaz@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-07",
    driveFolderName: "Vardha_Task_ShabahatRiyaz"
  },
  {
    id: "cand_06",
    name: "Sulekha Chauhan",
    phone: "+91 8081946167",
    email: "chauhansulekha550@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-06",
    driveFolderName: "Vardha_Task_SulekhaChauhan"
  },
  {
    id: "cand_09",
    name: "Vishwajeet Jaiswal",
    phone: "+91 7275367173",
    email: "jaiswalsandy68@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-09",
    driveFolderName: "Vardha_Task_VishwajeetJaiswal"
  }
];
