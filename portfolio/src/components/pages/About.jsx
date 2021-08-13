import React from "react";

const About = () => {
  return (
    <div>
      <div className="home">
        <h2 className="heading">About</h2>

        <p className="paragraph-text">
          My name is Amar Tauqeer. I have completed my master’s degree in
          Information Systems at Vienna University of Business and economics
          recently. I have attached my updated resume that contains detailed
          information on my qualifications, skills and relevant work experience.
          My technical skills include using software such as Dreamweaver,
          Brackets, AptanStudio3, Photoshop, XAMP and Programming languages such
          as JavaScript, React, Node, express, Mongo DB, Bootstrap4, PHP, HTML,
          CSS, and XML. I have developed an open source web application for
          CommuniData (Open data for local communities). Interface of web helps
          customers to select desirable districts to find out specific places
          like hospital locations, library locations, parking places, police
          stations and many more. Detail information about project and source
          code is available on GitHub (Visualizing Geo-located Open Data).{" "}
          <br />
          <br />
          My final thesis is “Visualizing Geo-located Open Data”. The main
          purpose of this project is to enhance the availability of existing
          Austrian open datasets (open government data Vienna and open data
          portal Vienna). The project describes how it detects a district by
          using its postal code, name or any other geo-location identifiers
          (geo-names or geo-ids for example) which are available in the
          datasets. The final step is to make a web based application which
          provides an interface for their users to take the datasets records in
          the standard formats (Comma-separated values CSV, Java Script Object
          Notation JSON) as input data, processes it, make some transformations
          on it and visualize them on to the map. For this purpose we create a
          web based interface which takes some input parameters such as district
          name or postal code and then visualize it on to the OpenStreetMap
          using the PHP server side scripting language, the MySQL database,
          JavaScript and the AptanaStudio3 framework for development.
          Furthermore the user can interact with web based interface to look
          deeply into a district or collection of districts to gain useful
          information about its area and surrounding places such as hospital,
          sports, stations, parking and many more etc. <br /> <br />A pop up
          window shows important information such as geoid, coordinates, phone
          numbers, web links and email about a specific location selected by
          users. Source code is available at GitHub
          (https://github.com/AmarTauqeer/Visualizing-Geo-located-Open-Data).
          Secondly I have more than three years’ experience in R&D projects
          using Oracle developer suite 10g and Oracle database 10g. I worked
          more than sixteen different database projects including school,
          trading, manufacturing and payroll systems etc. All references will be
          provided on request. I possess excellent communication skills and can
          liaise effectively with both clients and work colleagues. Other strong
          points include an ability to work as part of a team or individually,
          multi-task, prioritize and work to deadlines under pressure.
        </p>
      </div>
    </div>
  );
};

export default About;
