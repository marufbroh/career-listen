const addToDb = (id) => {
  let jobsCart = getJobsCart();

  const quantity = jobsCart[id];
  if (!quantity) {
    jobsCart[id] = 1;
  } 
//   else {
//     const newQuantity = quantity + 1;
//     jobsCart[id] = newQuantity;
//   }
  localStorage.setItem("jobs-cart", JSON.stringify(jobsCart));
};

const removeFromDb = (id) => {
  const jobsCart = getJobsCart();
  if (id in jobsCart) {
    delete jobsCart[id];
    localStorage.setItem("jobs-cart", JSON.stringify(jobsCart));
  }
};

const getJobsCart = () => {
  let jobsCart = {};


  const storedCart = localStorage.getItem("jobs-cart");
  if (storedCart) {
    jobsCart = JSON.parse(storedCart);
  }
  return jobsCart;
};

const deleteJobsCart = () => {
  localStorage.removeItem("jobs-cart");
};

export { addToDb, removeFromDb, getJobsCart, deleteJobsCart };
