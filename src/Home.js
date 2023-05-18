import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Card
          style={{
            width: "1540px",
            minHeight: "428px",
            marginBottom: "50px",
            border:"0px",
            backgroundColor: "#DEEED6",
          }}
          className="text-black"
        >
          <div
            style={{
              top: "auto",
              width: "578px",
              marginLeft: "100px",
              marginBottom: "50px",
              marginTop: "75px",
            }}
          >
            <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
              Order groceries for delivery <br /> or pickup today
            </Card.Text>
            <Card.Text style={{ fontSize: "1em" }}>
              Whatever you want from local stores, brought right to your door.
            </Card.Text>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="   Enter your address                                                                        ->"
                />
              </Form.Group>
            </Form>
          </div>
        </Card>
      </div>
      <div>
        <img
          style={{
            height: "428px",
            width: "20%",
            position: "absolute",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          src="../homepage.png"
          alt="Card"
        />
      </div>
      {/* // if you're wanting to use the Card Image Overlays, this is how your code could look instead of the style above - both are acceptable, the above example is a better replication and is also cleaner! */}
      {/* <Card style={{ width: "80%", minHeight: "428px" }} className="bg-dark text-black"> */}
      {/* <Card.Img style={{ height: "100%", width: "100%", position: "absolute" }} src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="Card image" />
      <Card.ImgOverlay style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px"}}>
          <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
              Order groceries for delivery <br /> or pickup today
          </Card.Text>
          <Card.Text style={{ fontSize: "1em" }}>
              Whatever you want from local stores, brought right to your door.
          </Card.Text>
          <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control size="lg" type="text" placeholder="   Enter your address                                                          ->" />
              </Form.Group>
          </Form>
      </Card.ImgOverlay> */}
      {/* </Card> */}
    </div>
  );
}

export default Home



//     <Card className="bg-dark text-white">
//       <Card.Img
//         src="../homepage.png"
//         alt="Homepage-image"
//         width="100"
//         height="810"
//       />
//       <Card.ImgOverlay>
//         <Card.Title>Card title</Card.Title>
//         <Card.Text bg="primary">
//           Order groceries for delivery or pickup today.
//         </Card.Text>
//         <Card.Text>
//           <Form.Group className="sm-3" controlId="formGridAddress1">
//             <Form.Label>Address</Form.Label>
//             <Form.Control placeholder="1234 Main St" />
//           </Form.Group>
//         </Card.Text>
//       </Card.ImgOverlay>
//     </Card>
//   );
// }

// export default Home;
