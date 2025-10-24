import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const googleScriptURL =
        "https://script.google.com/macros/s/AKfycbx12345abcde/exec";

      const response = await axios.post(googleScriptURL, req.body, {
        headers: { "Content-Type": "application/json" },
      });

      res.status(200).json(response.data);
    } catch (error: any) {
      console.error("Proxy error:", error);
      res.status(500).json({ error: "Google Script request failed" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
