export const Typography = (opts: { fontFamily: string[] }) => {
  return {
    fontFamily: opts.fontFamily.join(', '),
    button: {
      textTransform: 'capitalize',
    },
  };
};
