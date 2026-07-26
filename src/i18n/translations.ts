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
    crop: { PAPA: "papa", MAIZ: "maíz", CAFE: "café" },
    limitingFactor: {
      temperature: "La temperatura está fuera del rango óptimo para este cultivo.",
      precipitation: "La precipitación es insuficiente o excesiva para las necesidades del cultivo.",
      soilMoisture: "La humedad del suelo no se encuentra en el rango adecuado.",
      elevation: "La altitud no es adecuada para este cultivo en esta ubicación.",
      default: "Existen condiciones climáticas desfavorables.",
    },
    recommendation: {
      FAVORABLE: (crop: string) => `Condiciones favorables para sembrar ${crop}. Los parámetros climáticos se encuentran dentro de los rangos óptimos.`,
      CAUTION: (crop: string, factor?: string) => `Precaución: ${factor} presenta condiciones moderadas para sembrar ${crop}. Se recomienda monitorear las condiciones antes de la siembra.`,
      NOT_RECOMMENDED: (crop: string, factor?: string) => `No se recomienda sembrar ${crop} en este momento. ${factor} Considere cambiar la fecha de siembra o seleccionar una ubicación diferente.`,
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
    crop: { PAPA: "potato", MAIZ: "corn", CAFE: "coffee" },
    limitingFactor: {
      temperature: "Temperature is outside the optimal range for this crop.",
      precipitation: "Precipitation is insufficient or excessive for crop needs.",
      soilMoisture: "Soil moisture is not within the appropriate range.",
      elevation: "Elevation is not suitable for this crop at this location.",
      default: "Unfavorable climate conditions exist.",
    },
    recommendation: {
      FAVORABLE: (crop: string) => `Favorable conditions for planting ${crop}. Climate parameters are within optimal ranges.`,
      CAUTION: (crop: string, factor?: string) => `Caution: ${factor} presents moderate conditions for planting ${crop}. Monitor conditions before planting.`,
      NOT_RECOMMENDED: (crop: string, factor?: string) => `Planting ${crop} is not recommended at this time. ${factor} Consider changing the planting date or selecting a different location.`,
    },
    dateLocale: "en-US",
  },
} as const;

// Use a structural type so ES and EN can both satisfy it
export type TranslationKeys = {
  app: { subtitle: string; error: string };
  form: { district: string; districtPlaceholder: string; crop: string; cropPlaceholder: string; plantingDate: string; submit: string };
  results: { newEvaluation: string; plantingDate: string; elevation: string; temperature: string; precipitation: string; soilMoisture: string; climateData: string; recommendation: string; evaluateAnother: string };
  risk: Record<string, { label: string; description: string }>;
  crop: Record<string, string>;
  limitingFactor: Record<string, string>;
  recommendation: Record<string, (crop: string, factor?: string) => string>;
  dateLocale: string;
};
