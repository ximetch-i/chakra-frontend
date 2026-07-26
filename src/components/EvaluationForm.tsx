import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Text,
  VStack,
  Icon,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiMapPin, FiCalendar, FiChevronRight } from "react-icons/fi";
import {
  DISTRICTS,
  DISTRICT_LABELS,
  CROPS,
  CROP_LABELS,
  type District,
  type Crop,
} from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface EvaluationFormProps {
  onSubmit: (district: District, crop: Crop, date: string) => void;
  isLoading: boolean;
}

export function EvaluationForm({ onSubmit, isLoading }: EvaluationFormProps) {
  const { t } = useLanguage();
  const [district, setDistrict] = useState<District | "">("");
  const [crop, setCrop] = useState<Crop | "">("");
  const [date, setDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (district && crop && date) {
      onSubmit(district, crop, date);
    }
  };

  const isValid = district !== "" && crop !== "" && date !== "";

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" p={8}>
      <Card w="100%" maxW="520px" boxShadow="lg">
        <CardBody p={10}>
          <VStack as="form" onSubmit={handleSubmit} spacing={6} align="stretch">
            <VStack spacing={2} mb={2} position="relative">
              <Box position="absolute" top={0} right={0}>
                <LanguageSwitcher />
              </Box>
              <Heading size="lg" color="brand.600" fontWeight="700">
                Chakra
              </Heading>
              <Text color="gray.500" fontSize="sm" textAlign="center">
                {t.app.subtitle}
              </Text>
            </VStack>

            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="600" display="flex" alignItems="center" gap={2}>
                <Icon as={FiMapPin} color="brand.500" />
                {t.form.district}
              </FormLabel>
              <Select
                placeholder={t.form.districtPlaceholder}
                value={district}
                onChange={(e) => setDistrict(e.target.value as District)}
                size="lg"
                bg="white"
              >
                {DISTRICTS.map((d) => (
                  <option key={d} value={d}>
                    {DISTRICT_LABELS[d]}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="600" display="flex" alignItems="center" gap={2}>
                <Icon as={FiCalendar} color="earth.500" />
                {t.form.crop}
              </FormLabel>
              <Select
                placeholder={t.form.cropPlaceholder}
                value={crop}
                onChange={(e) => setCrop(e.target.value as Crop)}
                size="lg"
                bg="white"
              >
                {CROPS.map((c) => (
                  <option key={c} value={c}>
                    {CROP_LABELS[c]}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="600" display="flex" alignItems="center" gap={2}>
                <Icon as={FiCalendar} color="leaf.500" />
                {t.form.plantingDate}
              </FormLabel>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={today}
                size="lg"
                bg="white"
              />
            </FormControl>

            <Button
              type="submit"
              size="lg"
              isLoading={isLoading}
              isDisabled={!isValid}
              rightIcon={<FiChevronRight />}
              mt={2}
              fontWeight="600"
              fontSize="md"
            >
              {t.form.submit}
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}
