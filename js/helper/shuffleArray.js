export const shuffleArray = (array) => {
  const newArray = [...array];
  newArray.sort(() => Math.random() - 0.5);
  return newArray;
};