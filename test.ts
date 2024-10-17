import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
export const env = createEnv({
  client: {
    "NEXT_PUBLIC_HAMZAESSAFAR": z.string().min(1),
    "NEXT_PUBLIC_HALZA": z.string().min(1),
    "NEXT_PUBLIC_NIGGA": z.string().min(1),
  },
  runtimeEnv: {
    "NEXT_PUBLIC_HAMZAESSAFAR": "dd",
    "NEXT_PUBLIC_HALZA": "dd",
    "NEXT_PUBLIC_NIGGA": "dd",
    "HAMZAESSAFAR": "ds",
},
  server: {
    "HAMZAESSAFAR": z.string().min(1),
  },
});
