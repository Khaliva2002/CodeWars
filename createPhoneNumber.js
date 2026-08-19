function createPhoneNumber(numbers) {
  const fi = "(" + numbers.slice(0, 3).join("") + ")" + " ";
  const sc = numbers.slice(3, 6).join("") + "-";
  const thi = numbers.slice(-4).join("");
  return fi + sc + thi;
}
