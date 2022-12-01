import { TestSuite } from "./TestFramework/Suite.js";
import { getYears, getMonths, getDays, getHours, getMinutes, printFormattedSeconds } from "./dateTransform.js";

let seconds;
new TestSuite("getYears")
  .beforeEach(() => { seconds = 60 * 60 * 24 * 365; /* 1 year */ })
  .addTest("border test", (t) => {1
    const yearsAboveBorder = getYears(seconds);
    const yearsBelowBorder = getYears(seconds - 1);

    t.assertStrictEquals(yearsAboveBorder, 1);
    t.assertStrictEquals(yearsBelowBorder, 0);
  })
  .addTest("more than 1 year", (t) => {
    const years = getYears(seconds * 20);
    t.assertStrictEquals(years, 20);
  });

new TestSuite("getMonths")
  .beforeEach(() => { seconds = 60 * 60 * 24 * 30; /* 1 month */})
  .addTest("border test", (t) => {
    const monthsAboveBorder = getMonths(seconds);
    const monthsBelowBorder = getMonths(seconds - 1);

    t.assertStrictEquals(monthsAboveBorder, 1);
    t.assertStrictEquals(monthsBelowBorder, 0);
  });

new TestSuite("getDays")
  .beforeEach(() => { seconds = 60 * 60 * 24; /* 1 day */})
  .addTest("border test", (t) => {
    const daysAboveBorder = getDays(seconds);
    const daysBelowBorder = getDays(seconds - 1);

    t.assertStrictEquals(daysAboveBorder, 1);
    t.assertStrictEquals(daysBelowBorder, 0);
  });

new TestSuite("getHours")
  .beforeEach(() => { seconds = 60 * 60; /* 1 hour */})
  .addTest("border test", (t) => {
    const hoursAboveBorder = getHours(seconds);
    const hoursBelowBorder = getHours(seconds - 1);

    t.assertStrictEquals(hoursAboveBorder, 1);
    t.assertStrictEquals(hoursBelowBorder, 0);
  });

new TestSuite("getMinutes")
  .beforeEach(() => { seconds = 60; /* 1 minute */})
  .addTest("border test", (t) => {
    const minutesAboveBorder = getMinutes(seconds);
    const minutesBelowBorder = getMinutes(seconds - 1);

    t.assertStrictEquals(minutesAboveBorder, 1);
    t.assertStrictEquals(minutesBelowBorder, 0);
  })

new TestSuite("printFormattedSeconds")
  .beforeEach(() => { 
    seconds = 100000000; /* 3 years, 2 months, 2 days, 9 hours, 46 minutes, 40 seconds*/
  })
  .addTest("returns correct data", (t) => {
    const expected = {
      years: 3,
      months: 2,
      days: 2,
      hours: 9,
      minutes: 46,
      seconds: 40,
    };

    const actual = printFormattedSeconds(seconds);

    t.assertStrictEquals(actual.years, expected.years);
    t.assertStrictEquals(actual.months, expected.months);
    t.assertStrictEquals(actual.days, expected.days);
    t.assertStrictEquals(actual.hours, expected.hours);
    t.assertStrictEquals(actual.minutes, expected.minutes);
    t.assertStrictEquals(actual.seconds, expected.seconds);
  })