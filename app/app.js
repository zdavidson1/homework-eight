var homeContent = ` <h1>HOME</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis natus
        neque nam nemo reiciendis necessitatibus praesentium amet, labore
        numquam quod rem itaque, quidem nihil dignissimos. Possimus facilis
        asperiores culpa beatae!
      </p>
      <p>
        Labore et eius eveniet corporis, nam quis rerum cum, dolorum officiis
        quas inventore deleniti nobis quo omnis unde! Beatae enim minus nisi
        consequuntur illo ea doloremque quos voluptate deserunt quaerat.
      </p>
      <p>
        Fugiat maxime similique doloribus ex voluptate, quisquam est, sit facere
        corrupti non animi quam. Excepturi, tempora? Dolores incidunt quaerat
        iure ratione, nesciunt nulla illum. Fugiat magnam quidem placeat officia
        eum.
      </p>`
var aboutContent = ` <h1>ABOUT</h1>
      <h4>This is the about page.</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis natus
        neque nam nemo reiciendis necessitatibus praesentium amet, labore
        numquam quod rem itaque, quidem nihil dignissimos. Possimus facilis
        asperiores culpa beatae!
      </p>
      <p>
        Labore et eius eveniet corporis, nam quis rerum cum, dolorum officiis
        quas inventore deleniti nobis quo omnis unde! Beatae enim minus nisi
        consequuntur illo ea doloremque quos voluptate deserunt quaerat.
      </p>
      <p>
        Fugiat maxime similique doloribus ex voluptate, quisquam est, sit facere
        corrupti non animi quam. Excepturi, tempora? Dolores incidunt quaerat
        iure ratione, nesciunt nulla illum. Fugiat magnam quidem placeat officia
        eum.
      </p>`
var productsContent = `<h1>Products</h1>
        <img src="./imgaes/Bonnaroo2019_P.webp" alt="bonnaroo" class="bonnaroo-pic">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis natus
          neque nam nemo reiciendis necessitatibus praesentium amet, labore
          numquam quod rem itaque, quidem nihil dignissimos. Possimus facilis
          asperiores culpa beatae!
        </p>
        <p>
          Labore et eius eveniet corporis, nam quis rerum cum, dolorum officiis
          quas inventore deleniti nobis quo omnis unde! Beatae enim minus nisi
          consequuntur illo ea doloremque quos voluptate deserunt quaerat.
        </p>
        <p>
          Fugiat maxime similique doloribus ex voluptate, quisquam est, sit facere
          corrupti non animi quam. Excepturi, tempora? Dolores incidunt quaerat
          iure ratione, nesciunt nulla illum. Fugiat magnam quidem placeat officia
          eum.
        </p>`
var contactContent = ` <h1>Contact Us!</h1>
<div class="container">
  <div class="location"></div>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum et,
    aliquid modi placeat doloribus quia consequatur corporis quisquam rem
    itaque cum animi accusantium dolores, corrupti ea natus pariatur ex
    repudiandae! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Ipsum et, aliquid modi placeat doloribus quia consequatur corporis
    quisquam rem itaque cum animi accusantium dolores, corrupti ea natus
    pariatur ex repudiandae!
  </p>
</div>`



function initListeners (){
    $("nav a").click(function (e) {
        // this stores the id from the anchor tag
        let aID = e.currentTarget.id;
        let contentID = aID + "Content";
        
        $("#app").html(eval(contentID));
    });
}


$(document).ready(function () {
    initListeners();
    $("#app").html(homeContent);
});



