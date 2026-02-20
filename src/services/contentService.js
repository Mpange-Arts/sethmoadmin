const API_URL = process.env.REACT_APP_API_URL || 'https://sethmoserver.onrender.com';

// Helper function to extract error messages from the backend
const handleFetchError = async (res) => {
  let errorMessage = `Server error: ${res.status} ${res.statusText}`;
  try {
    const errorData = await res.json();
    errorMessage = errorData.message || errorData.error || errorMessage;
  } catch (e) {
    // If it's not JSON, try to get plain text
    const errorText = await res.text();
    if (errorText) errorMessage = errorText;
  }
  throw new Error(errorMessage);
};

// ---------- Hero ----------
export const getHeroSettings = async () => {
  const res = await fetch(`${API_URL}/hero`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const updateHeroSettings = async (settings) => {
  const res = await fetch(`${API_URL}/hero`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(settings),
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const uploadHeroFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const res = await fetch(`${API_URL}/hero/upload`, {
    method: 'POST',
    body: formData,
  });
  
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// ---------- About ----------
export const getAboutData = async () => {
  const res = await fetch(`${API_URL}/about`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const saveAboutData = async (data) => {
  const res = await fetch(`${API_URL}/about`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// ---------- Team ----------
export const getTeamData = async () => {
  const res = await fetch(`${API_URL}/team`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const saveTeamData = async (data) => {
  const res = await fetch(`${API_URL}/team`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// ---------- Vision ----------
export const getVisionData = async () => {
  const res = await fetch(`${API_URL}/vision`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const saveVisionData = async (data) => {
  const res = await fetch(`${API_URL}/vision`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// Optional: Generic upload if needed
export const uploadFile = async (file, section) => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch(`${API_URL}/upload?section=${section}`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// ---------- Sectors ----------
export const getSectors = async () => {
  const res = await fetch(`${API_URL}/sectors`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const saveSectors = async (data) => {
  const res = await fetch(`${API_URL}/sectors`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// ---------- Company Info (Name, Motto, Vision, Mission) ----------
export const getCompanyInfo = async () => {
  const res = await fetch(`${API_URL}/company-info`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const saveCompanyInfo = async (data) => {
  const res = await fetch(`${API_URL}/company-info`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// ---------- Pillars (The 7 Pillars) ----------
export const getPillars = async () => {
  const res = await fetch(`${API_URL}/pillars`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const savePillars = async (pillarsArray) => {
  const res = await fetch(`${API_URL}/pillars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pillars: pillarsArray }),
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// ---------- Sustainability ----------
export const getSustainability = async () => {
  const res = await fetch(`${API_URL}/sustainability`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const saveSustainability = async (focusAreas) => {
  const res = await fetch(`${API_URL}/sustainability`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ focusAreas }),
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// ---------- News & Blog ----------
export const getNews = async () => {
  const res = await fetch(`${API_URL}/news`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const saveNews = async (newsArray) => {
  const res = await fetch(`${API_URL}/news`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ articles: newsArray }), 
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// ---------- Community Page Settings (Banner & Impact) ----------
export const getCommunitySettings = async () => {
  const res = await fetch(`${API_URL}/community-settings`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const saveCommunitySettings = async (data) => {
  const res = await fetch(`${API_URL}/community-settings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// ---------- Careers ----------
export const getCareers = async () => {
  const res = await fetch(`${API_URL}/careers`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const saveCareers = async (jobsArray) => {
  const res = await fetch(`${API_URL}/careers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jobs: jobsArray }),
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const getDashboardStats = async () => {
  const res = await fetch(`${API_URL}/dashboard-stats`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

// ---------- Global System Settings ----------
export const getSettings = async () => {
  const res = await fetch(`${API_URL}/settings`);
  if (!res.ok) await handleFetchError(res);
  return res.json();
};

export const saveSettings = async (settingsData) => {
  const res = await fetch(`${API_URL}/settings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(settingsData),
  });
  if (!res.ok) await handleFetchError(res);
  return res.json();
};