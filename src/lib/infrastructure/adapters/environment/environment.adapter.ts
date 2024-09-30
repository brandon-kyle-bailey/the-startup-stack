console.log("environment container env:", process.env);
export const container = {
  web: {
    host: process.env.HOST!,
  },
};
