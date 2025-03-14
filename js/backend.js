//get user data from facebook using access token
export async function getFacebookUserData(accessToken) {
  const FACEBOOK_GRAPH_API = "https://graph.facebook.com";
  const url = `${FACEBOOK_GRAPH_API}/me?fields=id,name,email,about,picture{url},location,religion,birthday,first_name,last_name,languages,is_guest_user,avatars,gender&access_token=${accessToken}`;

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Facebook user data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Facebook data:", error.message);
    return null;
  }
}

//send facebook access token to user
export async function backendRequest(accessToken) {
  //!edit the backendApi and method set with your api and method
  const backendApi = "";
  const method = "GET";

  console.log("iam from backend.js file", accessToken);

  //accessToken is send in body
  try {
    const response = await fetch(backendApi, {
      method,
      body: JSON.stringify({ accessToken }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Facebook user data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Facebook data:", error.message);
    return null;
  }
}
