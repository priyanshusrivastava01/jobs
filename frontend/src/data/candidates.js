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

// ── Currently Shortlisted — Latest Batch ─────────────────────────────────────
export const CURRENT_SHORTLISTED = [
  {
    id: "cand_18",
    name: "Ronit Maurya",
    phone: "+91 77850 84553",
    email: "ronitmaurya993020@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-09-14",
    projectCode: "VL-PRJ-2026-18",
    driveFolderName: "Vardha_Task_RonitMaurya"
  },
  {
    id: "cand_19",
    name: "Pooja Jaiswal",
    phone: "+91 63865 37664",
    email: "pj4881266@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-09-14",
    projectCode: "VL-PRJ-2026-19",
    driveFolderName: "Vardha_Task_PoojaJaiswal"
  }
];

// ── Previously Selected Candidates — Earlier Batches ─────────────────────────
export const PREVIOUSLY_SELECTED = [
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
    driveFolderName: "Vardha_Task_AkshatSrivastava",
    certified: true
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
    id: "cand_15",
    name: "Gaurav",
    phone: "+91 8765187016",
    email: "gauravt7848@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-08-31",
    projectCode: "VL-PRJ-2026-15",
    driveFolderName: "Vardha_Task_Gaurav"
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
    id: "cand_16",
    name: "Pankaj Yadav",
    phone: "+91 93352 88731",
    email: "pankajyadavldy@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-09-07",
    projectCode: "VL-PRJ-2026-16",
    driveFolderName: "Vardha_Task_PankajYadav"
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
    driveFolderName: "Vardha_Task_PrashantMishra",
    certified: true
  },
  {
    id: "cand_17",
    name: "Preeti Yadav",
    phone: "+91 70686 38759",
    email: "preetiyadav7068@gmail.com",
    status: "SHORTLISTED",
    assignedTaskStatus: "Access Granted via Drive",
    role: "In association with Yuvan Vision",
    assignedDate: "2026-09-07",
    projectCode: "VL-PRJ-2026-17",
    driveFolderName: "Vardha_Task_PreetiYadav"
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

// Combined list for search purposes (current first, then previous)
export const CANDIDATES_DATA = [...CURRENT_SHORTLISTED, ...PREVIOUSLY_SELECTED];
