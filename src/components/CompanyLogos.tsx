"use client";

import { useState } from "react";
import Image from "next/image";
import { Column, Row, Text } from "@once-ui-system/core";

import { companyLogos } from "@/app/configuration/companyLogos"; 

export function CompanyLogos() {
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
        {companyLogos.map(({ fileName, label, url }) => {
          const isHovered = hoveredLogo === fileName;

          return (
            <a
              key={fileName}
              href={url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredLogo(fileName)}
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
                src={`/images/logos/${fileName}`}
                alt={`${label} logo`}
                width={180}
                height={108}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='108'%3E%3Crect fill='%23f0f0f0' width='180' height='108'/%3E%3C/svg%3E"
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
