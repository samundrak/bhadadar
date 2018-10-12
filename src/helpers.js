export const randomInt = (min = 1, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;
export const randomNepalImage = (min = 1, max = 5) => `nepal_${randomInt(min, max)}.jpg`;
