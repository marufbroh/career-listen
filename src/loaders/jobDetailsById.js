const jobDetailsById = async (id) => {
  const featuredJobsData = await fetch("featuredJobsData.json");
  const featuredJobs = await featuredJobsData.json();

  const detailsdata = featuredJobs.find((job) => job.id.toString() === id);
  return { detailsdata };
};

export default jobDetailsById;
