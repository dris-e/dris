"use client";

import config from "@/constants/config";
import { useState } from "react";

export function useComponent(name: string) {
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  const fetchCode = async () => {
    if (hasLoaded) return code;

    try {
      setLoading(true);
      const url = `${config.GITHUB_RAW_URL}${name}`;
      console.log(url);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      const responseText = await response.text();
      const codeText = `// components/dris/${name}\n\n${responseText}`;

      setCode(codeText);
      setError(null);
      setHasLoaded(true);
      return codeText;
    } catch (err) {
      setError((err as Error).message || "Failed to fetch component");
      // console.error("Error fetching component:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };
  return { code, loading, error, fetchCode, hasLoaded };
}
