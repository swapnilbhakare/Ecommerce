import React from "react";

import { Container, Image } from "react-bootstrap";

const About = () => {
  return (
    <>
      {/* <p
        className="display-5 text-center p-3 bg-secondary mt-1 text-white"
        style={{ fontSize: "6em", fontFamily: "bold" }}
      >
        The Generics
      </p> */}
      <Container>
        <h2 style={{ textAlign: "center" }}>About</h2>
        <Image
          src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
          alt="Logo"
          roundedCircle
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            float: "left",
            marginTop: "2rem",
            marginRight: "2rem",
            marginBottom: "1rem",
          }}
        />
        <p style={{ fontSize: "1.2em", fontFamily: "bold" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra
          tortor commodo, vulputate ligula ac, fermentum augue. Morbi
          consectetur vehicula orci. Phasellus bibendum imperdiet lacus, ac
          mollis sem gravida in. Etiam ut lorem mi. Phasellus pretium rutrum
          auctor. Phasellus bibendum ipsum vel facilisis convallis. Maecenas a
          sagittis tellus. Ut efficitur egestas enim, id lobortis justo tempus
          et. Quisque dictum convallis metus a malesuada. Maecenas efficitur
          gravida libero, eget tempor magna placerat id. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Cras in lacus et purus vehicula
          accumsan et nec lorem. Cras a justo aliquam, egestas felis non,
          aliquam nulla. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Curabitur iaculis, massa sit amet feugiat tincidunt, elit
          risus eleifend tellus, sed interdum mi tortor quis magna. Phasellus
          placerat nec lectus vel volutpat. Donec commodo sollicitudin
          tincidunt. Donec quis pellentesque nunc, ut sollicitudin quam. Donec a
          facilisis magna. Fusce ut lorem luctus, semper metus id, ornare nisi.
          In hac habitasse platea dictumst. Vestibulum semper eros et
          sollicitudin tincidunt. Nam feugiat sem eu purus ultrices, eu eleifend
          ex malesuada. Pellentesque diam libero, ullamcorper in consequat a,
          consectetur vitae mauris. Aenean aliquet, sapien et sodales malesuada,
          orci nisl auctor lorem, et lobortis felis elit ut nunc. Aliquam
          interdum leo eu tortor molestie egestas. Vestibulum ligula mauris,
          commodo in sapien eu, vulputate vulputate ipsum. Morbi ultrices luctus
          turpis, eget placerat lacus condimentum sit amet. Proin erat elit,
          commodo aliquam varius in, ornare non nunc. Donec pharetra sapien id
          dictum volutpat. Etiam malesuada massa diam, at ultrices quam
          malesuada eget. Quisque augue sapien, rhoncus vel lorem id, egestas
          suscipit ex. Nunc enim lectus, molestie ac sapien at, viverra varius
          enim. Nam placerat, tortor a tincidunt luctus, leo metus posuere mi,
          vel dapibus massa urna nec massa. Integer posuere rutrum lacus, vel
          varius nibh condimentum id. Donec ornare varius suscipit. Vestibulum
          eget faucibus sapien. Quisque id sodales urna, at commodo eros. Proin
          at velit ut erat interdum porta ac at purus. Nam quis tristique neque,
          hendrerit vulputate libero. Vivamus egestas nisl eget lacus
          ullamcorper, sed rutrum lacus pharetra. Mauris pellentesque maximus
          lobortis. Etiam pretium et diam sit amet pharetra. Sed dapibus
          venenatis felis sit amet placerat. Proin aliquet quam sit amet purus
          gravida, tincidunt interdum tortor tempus. In in urna euismod felis
          ultricies ornare. Vestibulum vitae elit in tellus tempus vestibulum et
          a tellus. Aenean sit amet luctus velit. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </Container>
    </>
  );
};

export default About;
