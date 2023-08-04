const yearDays = 365.25;

const timeUnits = {
    day: 1,
    week: 2,
    biWeek: 3,
    tetraWeek: 4,
    // month: 4,
    year: 5,
    eternity: 6,
};

const inDays = {
    day: 1,
    week: 7,
    biweek: 14,
    tetraWeek: 28,
    // month: yearDays/12,
    year: yearDays,
    eternity: Number.MAX_VALUE,
};



export {
    timeUnits,
    inDays,
};
