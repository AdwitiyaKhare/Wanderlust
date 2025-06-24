(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

async function filterByCategory(category) {
  try {
    const res = category !== "all"
      ? await fetch(`/api/listings?category=${category}`)
      : await fetch(`/api/listings`);
    const data = await res.json();
    const listingsContainer = document.getElementById("listings-container");
    listingsContainer.innerHTML = "";

    if (data.listings.length === 0) {
      listingsContainer.innerHTML = `
        <div style="width: 100%; text-align: center" class="alert alert-warning">
          No Listings were found in this category
        </div>`;
      return;
    }

    data.listings.forEach((listing) => {
      const html = `
        <a href="/listings/${listing._id}" class="listing-link">
          <div class="card col listing-card">
            <img
              src="${listing.image.url}"
              class="card-img-top"
              alt="listing_image"
              style="height: 20rem"
            />
            <div class="card-img-overlay"></div>
            <div class="card-body">
              <p class="card-text">
                <b>${listing.title}</b> <br />
                &#8377; ${listing.price.toLocaleString("en-IN")} / night
                <i class="tax-info tax">
                  &nbsp;&nbsp;+ 18% gst = &#8377; ${(
                    listing.price * 1.18
                  ).toLocaleString("en-IN")} / night
                </i>
              </p>
            </div>
          </div>
        </a>
      `;
      listingsContainer.innerHTML += html;
    });
  } catch (err) {
    console.error("Error fetching listings:", err);
  }
}
