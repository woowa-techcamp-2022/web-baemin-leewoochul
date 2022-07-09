const pipe =
  (...fns) =>
  (arg) =>
    fns.reduce((prev, fn) => fn(prev), arg);

export default pipe;
