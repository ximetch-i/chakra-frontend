export type District =
  | "URUBAMBA"
  | "OLLANTAYTAMBO"
  | "CHINCHERO"
  | "CALCA"
  | "PISAC"
  | "ANTA"
  | "LIMATAMBO"
  | "URCOS"
  | "ANDAHUAYLILLAS"
  | "OROPESA";

export type Crop = "PAPA" | "MAIZ" | "CAFE";

export type RiskLevel = "FAVORABLE" | "CAUTION" | "NOT_RECOMMENDED";

export interface EvaluationRequest {
  district: District;
  crop: Crop;
  plantingDate: string;
}

export interface EvaluationResponse {
  id: number;
  district: string;
  crop: string;
  plantingDate: string;
  temperature: number;
  precipitation: number;
  humidity: number;
  soilMoisture: number;
  elevation: number;
  score: number;
  riskLevel: RiskLevel;
  recommendation: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const DISTRICT_LABELS: Record<District, string> = {
  URUBAMBA: "Urubamba",
  OLLANTAYTAMBO: "Ollantaytambo",
  CHINCHERO: "Chinchero",
  CALCA: "Calca",
  PISAC: "Pisac",
  ANTA: "Anta",
  LIMATAMBO: "Limatambo",
  URCOS: "Urcos",
  ANDAHUAYLILLAS: "Andahuaylillas",
  OROPESA: "Oropesa",
};

export const CROP_LABELS: Record<Crop, string> = {
  PAPA: "Papa",
  MAIZ: "Maíz",
  CAFE: "Café",
};

export const DISTRICTS: District[] = [
  "URUBAMBA",
  "OLLANTAYTAMBO",
  "CHINCHERO",
  "CALCA",
  "PISAC",
  "ANTA",
  "LIMATAMBO",
  "URCOS",
  "ANDAHUAYLILLAS",
  "OROPESA",
];

export const CROPS: Crop[] = ["PAPA", "MAIZ", "CAFE"];
