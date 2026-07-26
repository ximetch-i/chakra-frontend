import { Button, Icon, Text, HStack } from "@chakra-ui/react";
import { FiGlobe } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageContext";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={toggleLanguage}
      leftIcon={<Icon as={FiGlobe} />}
      fontWeight="600"
      colorScheme="brand"
    >
      <HStack spacing={1}>
        <Text as="span" opacity={language === "es" ? 1 : 0.4}>ES</Text>
        <Text as="span" opacity={0.3}>/</Text>
        <Text as="span" opacity={language === "en" ? 1 : 0.4}>EN</Text>
      </HStack>
    </Button>
  );
}
