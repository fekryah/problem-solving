const solution = function (isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    const helper = (left: number, right: number): number => {
      if (right < left) return -1;

      if (left === right) return isBadVersion(left) ? left : -1;

      const middle = left + Math.floor((right - left) / 2);

      const isMiddleBadVersion = isBadVersion(middle);

      if (isMiddleBadVersion) {
        const previousBadVersion = helper(left, middle);
        return previousBadVersion === -1 ? middle : previousBadVersion;
      } else return helper(middle, right);
    };

    return helper(0, n);
  };
};

const get = solution((x) => x === 2);

console.log(get(3));
