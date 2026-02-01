const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "2-digit",
});

export const formatDate = (iso: string): string =>
  formatter.format(new Date(iso));
