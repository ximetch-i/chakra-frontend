export type Language = "es" | "en";

export const translations = {
  es: {
    app: {
      subtitle: "Análisis de idoneidad agrícola para el Valle Sagrado",
      error: "Error al conectar con el servidor",
    },
    form: {
      district: "Distrito",
      districtPlaceholder: "Selecciona un distrito",
      crop: "Cultivo",
      cropPlaceholder: "Selecciona un cultivo",
      plantingDate: "Fecha de siembra",
      submit: "Analizar condiciones",
    },
    results: {
      newEvaluation: "Nueva evaluación",
      plantingDate: "Fecha de siembra",
      elevation: "Elevación",
      temperature: "Temperatura",
      precipitation: "Precipitación",
      humidity: "Humedad",
      soilMoisture: "Humedad Suelo",
      climateData: "Datos climáticos históricos",
      recommendation: "Recomendación",
      evaluateAnother: "Evaluar otra ubicación",
    },
    risk: {
      FAVORABLE: { label: "Favorable", description: "Las condiciones climáticas son aptas para este cultivo." },
      CAUTION: { label: "Precaución", description: "Las condiciones presentan riesgos moderados. Considere alternativas." },
      NOT_RECOMMENDED: { label: "No Recomendado", description: "Las condiciones no son favorables para este cultivo en esta fecha." },
    },
    dateLocale: "es-PE",
  },
  en: {
    app: {
      subtitle: "Agricultural suitability analysis for the Sacred Valley",
      error: "Error connecting to server",
    },
    form: {
      district: "District",
      districtPlaceholder: "Select a district",
      crop: "Crop",
      cropPlaceholder: "Select a crop",
      plantingDate: "Planting date",
      submit: "Analyze conditions",
    },
    results: {
      newEvaluation: "New evaluation",
      plantingDate: "Planting date",
      elevation: "Elevation",
      temperature: "Temperature",
      precipitation: "Precipitation",
      humidity: "Humidity",
      soilMoisture: "Soil moisture",
      climateData: "Historical climate data",
      recommendation: "Recommendation",
      evaluateAnother: "Evaluate another location",
    },
    risk: {
      FAVORABLE: { label: "Favorable", description: "Climate conditions are suitable for this crop." },
      CAUTION: { label: "Caution", description: "Conditions present moderate risks. Consider alternatives." },
      NOT_RECOMMENDED: { label: "Not Recommended", description: "Conditions are not favorable for this crop on this date." },
    },
    dateLocale: "en-US",
  },
} as const;

// Use a structural type so ES and EN can both satisfy it
export type TranslationKeys = {
  app: { subtitle: string; error: string };
  form: { district: string; districtPlaceholder: string; crop: string; cropPlaceholder: string; plantingDate: string; submit: string };
  results: { newEvaluation: string; plantingDate: string; elevation: string; temperature: string; precipitation: string; humidity: string; soilMoisture: string; climateData: string; recommendation: string; evaluateAnother: string };
  risk: Record<string, { label: string; description: string }>;
  dateLocale: string;
};
