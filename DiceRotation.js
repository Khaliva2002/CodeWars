function rotations(dieArray) {
  let target = 1;
  let map = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
  ]);

  while (target < 7) {
    for (const ele of dieArray) {
      if (ele == target) map.set(target, map.get(target) + 0);
      else if (ele + target == 7) map.set(target, map.get(target) + 2);
      else map.set(target, map.get(target) + 1);
    }
    target++;
  }
  return Math.min(...map.values());
}
