// Mock data for DeepSea Guardian application
export const incidents = [
  { id: 1, type: 'oil_spill', title: 'Possible oil slick near coast', lat: 18.5204, lon: 73.8567, severity: 'high', time: '2026-07-24T09:24:00Z' },
  { id: 2, type: 'ghost_net', title: 'Ghost net detected by sonar', lat: 17.3850, lon: 78.4867, severity: 'medium', time: '2026-07-24T07:12:00Z' },
  { id: 3, type: 'coral_bleach', title: 'Coral bleaching signatures', lat: 9.9312, lon: 76.2673, severity: 'low', time: '2026-07-23T22:00:00Z' },
];

export const stats = {
  activeSensors: 128,
  offline: 4,
  avgWaterLevel: 7.2,
  riskScore: 67,
};

export const timeSeries = {
  waterLevel: [
    { time: '00:00', value: 6.8 },
    { time: '04:00', value: 6.9 },
    { time: '08:00', value: 7.0 },
    { time: '12:00', value: 7.1 },
    { time: '16:00', value: 7.3 },
    { time: '20:00', value: 7.2 },
  ],
  alertsCount: [
    { time: '00:00', value: 2 },
    { time: '04:00', value: 1 },
    { time: '08:00', value: 3 },
    { time: '12:00', value: 4 },
    { time: '16:00', value: 2 },
    { time: '20:00', value: 1 },
  ],
};

export default { incidents, stats, timeSeries };
