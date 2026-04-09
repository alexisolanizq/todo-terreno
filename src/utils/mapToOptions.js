export const mapToOptions = (arr = []) => {
  return arr.map((value) => ({
    id: String(value),
    title: String(value),
  }));
};
