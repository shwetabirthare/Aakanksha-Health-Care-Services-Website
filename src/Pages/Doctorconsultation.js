import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import doctor1 from '../Images/doctor1.jpg'
import doctor2 from '../Images/doctor2.jpg'
import doctor3 from '../Images/doctor3.jpg'
import app from '../Images/appointment.png'
import always from '../Images/24x7.jpg'
import anytime from '../Images/anytime.png'
import allcategory from '../Images/allcategory.jfif'

const Doctorconsultation = () => {
    return (
        <>
            <Popup />
            <Popup1 />
            <Header />
            <div className="container-fluid  w-100 ">
                <div className="row">


                    <div className="col-lg-6 col-12  my-3">

                        <div className="container aboutdoctorcon">
                            <p>
                                Consult doctor's as per your comfort
                                <br />
                                at any time and place
                            </p>



                        </div>

                        <div className="row" align="center">
                            <div className="col-lg-4 col-12  my-3">
                                <div className="featurecircle container box">
                                    <img src={allcategory} className="d-block mt-3 avatar" alt="doctorwelcomes" />
                                    <h6>
                                    Consult any category of doctors
                                    </h6>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-12  my-3">
                                <div className="featurecircle container box">
                                    <img src={anytime} className="d-block mt-3 avatar" alt="doctorwelcomes" />
                                    <h6>
                                    Anytime & Anywhere
                                    </h6>
                                  
                                </div>
                            </div>
                            <div className="col-lg-4 col-12  my-3">
                                <div className="featurecircle container box">
                                    <img src={always} className="d-block mt-3 avatar" alt="doctorwelcomes" />
                                    <h6>
                                    Appointment booking open 24X7 
                                    </h6>
                                   
                                </div>
                            </div>
                        </div>

                       




                    </div>
                    <div className="col-lg-6 col-12  my-3">
                        <div className="aboutdoctorcon">

                            <img src={app} className="d-block mt-3 doctorwelc" alt="doctorwelcomes"
                            />
                        </div>

                    </div>

                    <div className="container">
                        <hr />
                    </div>

                    <h4 className="my-3 mx-3">Want to consult from our Esteemed Doctors?</h4>


                    {/* full length card */}
                    <div className="container" align="center">
                        <div className="col-lg-12 col-12  card">

                            <div className="row mt-3">
                                <div className="col-lg-4 col-12 doctordetail" style={{ padding: "10px" }} align="center">
                                    <img src={doctor3} className="d-block mt-3 doctorphoto cardgroup" alt="medicine" />
                                </div>
                                <div className="col-lg-8 col-12" align="center">

                                    <div className="card-body mt-3" align="left">
                                        <h5 className="card-title">Dr. Joanna</h5>
                                        <h6>MD,AIIMS Chandigarh</h6>

                                        <p className="card-text description">
                                            Senior Neurologist,<br /> Apollo Hospital,Kankarbagh,Patna-800020

                                        </p>
                                        <p style={{ padding: "3px" }}>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio accusamus cum neque cumque veniam repellendus nihil corrupti, earum delectus laborum tempore perspiciatis autem exercitationem? Voluptas corrupti, ut laborum repudiandae nihil repellat quae inventore ad blanditiis delectus deleniti, provident vitae magnam voluptatum eius, dolor facilis tempora minus fuga. Quidem, facilis illum.
                                        </p>
                                    </div>

                                    <div align="right">

                                        <button type="button" className="btn btn-primary seemore1 mx-3 my-2">Book Appointment</button>

                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    {/* full length card */}
                    <div className="container" align="center">
                        <div className="col-lg-12 col-12 my-2 card">

                            <div className="row mt-3">

                                <div className="col-lg-8 col-12" align="center" >

                                    <div className="card-body mt-3 rightphotodoc" align="left">
                                        <h5 className="card-title">Dr. Sophia</h5>
                                        <h6>MD,AIIMS Chandigarh</h6>

                                        <p className="card-text description">
                                            Senior Neurologist,<br /> Apollo Hospital,Kankarbagh,Patna-800020

                                        </p>
                                        <p style={{ padding: "3px" }}>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio accusamus cum neque cumque veniam repellendus nihil corrupti, earum delectus laborum tempore perspiciatis autem exercitationem? Voluptas corrupti, ut laborum repudiandae nihil repellat quae inventore ad blanditiis delectus deleniti, provident vitae magnam voluptatum eius, dolor facilis tempora minus fuga. Quidem, facilis illum.
                                        </p>
                                    </div>

                                    <div align="right">

                                        <button type="button" className="btn btn-primary seemore1 mx-3 my-2">Book Appointment</button>

                                    </div>



                                </div>
                                <div className="col-lg-4 col-12 doctordetail doctorphoto" align="center">
                                    <img src={doctor1} className="d-block mt-3 cardgroup" alt="medicine" />
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* full length card */}
                    <div className="container" align="center">
                        <div className="col-lg-12 col-12 my-2 card">

                            <div className="row mt-3">
                                <div className="col-lg-4 col-12 doctordetail doctorphoto" style={{ padding: "5px" }} align="center">
                                    <img src={doctor2} className="d-block mt-3 cardgroup" alt="medicine" />
                                </div>
                                <div className="col-lg-8 col-12" align="center">

                                    <div className="card-body mt-3" align="left">
                                        <h5 className="card-title">Dr. Joanna</h5>
                                        <h6>MD,AIIMS Chandigarh</h6>

                                        <p className="card-text description">
                                            Senior Neurologist,<br /> Apollo Hospital,Kankarbagh,Patna-800020

                                        </p>
                                        <p style={{ padding: "3px" }}>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio accusamus cum neque cumque veniam repellendus nihil corrupti, earum delectus laborum tempore perspiciatis autem exercitationem? Voluptas corrupti, ut laborum repudiandae nihil repellat quae inventore ad blanditiis delectus deleniti, provident vitae magnam voluptatum eius, dolor facilis tempora minus fuga. Quidem, facilis illum.
                                        </p>
                                    </div>

                                    <div align="right">

                                        <button type="button" className="btn btn-primary seemore1 mx-3 my-2">Book Appointment</button>

                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>

                    {/* doctor1 */}

                    <div className="col-lg-4 col-12 my-2  doctorpanel">

                        <div className="card cardfeature" >

                            <div align="center">
                                <img src={doctor1} className="d-block mt-3 cardgroup" alt="medicine" />
                            </div>


                            <div className="card-body" align="center">
                                <h5 className="card-title">Dr. Joanna</h5>

                                <p className="card-text description">
                                    Senior Neurologist,<br /> Apollo Hospital,Kankarbagh,Patna-800020

                                </p>
                            </div>

                            <div align="right">

                                <button type="button" className="btn  seemore1 mx-3 my-2">Book Appointment</button>

                            </div>

                        </div>


                    </div>


                    {/* doctor 2 */}

                    <div className="col-lg-4 col-12 my-2 ">

                        <div className="card cardfeature" >

                            <div align="center">
                                <img src={doctor2} className="d-block mt-3 cardgroup" alt="medicine" />
                            </div>


                            <div className="card-body">
                                <h5 className="card-title">Dr. Kishore</h5>

                                <p className="card-text description">
                                    ENT Specialist,<br /> IGIMS ,Raja Bazar,Patna-800020
                                </p>
                            </div>

                            <div align="right">

                                <button type="button" className="btn  seemore1 mx-3 my-2">Book Appointment</button>

                            </div>

                        </div>


                    </div>
                    {/* doctor 2 */}

                    <div className="col-lg-4 col-12 my-2">

                        <div className="card cardfeature" >

                            <div align="center">
                                <img src={doctor2} className="d-block mt-3 cardgroup" alt="medicine" />
                            </div>


                            <div className="card-body">
                                <h5 className="card-title">Dr. Peter Rodrick</h5>

                                <p className="card-text description">
                                    Physician,<br /> Care and Cure ,Anishabad,Patna-800020
                                </p>
                            </div>

                            <div align="right">

                                <button type="button" className="btn seemore1 bookapt mx-3 my-2">Book Appointment</button>

                            </div>

                        </div>


                    </div>
                    {/* doctor 2 */}

                    <div className="col-lg-4 col-12 my-2">

                        <div className="card cardfeature" >

                            <div align="center">
                                <img src={doctor2} className="d-block mt-3 cardgroup" alt="medicine" />
                            </div>


                            <div className="card-body">
                                <h5 className="card-title">Dr. O.P. Verma</h5>

                                <p className="card-text description">
                                    Heart Specialist,<br /> AIIMS,Anishabad,Patna-800020
                                </p>
                            </div>

                            <div align="right">

                                <button type="button" className="btn seemore1 mx-3 my-2">Book Appointment</button>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Doctorconsultation
