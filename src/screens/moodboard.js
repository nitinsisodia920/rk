import "./moodboard.css"

function Moodboard() {

    return(
        <div>
           
            <div  class="d-flex justify-content-between">
                <div class="container">
                <h4 className="collection" >OUR LATEST COLLECTION!</h4>
                <div class="row mx-md-n5">
                    <div class="col md-2">
                        <img id="mbimg" src={require("./images/aesthetics/abstract.jpg")} alt="img"/>
                        <div className="mbimgtext" >Tempura Solid Wood 6 Seater Dining Set</div>
                    </div>
                    <div class="col md-2">
                        <img id="mbimg" src={require("./images/aesthetics/african.jpg")} alt="img"/>
                        <div className="mbimgtext">Sheraton Sheesham Wood King Size Bed </div>
                    </div>
                    <div class="col md-2">
                        <img id="mbimg" src={require("./images/aesthetics/american-colonial.jpg")} alt="img"/>
                        <div className="mbimgtext">Anish Solid Wood 6 Seater Dining Set </div>
                    </div>
                    <div class="col md-2">
                    <img  id="mbimg" src={require("./images/aesthetics/amish.jpg")} alt="img"/>
                    <div className="mbimgtext">Barcelona Solid Wood 6 Seater Dining Set </div>
                    </div>
                    <div class="col md-2">
                    <img id="mbimg" src={require("./images/aesthetics/arabian.jpg")} alt="img"/>
                    <div className="mbimgtext">Bingo Fabric LHS 6 Seater Sectional Sofa </div>
                    </div>
                    <div class="col md-2">
                    <img id="mbimg" src={require("./images/aesthetics/art-deco.jpg")} alt="img"/>
                    <div className="mbimgtext">Jessica Glass Top Table In Black </div>
                    </div>
                    <div class="col md-2">
                    <img id="mbimg" src={require("./images/aesthetics/art-moderne.jpg")} alt="img"/>
                    <div className="mbimgtext">Jack Velvet 4 Seater Sofa In voilet Colour</div>
                    </div>
                    <div class="col md-2">
                       <img id="mbimg" src={require("./images/aesthetics/art-nouveau.jpg")} alt="img"/>
                       <div className="mbimgtext">Classic wooden sitting</div>
                    </div>
                    <div class="col md-2">
                    <img  id="mbimg" src={require("./images/aesthetics/artisan.jpg")} alt="img"/>
                    <div className="mbimgtext">  Capacious Modular L-shaped wooden Kitchen  </div>
                    </div>
                    <div class="col md-2">
                    <img  id="mbimg" src={require("./images/aesthetics/asian.jpg")} alt="img"/>
                    <div className="mbimgtext">Geo Bone Inlay Coffee Table in Black Finish</div>
                    </div>
                    <div class="col md-2">
                    <img  id="mbimg"src={require("./images/aesthetics/baroque.jpg")} alt="img"/>
                    <div className="mbimgtext">Berry Leatherette 4 Seater Sofa in Eerie Black Colour</div>
                    </div>
                    <div class="col md-2">
                    <img  id="mbimg"src={require("./images/aesthetics/bohemian.jpg")} alt="img"/>
                    <div className="mbimgtext">Bingo Fabric 6 Seater Sectional Sofa In Creamy tone </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Moodboard