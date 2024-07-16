interface DataToParse {
  hour: number | string;
  minutes: number | string;
  day: number | string;
  month: number | string;
}

export const parseDate = (daysAhead: number) => {
    const currentDate = new Date();

    const dataToParse: DataToParse = {
        hour: currentDate.getHours(),
        minutes: currentDate.getMinutes(),
        day: currentDate.getDate() + daysAhead,
        month: currentDate.getMonth() + 1,
    };

    (Object.keys(dataToParse) as Array<keyof DataToParse>).forEach(key => {
        const value = dataToParse[key];
        dataToParse[key] = value <= 9 ? `0${value}` : `${value}`;
    });
    //
    // const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    // const newDays = currentDate.getDay() + daysAhead;
    // const day = newDays <= 9 ? `0${newDays}` : `${newDays}`;
    // const month = currentDate.getMonth() <= 9 ? `0${currentDate.getMonth() + 1}` : `${currentDate.getMonth() + 1}`;
    // const date = `${day}.${month}.${currentDate.getFullYear()}`;

    return {
        asString: `${dataToParse.hour}:${dataToParse.minutes} ${dataToParse.day}.${dataToParse.month}.${currentDate.getFullYear()}`,
        asTimestamp: Date.now() + (86400000 * daysAhead),
    };
};
