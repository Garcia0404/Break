export const item = {
  visible: {
    opacity: 1,
    x: 0
  },
  hidden: (index:number) => ({ 
    opacity: 0, 
    x: -100,
    transition: {
      delay:index*0.3
    }, 
  }),
};
