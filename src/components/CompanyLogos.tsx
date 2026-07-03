"use client";

import { useState } from "react";
import Image from "next/image";
import { Column, Row, Text, useTheme } from "@once-ui-system/core";
import { companyLogos } from "@/app/configuration/companyLogos"
import { getUserTheme } from "@/helpers/common";

export function CompanyLogos() {
  const { theme } = useTheme();
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  if (companyLogos.length === 0) {
    return null;
  }

  return (
    <Column fillWidth gap="m" paddingTop="32" horizontal="center">
      <Text variant="label-default-s" onBackground="neutral-weak">
        Companies I've worked with
      </Text>
      <Row
        fillWidth
        gap="24"
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {companyLogos.map(({ darkFileName, lightFileName, label, url }) => {
          const imageFileName = getUserTheme(theme) === "dark" ? darkFileName : lightFileName;
          const isHovered = hoveredLogo === label;

          return (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredLogo(label)}
              onMouseLeave={() => setHoveredLogo(null)}
              style={{
                display: "inline-flex",
                width: 180,
                height: 108,
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 180ms ease, opacity 180ms ease",
                transform: isHovered ? "scale(1.10)" : "scale(1)",
              }}
            >
              <Image
                src={`/images/logos/${imageFileName}`}
                alt={`${label} logo`}
                width={180}
                height={108}
                quality={75}
                loading="lazy"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  opacity: isHovered ? 1 : 0.85,
                }}
              />
            </a>
          );
        })}
      </Row>
    </Column>
  );
}
