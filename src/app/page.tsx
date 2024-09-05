export default function Home() {
  return (
    <>
      <main>
        <div className="main-section"></div>
        <div className="shop-section">
          <div className="box box-1">
            <div className="box-content">
              <h2 className="font-bold">Clothes</h2>
              <div className="box-image" style={{ backgroundImage: "url('box1_image.jpg')" }}></div>
              <p>See more</p>
            </div>
          </div>
          <div className="box box-2">
            <div className="box-content">
              <h2 className="font-bold">Health & Personal Care</h2>
              <div className="box-image" style={{ backgroundImage: "url('box2_image.jpg')" }}></div>
              <p>See more</p>
            </div>
          </div>
          <div className="box box-3">
            <div className="box-content">
              <h2 className="font-bold">Furniture</h2>
              <div className="box-image" style={{ backgroundImage: "url('box3_image.jpg')" }}></div>

            </div>
          </div>
          <div className="box box-4">
            <div className="box-content">
              <h2 className="font-bold">Electronics</h2>
              <div className="box-image" style={{ backgroundImage: "url('box4_image.jpg')" }}></div>
              <p>See more</p>
            </div>
          </div>

          <div className="box box-1">
            <div className="box-content">
              <h2 className="font-bold">Beauty Picks</h2>
              <div className="box-image" style={{ backgroundImage: "url('box5_image.jpg')" }}></div>
              <p>See more</p>
            </div>
          </div>
          <div className="box box-2">
            <div className="box-content">
              <h2 className="font-bold">Pet Care</h2>
              <div className="box-image" style={{ backgroundImage: "url('box6_image.jpg')" }}></div>
              <p>See more</p>
            </div>
          </div>
          <div className="box box-3">
            <div className="box-content">
              <h2 className="font-bold">New Arrival in Toys</h2>
              <div className="box-image" style={{ backgroundImage: "url('box7_image.jpg')" }}></div>
              <p>See more</p>
            </div>
          </div>
          <div className="box box-4">
            <div className="box-content">
              <h2 className="font-bold">Discover Fashion Trends</h2>
              <div className="box-image" style={{ backgroundImage: "url('box8_image.jpg')" }}></div>
              <p>See more</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
