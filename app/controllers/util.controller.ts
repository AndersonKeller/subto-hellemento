export const utilController = {
  fomatDate: (date: string | Date) => {
    const toFormat = new Date(date);
    const intL = new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC", dateStyle: "full", timeStyle: "short" }).format(toFormat);
    console.log(typeof intL, "intl?");
    const first = intL[0];
    return first?.toUpperCase() + intL.slice(1, intL.length);
  },
};
