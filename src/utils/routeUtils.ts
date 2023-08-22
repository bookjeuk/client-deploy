export const checkRoutePath = (url: string) => {
  if (url.includes("login") || url.includes("signup"))
    return (false);
  return (true);
}