const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const formatDate = (iso: string): string =>
  formatter.format(new Date(iso));
