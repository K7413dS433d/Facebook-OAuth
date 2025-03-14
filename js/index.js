import { backendRequest } from "./backend.js";

const facebookBtn = document.getElementById("facebook-login-btn");
const firstinfo = document.querySelector(".firstinfo");
const profileCard = document.querySelector(".content");
const goodMorning = document.querySelector(".badgescard");

// Dynamically load the Facebook SDK
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

window.fbAsyncInit = function () {
  FB.init({
    appId: "app-id-here", // Replace with your actual App ID
    xfbml: true,
    version: "v22.0",
  });
};

facebookBtn.addEventListener("click", function () {
  FB.login(
    function (response) {
      if (response.authResponse) {
        //send access token to backend
        (async function () {
          const backendResponse = await backendRequest(
            response.authResponse.accessToken
          );

          console.log("iam from index.js file", backendResponse);

          //! Display user profile information update here
          // //image url
          // firstinfo.children[0].src = response.picture.data.url;
          // //user name
          // firstinfo.children[1].children[0].innerHTML = response.name;
          // // birthday
          // firstinfo.children[1].children[1].innerHTML = response.birthday;
          // // email
          // firstinfo.children[1].children[2].innerHTML = response.email;
          // //good morning
          // goodMorning.innerHTML = "Good Morning " + response.name;
          // //display card
          // profileCard.style.display = "flex"; // Show the profile card
        })();
      } else {
        profileCard.style.display = "hidden";
      }
    },
    { scope: "email" } // Request email permission
  );
});
