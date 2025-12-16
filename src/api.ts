import express, { Request, Response } from "express";

import { APIError } from "./types";

const router = express.Router();

const API_BASE_URL = "https://work-test-web-2024-eze6j4scpq-lz.a.run.app";
const TTL_IN_SECS = 300;

const cache = new Map<string, unknown>();
const ttls = new Map<string, number>();

async function fetchFromExternalAPI(
  originalUrl: string
): Promise<APIError | unknown> {
  try {
    const rawResponse = await fetch(`${API_BASE_URL}${originalUrl}`);
    return await rawResponse.json();
  } catch (error) {
    return { error: true, reason: `Unexpected API error: ${error}` };
  }
}

const proxyHandler = async (req: Request, res: Response) => {
  let response: unknown;

  const currentTimestamp = Date.now();
  const lastCacheTimestamp = ttls.get(req.originalUrl) ?? 0;

  if (
    cache.has(req.originalUrl) &&
    currentTimestamp < lastCacheTimestamp + TTL_IN_SECS * 1000
  ) {
    response = cache.get(req.originalUrl);
  }

  if (!response) {
    response = await fetchFromExternalAPI(req.originalUrl);
    cache.set(req.originalUrl, response);
    ttls.set(req.originalUrl, currentTimestamp);
  }

  if ((response as APIError)?.error) {
    res.status(500);
  } else {
    res.status(200);
  }

  return res.json(response);
};

const ALLOWED_URLS = [
  "/restaurants",
  "/restaurants/:id",
  "/filter",
  "/filter/:id",
  "/open/:id",
  "/price-range/:id",
];

ALLOWED_URLS.forEach((allowedUrl) => {
  router.get(allowedUrl, proxyHandler);
});

export default router;
