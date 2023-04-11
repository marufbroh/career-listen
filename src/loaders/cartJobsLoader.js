import { getJobsCart } from "../utilities/fakeDb";

const cartJobsLoader = async () => {
  const featuredJobsData = await fetch("featuredJobsData.json");
  const featuredJobs = await featuredJobsData.json();

  const storedCart = getJobsCart();
//   const savedCart = [];
//   for (const id in storedCart) {
//     const addedJobs = featuredJobs.find((job) => job.id === id);
//     if (addedJobs) {
//       const quantity = storedCart[id];
//       addedJobs.quantity = quantity;
//       savedCart.push(addedJobs);
//     }
//   }
  //   console.log(storedCart);

  return { storedCart, featuredJobs };
};
export default cartJobsLoader;
