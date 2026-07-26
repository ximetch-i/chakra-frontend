import { useState } from "react";
import { EvaluationForm } from "./components/EvaluationForm";
import { ResultsDashboard } from "./components/ResultsDashboard";
import { createEvaluation } from "./api/evaluationService";
import type { EvaluationResponse, District, Crop } from "./types";
import { Alert, AlertDescription, AlertIcon, Box, CloseButton } from "@chakra-ui/react";
import { useLanguage } from "./i18n/LanguageContext";

function App() {
  const { t } = useLanguage();
  const [result, setResult] = useState<EvaluationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (district: District, crop: Crop, date: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await createEvaluation({
        district,
        crop,
        plantingDate: date,
      });
      setResult(response);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : t.app.error;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setResult(null);
    setError(null);
  };

  if (result) {
    return <ResultsDashboard result={result} onBack={handleBack} />;
  }

  return (
    <Box position="relative">
      {error && (
        <Alert status="error" position="fixed" top={4} left="50%" transform="translateX(-50%)" zIndex={10} maxW="500px" borderRadius="lg">
          <AlertIcon />
          <AlertDescription flex={1}>{error}</AlertDescription>
          <CloseButton onClick={() => setError(null)} alignSelf="start" />
        </Alert>
      )}
      <EvaluationForm onSubmit={handleSubmit} isLoading={isLoading} />
    </Box>
  );
}

export default App;
