export const newDateFormat = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const sortDates = (transactionsList: any) => {
  // get array of dates includes in transactionsList
  const currentDatesArr = transactionsList?.map((item: any) => item.date);
  // update format to: yyyy-mm-dd
  currentDatesArr?.forEach((item: any, index: number) => {
    currentDatesArr[index] = newDateFormat(new Date(item));
  });
  //   remove duplicaded dates
  const uniqueDates = currentDatesArr?.filter((date: any, index: number) => {
    return currentDatesArr.indexOf(date) === index;
  });

  //   sort from new to old date
  uniqueDates?.sort(
    (a: any, b: any) =>
      (new Date(b) as unknown as number) - (new Date(a) as unknown as number)
  );

  //  and thats it,   piece of cake  ;)
  return uniqueDates;
};
