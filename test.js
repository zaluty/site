const env = process.env.NODE_ENV || "development";

// Determine if it's production
const isProduction = env === "production";
const isPreview = env === "preview";

console.log(`Current environment: ${env}`);
console.log(`Is production: ${isProduction}`);
console.log(`Is preview: ${isPreview}`);

