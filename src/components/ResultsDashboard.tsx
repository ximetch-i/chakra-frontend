import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Badge,
} from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  FiArrowLeft,
  FiDroplet,
  FiThermometer,
  FiTrendingUp,
  FiSun,
  FiInfo,
} from "react-icons/fi";
import type { EvaluationResponse } from "../types";
import { DISTRICT_LABELS, CROP_LABELS, type District, type Crop } from "../types";
import { ScoreGauge } from "./ScoreGauge";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface ResultsDashboardProps {
  result: EvaluationResponse;
  onBack: () => void;
}

export function ResultsDashboard({ result, onBack }: ResultsDashboardProps) {
  const { t } = useLanguage();

  const RISK_STYLES: Record<string, { color: string; bg: string }> = {
    FAVORABLE: { color: "white", bg: "brand.500" },
    CAUTION: { color: "white", bg: "earth.500" },
    NOT_RECOMMENDED: { color: "white", bg: "red.500" },
  };

  const riskInfo = t.risk[result.riskLevel];
  const riskStyle = RISK_STYLES[result.riskLevel] ?? { color: "white", bg: "gray.500" };

  const chartData = [
    {
      name: t.results.temperature,
      value: result.temperature,
      unit: "°C",
      fill: "#ee7722",
    },
    {
      name: t.results.precipitation,
      value: result.precipitation,
      unit: "mm",
      fill: "#3b82f6",
    },
    {
      name: t.results.humidity,
      value: result.humidity,
      unit: "%",
      fill: "#2d6a4f",
    },
    {
      name: t.results.soilMoisture,
      value: result.soilMoisture * 100,
      unit: "%",
      fill: "#8b6914",
    },
  ];

  return (
    <Box minH="100vh" bg="cream" p={{ base: 4, md: 8 }}>
      <VStack spacing={6} maxW="900px" mx="auto">
        <HStack w="full" justify="space-between">
          <Button
            leftIcon={<FiArrowLeft />}
            variant="ghost"
            onClick={onBack}
            colorScheme="brand"
          >
            {t.results.newEvaluation}
          </Button>
          <HStack>
            <LanguageSwitcher />
            <Text fontSize="sm" color="gray.400">
              #{result.id}
            </Text>
          </HStack>
        </HStack>

        <Card w="full">
          <CardBody p={{ base: 6, md: 10 }}>
            <VStack spacing={6}>
              <VStack spacing={1}>
                <Heading size="md" color="brand.600">
                  {DISTRICT_LABELS[result.district as District] ?? result.district} — {CROP_LABELS[result.crop as Crop] ?? result.crop}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  {t.results.plantingDate}:{" "}
                  {new Date(result.plantingDate + "T00:00:00").toLocaleDateString(t.dateLocale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
              </VStack>

              <HStack
                spacing={{ base: 6, md: 10 }}
                align="center"
                wrap="wrap"
                justify="center"
              >
                <ScoreGauge score={result.score} size={180} />

                <VStack spacing={3} align="start">
                  <Badge
                    bg={riskStyle.bg}
                    color={riskStyle.color}
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    fontSize="md"
                    fontWeight="600"
                  >
                    {riskInfo.label}
                  </Badge>
                  <Text fontSize="sm" color="gray.600" maxW="260px">
                    {riskInfo.description}
                  </Text>
                  <HStack>
                    <Icon as={FiTrendingUp} color="gray.400" />
                    <Text fontSize="sm" color="gray.500">
                      {t.results.elevation}: {result.elevation} m
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
          </CardBody>
        </Card>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} w="full">
          <StatCard
            icon={FiThermometer}
            label={t.results.temperature}
            value={`${result.temperature}°C`}
            color="earth.500"
          />
          <StatCard
            icon={FiDroplet}
            label={t.results.precipitation}
            value={`${result.precipitation} mm`}
            color="blue.500"
          />
          <StatCard
            icon={FiSun}
            label={t.results.humidity}
            value={`${result.humidity}%`}
            color="brand.500"
          />
          <StatCard
            icon={FiDroplet}
            label={t.results.soilMoisture}
            value={`${(result.soilMoisture * 100).toFixed(0)}%`}
            color="yellow.600"
          />
        </SimpleGrid>

        <Card w="full">
          <CardBody p={{ base: 6, md: 8 }}>
            <VStack spacing={4} align="stretch">
              <Heading size="sm" color="brand.600">
                {t.results.climateData}
              </Heading>
              <Box h="260px">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#64748b" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                    <Tooltip
                      formatter={(value, name, props) => {
                        const unit = (props?.payload as { unit?: string })?.unit ?? "";
                        return [`${Number(value).toFixed(1)} ${unit}`, String(name)];
                      }}
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={60}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </VStack>
          </CardBody>
        </Card>

        <Card w="full">
          <CardBody p={{ base: 6, md: 8 }}>
            <Stack spacing={3} direction={{ base: "column", md: "row" }} align="start">
              <Icon as={FiInfo} color="brand.500" mt={1} boxSize={5} />
              <VStack align="start" spacing={1}>
                <Heading size="sm" color="brand.600">
                  {t.results.recommendation}
                </Heading>
                <Text fontSize="md" color="gray.700" lineHeight="tall">
                  {result.recommendation}
                </Text>
              </VStack>
            </Stack>
          </CardBody>
        </Card>

        <Button
          variant="outline"
          colorScheme="brand"
          leftIcon={<FiArrowLeft />}
          onClick={onBack}
          mb={8}
        >
          {t.results.evaluateAnother}
        </Button>
      </VStack>
    </Box>
  );
}

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ComponentType;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <Card>
      <CardBody p={4}>
        <VStack spacing={2} align="center">
          <Icon as={icon} boxSize={5} color={color} />
          <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wider">
            {label}
          </Text>
          <Text fontSize="lg" fontWeight="700" color="gray.800">
            {value}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
}
