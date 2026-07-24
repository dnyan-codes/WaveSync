// Lightweight mock API to simulate realistic AI responses and dynamic data
const random = (min, max) => Math.round(min + Math.random() * (max - min));

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

const INCIDENT_TYPES = ['oil_spill', 'ghost_net', 'plastic', 'coral_bleach', 'biodiversity_loss', 'illegal_dumping'];

function makeKPI() {
  return {
    activeSensors: random(110, 140),
    offline: random(0, 8),
    avgWaterLevel: +(6 + Math.random() * 3).toFixed(2),
    riskScore: random(30, 92),
    incidents: random(1, 8),
  };
}

export async function getKPIs() {
  await delay(350 + Math.random() * 500);
  return makeKPI();
}

export async function getIncidents({ filterType } = {}) {
  await delay(250 + Math.random() * 300);
  const count = random(3, 8);
  const list = Array.from({ length: count }).map((_, i) => {
    const type = INCIDENT_TYPES[Math.floor(Math.random() * INCIDENT_TYPES.length)];
    return {
      id: Date.now() + i,
      type,
      title: `${type.replace('_', ' ')} detected`,
      lat: 16 + Math.random() * 4,
      lon: 73 + Math.random() * 4,
      severity: ['low','medium','high'][Math.floor(Math.random()*3)],
      confidence: +(0.5 + Math.random() * 0.5).toFixed(2),
      affectedArea_km2: +(0.1 + Math.random() * 20).toFixed(2),
      recommendedAction: type === 'oil_spill' ? 'Containment boom and cleanup' : 'Survey & deploy drone',
    };
  });
  if (filterType) return list.filter((l) => l.type === filterType);
  return list;
}

export async function runThreatAnalysis({ region, type }) {
  await delay(800 + Math.random() * 1200);
  const detected = Math.random() > 0.25;
  const confidence = detected ? +(0.6 + Math.random() * 0.38).toFixed(2) : +(0.15 + Math.random() * 0.2).toFixed(2);
  return {
    detected,
    confidence,
    severity: detected ? (confidence > 0.8 ? 'High' : confidence > 0.6 ? 'Medium' : 'Low') : 'None',
    location: region || 'Unknown region',
    affectedArea_km2: detected ? +(0.2 + Math.random() * 12).toFixed(2) : 0,
    recommendedAction: detected ? (type === 'oil_spill' ? 'Deploy booms and skimmers' : 'Send drone team for verification') : 'No action required',
  };
}

export async function runAgent(agentName, { payload } = {}) {
  await delay(600 + Math.random() * 900);
  // Simulate some findings
  const findings = [
    'No immediate threats detected in the selected area.',
    'Anomalous thermal signature detected; recommend drone inspection.',
    'High probability of oil slick; confidence 87%.',
    'Ghost net cluster detected; estimated area 0.8 km².',
    'Coral bleaching signatures increasing near reef sector A4.',
  ];
  const text = findings[Math.floor(Math.random() * findings.length)];
  return {
    agent: agentName,
    timestamp: new Date().toISOString(),
    finding: text,
    confidence: +(0.5 + Math.random() * 0.45).toFixed(2),
  };
}

export async function uploadAndAnalyze({ fileType, fileName }) {
  await delay(800 + Math.random() * 1400);
  return {
    fileType,
    fileName,
    result: 'Processed',
    summary: fileType === 'image' ? 'Image analysis: possible oil sheen' : fileType === 'sonar' ? 'Sonar: ghost net-like returns' : 'Sensor data: elevated turbidity',
  };
}

export async function getAlerts() {
  await delay(200 + Math.random() * 300);
  const list = [
    { id: 1, title: 'Oil sheen detected near Sector A', severity: 'critical', status: 'active', time: '12 min ago' },
    { id: 2, title: 'Ghost net reported — sonar', severity: 'warning', status: 'active', time: '45 min ago' },
    { id: 3, title: 'Sensor node reconnected', severity: 'info', status: 'acknowledged', time: '2 hr ago' },
  ];
  return list;
}

export async function updateAlertStatus(id, status) {
  await delay(200 + Math.random() * 200);
  return { id, status };
}

export async function getRiskPrediction({ region, period }) {
  await delay(500 + Math.random() * 700);
  const score = random(20, 95);
  const series = Array.from({ length: period === '7d' ? 7 : 30 }).map((_, i) => ({
    time: `${i + 1}`,
    value: Math.max(10, Math.round(score + Math.random() * 10 - 5)),
  }));
  return { score, level: score > 70 ? 'High' : score > 40 ? 'Medium' : 'Low', series, explanation: 'Model predicts elevated risk due to increased runoff and SST anomalies.' };
}

export async function getBiodiversity({ species, zone }) {
  await delay(400 + Math.random() * 600);
  const trend = Array.from({ length: 12 }).map((_, i) => ({ month: i + 1, value: Math.max(20, Math.round(100 + Math.random() * 20 - i)) }));
  return { species, zone, populationTrend: trend, habitatHealth: 'Moderate', conservationStatus: 'Monitored', insight: 'Population shows seasonal decline linked to temperature spikes.' };
}

export default { getKPIs, getIncidents, runThreatAnalysis, runAgent, uploadAndAnalyze, getAlerts, updateAlertStatus, getRiskPrediction, getBiodiversity };
