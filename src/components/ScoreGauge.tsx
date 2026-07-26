import { Box, Text, VStack } from "@chakra-ui/react";

interface ScoreGaugeProps {
  score: number;
  size?: number;
}

export function ScoreGauge({ score, size = 200 }: ScoreGaugeProps) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getColor = (s: number) => {
    if (s >= 70) return "#2d6a4f";
    if (s >= 40) return "#ee7722";
    return "#c53030";
  };

  const color = getColor(score);

  return (
    <VStack spacing={2}>
      <Box position="relative" width={`${size}px`} height={`${size}px`}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="12"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
          />
        </svg>
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          spacing={0}
        >
          <Text fontSize={`${size / 5}px`} fontWeight="700" color={color} lineHeight={1}>
            {Math.round(score)}
          </Text>
          <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wider">
            / 100
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
}
