export const getNextApiBaseURL = () => {
  switch (process.env.NEXT_PUBLIC_NODE_ENV) {
    case "production":
      return "https://trackpense.vercel.app/api";
    default:
      return "http://localhost:3000/api";
  }
};
