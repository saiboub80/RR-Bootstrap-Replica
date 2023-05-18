import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function StoreListing() {
  return (
    <>
        <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in Houston</h2>
   
            <Container style={{ marginTop: "50px", textAlign: "left" }}>
                <Row>
                    <Col >
                        <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold", margin: "-34px 0 0 56px" }}>ALDI</h5><br/>
                        <p>Delivery * Pickup</p>
                    </Col>
                   
                    <Col>
                        <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold", margin: "-34px 0 0 56px" }}>Sprouts Farmers Market</h5>
                        <br/>
                        <p>Delivery * Pickup</p>
                    </Col>

                   
                   
                        <Col >
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/45/d10d0f4b-1fca-4b84-bc19-bbf492c040da.png" roundedCircle />
                            <h5 style={{ fontWeight: "bold", margin: "-34px 0 0 56px" }}>Kroger</h5>
                            <br/>
                            <p>Delivery</p>
                        </Col>
                    </Row>
               


                

            </Container>

        </>
        
    )
}

export default StoreListing;
