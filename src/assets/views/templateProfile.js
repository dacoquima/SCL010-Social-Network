const containerFeedPost = document.getElementById("root2");

export const templateProfile = () => {
  containerFeedPost.innerHTML =  "";
  const containerProfile = document.createElement("div");
  containerProfile.className = "containerProfile";
  const contentProfile = `prueba`;

  containerProfile.innerHTML = contentProfile;
  return containerProfile;
};
